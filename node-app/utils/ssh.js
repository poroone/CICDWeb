import * as ssh from "node-ssh"
const sshClient = new ssh.NodeSSH()
/**
 * 
 * @param {*} sshInfo ssh服务器配置参数
 * @returns 
 */
const connectServer = (sshInfo) => {
    return new Promise((resolve, reject) => {
        sshClient.connect({...sshInfo}).then(res => {
            console.log(sshInfo.prot + "连接成功")
            resolve(sshClient)
        }).catch(err => {
            console.log(sshInfo.prot+"连接失败")
            reject(err)
        })
    })
}

export default {
    connectServer,
    ssh: sshClient
}