// 上传文件

const uploadFile = (ssh, config, target) => {
    return new Promise((resolve, reject) => {
        ssh.putFile(target, config.deployDir + config.releaseDir).then(res => {
            console.log("上传成功")
            resolve()
        }).catch((err) => {
            console.log("上传失败")
            reject(err)
        })
    })
}
export default uploadFile