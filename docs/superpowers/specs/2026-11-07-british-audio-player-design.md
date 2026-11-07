# Design Spec: Integrasi Audio British Otentik & Audio Player Interaktif

## Latar Belakang
Pada platform **Ruang EAP** (`https://voltakyy.github.io/latihan-eap/`), domain **Listening Comprehension (Pertemuan 1 & 2 dan Bagian 1 UTS)** sebelumnya hanya menampilkan simulasi teks transkrip percakapan. Mahasiswa membutuhkan audio berbahasa Inggris beraksen **British** yang otentik agar dapat melatih keterampilan mendengarkan secara nyata sesuai standar RPS EAP UMS dan ujian Cambridge IELTS.

## Cakupan & Desain Solusi
1. **Pembangkitan Audio MP3 British Otentik**:
   - Membangkitkan file audio MP3 neural beraksen British (`en-GB`) menggunakan multi-speaker natural:
     - `audio/lis-nathan.mp3`: Dialog wawancara radio (Host: `en-GB-SoniaNeural`, Nathan: `en-GB-RyanNeural`).
     - `audio/lis-miley.mp3`: Narasi profil biografi (Narrator: `en-GB-LibbyNeural`).
     - `audio/lis-council.mp3`: Dialog pendaftaran Youth Council (Officer: `en-GB-SoniaNeural`, Roger Brown: `en-GB-RyanNeural`).
     - `audio/uts-lis-1.mp3` s.d. `audio/uts-lis-5.mp3`: 5 butir skenario audio akademik simulasi UTS (Lecture, Advisor & Dimas, Seminar Host, Study Group, Proctor).

2. **Komponen Audio Player Interaktif di Web**:
   - Menambahkan pemutar audio HTML5 responsif dan elegan di atas setiap paket soal listening.
   - Fitur Player:
     - Play, Pause, Timeline progress bar, dan display timer.
     - Speed Selector (0.8x untuk pendengar pemula, 1.0x normal, 1.2x percepatan).
     - Tombol Toggle Transkrip ("Sembunyikan/Tampilkan Transkrip") agar mahasiswa tidak tergoda membaca teks sebelum mendengarkan.
     - Link rujukan ke Cambridge IELTS 11 Test 2 (Section 1) untuk materi Roger Brown.

3. **Sinkronisasi Kode**:
   - `app.js`: Memperbarui fungsi `renderListeningDrills()` dan `createExamQuestionHTML()` agar memuat audio player.
   - `styles.css`: Styling modern untuk kartu audio player (`.audio-player-card`, tombol kontrol, speed pill).
   - `README.md`: Memperbarui dokumentasi fitur audio British.

## Verifikasi
- Memastikan semua file audio MP3 terbuat dengan ukuran valid (>0 bytes) dan dapat diputar.
- Menjalankan uji sintaks Node.js (`node -c app.js`) dan uji integritas DOM.
