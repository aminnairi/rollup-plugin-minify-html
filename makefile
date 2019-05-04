.PHONY: start shell stop restart types

install: start
	docker-compose exec node npm install

start:
	docker-compose up -d node

stop:
	docker-compose down

restart: stop start

shell: install
	docker-compose exec node bash

build: install
	docker-compose exec node npm run build

types: install
	docker-compose exec node ./node_modules/.bin/tsc --declaration