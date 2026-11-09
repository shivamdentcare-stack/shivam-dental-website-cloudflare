#!/usr/bin/env python3
"""Download Emergent-hosted media into frontend/public/assets and rewrite references.
Run from the extracted My-Website-main folder: python prepare_assets.py
Uses only Python's standard library.
"""
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urlparse, unquote
import hashlib, re, sys

ROOT = Path(__file__).resolve().parent
FRONTEND = ROOT / 'frontend'
ASSET_DIR = FRONTEND / 'public' / 'assets'
PATTERN = re.compile(r"https://customer-assets\.emergentagent\.com/[^\"'\s)<>]+")
files = [p for base in (FRONTEND / 'src', FRONTEND / 'public') for p in base.rglob('*') if p.is_file() and p.suffix.lower() in {'.js','.jsx','.ts','.tsx','.html','.css','.json'}]
urls = set()
for path in files:
    urls.update(PATTERN.findall(path.read_text(encoding='utf-8', errors='replace')))
if not urls:
    print('No Emergent-hosted media URLs found. Nothing to do.')
    sys.exit(0)
ASSET_DIR.mkdir(parents=True, exist_ok=True)
replacements, failed = {}, []
for url in sorted(urls):
    suffix = Path(unquote(urlparse(url).path)).suffix.lower()
    if not suffix or len(suffix) > 8: suffix = '.bin'
    name = 'emergent-' + hashlib.sha256(url.encode()).hexdigest()[:16] + suffix
    destination = ASSET_DIR / name
    if not destination.exists():
        try:
            req = Request(url, headers={'User-Agent': 'Mozilla/5.0 (compatible; site-migration/1.0)'})
            with urlopen(req, timeout=45) as response: content = response.read()
            if not content: raise RuntimeError('empty response')
            destination.write_bytes(content)
            print(f'Downloaded {name} ({len(content):,} bytes)')
        except Exception as exc:
            failed.append((url, str(exc))); print(f'FAILED {url}: {exc}'); continue
    replacements[url] = '/assets/' + name
for path in files:
    original = path.read_text(encoding='utf-8', errors='replace')
    updated = original
    for old, new in replacements.items(): updated = updated.replace(old, new)
    if updated != original: path.write_text(updated, encoding='utf-8')
print(f'\nRewrote {len(replacements)} of {len(urls)} media references.')
if failed:
    print(f'{len(failed)} asset(s) failed. Keep Emergent hosting active until resolved:')
    for url, error in failed: print(f'- {url} ({error})')
    sys.exit(2)
print('All discovered Emergent-hosted assets were downloaded and references updated.')
