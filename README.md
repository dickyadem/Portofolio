# Dicky Ade Mahendra — Portfolio

Portofolio pribadi Dicky Ade Mahendra, Programmer dan QA Engineer.

**Live portfolio:** [dickyadem.github.io/Portofolio](https://dickyadem.github.io/Portofolio/)

Situs ini menampilkan pengalaman kerja, skill teknis, proyek aplikasi, pengujian software, dan dokumentasi proyek dengan pendekatan visual dark technical yang responsif.

## Tentang Saya

Saya bekerja di persimpangan antara membangun produk dan memastikan kualitasnya. Fokus pengalaman saya meliputi:

- Pengembangan aplikasi digital signage berbasis Samsung Tizen OS.
- Pengembangan aplikasi cross-platform dengan Flutter untuk Android, Windows, dan Linux.
- Functional, API, UI automation, regression, smoke, dan visual regression testing.
- Troubleshooting, pembacaan log, root cause analysis, dan dukungan operasional.

## Proyek Unggulan

| Proyek | Ringkasan | Dokumentasi / Demo |
| --- | --- | --- |
| Digital Signage | Platform pengelolaan dan penayangan konten untuk Samsung Tizen. | [Lihat portofolio](https://dickyadem.github.io/Portofolio/#projects) |
| Aplikasi Penggajian Karyawan | Sistem payroll dengan master data, PPh 21, BPJS, laporan Excel, dashboard, dan RBAC. | [Live demo](https://dickyadem.github.io/AplikasiPenggajianReactJS/) · [Dokumentasi HTML](document/PenggajianReactjs.html) |
| BE Penggajian / API-PAYROLL | REST API payroll berbasis Node.js dan Express dengan JWT, MySQL, RBAC, dan export laporan. | [Repository API](https://github.com/dickyadem/API-PAYROLL) · [Dokumentasi](document/BEpenggajian.md) |
| VideoBelajar | Platform pembelajaran video dengan katalog, checkout, progres, quiz, ujian, review, dan sertifikat. | [Live demo](https://dickyadem.github.io/App-VideoBelajar-Reactjs/) · [Dokumentasi HTML](document/AppVideoBelajarReactjs/VideoBelajarReacjs.html) |
| IsoBuy | Aplikasi web purchasing dan kasir dengan katalog, filter, cart, checkout, dan cetak struk. | [Live demo](https://dickyadem.github.io/WebIsoPurchasing/) · [Dokumentasi HTML](document/webIsoPurchasing/README.html) |
| Automation Testing | Pengujian API dan UI untuk Restful Booker serta OrangeHRM menggunakan Postman dan Playwright. | [Lihat portofolio](https://dickyadem.github.io/Portofolio/#projects) |

Daftar lengkap proyek dan screenshot tersedia di [halaman portofolio](https://dickyadem.github.io/Portofolio/#projects).

## Skill & Teknologi

- **Programming:** JavaScript, Dart, Python, SQL, HTML, CSS.
- **Frontend:** React, Flutter, Node.js, Bootstrap, Axios, Chart.js.
- **QA & automation:** Playwright, Selenium, WebdriverIO, Appium, Postman, Mocha, Chai, API testing, UI automation, Page Object Model.
- **Backend & data:** Express, REST API, MySQL, Oracle, IndexedDB, Dexie.js, JSON Schema, Ajv.
- **Platform & tooling:** Samsung Tizen, Android Emulator, Git, GitHub, Jira, VS Code, Allure, Mochawesome, pixelmatch, pngjs.

## Pengalaman

**PT Digital Mediatama Maxima Tbk**  
*Programmer & QA Operational Support · 2023–Juni 2026 · Bekasi, Indonesia*

- Menjalankan functional testing pada aplikasi Android, Windows, dan Linux.
- Melakukan API testing dengan Postman serta membaca log untuk root cause analysis.
- Mengembangkan digital signage berbasis Samsung Tizen OS dan aplikasi Flutter cross-platform.
- Melakukan troubleshooting onsite untuk kebutuhan operasional klien.

## Struktur Repository

```text
Portofolio/
├── index.html                         # Halaman utama portofolio
├── styles.css                         # Styling dan responsive layout
├── script.js                          # Navigasi, reveal animation, dan interaksi
├── document/
│   ├── AppVideoBelajarReactjs/
│   │   ├── VideoBelajarReacjs.html    # Dokumentasi HTML VideoBelajar
│   │   └── *.png                      # Screenshot aplikasi
│   ├── webIsoPurchasing/
│   │   ├── README.html                # Dokumentasi HTML IsoBuy
│   │   └── *.png                      # Screenshot aplikasi
│   ├── PenggajianReactjs.html         # Dokumentasi HTML frontend payroll
│   ├── BEpenggajian.md                # Dokumentasi backend payroll
│   └── img/                           # Screenshot aplikasi payroll
└── README.md
```

## Menjalankan Secara Lokal

Repository ini adalah situs statis dan tidak membutuhkan proses build atau dependency npm.

Gunakan salah satu static server dari root repository:

```bash
# Python
python -m http.server 5500
```

Lalu buka:

```text
http://localhost:5500/
```

Dokumentasi proyek dapat dibuka langsung melalui path berikut:

- `http://localhost:5500/document/PenggajianReactjs.html`
- `http://localhost:5500/document/AppVideoBelajarReactjs/VideoBelajarReacjs.html`
- `http://localhost:5500/document/webIsoPurchasing/README.html`

Membuka `index.html` langsung dari file system juga dapat digunakan untuk preview dasar, tetapi static server direkomendasikan agar path aset dan tautan dokumentasi bekerja konsisten.

## Deploy

Situs dipublikasikan melalui GitHub Pages dari repository ini. Setelah perubahan didorong ke branch yang digunakan GitHub Pages, tunggu proses deploy selesai lalu buka:

[https://dickyadem.github.io/Portofolio/](https://dickyadem.github.io/Portofolio/)

## Kontak

- **Email:** [dickyadem@gmail.com](mailto:dickyadem@gmail.com)
- **Portfolio:** [dickyadem.github.io/Portofolio](https://dickyadem.github.io/Portofolio/)
- **GitHub:** [github.com](https://github.com/)

## Lisensi

Konten portofolio dan dokumentasi proyek ini ditujukan untuk kebutuhan presentasi profesional. Detail lisensi source code mengikuti repository proyek masing-masing.
