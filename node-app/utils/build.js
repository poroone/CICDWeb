import { execSync } from "child_process"

const build = (path) => {
    return new Promise((resolve, reject) => {
        execSync("npm run build", {
            cwd: path,
            stdio: "inherit"
        })
        resolve()
    })
}
export default build