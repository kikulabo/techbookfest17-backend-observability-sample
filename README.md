# TechBookFest17 Backend Observability Sample

このリポジトリは、バックエンドのオブザーバビリティ（Observability）を学ぶためのサンプルアプリケーションです。技術書典17にて公開され、特にNew Relicを活用してパフォーマンス計測やエラーロギングを実装する方法を紹介しています。

## 概要

このアプリケーションは、New Relicを通じてバックエンドアプリケーションの観測性を向上させ、リアルタイムでのパフォーマンスモニタリングやエラーロギング、トレース収集を行います。以下の機能を通じて、バックエンドの挙動を可視化し、デバッグやチューニングに役立てることが可能です。

	•	パフォーマンスモニタリング
	•	エラーロギング
	•	トレース収集

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

