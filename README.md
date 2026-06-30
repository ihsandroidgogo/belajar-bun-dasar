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

Web API
Karena Bun berjalan di server bukan di web browser beberapppa Web API tidak relevan untuk bunm, tetapi Bun mendukung sebagian fitur yang terdapat di Web API.

Cek beberapa Web API yang di dukung oleh Bun:
[https://bun.com/docs/runtime/web-apis]

HTTP Servers

Gunakan Bun.serve untuk HTTP Server nya

```bash
bun run server.ts
```

Buka http://localhost:3000/ untuk mengecek hasil nya, bisa ubah query params name jadi Mona sehingga menjadi http://localhost:3000/?nama=Mona

Docs : [https://bun.com/docs/runtime/http/server]


File IO

Bisa coba untuk reading file dengan [Bun.file(path): BunFile] bisa dicoba ketika menulis [Bun.write] file nya nanti muncul.

Docs : [https://bun.com/docs/runtime/file-io]

Hashing 

Contohnya bun menyediakan algoritma bcrypt, yang banyak digunakan untuk melakukan hashing password.

Docs : [https://bun.com/docs/runtime/hashing#hashing]

Semantic Version

Give a version number MAJOR, MINOR, PATCH, fungsi nya untuk mencocokan versi.

Docs : [https://bun.com/docs/runtime/semver]

Utilities

Selama menggunakan library Bun, kita selalu menggunakan global variable bun

banyak sekali attribute yang terdapat di global variable Bun

Docs : [https://bun.com/docs/runtime/utils]

Bun Ecosystem

Untuk ecosystem nya tidak sebanyak Node JS, tetapi Bun sejak awal memang ingin kompatibel dengan Node JS, Sehingga banyak Library dan Package yang dibuat di Node JS bisa dipakai di Bun juga.

Biasa nya menggunakan library :
- Winston (untuk Logging)
- Express (untuk Web)
- Zod (untuk validation)
- Prisma ORM (untuk koneksi ke database)
```

Winston 
```bash
bun add winston
```

Express JS
Untuk menambahkan library Express JS
```bash
bun add express
bun add @types/express --dev
```

Zod
Validation library paling populer di Typescript
```bash
bun add zod
```

Docs: [https://zod.dev/]

Prisma ORM
Prisma adalah ORM (Object-Relational Mapper) modern untuk Node.js dan TypeScript yang mempermudah interaksi dengan database, untuk default nya dia Postgre tetapi bisa diganti ke MySQL.

Install :
```bash
bun add prisma --dev
bun add prisma @prisma/client
bun add @prisma/adapter-mariadb
```

Inisialisasi Konfigurasi Prisma ORM :
```bash
bunx prisma init --database-provider mysql
```

atau bisa juga pakai :
```bash
bunx prisma init --datasource-provider mysql
```

Lalu bisa cek di .env untuk datasource baru URL, nanti bisa diganti sesuai dengan PC/Laptop kalian sesuai data yang ada.

Buat Konfigurasi di .env (database baru tanpa password) : 
```bash
DATABASE_URL="mysql://root:@localhost:3306/belajar_bun_dasar"
```

Lalu bisa buat database nya :
```bash
create database belajar_bun_dasar;
use belajar_bun_dasar;
show tables;
```

Kode Prisma Schema :
```
model Contact {
  id    Int     @id @default(autoincrement())
  name  String  @db.VarChar(100)
  phone String? @db.VarChar(20)
  email String? @db.VarChar(100)
    
  @@map("contacts")
}
```
// @@map itu nanti jadi nama table nya

Setelah selesai membuat prisma schema, kita bisa menjalakan database migration menggunakan perintah : 

```bash
bunx prisma migrate dev
```
Lalu tinggal kasih nama untuk migrate nya, Setelah sudah bisa cek dengan show tables; lalu desc contacts;

Selanjutnya bisa membuat kode Prisma Client secara otomatis menggunakan perintah :

```bash
bunx prisma generate
```
Generate Prisma Client
Ini wajib dilakukan setiap kali kamu mengubah schema.prisma.

Jika ada error di Prisma-Client nya bisa coba solusi ini :
https://github.com/prisma/prisma/discussions/13458#discussioncomment-13480644

Jika ada error lagi bisa cek install 
```
bun add @prisma/client-runtime-utils
```
Jika sudah coba :
```
bun run prisma.ts
```
Biasa nya akan muncul hasil nya di terminal, jika pakai xampp mungkin ada hal yang tidak kompatibel tetapi data tetap masuk.

Docs : [https://www.prisma.io/]