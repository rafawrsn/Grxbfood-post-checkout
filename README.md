# grabfood-post-checkout-request

# GrabFood Post-Checkout Request

![Status](https://img.shields.io/badge/Status-Prototype%20Development-informational)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![Fokus](https://img.shields.io/badge/Fokus-Peningkatan%20UX-16a34a)

> Proyek: GrabFood Post-Checkout Request  
> Mata Kuliah: Rekayasa Interaksi  
> Program Studi: Teknik Informatika  
> Institusi: Universitas Muhammadiyah Malang

---

## 1. Gambaran Proyek

Proyek ini membahas pengembangan pengalaman pengguna pada layanan GrabFood, khususnya permasalahan dalam menyampaikan permintaan tambahan terkait makanan atau minuman setelah pelanggan menyelesaikan proses checkout.

Dalam proses pemesanan, pelanggan terkadang baru menyadari bahwa mereka lupa menambahkan instruksi khusus setelah menyelesaikan pembayaran. Sebagai contoh, pelanggan ingin memesan es kopi dengan jumlah es yang lebih sedikit (less ice), tetapi baru mengingat permintaan tersebut setelah pesanan berhasil dibuat.

Situasi ini menimbulkan ketidakpastian karena pelanggan tidak memiliki cara komunikasi yang jelas untuk menyampaikan permintaan tambahan kepada restoran maupun mengetahui apakah instruksi tersebut telah diterima.

Solusi yang diusulkan adalah menghadirkan fitur permintaan setelah checkout (Post-Checkout Request) yang memungkinkan pelanggan mengirimkan instruksi tambahan, melakukan konfirmasi sebelum pengiriman, serta memantau status permintaan.

Proyek ini merupakan prototype akademik berbasis UX dan bukan merupakan produk resmi Grab maupun integrasi dengan sistem produksi GrabFood.

---

## 2. Identifikasi Masalah

Pelanggan GrabFood membutuhkan cara yang jelas dan mudah diakses untuk menyampaikan atau memperjelas instruksi pesanan setelah checkout karena mereka mungkin baru mengingat permintaan tambahan setelah pembayaran dan tidak memiliki kepastian apakah restoran telah menerima serta memahami instruksi tersebut.

### Permasalahan Utama

- Pelanggan terkadang lupa menambahkan instruksi khusus sebelum checkout.
- Belum terdapat alur komunikasi yang jelas dalam skenario permasalahan yang dikaji untuk menyampaikan permintaan setelah checkout.
- Pelanggan tidak mengetahui secara pasti apakah permintaan telah diterima atau disetujui oleh restoran.
- Pelanggan membutuhkan informasi yang jelas ketika permintaan tidak dapat dipenuhi.
- Pelanggan perlu mengetahui batas waktu ketika permintaan tambahan masih dapat diajukan.

---

## 3. Solusi yang Diusulkan

Solusi yang diusulkan adalah fitur pengajuan permintaan tambahan setelah checkout yang dapat diakses melalui halaman detail pesanan aktif.

Fitur ini memungkinkan pelanggan menyampaikan instruksi tambahan kepada restoran setelah menyelesaikan proses checkout.

### Alur Utama Pengguna

1. Pelanggan membuka pesanan yang sedang berlangsung.
2. Pelanggan masuk ke halaman detail pesanan.
3. Pelanggan memilih menu "Kirim Permintaan".
4. Pelanggan menuliskan instruksi tambahan.
5. Sistem menampilkan ringkasan permintaan untuk diperiksa.
6. Pelanggan mengonfirmasi dan mengirim permintaan.
7. Sistem menampilkan konfirmasi bahwa permintaan berhasil diajukan.
8. Pelanggan dapat memantau status permintaan.

### Contoh Skenario

Seorang pelanggan memesan es kopi melalui GrabFood. Setelah menyelesaikan checkout, pelanggan baru menyadari bahwa ia lupa meminta jumlah es yang lebih sedikit.

Melalui fitur yang diusulkan, pelanggan dapat mengirimkan instruksi:

"Mohon es kopinya dibuat dengan es batu lebih sedikit."

Selanjutnya, pelanggan dapat melihat apakah permintaannya masih menunggu respons, telah diterima, atau tidak dapat dipenuhi.

---

## 4. Target Pengguna

### Persona: Raka — Pelanggan GrabFood

Profil:

Pelanggan yang sering memesan makanan dan minuman melalui aplikasi layanan pesan-antar makanan.

Perilaku:
- Mencari restoran dan memilih menu melalui GrabFood.
- Menyelesaikan checkout dan pembayaran melalui aplikasi.
- Terkadang baru mengingat preferensi makanan atau minuman setelah pesanan dibuat.
- Mengharapkan komunikasi dan konfirmasi yang jelas terkait instruksi pesanan.

Tujuan:
- Mendapatkan makanan dan minuman sesuai preferensi pribadi.
- Menyampaikan instruksi tambahan kepada restoran.
- Mengetahui apakah restoran telah menerima permintaan.
- Memahami tindakan selanjutnya apabila permintaan tidak dapat dipenuhi.

Permasalahan yang Dihadapi:
- Kesulitan menemukan cara untuk menyampaikan permintaan tambahan setelah checkout.
- Tidak yakin apakah permintaan tambahan masih dapat diajukan.
- Tidak mendapatkan kepastian mengenai respons restoran.
- Kurangnya informasi mengenai alternatif apabila permintaan tidak dapat dipenuhi.

---

## 5. Tujuan Produk dan Metrik Keberhasilan

### Tujuan Produk

| ID | Tujuan |
|---|---|
| G-01 | Pelanggan dapat menemukan fitur permintaan dengan mudah melalui halaman detail pesanan aktif. |
| G-02 | Pelanggan dapat menuliskan dan mengirimkan instruksi tambahan terkait pesanan. |
| G-03 | Pelanggan dapat melihat status permintaan yang telah diajukan. |
| G-04 | Pelanggan memahami bahwa pemenuhan permintaan bergantung pada konfirmasi dan kemampuan restoran. |
| G-05 | Pelanggan mendapatkan arahan yang jelas ketika permintaan tidak dapat dipenuhi. |

### Metrik Keberhasilan

Metrik berikut merupakan target awal untuk mengevaluasi prototype melalui pengujian usability.

| Metrik | Target |
|---|---|
| Penyelesaian Tugas | Minimal 90% peserta dapat menyelesaikan proses pengajuan permintaan tanpa bantuan. |
| Pemahaman Status | Minimal 85% peserta dapat memahami status permintaan dengan benar. |
| Kemudahan Menemukan Fitur | Minimal 90% peserta dapat menemukan fitur permintaan dari halaman detail pesanan. |
| Kepuasan Pengguna | Rata-rata penilaian kemudahan penggunaan minimal 4 dari 5. |
| Tingkat Kesalahan Kritis | Tidak ada kesalahan kritis yang menyebabkan permintaan terkirim tanpa konfirmasi pengguna. |

Target tersebut belum merupakan hasil pengukuran aktual dan akan dievaluasi melalui pengujian usability.

---

## 6. Kebutuhan Fungsional

Sistem harus menyediakan fungsi-fungsi berikut:

| ID | Kebutuhan | Prioritas |
|---|---|---|
| FR-01 | Menampilkan detail pesanan yang sedang diproses. | Must |
| FR-02 | Menyediakan tombol "Kirim Permintaan" pada halaman detail pesanan aktif. | Must |
| FR-03 | Memungkinkan pelanggan menuliskan instruksi tambahan melalui kolom teks. | Must |
| FR-04 | Memvalidasi agar kolom permintaan tidak kosong sebelum dikirim. | Must |
| FR-05 | Menampilkan ringkasan permintaan dan meminta konfirmasi sebelum pengiriman. | Must |
| FR-06 | Menampilkan pesan konfirmasi setelah permintaan berhasil diajukan. | Must |
| FR-07 | Menampilkan status permintaan: Menunggu Respons, Diterima, dan Tidak Dapat Dipenuhi. | Must |
| FR-08 | Menampilkan batas waktu pengajuan permintaan berdasarkan status pesanan. | Should |
| FR-09 | Memberikan penjelasan dan arahan ketika permintaan tidak dapat dipenuhi. | Should |
| FR-10 | Menampilkan riwayat permintaan pada halaman detail pesanan. | Could |
| FR-11 | Menyediakan contoh instruksi seperti "Less ice" untuk membantu pelanggan menuliskan permintaan. | Could |

### Aturan Bisnis

- Permintaan hanya dapat diajukan selama status pesanan masih memungkinkan perubahan.
- Pengajuan permintaan tidak menjamin bahwa restoran akan menyetujuinya.
- Menunggu Respons berarti permintaan telah dikirim tetapi belum mendapatkan keputusan.
- Diterima berarti permintaan telah disetujui dalam skenario prototype.
- Tidak Dapat Dipenuhi berarti restoran tidak dapat menjalankan permintaan tersebut.
- Apabila pesanan telah melewati batas waktu perubahan, tombol pengajuan harus dinonaktifkan atau tidak tersedia.
- Pelanggan harus mengonfirmasi permintaan sebelum dikirim.

---

## 7. Kebutuhan Non-Fungsional

| ID | Kategori | Kebutuhan |
|---|---|---|
| NFR-01 | Usability | Antarmuka harus menyediakan alur pengajuan permintaan yang sederhana dan mudah dipahami. |
| NFR-02 | Responsivitas | Website harus mendukung tampilan desktop, tablet, dan smartphone. |
| NFR-03 | Performa | Perpindahan halaman dan interaksi antarmuka ditargetkan merespons maksimal 2 detik dalam kondisi pengujian normal. |
| NFR-04 | Aksesibilitas | Teks harus memiliki kontras yang cukup, tombol memiliki label jelas, dan formulir mendukung navigasi keyboard. |
| NFR-05 | Umpan Balik | Setiap tindakan penting harus memberikan umpan balik, termasuk keberhasilan pengiriman, pembatalan, dan kesalahan. |
| NFR-06 | Konsistensi | Navigasi, tombol, komponen, dan label status harus konsisten di seluruh aplikasi. |
| NFR-07 | Privasi | Prototype tidak boleh meminta atau menyimpan informasi pribadi maupun pembayaran yang tidak diperlukan. |

---

## 8. Ruang Lingkup Produk

### Termasuk dalam Pengembangan

- Website prototype yang responsif.
- Halaman ringkasan pesanan aktif.
- Halaman detail pesanan.
- Fitur pengajuan permintaan setelah checkout.
- Formulir input permintaan tambahan.
- Validasi input kosong.
- Konfirmasi permintaan sebelum dikirim.
- Tampilan keberhasilan pengiriman permintaan.
- Pemantauan status permintaan.
- Riwayat permintaan.
- Informasi ketersediaan pengajuan permintaan.
- Simulasi respons restoran menggunakan data dummy.

### Tidak Termasuk dalam Pengembangan

- Integrasi dengan backend atau API resmi GrabFood.
- Autentikasi akun Grab sungguhan.
- Pemrosesan pembayaran dan pengembalian dana.
- Komunikasi real-time dengan restoran.
- Notifikasi push atau SMS sungguhan.
- Integrasi dengan aplikasi merchant dan mitra pengemudi.
- Perubahan harga pesanan, menu, atau alamat pengiriman.
- Dashboard operasional restoran.
- Dashboard pengelolaan Customer Service.

---

## 9. User Stories

| ID | User Story | Prioritas |
|---|---|---|
| US-01 | Sebagai pelanggan, saya ingin membuka detail pesanan aktif agar dapat melihat informasi pesanan saya. | Must |
| US-02 | Sebagai pelanggan, saya ingin menemukan fitur pengajuan permintaan setelah checkout agar dapat menyampaikan instruksi yang baru saya ingat. | Must |
| US-03 | Sebagai pelanggan, saya ingin menuliskan instruksi tambahan agar restoran memahami preferensi saya. | Must |
| US-04 | Sebagai pelanggan, saya ingin memeriksa permintaan sebelum mengirimkannya agar dapat menghindari kesalahan. | Must |
| US-05 | Sebagai pelanggan, saya ingin mendapatkan konfirmasi pengiriman agar mengetahui bahwa permintaan telah diajukan. | Must |
| US-06 | Sebagai pelanggan, saya ingin memantau status permintaan agar mengetahui apakah permintaan diterima atau tidak dapat dipenuhi. | Must |
| US-07 | Sebagai pelanggan, saya ingin mengetahui batas waktu pengajuan agar memahami kapan perubahan masih memungkinkan. | Should |
| US-08 | Sebagai pelanggan, saya ingin mendapatkan penjelasan ketika permintaan tidak dapat dipenuhi agar memahami tindakan selanjutnya. | Should |

---

## 10. Kriteria Penerimaan

### AC-01: Membuka Detail Pesanan
- Given terdapat pesanan aktif,
- When pelanggan memilih pesanan tersebut,
- Then sistem menampilkan detail dan status pesanan.

### AC-02: Menemukan Fitur Permintaan
- Given pesanan masih memungkinkan perubahan,
- When pelanggan membuka halaman detail pesanan,
- Then sistem menampilkan tombol "Kirim Permintaan".

### AC-03: Mengisi Permintaan
- Given pelanggan membuka formulir permintaan,
- When pelanggan memasukkan instruksi,
- Then sistem memungkinkan pelanggan memeriksa teks yang telah dimasukkan.

### AC-04: Validasi Input Kosong
- Given kolom permintaan masih kosong,
- When pelanggan mencoba mengirim permintaan,
- Then sistem mencegah pengiriman dan menampilkan pesan kesalahan.

### AC-05: Konfirmasi Permintaan
- Given pelanggan telah memasukkan permintaan,
- When pelanggan melanjutkan proses pengiriman,
- Then sistem menampilkan ringkasan permintaan beserta pilihan konfirmasi dan pembatalan.

### AC-06: Pengiriman Berhasil
- Given pelanggan telah mengonfirmasi permintaan,
- When pelanggan menekan tombol kirim,
- Then sistem menampilkan pesan keberhasilan dan mengatur status awal menjadi Menunggu Respons.

### AC-07: Tampilan Status Permintaan
- Given permintaan telah diajukan,
- When pelanggan membuka kembali halaman detail pesanan,
- Then sistem menampilkan status permintaan sesuai data skenario prototype.

### AC-08: Permintaan Tidak Dapat Dipenuhi
- Given status permintaan adalah Tidak Dapat Dipenuhi,
- When pelanggan melihat detail permintaan,
- Then sistem menampilkan penjelasan dan arahan tindakan selanjutnya.

### AC-09: Pengajuan Tidak Tersedia
- Given pesanan telah mencapai tahap ketika perubahan tidak lagi tersedia,
- When pelanggan membuka halaman detail pesanan,
- Then tombol pengajuan dinonaktifkan atau disembunyikan dan sistem menampilkan penjelasan.

### AC-10: Tampilan Responsif
- Given website diakses melalui desktop maupun smartphone,
- When pelanggan menggunakan fitur utama,
- Then seluruh elemen antarmuka tetap terbaca dan berfungsi tanpa masalah tata letak.

---

## 11. Alur Pengguna

Alur utama penggunaan fitur adalah sebagai berikut:

```text
Pesanan Aktif
      |
      v
Detail Pesanan
      |
      v
Kirim Permintaan
      |
      v
Tulis Instruksi
      |
      v
Periksa dan Konfirmasi
      |
      v
Permintaan Terkirim
      |
      v
Pantau Status Permintaan
      |
      +----------------------+
      |           |          |
      v           v          v
  Menunggu    Diterima    Tidak Dapat
  Respons                 Dipenuhi
```

---

## 12. Teknologi yang Digunakan

Prototype direncanakan menggunakan teknologi berikut:

| Teknologi | Kegunaan |
|---|---|
| React | Pengembangan antarmuka pengguna. |
| TypeScript | Pengembangan aplikasi dengan sistem tipe data. |
| Tailwind CSS | Pengaturan tampilan dan layout responsif. |
| Mock Data | Simulasi data pesanan dan respons restoran. |
| localStorage | Menyimpan data prototype pada browser jika diperlukan. |

Detail teknologi dapat disesuaikan berdasarkan kebutuhan implementasi.

---

## 13. Arah Desain

Antarmuka menggunakan pendekatan desain aplikasi pesan-antar makanan modern yang terinspirasi dari identitas visual GrabFood.

### Prinsip Desain

- Antarmuka bersih dan minimalis.
- Warna hijau sebagai warna utama.
- Latar belakang putih dengan warna netral sebagai pendukung.
- Penggunaan kartu dan tombol dengan sudut membulat.
- Tipografi dan hierarki informasi yang jelas.
- Jarak antar elemen yang konsisten.
- Animasi dan transisi yang sederhana.
- Layout responsif untuk desktop, tablet, dan smartphone.

Tujuan utama desain adalah membuat proses pengajuan permintaan setelah checkout mudah ditemukan, dipahami, dan digunakan.

---

## 14. Asumsi dan Batasan Prototype

- Proyek ini merupakan prototype akademik berbasis UX.
- Informasi pesanan menggunakan data contoh.
- Respons restoran disimulasikan.
- Perubahan status permintaan tidak terhubung dengan restoran sungguhan.
- Batas waktu pengajuan permintaan merupakan simulasi dan masih memerlukan validasi.
- Prototype tidak memproses pembayaran aktual maupun mengakses akun pelanggan sungguhan.

### Pertanyaan untuk Validasi Lanjutan

- Pada status pesanan apa pelanggan masih diperbolehkan mengajukan permintaan?
- Apakah restoran dapat menerima, menolak, atau meminta klarifikasi?
- Apakah permintaan berlaku untuk satu item tertentu atau seluruh pesanan?
- Apa yang harus terjadi apabila restoran tidak memberikan respons?
- Alternatif apa yang perlu ditampilkan apabila permintaan tidak dapat dipenuhi?

---

## 15. Tahapan Pengembangan Proyek

Proyek ini mengikuti tahapan pengembangan produk sebagai berikut:

### Fase 1 — Penyusunan Kebutuhan Produk
- Mengidentifikasi permasalahan UX.
- Menentukan target pengguna dan stakeholder.
- Menetapkan tujuan produk dan kebutuhan pengguna.
- Menentukan kebutuhan fungsional dan non-fungsional.
- Menyusun ruang lingkup, user stories, dan kriteria penerimaan.

### Fase 2 — Perancangan UX dan Antarmuka
- Menentukan alur perjalanan pengguna.
- Merancang struktur halaman dan navigasi.
- Menentukan arah visual desain.
- Mendefinisikan interaksi dan kondisi antarmuka.

### Fase 3 — Pengembangan Prototype
- Mengimplementasikan website responsif.
- Mengembangkan alur pengajuan permintaan.
- Mengimplementasikan simulasi perubahan status permintaan.
- Memastikan seluruh interaksi utama berfungsi.

### Fase 4 — Pengujian dan Evaluasi
- Menguji alur utama pengguna.
- Memvalidasi fungsi formulir.
- Memeriksa perubahan status permintaan.
- Mengevaluasi tampilan responsif.
- Melakukan usability testing berdasarkan metrik keberhasilan.

---

## 16. Parameter Evaluasi

Prototype akan dievaluasi berdasarkan beberapa aspek berikut:

| Aspek Evaluasi | Deskripsi |
|---|---|
| Kelengkapan Fitur | Tingkat kesesuaian implementasi dengan kebutuhan fungsional yang telah ditentukan. |
| Kualitas UX | Kejelasan navigasi, alur pengguna, dan kemudahan interaksi. |
| Konsistensi Desain | Konsistensi layout, tipografi, warna, dan komponen antarmuka. |
| Keberhasilan Pengujian | Tingkat keberhasilan aplikasi dalam memenuhi kriteria penerimaan. |
| Jumlah Revisi | Jumlah iterasi yang diperlukan hingga hasil sesuai kebutuhan. |
| Waktu Pengembangan | Total waktu yang dibutuhkan untuk menyelesaikan prototype. |

---

## Disclaimer

GrabFood merupakan merek dagang milik pemegang haknya masing-masing. Proyek ini merupakan prototype UX akademik independen yang dikembangkan untuk keperluan pembelajaran dan evaluasi desain. Proyek ini tidak berafiliasi, tidak mendapatkan dukungan resmi, dan tidak terhubung dengan Grab.

---

© 2026 — Proyek Rekayasa Interaksi  
Teknik Informatika  
Universitas Muhammadiyah Malang
