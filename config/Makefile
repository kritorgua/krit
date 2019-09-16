run:
	yarn start

build:
	ember b --environment="production"

deploy:
	@read -p "Are You Sure? [Y/n] " sure && case "$$sure" in [yY]) scp -r dist/** krit@94.130.108.105:~/dist/;; *) exit;; esac

release:
	git checkout develop; git push; git checkout master; git push

refresh:
	git checkout develop; git pull; git checkout master; git pull