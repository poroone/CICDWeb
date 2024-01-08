//命令行工具
import inquirer from "inquirer"
import config from "../config.js"
const commanderLine = async (argv) => {
    if (argv.length >= 3) {
        return config.find(config => config.value == argv[2])
    } else {
        const res = await inquirer.prompt([{
            type: "list",
            name: "project",
            message: "请选择发布的项目",
            choices: [
                ...config
            ]
        }])
        return config.find(config => config.value == res.project)
    }

}

export default commanderLine
