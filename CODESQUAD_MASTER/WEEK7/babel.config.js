// babel.config.js
const presets = [
    [
        "@babel/preset-env",
        {
         "targets" : "> 0.25%, not dead"
        }
    ]
]
const plugins = []
module.exports = {presets,plugins};