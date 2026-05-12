# SmileGuard II 軟體操作手冊網站

這是一個可部署到 Vercel 的 Vite + React 靜態網站，內容包含 SmileGuard II 軟體操作手冊與所有截圖圖片。

## 本機執行

```bash
npm install
npm run dev
```

## 建置

```bash
npm run build
```

## 部署到 Vercel

1. 將整個資料夾上傳或 push 到 GitHub repository。
2. 在 Vercel 匯入該 GitHub repository。
3. Framework Preset 選擇 `Vite`。
4. Build Command 使用 `npm run build`。
5. Output Directory 使用 `dist`。
6. 點選 Deploy。

## 圖片位置

所有圖片皆放在：

```text
public/images/
```

程式碼會以 `/images/檔名.jpg` 方式引用。
