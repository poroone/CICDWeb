<!--
 * @Author: poro poroone@163.com
 * @Date: 2023-12-18 19:04:02
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-09 07:32:52
 * @FilePath: \cicd\node-app\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

 ### CICD 
 DevOps 可持续集成 持续测试 - 持续交付

 好处 减少手动操作 较少重复操作 降低风险
 
 上线出现问题怎么解决?     
        回滚

所以CICD可以
备份 文件名+日期+时间

### node 实现一个CICD

1. 打包  
2. 压缩文件  
3. 上传到服务器
4. 删除同名文件
5. 解压文件
6. 发布目录
7. 删除远端无用文件

### 三个库 inquirer node-ssh archiver

inquirer 命令行交互
node-ssh 连接数据库
archiver 进行压缩文件

连接服务器 ssh root@ip

### 安装husky
npm i husky -D
npx husky install
npx husky add .husky/pre-commit