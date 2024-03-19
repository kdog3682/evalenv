import {createCodeString} from "./createCodeString.js"
export {
    code,
}

function code(s, config, ...args) {
    config.raw = s
    return createCodeString(s, config, ...args)
}
