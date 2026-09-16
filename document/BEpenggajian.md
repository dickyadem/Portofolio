# API-PAYROLL

API payroll berbasis Node.js dan Express untuk mengelola data karyawan, komponen pendapatan, potongan, penggajian, serta laporan keuangan perusahaan. Proyek ini dirancang sebagai backend untuk sistem penggajian yang membutuhkan keamanan, role-based access, dan proses export laporan dalam format Excel.

**Frontend demo:** [Aplikasi Penggajian ReactJS](https://dickyadem.github.io/AplikasiPenggajianReactJS/)

**API production:** [api-payroll.vercel.app](https://api-payroll.vercel.app)

## Tentang Proyek

Project ini merupakan solusi backend untuk aplikasi payroll yang mencakup:

- Manajemen data karyawan
- Manajemen jabatan dan golongan
- Pengelolaan pendapatan dan potongan
- Proses perhitungan gaji bulanan
- Autentikasi dan otorisasi pengguna
- Laporan gaji, PPH, dan BPJS
- Export data ke file Excel
- Notifikasi dan role-based access control

Tujuan utama dari proyek ini adalah membangun sistem backend payroll yang rapi, aman, dan siap dikembangkan untuk kebutuhan perusahaan atau aplikasi HR/payroll modern.

## Fitur Utama

- Autentikasi pengguna dengan JWT
- Enkripsi password menggunakan bcrypt
- Middleware keamanan dengan rate limiting dan CORS
- RBAC (Role-Based Access Control)
- CRUD untuk master data seperti karyawan, jabatan, golongan, pendapatan, potongan
- Perhitungan gaji bersih berdasarkan komponen pendapatan dan potongan
- Fitur laporan periodik dan export Excel
- Endpoint health check untuk monitoring server
- Struktur modular dan reusable service-based architecture

## Tech Stack

- Node.js
- Express.js
- MySQL
- Knex.js
- JWT
- bcryptjs
- ExcelJS / excel4node
- dotenv
- Jest untuk testing

## Arsitektur Proyek

Proyek ini menggunakan pendekatan modular dengan pemisahan berdasarkan domain aplikasi, seperti:

- `apps/user` untuk autentikasi dan pengelolaan user
- `apps/karyawan` untuk data karyawan
- `apps/jabatan` dan `apps/golongan` untuk master data struktur organisasi
- `apps/pendapatan` dan `apps/potongan` untuk komponen penghasilan dan pemotongan
- `apps/gaji` untuk proses penggajian dan laporan
- `apps/rbac` untuk kontrol akses berdasarkan peran
- `apps/notifications` untuk fitur notifikasi

Struktur ini mempermudah pengembangan, pemeliharaan, serta skalabilitas API di masa depan.

## Struktur Folder

```bash
.
├── app.js
├── index.js
├── knexfile.js
├── package.json
├── payroll.sql
├── migrations/
├── seeds/
├── apps/
│   ├── base/
│   ├── user/
│   ├── profil/
│   ├── karyawan/
│   ├── jabatan/
│   ├── golongan/
│   ├── pendapatan/
│   ├── potongan/
│   ├── gaji/
│   ├── rbac/
│   └── notifications/
├── __tests__/
└── README.md
```

## Persiapan Environment

Buat file `.env` di root project dengan konfigurasi berikut:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=payroll
JWT_SECRET=your_jwt_secret
CORS_ORIGIN=http://localhost:3000
```

## Instalasi

```bash
npm install
```

## Menjalankan Server

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

## Menjalankan Test

```bash
npm test
```

## Endpoint Utama

Berikut beberapa endpoint yang tersedia:

- `POST /user/login` - login user
- `POST /user/register` - registrasi user baru
- `GET /user` - daftar user
- `GET /karyawan` - daftar karyawan
- `GET /jabatan` - daftar jabatan
- `GET /golongan` - daftar golongan
- `GET /pendapatan` - daftar komponen pendapatan
- `GET /potongan` - daftar potongan
- `GET /gaji` - daftar data gaji
- `POST /gaji` - create data gaji
- `GET /gaji/:ID_Gaji` - detail gaji
- `GET /health` - health check server

## Portofolio Notes

Proyek ini menunjukkan kemampuan dalam:

- membangun API RESTful dengan Express
- mengelola database relasional MySQL
- menerapkan autentikasi dan keamanan backend
- memecah logika menjadi service dan controller yang modular
- menyusun sistem yang dapat digunakan untuk kebutuhan perusahaan dengan proses payroll nyata

Ini adalah salah satu proyek backend yang cocok untuk ditampilkan dalam portofolio developer, terutama untuk bidang software engineering, back-end development, dan sistem informasi HR/payroll.

## Status Proyek

Proyek ini masih dalam fase pengembangan dan siap untuk terus dikembangkan dengan fitur tambahan seperti:

- dashboard admin
- audit log
- export PDF
- notifikasi email/SMS
- integrasi frontend
- deployment otomatis

## Lisensi

ISC
