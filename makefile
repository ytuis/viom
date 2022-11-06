run app:
	docker-compose build \
	&& docker-compose up -d
prisma setup:
	docker-compose exec client npx prisma generate \
	&& docker-compose exec client npx prisma migrate dev

clean:
	docker-compose down --rmi all
