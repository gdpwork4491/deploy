#!/bin/bash
cd /home/ubuntu/Service_Folder
git pull
sleep 5
npm install
sleep 10
pm2 restart service_name