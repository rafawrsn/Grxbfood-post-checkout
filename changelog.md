# Changelog — Prototipe GrabFood Post-Checkout Request

Semua perubahan penting pada prototipe ini akan didokumentasikan dalam file ini.

---

## [0.2.0] - 2026-11-18

### Perbaikan (Bug Fix)

- **Tombol kembali (back) pada bilah navigasi kini berfungsi dengan benar.**
  Sebelumnya, tombol panah kembali di samping logo GrabFood selalu mengarah ke halaman
  detail pesanan, sehingga terlihat tidak berfungsi sama sekali ketika pengguna sudah
  berada di halaman tersebut. Kini setiap halaman memiliki tujuan kembali yang logis:
  - Halaman detail pesanan → kembali ke beranda (daftar pesanan)
  - Halaman formulir permintaan → kembali ke halaman detail pesanan
  - Halaman tinjauan & konfirmasi → kembali ke formulir permintaan
  - Halaman beranda, sukses, dan konfirmasi tidak menampilkan tombol kembali karena
    tidak ada halaman sebelumnya untuk dituju.

### Pemeliharaan (Maintenance)

- Menghapus kode yang tidak terpakai agar berkas tetap bersih.

---

## [0.1.0] - 2026-11-18

### Rilis Awal

Seluruh alur (end-to-end) permintaan pasca-checkout GrabFood dibangun tanpa gambar,
menggunakan ikon dan branding hijau khas GrabFood.

#### Halaman & Alur

- **Halaman Ringkasan Pesanan (Beranda)**
  - Menampilkan pesanan aktif milik Raka (Warung Kopi Pak Eko: iced coffee latte,
    roti panggang mentega, dan nasi goreng telur mata sapi).
  - Banner status pesanan yang bergerak (animasi) sesuai tahap pesanan.
  - Kartu pesanan yang dapat diketuk untuk membuka halaman detail.
  - Menampilkan dua permintaan terakhir yang pernah diajukan (jika ada).

- **Halaman Detail Pesanan**
  - Informasi restoran (nama, rating, jenis masakan, estimasi waktu).
  - Ringkasan pesanan lengkap dengan harga (subtotal, biaya pengiriman, pajak, total),
    termasuk catatan item (contoh: "Extra spicy, please").
  - Tombol hijau menonjol **"Submit a Request"** saat jendela pengajuan masih terbuka.
  - Notifikasi kuning berisi keterangan batas waktu: permintaan hanya dapat diajukan
    sebelum driver mengambil pesanan, dan pengajuan tidak menjamin restoran dapat memenuhinya.
  - Riwayat permintaan lengkap dengan status masing-masing.
  - Keadaan kosong (empty state) yang ramah ketika belum ada permintaan.

- **Formulir Permintaan**
  - Kotak teks bebas dengan validasi input kosong ("Mohon tuliskan permintaan Anda
    sebelum mengirim").
  - Penghitung karakter (maksimum 300 karakter).
  - Contoh permintaan yang dapat diketuk langsung, misalnya "Less ice for my iced
    coffee, please." — dapat disunting bebas.

- **Halaman Tinjauan & Konfirmasi**
  - Menampilkan ulang isi permintaan sebelum dikirim, agar pengguna dapat memeriksa
    kembali.
  - Tombol Submit dan Cancel.

- **Halaman Sukses**
  - Konfirmasi permintaan berhasil dikirim dengan status awal **"Awaiting Response"**.
  - Tombol untuk melacak status permintaan atau kembali ke daftar pesanan.

#### Status Permintaan

Tiga status permintaan, lengkap dengan tampilan dan deskripsinya:

1. **Awaiting Response** — restoran telah menerima permintaan namun belum memutuskan.
2. **Accepted** — restoran mengonfirmasi permintaan dapat dipenuhi.
3. **Unable to Fulfill** — restoran tidak dapat memenuhi permintaan. Halaman juga
   menampilkan alasan penolakan dan langkah selanjutnya (menghubungi restoran langsung
   atau Grab Customer Support melalui struk pesanan).

#### Batas Waktu Pengajuan (Time Limit)

Sesuai PRD, permintaan hanya dapat diajukan selama pesanan masih berada di dapur.
Ketika driver sudah mengambil pesanan, tombol pengajuan hilang dan digantikan oleh
kotak merah berisi penjelasan mengapa permintaan ditutup, serta halaman khusus
"Requests are no longer available" yang menampilkan alternatif yang masih dapat
dilakukan pengguna.

#### Kontrol Demo

Karena prototipe tidak memiliki restoran maupun driver sungguhan, tersedia kontrol
demo (tidak bagian dari pengalaman pengguna sebenarnya):

- **Advance order status** — memajukan pesanan satu tahap secara manual
  (menyiapkan → memasak → driver dalam perjalanan → terkirim) untuk mendemonstrasikan
  batas waktu pengajuan.
- **Close/Reopen request window** — menutup atau membuka kembali jendela pengajuan
  secara manual.
- **Demo: set restaurant response** — mengubah status permintaan terbaru di antara
  ketiga status di atas.
- **Reset demo** — menghapus seluruh data dan mengembalikan prototipe ke kondisi awal.

#### Teknis

- Data pesanan dan permintaan tersimpan di peramban (localStorage), sehingga status
  tetap ada setelah halaman dimuat ulang.
- Desain responsif dari ponsel hingga desktop, menggunakan font Plus Jakarta Sans,
  sistem warna hijau GrabFood, serta animasi dan transisi yang halus.
- Build produksi terverifikasi lolos tanpa galat.
