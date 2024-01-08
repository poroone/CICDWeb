
// node 脚本执行服务器命令
/**
 * 
 * @param {*} ssh 服务器配置
 * @param {*} command 命令
 * @param {*} path 路径
 */
const runCommander = (ssh, command, path) => {
    return new Promise((resolve, reject) => {
        ssh.execCommand(command, { cwd: path }).then(result => {
            console.log("STDOUT", result)
            resolve(result)
        })
    })
}
export default runCommander