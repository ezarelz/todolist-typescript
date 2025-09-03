// 1. Basic Types
let angka: number = 10;
console.log(angka);
console.log(typeof angka);

// 2. Type Inference
let nomor = 10;
console.log(nomor);
console.log(typeof nomor);

// Array
let rakBuku: string[] = ['Science', 'History', 'Comics'];
console.log(rakBuku);

let listAngka: Array<number> = [1, 2, 3, 4, 5]; //Generic Types
console.log(listAngka);

//Object -> Kumpulan properti dengan tipe masing-masing.
let objPerson: {
  nama: string;
  umur: number;
} = {
  nama: 'Ezar',
  umur: 20,
};
console.log(objPerson);

//3. Type Alias
type Employee = {
  id: number;
  name: string;
  salary: number;
  isActive: boolean;
};

let employees: Employee[] = [
  { id: 1, name: 'Ezar', salary: 3_000_000, isActive: true },
  { id: 2, name: 'Arif', salary: 2_500_000, isActive: false },
];

employees.map((employee) => {
  console.log(
    `\nData Karyawan dengan id: ${employee.id}
    Nama: ${employee.name}
    Gaji: ${employee.salary.toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    })}
    Saat ini ${
      employee.isActive === true
        ? 'Masih Aktif bekerja'
        : 'Sudah Tidak aktif bekerja'
    }`
  );
});

// 4. Literal Types & Union
console.log('4. Literal Types & Union');

// -. Literal Types -> Membatasi nilai variabel ke nilai pasti (exact value).
type OrderStatus = 'pending' | 'success' | 'failed';
let status: OrderStatus = 'success';
console.log(status);

// -. Union -> Ketika Variabel bisa memegang lebih dari satu tipe data.
type KaloGkStringYaNumber = string | number;
let kaloGkStringYaNumber: KaloGkStringYaNumber = 'halo dunia';
console.log(kaloGkStringYaNumber);

kaloGkStringYaNumber = 20;
console.log(kaloGkStringYaNumber);

//5. Function Types
function add(a: number, b: number) {
  return a + b;
}
let penjumlahan1 = add(2, 3);
console.log(penjumlahan1);

//Penggunaan void
function sapa(): void {
  console.log('Testing Void');
}
sapa();

function greet(name: string, title?: string): string {
  return title ? `Hello, ${title} ${name}` : `Hello, ${name}`;
}

// Pemanggilan:
console.log(greet('Dicky', 'Mr')); // Hello, Mr Dicky
console.log(greet('Ezar')); // Hello, Ezar

//6. Interface Dasar
interface KontrakUser {
  id: number;
  name: string;
  email: string;
}

let user: KontrakUser = {
  id: 1,
  name: 'Ezar',
  email: 'ezar@gmail.com',
};

console.log(user);

//menggunakan type
type TypeKontrakUser = {
  id: number;
  name: string;
  email: string;
  alamat: string;
};

let user2: TypeKontrakUser = {
  id: 1,
  name: 'Ezar',
  email: 'ezar@example.com',
  alamat: 'Jl. Mawar No. 123, Jakarta',
};
console.log(user2);
