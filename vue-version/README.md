# Airdrop 感謝祭 - Vue.js 版本

這是原本 React 版本轉換而來的 Vue.js 版本，包含完全相同的設計和功能。

## 🛠️ 技術棧

- **Vue 3** - 主要框架
- **TypeScript** - 型別安全
- **Vite** - 建構工具
- **Vue Router** - 路由系統
- **Tailwind CSS** - 樣式框架

## 📦 安裝與執行

```bash
# 安裝依賴
npm install

# 開發模式
npm run dev

# 建構生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 📁 專案結構

```
src/
├── components/          # Vue 組件
│   ├── Header.vue
│   ├── HeroSection.vue
│   ├── ActivityDescription.vue
│   ├── StatsCards.vue
│   ├── AlertNotifications.vue
│   └── Leaderboard.vue
├── views/              # 頁面組件
│   └── Home.vue
├── router/             # 路由配置
│   └── index.ts
├── App.vue            # 根組件
├── main.ts            # 應用入口
└── style.css          # 全局樣式
```

## 🎨 設計系統

使用與 React 版本相同的設計系統：
- **cos-blue**: #1976D2 - 主要藍色
- **cos-green**: #4CAF50 - 成功綠色  
- **cos-amber**: #FFC107 - 警告黃色
- **cos-grey-bg**: #F5F5F5 - 背景灰色
- **cos-grey-light**: #EEE - 淺灰色
- **cos-grey-card**: #F6F6F6 - 卡片背景

## 🚀 特色功能

- ✅ 完全響應式設計
- ✅ TypeScript 支援
- ✅ Vue 3 Composition API
- ✅ 單文件組件 (.vue)
- ✅ 熱重載開發體驗
- ✅ 與原 React 版本視覺完全一致

## 📱 響應式支援

- 手機版 (< 768px)
- 平板版 (768px - 1024px)
- 桌面版 (> 1024px)

這是一個現代化的 Vue.js 應用程式，適合作為 Airdrop 活動頁面使用！
