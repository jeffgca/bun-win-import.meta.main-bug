const config = {
    entrypoints: ['./index.ts'],
    outdir: `./dist/win-lib.exe`,
    target: 'bun-windows-x64',
    compile: true,
}

// console.log("config", config);

await Bun.build(config)
