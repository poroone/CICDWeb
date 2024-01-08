// 压缩

import fs from "node:fs"
import archiver from "archiver"

/**
 * 
 * @param {*} source  源文件
 * @param {*} target  压缩之后的文件
 * 
 */
function compressFile(source, target) {
    return new Promise(function (resolve, reject) {
        let output = fs.createWriteStream(target) //dist.zip 写入流
        let archive = archiver("zip", {
            zlib: { level: 9 }//0-9数组越高压缩率越大
        })
        output.on("close", () => {
            console.log((archive.pointer() / 1020 / 1024).toFixed(2) + 'mb') //展示压缩大小
            resolve()
        })
        // rxjs
        archive.pipe(output)
        archive.directory(source, "dist") //附加在source文件下命名为dist
        archive.finalize()//完成
    })
}

export default compressFile