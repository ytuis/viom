# viom

docker上でNextjsからMySQLへ接続を行うデモ

### 使い方
1. clientフォルダにある.envファイルに必要な変数を記載する
1. make run app コマンドでdockerコンテナを起動する
1. make prisma setup　コマンドでclient側とdb側を接続する
1. http://localhost:3000　にアクセス