

##BUG

### 2016/11/19

- 1.

微信小程序 `scroll-view` 样式设置
```css
    display: flex;
    width: 100%;
    line-height: 88px;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: hidden;
```

, 同时 **子元素** 设置: `flex: 1 0 auto`, 造成每个子元素都会自动换行(即是造成 `scroll-view` 的 `flex-wrap: nowrap` 无效)吗?

- 2. scroll-view 的 bindtap 点击会触发两次

- 3. 在微信小程序里没法设置导航条样式