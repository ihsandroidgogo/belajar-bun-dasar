const versiAplikasi = "1.0.0"

console.info(Bun.semver.satisfies(versiAplikasi, "1.x"))
console.info(Bun.semver.satisfies(versiAplikasi, "2.x")) // true
console.info(Bun.semver.satisfies(versiAplikasi, ">=1.0.0")) // true
console.info(Bun.semver.satisfies(versiAplikasi, "<2.0.0")) // true
console.info(Bun.semver.satisfies(versiAplikasi, "^1.2.0")) // true