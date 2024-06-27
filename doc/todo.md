TODO:
- 歌词和歌曲封面界面都存在一个点击后一个平滑动画放到到全屏的功能
  - 放大后, 占满视口, 有基本的播放卡片组件的所有功能但是跟视频播放器全屏的效果类似, 得鼠标动一下显示这些, 然后支持一些快捷键


要使用 Tailwind CSS 来实现全屏效果并添加平滑动画，你可以按照以下步骤进行操作：

### 使用 Tailwind CSS 实现全屏效果和动画

#### 1. 创建 React 组件和按钮

首先，在 React 组件中添加按钮和全屏内容区域：

```jsx
import React, { useState } from 'react';

const FullscreenComponent = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className={`relative ${isFullscreen ? 'fixed inset-0 z-50 overflow-y-auto' : ''}`}>
      <button
        className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-50"
        onClick={toggleFullscreen}
      >
        {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isFullscreen ? 'scale-110' : ''} bg-white rounded-lg p-8 mt-8 mx-auto max-w-3xl`}>
        <h1 className="text-3xl font-bold mb-4">Fullscreen Component</h1>
        <p>This is the content of the fullscreen component.</p>
      </div>
    </div>
  );
};

export default FullscreenComponent;
```

#### 2. 添加 Tailwind CSS 类

在上述代码中，我们使用了以下 Tailwind CSS 类来实现全屏效果和动画：

- `fixed`：将按钮固定在屏幕上。
- `top-4 right-4`：指定按钮在屏幕右上角的位置。
- `bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`：按钮的背景色、悬停时的背景色、文本颜色、字体加粗、内边距和圆角等样式。
- `relative`：在非全屏状态下保持相对定位。
- `fixed inset-0 z-50 overflow-y-auto`：在全屏状态下，将内容区域固定在视口中，并允许垂直滚动。
- `transition-all duration-300 ease-in-out`：添加动画过渡效果，持续时间为300毫秒，采用 ease-in-out 缓动函数。
- `scale-110`：在全屏状态下放大内容区域。

#### 3. 实现全屏功能

通过 `toggleFullscreen` 函数切换 `isFullscreen` 状态，并根据其值动态添加或移除相应的 Tailwind CSS 类，从而触发过渡效果和样式变化。

### 使用说明

- **过渡效果**：通过 Tailwind CSS 的 `transition` 和 `duration` 类来实现动画过渡效果。
- **全屏样式**：使用 Tailwind CSS 的布局和间距类来调整按钮和内容区域的位置和大小，保证在不同屏幕尺寸下都能正常显示和操作。

通过以上步骤，你可以在你的 React 组件中利用 Tailwind CSS 快速实现一个带有全屏功能和平滑动画效果的组件。