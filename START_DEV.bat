@echo off
echo ============================================
echo  HospitalIS Pro - Iniciando Servidor
echo ============================================
echo.
echo Instalando dependencias...
call npm install
echo.
echo Iniciando servidor de desarrollo...
call npm run dev
echo.
pause
