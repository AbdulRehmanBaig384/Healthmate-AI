@echo off
echo Starting HealthMate Application...
echo.

echo Starting Backend Server...
start "HealthMate Backend" cmd /k "cd /d C:\Users\Mohammad Maaz Rashid\OneDrive\Desktop\merns projects\healthmate\backend && npm run dev"

timeout /t 3 /nobreak >nul

echo Starting Frontend Server...
start "HealthMate Frontend" cmd /k "cd /d C:\Users\Mohammad Maaz Rashid\OneDrive\Desktop\merns projects\frontend && npm run dev"

echo.
echo Both servers are starting...
echo Frontend will be available at: http://localhost:3000
echo Backend will be available at: http://localhost:5000
echo.
echo Opening browser in 5 seconds...
timeout /t 5 /nobreak >nul
start http://localhost:3000

echo.
echo HealthMate is now running! 🎉
pause
