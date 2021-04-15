/**
 * @ Author: 幸焕光
 * @ Create Time: 2021-04-15 09:04:16
 * @ Modified by: 幸焕光
 * @ Modified time: 2021-04-15 16:00:50
 * @ Description: 打开相册，识别橙心优选小程序码
 * @ URL:
 */

const phase3 = require('./mall')
const phaseEnd = require('./end')

// 打开控制台悬浮窗方便记录日志
console.show()

/**
 * 第1阶段 ======打开相册======
 */

function phase1() { 
  // 启动微信
  launch('com.tencent.mm')
  
  // 随机延时时间(800-1000)模拟人类
  sleep(random(800, 1000))
  let moreBtn = desc("更多功能按钮")
  if (moreBtn.exists()) { 
    moreBtn.findOne().click()
    log('===打开更多功能按钮===')
  }
  
  
  const scanning = id('com.tencent.mm:id/h8v').indexInParent(2)
  // 直到更多按钮弹窗出来
  while (!scanning.exists()) { 
    sleep(100)
  }
  id('com.tencent.mm:id/h8v').indexInParent(2).findOne().click()
  
  // 直到能打开相册为止
  const photoAlbum = id('hhv').depth(10)
  while (!photoAlbum.exists()) { 
    sleep(100)
  }
  log('===已找到打开相册按钮===')
  photoAlbum.findOne().click()
}

/**
 * 第2阶段 ======识别橙心优选小程序码====== 
 */
function phase2() { 
  const photoControls = id('h9a').indexInParent(1)
  while (!photoControls.exists()) { 
    sleep(100)
  }
  photoControls.findOne().click()
  log('打开橙心优选小程序')
}

phase1()
phase2()
phase3()
phaseEnd()
