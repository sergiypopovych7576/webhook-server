#!/bin/bash
cd /home/slink7576/hosting
cd discord-bot
git pull && 
npm install && 
cp -f ./src/settings-deploy.json ./src/settings.json &&
tsc
