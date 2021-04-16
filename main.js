/**
 * @ Author: 幸焕光
 * @ Create Time: 2021-04-15 09:04:16
 * @ Modified by: 幸焕光
 * @ Modified time: 2021-04-16 19:33:50
 * @ Description: 打开相册，识别橙心优选小程序码
 * @ URL:
 */


var checkFn = require('./check.js')
// const phase3 = require('mall.js')
var phaseEnd = require('./end.js')

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

  // 找到扫一扫
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

  sleep(random(800, 1000))

  const photoControls = id('h9a').indexInParent(1)
  while (!photoControls.exists()) { 
    sleep(100)
  }
  photoControls.findOne().click()
  sleep(random(200, 500))
  // 如果第一张图片不是二维码 / 条码 / 小程序码会出现“未发现二维码 / 条码 / 小程序码”的提示
  const notFoundImg = text('未发现二维码 / 条码 / 小程序码')
  if (notFoundImg.exists()) {
    log('请确保第一张图片是团长码')
    toast('请确保第一张图片是团长码')
  } else { 
    log('打开橙心优选小程序')
  }

}

checkFn('com.tencent.mm')
phase1()
phase2()
// phase3()
phaseEnd()
