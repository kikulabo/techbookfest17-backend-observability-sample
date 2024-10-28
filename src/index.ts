import newrelic from 'newrelic';

import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use((req, res, next) => {
  console.log('Received headers:', req.headers);
  next();
});

// CORS の設定
app.use(
  cors({
    origin: 'http://localhost:3000', // フロントエンドのオリジン
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'traceparent',
      'tracestate',
      'newrelic',
    ],
    exposedHeaders: ['newrelic'],
  })
);

// カスタムヘッダーを設定するミドルウェア
app.use((req, res, next) => {
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, traceparent, tracestate, newrelic'
  );
  return next();
});

// 重い計算処理を模倣する関数
function simulateIntensiveCalculation(): Promise<number> {
  return new Promise((resolve) => {
    newrelic.startSegment('simulateDelay', false, () => {
      // 最初に3秒間待機
      setTimeout(() => {
        // その後さらに2秒間待機
        setTimeout(() => {
          const result = Math.floor(Math.random() * 100);
          resolve(result);
        }, 2000);
      }, 3000);
    });
  });
}

// ルートハンドラ
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// /intensive-calc エンドポイント
app.get('/intensive-calc', async (req, res) => {
  const result = await simulateIntensiveCalculation();
  newrelic.startSegment('calcResult', false, async () => {
    res.send(`Calculation result: ${result}`);
  });
});

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`);
});
