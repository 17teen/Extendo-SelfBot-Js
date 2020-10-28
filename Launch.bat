@echo off
title Launching Modules v.2.1.0
:top
cls
node launch.js
pause
    call npm init
    call npm install node-fetch
    call npm install @discordjs/uws@^10.149.0
    call npm install discord.js@11.5.0
    call npm install random-puppy
    call npm install figlet
    call npm install chalk
pause
exit
goto :top
