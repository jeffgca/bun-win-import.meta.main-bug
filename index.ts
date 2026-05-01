if (import.meta?.main) {
    console.log('0.0.1')
}
else {
    throw `import.meta.main is false? ${import.meta?.main}`
}