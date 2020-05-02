#!/bin/bash
cd ..
cd ..
cd discord-bot
git pull
npm install
cp -f ./src/settings-deploy.json ./src/settings.json
npm run start
