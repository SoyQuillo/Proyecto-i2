# Script para iniciar el servidor de desarrollo
Write-Host "============================================" -ForegroundColor Cyan
Write-Host " HospitalIS Pro - Iniciando Servidor" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Instalando dependencias..." -ForegroundColor Yellow
npm install

Write-Host ""
Write-Host "Iniciando servidor de desarrollo..." -ForegroundColor Green
npm run dev

Write-Host ""
Read-Host "Presiona Enter para salir"
