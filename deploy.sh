#!/bin/sh
HOST=mav
DIR=choochoo.ooo/   # the directory where your website files should go

rsync -avz --exclude deploy.sh --exclude .claude --exclude .playwright-mcp --exclude .git --exclude node_modules --exclude tailwind.config.js --exclude assets/css/input.css --exclude package.json --exclude package-lock.json --delete ./ ${HOST}:~/${DIR} # this will delete everything on the server that's not in the local public directory

exit 0
