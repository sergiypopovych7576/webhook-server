#!/bin/bash
cd ..
cd discord-bot
git pull
npm install
cp -f settings-deploy.json settings.json
npm run start
