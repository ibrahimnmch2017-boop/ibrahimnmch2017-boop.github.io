# Aesthetic & Body Clinic — Interactive Treatment Catalog & Dual-Branch Portal (Demo)

Draf mockup landing page interaktif kelas premium untuk klinik estetika & wellness dengan dua cabang. Semua nama, kontak, alamat, dan data di halaman ini adalah **placeholder** — tidak ada afiliasi dengan klinik mana pun.

> **Catatan Demo:** Halaman ini dibuat sebagai contoh portofolio. Tombol WhatsApp & tautan eksternal dinonaktifkan (menampilkan notifikasi demo). Ganti seluruh placeholder dengan data asli klinik sebelum digunakan secara produksi.

---

## 🎯 Latar Belakang Masalah (Umum)

Banyak klinik estetika menghadapi friksi konversi yang sama pada kehadiran digital mereka:

1. **Fragmentasi File PDF di Google Drive**:
   - Pasien harus membuka beberapa file PDF terpisah hanya untuk melihat menu (Pricelist Medi-Facial, Body & Lymphatic, Medical Camo, Promo, dll).
   - Di ponsel, Google Drive sering meminta login, loading lambat, atau harus diunduh manual.
   - File PDF bersifat statis: pasien tidak bisa langsung mengklik tombol "Book via WA" untuk perawatan tertentu.

2. **Kebingungan Dua Cabang**:
   - Klinik dengan 2 cabang di wilayah berbeda memiliki nomor WhatsApp admin yang berbeda.
   - Pasien sering salah menghubungi cabang atau harus bolak-balik bertanya alamat dan jadwal.

---

## ✨ Solusi yang Dihadirkan dalam Mockup Ini

1. **Digital Interactive Treatment Catalog**:
   - Merangkum seluruh dokumen PDF ke dalam sistem tab interaktif (*Medi-Facial*, *Lymphatic & Body*, *Expertise Dokter*, *Medical Camo*, dan *Promo*).
   - Tampilan bersih, elegan, dan bisa diakses dalam hitungan milidetik tanpa perlu download aplikasi atau dokumen.

2. **Interactive Dual-Branch Switcher**:
   - Pasien cukup memilih tombol pill cabang di bagian atas (**Jakarta Barat** atau **Jakarta Selatan**).
   - Seketika seluruh nomor WhatsApp, alamat, jam operasional, dan tautan peta di halaman langsung berubah secara dinamis.

3. **Booking Langsung per Treatment**:
   - Setiap kartu perawatan memiliki tombol booking yang membawa cabang aktif yang dipilih.

---

## 🛠️ Karakter Teknis

- **Zero Framework**: Vanilla HTML5 + custom CSS tokens (tanpa React/Vue/Tailwind).
- **Aksesibilitas**: kontras WCAG-compliant, semantic landmarks, keyboard-friendly.
- **Responsif**: layout fluid dari mobile (390px) hingga desktop lebar.
- **Self-contained**: tanpa dependensi CDN eksternal untuk CSS/JS.

---

## 📂 Struktur Proyek

```
aesthetic-skin-club-demo/
├── index.html   # Single-page layout lengkap (semantic HTML + CSS tokens + vanilla JS)
└── README.md    # Dokumentasi ini
```

---

## 💻 Menjalankan Secara Lokal

```bash
# Buka langsung di browser
start index.html   # Windows
open index.html    # macOS
```

---

## 📄 Lisensi

MIT License. Dibuat sebagai showcase desain & engineering.
