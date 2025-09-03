# TS Unleashed - Todo List (TypeScript)

Project latihan CLI sederhana untuk belajar **TypeScript**: type alias, union types, dan fungsi dasar (add, complete, delete, sort, search, print).

## ✨ Fitur

- Menambah task (`addTask`)
- Menandai task selesai (`completeTask`)
- Menghapus task (`deleteTask`)
- Mengurutkan berdasarkan status selesai (`sortTaskBasedIsDone`)
- Mencari task berdasarkan judul (`searchTaskBasedTitle`)
- Menampilkan daftar task (`printTodos`)

## 📁 Struktur Folder

```
manual-ts-unleashed/
├─ src/
│  ├─ index.ts       # entry point
│  └─ todos.ts       # implementasi todo list
├─ dist/             # hasil compile TS → JS
├─ package.json
├─ tsconfig.json
├─ .gitignore
```

## 🧰 Prasyarat

- **Node.js** 22+ (disarankan LTS)
- **npm** (bawaan Node)

## 🚀 Setup & Instalasi

1. Inisialisasi project (jika belum):

```bash
npm init -y
```

2. Install **TypeScript** secara lokal dengan `--save-dev`:

```bash
npm install --save-dev typescript
# atau singkat:
npm i -D typescript
```

Bisa juga kalau mau secara global di enviroment local computer jalakan

```bash
npm install -g typescript
```

Periksa version Typescript

```bash
tsc -v
```

3.Konfigurasi file tsconfig dan cara membuatnya jika belum ada

```bash
tsc --init
```

Jika Sudah ada Periksa file **tsconfig.json** di root project:

```json
{
  "compilerOptions": {
    // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

    // Environment Settings
    "module": "nodenext",
    "target": "es6",
    "lib": ["esnext"],
    "types": ["node"],

    // Other Outputs
    "sourceMap": true,
    "declaration": true,
    "declarationMap": true,

    // Stricter Typechecking Options
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // Recommended Options
    "strict": true,
    "isolatedModules": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  }
}
```

4. Tambahkan **script** ke `package.json`:

```json
"scripts": {
  "start": "npx tsc && node ./dist/todos.js"
}
```

5. Buat file **.gitignore**:

```
node_modules/
dist/
package-lock.json
```

> Karena `package-lock.json` diabaikan, instalasi dependency di setiap mesin bisa sedikit berbeda versi minor/patch-nya.

## 🧪 Menjalankan

### Build sekaligus run:

```bash
npm start
```

Script di atas akan:

1. Compile TypeScript → JavaScript ke folder `dist/`
2. Menjalankan file `./dist/todos.js` dengan Node

### Build saja:

```bash
npx tsc
```

### Menjalankan build yang sudah ada:

```bash
node ./dist/todos.js
```

## 📄 Lisensi

ISC — bebas dipakai untuk belajar & pengembangan.
