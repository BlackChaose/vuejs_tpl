asm: 
	npm run lint
	npm run build
devsrv:
	npm run serve
asm2:
	npm run lint
	npm run build
	cp -Rv --remove-destination ./dist/* ./massmail/
	echo "\033[93m\n!!<< End of assembly >>!! \033[39m\n"

