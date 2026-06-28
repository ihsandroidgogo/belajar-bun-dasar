# belajar-bun-dasar

Tools :
- VSCode
- Bun
- MySQL
- Git-scm

Untuk install dependencies:

```bash
bun install
```

Untuk run:

```bash
bun run index.ts
```

Untuk Install React JSX :

```bash
bun add react
bun add @types/react --dev
```

Untuk Setting NODE_ENV di Bun : 

Git SCM
```bash
export NODE_ENV=production
```

atau

Powershell
```bash
set NODE_ENV=production
```

Watch mode (cocok untuk mode development)

```bash
tambahkan --watch setiap mau running app
```

Contoh :

```bash
bun --watch run index.ts
```

Manajemen Dependency
```bash
bun add nama-dependency
bun remove nama-dependency
bun update
```

Test Runner 

ada di dalam folder test, buat fungsi dengan describe,it,expect dari 'bun:test'

```bash
bun test
bun test --watch
```

Package Runner

Bisa cek node_modules/.bin untuk cek file file yang bisa dijalan kan dengan package runner

Contoh: 
```bash
bunx tsc --version
```

Workspace
Fitur ini digunakan untuk membuat manajemen beberapa project sekaligus dalam satu repository.

Contoh di dalam project yang sudah kita buat kita bisa buat sub project atau model dalam bentuk package.

Untuk memberitahu ke project utama, kita bisa menambahkan Workspace kedalam package.json

Kita perlu menyimpan seluruh sub-package ke dalam folder package

Contoh:
di [package.json] 
```bash
"workspace": [
    ""packages/*
]
```

Nanti kita masuk ke tiap project via terminal lalu kita jalankan bun init.

Contoh :
```bash
cd packages
cd address
bun init
```
Dan lakukan seterus nya sesuai sub-project yang ada di packages.

Cara Install Packages ke dalam sub packages ke project utama bisa menggunakan perintah 

```bash
bun install
```

Selain menginstall dependecy  nya dia akan otomatis membuat symlink di node_modules yang mengacu ke sub-package.

Cara cek apakah Workspaces terdeteksi :

```bash
bun pm ls
```
Harus nya sub-package ada di dalam node_modules

Bunfig
Secara umum Bun bisa diatur menggunakan Configuration File dengan nama bunfig.toml

Sebenarnya bisa dilakukan di package.json atau tsconfig.json

Namun jika perlu mengubah aturan konfigurasi khusus untuk bun kita bisa lakukan di file bunfig.toml





