// 模拟宝藏地图API
class TreasureMap {
  // 获取初始线索
  static getInitialClue() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
      }, 1000);
    });
  }

  // 解码古老文字
  static decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) {
          reject("没有线索可以解码!");
        }
        resolve("解码成功!宝藏在一座古老的神庙中...");
      }, 1500);
    });
  }

  // 在神庙中搜索
  static searchTemple(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
          reject("糟糕!遇到了神庙守卫!");
        }
        resolve("找到了一个神秘的箱子...");
      }, 2000);
    });
  }

  // 打开宝藏箱
  static openTreasureBox() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("恭喜!你找到了传说中的宝藏!");
      }, 1000);
    });
  }

  // 新增：解决古老机关谜题
  static solveAncientPuzzle(puzzle) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.3) {
          reject("谜题太难了，无法解开！");
        }
        resolve("谜题解开，出现了一条秘密通道...");
      }, 1500);
    });
  }

  // 新增：通过秘密通道
  static passSecretPassage(passage) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.2) {
          reject("通道中有陷阱，不幸触发！");
        }
        resolve("成功通过秘密通道，来到了宝藏所在之地...");
      }, 2000);
    });
  }

  // 新增：更改背景图片的方法
  static changeBackgroundImage(imageName) {
    document.body.style.backgroundImage = `url('jpgs/${imageName}.jpg')`;
  }

  // 新增：更新事件文本的方法
  static updateEventLog(text) {
    const eventLog = document.getElementById('eventLog');
    eventLog.textContent = text;
  }

}


// 使用async/await寻找宝藏
async function findTreasureWithAsyncAwait() {
  try {
    // 获取线索
    const clue = await TreasureMap.getInitialClue();
    console.log(clue);
    TreasureMap.changeBackgroundImage('Library'); // 更改背景为图书馆
    TreasureMap.updateEventLog(clue); // 更新事件文本

    // 解码线索
    const location = await TreasureMap.decodeAncientScript(clue);
    console.log(location);
    TreasureMap.changeBackgroundImage('AncientScript'); // 更改背景为古老文字
    TreasureMap.updateEventLog(location); // 更新事件文本

    // 在位置搜索
    const box = await TreasureMap.searchTemple(location);
    console.log(box);
    TreasureMap.changeBackgroundImage('Temple'); // 更改背景为神庙
    TreasureMap.updateEventLog(box); // 更新事件文本

    // 解决古老机关谜题
    const puzzle = "一个古老的机关，需要解开谜题才能继续前进";
    const secretPassage = await TreasureMap.solveAncientPuzzle(puzzle);
    console.log(secretPassage);
    TreasureMap.changeBackgroundImage('AncientMechanism'); // 更改背景为古老机关
    TreasureMap.updateEventLog(secretPassage); // 更新事件文本

    // 通过秘密通道
    const finalLocation = await TreasureMap.passSecretPassage(secretPassage);
    console.log(finalLocation);
    TreasureMap.changeBackgroundImage('SecretPassage'); // 更改背景为秘密通道
    TreasureMap.updateEventLog(finalLocation); // 更新事件文本

    // 打开箱子
    const treasure = await TreasureMap.openTreasureBox();
    console.log(treasure);
    TreasureMap.changeBackgroundImage('TreasureChest'); // 更改背景为宝藏箱
    TreasureMap.updateEventLog(treasure); // 更新事件文本
  } catch (error) {
    console.error("任务失败:", error);
    TreasureMap.changeBackgroundImage('guard'); // 如果任务失败，更改背景为守卫
    TreasureMap.updateEventLog("任务失败: " + error); // 更新事件文本为错误信息
  }
}

// 执行寻找宝藏函数
// findTreasureWithAsyncAwait();


// findTreasureWithPromises() // 执行寻找宝藏函数
