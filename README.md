# company_book_mgt

## server起動手順
- company_book_mgtで下記を実行
```
docker compose up -d --build
```
- ExpressのHello World実行
```
docker compose exec node sh
yarn
yarn watch
```
- Next.jsのHello World実行
```
docker compose exec next sh
yarn
yarn dev
```