# Design

<!-- impeccable:design-schema 1 -->

## Surfaces

- `demo-site/index.html` — hub portofolio (Experience/Persuade) menautkan 7 demo.
- `demo-site/<demo>/` — 7 template demo statis (sudah punya dunia visualnya masing-masing; jangan diseragamkan dari hub).

## Platform

web

## Scene

Pemilik UMKM Indonesia membuka dari bio/link Instagram, mayoritas di HP, sering malam hari. Butuh bukti cepat bahwa website seperti ini bisa dimiliki bisnisnya; dinding navy gelap membuat screenshot demo yang terang menyala seperti lampu di ruang pamer.

## Palette

- Navy canvas: `#0C1930` (var `--bg`)
- Panel kontak: `#101F3A` (var `--panel`)
- Kartu: `#13243F` (var `--card`)
- Ink text: `#EAF1F8`, muted: `#9CB0C9`
- Cyan aksen: `#35BBD0` (var `--teal`), deep: `#0E7C93` — turunan token brand CV
- Garis: `rgba(234,241,248,.12)` / `rgba(234,241,248,.22)`

Ketiga warna pertama adalah token brand CV Ibrahim yang diperluas ke permukaan gelap.

## Type

- Display: Bricolage Grotesque (700) — headline hero, H2, nama kartu.
- Body: Spline Sans (400–700).
- Skala: 0.75rem (meta/catatan) · 1rem (body) · 1.5rem (nama kartu) · clamp() untuk H2/H1 (maks 4.05rem). Rasio antar langkah ≥1.3.

## Komponen

- `.btn--primary` (cyan solid) = aksi utama (WhatsApp); `.btn--ghost` = sekunder.
- `.card__link` — screenshot 16/10 `object-position:top` di frame 1px rgba, hover: lift −4px + border menguat + gambar scale 1.025.
- `.card__meta` — kategori kiri, nomor katalog 01–07 kanan (tabular-nums, cyan).
- `.stack` — tumpukan 3 screenshot bersudut (−1.6°, +2.6°, −5°) di hero desktop; di mobile hanya kartu depan.

## Motion

Satu gerakan terkoreografi: kartu katalog fade-up 18px dengan stagger `--d` per kartu (IntersectionObserver, `rootMargin -8%`), easing `cubic-bezier(.16,1,.3,1)`. Semua dimatikan di `prefers-reduced-motion`.

## Browser Surfaces

- Selection: cyan bg + navy ink. Scrollbar: thumb `#2A4364` di track `--bg`. Focus ring: 3px cyan.
- Font smoothing aktif; `scrollbar-color` Firefox diset.

## Catatan Review (finish review − 2026-09-19)

- Detector `impeccable detect.mjs` → **0 temuan** (cramped padding & flat hierarchy sudah diperbaiki).
- Terverifikasi: 7 link demo resolve; semua link eksternal (WA/LinkedIn/GitHub) valid; `vw=512 scrollW=512` (tidak ada overflow horizontal di viewport 390–512); screenshot desktop & mobile diperiksa; kontrak arah tertanam sebagai komentar HTML pertama di `<body>`.
- Catatan jujur: Chrome headless Windows tidak bisa viewport <512px lewat `--window-size`; mobile diverifikasi via iframe 390px (frame render bersih).

## Aturan yang Harus Dipertahankan

1. Hub tetap gelap navy; demo tetap punya palet masing-masing. Jangan menyatukan.
2. Semua konten demo fiktif; disclaimer wajib terlihat di hub dan tetap ada di setiap demo.
3. Kartu katalog selalu screenshot nyata (diregenerasi via `build_demo_site.py`), bukan mockup kartu.
4. Bahasa Indonesia untuk hub.

## Deploy

- `demo-site/` di-push ke GitHub (repo publik) → Settings → Pages → deploy dari root branch `main`.
- URL final: `https://ibrahimnmch2017-boop.github.io/<nama-repo>/`
- Setelah deploy, pasang URL di bio Instagram.
