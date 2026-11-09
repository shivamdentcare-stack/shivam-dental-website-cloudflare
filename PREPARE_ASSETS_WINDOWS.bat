@echo off
setlocal
where py >nul 2>nul
if %errorlevel%==0 (
  py prepare_assets.py
) else (
  python prepare_assets.py
)
echo.
echo Check the report above. Do not cancel Emergent if any assets failed.
pause
