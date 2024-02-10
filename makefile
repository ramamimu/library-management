init:
	cat ./query.sql | docker exec -i libdb psql -U postgres 

dropdb:
	docker exec -ti libdb psql -U postgres -c "DROP DATABASE postgres"

createdb:
	docker exec -ti libdb psql -U postgres -c "CREATE DATABASE postgres"

startdb:
	docker compose up -d

stopdb:
	docker compose down