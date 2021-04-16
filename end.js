/**
 * @ Author: 幸焕光
 * @ Create Time: 2021-04-15 15:56:54
 * @ Modified by: 幸焕光
 * @ Modified time: 2021-04-16 09:35:50
 * @ Description: 最后阶段：关闭脚本，做些清理相关的工作
 * @ URL:
 */

module.exports = function endFn() {
  log('===所有任务运行完毕: 关闭脚本===')
  exit()
}