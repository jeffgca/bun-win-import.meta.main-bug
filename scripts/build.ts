
import { join } from 'node:path'

// All supported Bun targets:
// const bun_targets: string[] = [
// 	'bun-linux-x64',
// 	'bun-linux-arm64',
// 	'bun-windows-x64',
// 	'bun-windows-arm64',
// 	'bun-darwin-x64',
// 	'bun-darwin-arm64',
// 	'bun-linux-x64-musl',
// 	'bun-linux-arm64-musl',
// ]

const config = {
    entrypoints: ['./index.ts'],
    outdir: `./dist/win-lib.exe`,
    target: 'bun-windows-x64',
    compile: true,
}

// console.log("config", config);

await Bun.build(config)
