{
    "plugins"[
    [
        "import",
        {
            "libraryName": "element-plus",
            "customStyleName": (name) => {
                // 注意：这里需要确保你的样式文件名是 `style.css`，否则需要进行相应调整
                return `element-plus/lib/theme-chalk/${name}.css`;
            }
        }
    ]
]
}
