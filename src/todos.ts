/*
  MEMBUAT TODOLIST
  ----------------
  Konsep yang digunakan:
  1. TYPE ALIAS -> membuat tipe Task agar data konsisten
  2. UNION TYPE -> property status hanya bisa 'success' | 'error'
  3. FUNCTION   -> modularisasi fitur add, complete, delete, sort, search, print
  4. ARRAY      -> menampung daftar task dalam bentuk list (todos: Task[])
  5. METHOD     -> memakai bawaan array seperti push, find, filter, sort, forEach
*/

type Task = {
  id: number;
  title: string;
  isDone: boolean;
  status: 'success' | 'error';
};

let todos: Task[] = [];

// Tambah task baru
function addTask(title: string) {
  const newTask: Task = {
    id: todos.length + 1,
    title: title,
    isDone: false,
    status: 'success',
  };
  todos.push(newTask);
}
//  Fungsi tandai task selesai
function completeTask(id: number) {
  const task = todos.find((task) => task.id === id);
  if (task) {
    task.isDone = true;
    task.status = 'success';
  }
}

// Fungsi tampilkan semua task
function printTodos() {
  console.log('=== Todo List ===');
  todos.forEach((task) => {
    console.log(
      `${task.id}. ${task.title} [${
        task.isDone ? 'DONE MASEEH' : 'BELOMAN MASEEH'
      }] (${task.status})`
    );
  });
}

// Hapus task berdasarkan id
function deleteTask(id: number) {
  todos = todos.filter((task) => task.id !== id);
  console.log(`Task dengan id:${id} berhasil dihapus `);
}

function sortTaskBasedIsDone() {
  todos.sort((a, b) => {
    // urutkan: yang belum selesai (false=0) muncul dulu
    if (a.isDone === b.isDone) {
      return a.id - b.id; // kalau sama-sama done/belum → urutkan by id
    }
    return Number(a.isDone) - Number(b.isDone);
  });
  console.log('Todos berhasil diurutkan berdasarkan done status ✅');
}

// Cari task berdasarkan judul (case-insensitive)
function searchTaskBasedTitle(keyword: string) {
  console.log(`\nHasil pencarian untuk: "${keyword}"`);
  const results = todos.filter((task) =>
    task.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (results.length === 0) {
    console.log('Tidak ada task yang cocok ');
    return;
  }

  results.forEach((task) => {
    console.log(
      `${task.id}. ${task.title} [${
        task.isDone ? 'DONE MASEEH' : 'BELOMAN MASEEH'
      }] (${task.status})`
    );
  });
}

//Demo Pemanggilan Setiap Function Secara manual tanpa prompt-sync
//silahkan uncomment hapus (//) untuk menjalankan tiap function nya

//Menambah Task
addTask('Belajar TypeScript');
addTask('Belajar English');
addTask('Pergi Gym');

//mark Task complete
completeTask(1);
completeTask(3);

// Cari task berdasarkan judul
searchTaskBasedTitle('Belajar English');

// Urutkan task berdasarkan status done (belum selesai tampil dulu)
sortTaskBasedIsDone();

// Hapus task dengan id = 1
//deleteTask(1);

//tampilkanTodos
printTodos();
