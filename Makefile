asm: 
	npm run lint
	npm run build
devsrv:
	npm run serve
asm2:
	npm run lint
	npm run build 
	cp -Rv --remove-destination ./dist/* ./massmail
	echo "\033[93m\n!!<< End of assembly2 >>!! \033[39m\n"
lint: 
	npm run lint
devphp:
	php -S localhost:5000
asm3:	
	npm run lint
	npm run build-dev
	cp -Rv --remove-destination ./dist/* ./massmail/
	echo "\033[95m\n!!<< End of assembly3 >>!! \033[39m\n"
