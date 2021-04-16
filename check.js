/**
 * @ Author: 幸焕光
 * @ Create Time: 2021-04-16 16:31:08
 * @ Modified by: 幸焕光
 * @ Modified time: 2021-04-16 17:01:47
 * @ Description: 检查函数
 * @ URL:
 */




function checkFn(packageName) { 
  // 确保有开启无障碍
  auto.waitFor()
  
  // 打开控制台悬浮窗方便记录日志
  console.show()
  
  if (packageName && !launch(packageName)) { 
    toast("找不到此应用, 无法提供服务");
    this.sleep(1000);
    exit();
  }

}

module.exports = checkFn