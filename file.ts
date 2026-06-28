// Baca file content

const file = Bun.file(".env");
const content = await file.text();
console.log(content);

// Menulis file content
await Bun.write(".env.test", content)