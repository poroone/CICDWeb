// 配置文件
// ssh 连接服务器
// targetDir 需要压缩的文件目录
// targetFile 执行上传文件名称
// deployDir 部署目录
// releaseDir 远端的发布目录 存放我们的代码

// 分布式集群的情况 
const config = [
    {
        name: "poro的项目-1",
        value: "poro的项目-1",
        targetDir: "C:\\Users\\poroo\\Desktop\\poroone\\cicd\\cicd-1",
        targetFile: "dist.zip",
        deployDir: "/test/",
        releaseDir: "webPoro",
        ssh: {
            host: "", //服务器ip
            prot: 22,//端口
            username: "",//用户名
            password: "",//密码
            passphrase: ""//没有写个空
        }
    },
    {
        name: "poro的项目-2",
        value: "poro的项目-2",
        targetDir: "C:\\Users\\poroo\\Desktop\\poroone\\cicd\\cicd-1",
        targetFile: "dist.zip",
        deployDir: "/test/",
        releaseDir: "web",
        ssh: {
            host: "", //服务器ip 
            prot: 22,//端口
            username: "",//用户名
            password: "",//密码
            passphrase: ""//没有写个空
        }
    },

]

export default config