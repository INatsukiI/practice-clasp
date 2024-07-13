## 概要
React + TypeScript + Vite + ClaspでGASの開発環境(node v20.1.0)

### ローカル環境
1. パッケージのインストール
```
npm i 
```

2. devサーバー立ち上げ
```
npm run dev
```
> [!WARNING]
> server側はgasに変換しないと動かないため、ローカル環境ではクライアント側しか動作確認は行えません

### デプロイ方法
1. Googleアカウントでログイン
```
clasp login
```
2. ビルド
```
npm run build
```
3. デプロイ
```
npm run deploy
```
> [!WARNING]
> 使用するスプレッドシートのIDは.clasp.jsonのscriptIdに設定してください

