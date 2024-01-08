import commanderLine from "./utils/helper.js"
import build from "./utils/build.js"
import compressFile from "./utils/compressFile.js"
import path from "node:path"
import server from "./utils/ssh.js"
import uploadFile from "./utils/uploadFile.js"
import runCommander from "./utils/handleCommand.js"
const main = async () => {
    
    const CONFIG = await commanderLine(process.argv)
    const localFile = path.resolve(process.cwd(), CONFIG.targetFile)
    await build(CONFIG.targetDir)
    await compressFile(CONFIG.targetDir + "\\dist", localFile)
    await server.connectServer(CONFIG.ssh)
    await runCommander(server.ssh, `rm -rf ${CONFIG.releaseDir}`, CONFIG.deployDir)
    await uploadFile(server.ssh, CONFIG, localFile)
    await runCommander(server.ssh, `unzip ${CONFIG.releaseDir}`, CONFIG.deployDir)
    await runCommander(server.ssh, `rm -rf ${CONFIG.releaseDir}`, CONFIG.deployDir)
    await runCommander(server.ssh, `mv dist ${CONFIG.releaseDir}`, CONFIG.deployDir)
    process.exit(0)
}

main()