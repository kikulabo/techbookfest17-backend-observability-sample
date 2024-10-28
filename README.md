# TechBookFest17 Backend Observability Sample

## 概要

このリポジトリは、バックエンドのオブザーバビリティ（Observability）を学ぶためのサンプルアプリケーションです。

New Relicを通じてバックエンドアプリケーションの観測性を向上させ、リアルタイムでのパフォーマンスモニタリングを行います。

具体的な内容に関しては技術書典17で公開した以下の書籍をご覧ください。

[書籍名](https://techbookfest.org/organization/v1cJ4zwUeTn3Lzsg0e6df2)

## インストール

プロジェクトをローカルでセットアップし、New Relicでの監視を有効にするためには、以下の手順を実行してください。

### 前提条件

- Node.js がインストールされていること。
- New Relicアカウント（必要に応じて無料で作成可能）

### 手順

1. APIキーの取得

New Relicでの計測に必要なAPIキーを発行します。詳細は[公式ドキュメント](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/)を参照してください。
APIキーの発行時、Key typeは「INGEST - LICENSE」を選択してください。

2. APIキーの設定

プロジェクト内の package.json と newrelic.js ファイルにある YOUR-NEW-RELIC-LICENSE-KEY の部分を、発行したNew RelicのAPIキーに置き換えてください。

3. リポジトリをクローン

```
git clone https://github.com/kikulabo/techbookfest17-frontend-observability-sample.git
cd techbookfest17-backend-observability-sample
```

4. 必要なパッケージをインストール

```
npm install
```

5. アプリケーションを起動

```
npm start
```

サーバーが起動すると、New Relicにバックエンドのパフォーマンスデータが送信され、New Relicのダッシュボードでリアルタイムのパフォーマンスモニタリングが可能になります。

## 使用方法

ブラウザで http://localhost:3001 にアクセスすることでアプリケーションの動作を確認することが出来ます。
