# Design Spec: Penambahan 50 Soal Otentik Part of Speech (Meeting 3)

## Latar Belakang
Platform **Ruang EAP** (`https://voltakyy.github.io/latihan-eap/`) sebelumnya hanya memiliki 8 butir soal latihan Part of Speech pada Modul Grammar (Drill 1). Dokumen bank soal resmi dari dosen (`exercise of PART OF SPEECH(2).docx`) yang baru diunduh memuat 50 butir latihan komprehensif yang diujikan dalam perkuliahan EAP UMS:
- **Bagian A (40 butir soal):** Menguji 8 kelas kata utama (Noun, Pronoun, Verb, Adjective, Adverb, Preposition, Conjunction, Interjection) dengan masing-masing 5 butir soal.
- **Bagian B (10 butir soal):** Menguji identifikasi kelas kata kontekstual dalam kalimat akademik majemuk (S-V-O-C-A & Compound/Complex sentences).

## Arsitektur & Perubahan Data
1. **Pembaruan `app.js`**:
   - `GRAMMAR_DRILLS`:
     - **Drill 1 (`g-pos`):** "Drill 1: Parts of Speech Mastery — 8 Classes (Meeting 3, Part A)" berisi 40 soal (`pos-1` s.d. `pos-40`) terbagi atas 8 kategori kata.
     - **Drill 2 (`g-pos-academic`):** "Drill 2: Parts of Speech in Academic Sentences (Meeting 3, Part B)" berisi 10 soal (`pos-b1` s.d. `pos-b10`) dengan analisis kalimat akademik.
     - **Drill 3 (`g-sent-types`):** "Drill 3: Simple, Compound, & Complex Sentences (Meeting 4)" (mempertahankan drill jenis kalimat).
   - Penyesuaian `renderGrammarDrills()`:
     - Memanggil `updateGrammarBadge()` secara otomatis saat pertama kali dirender.
     - Memperbarui total soal dinamis pada `grammar-progress-badge`.

2. **Pembaruan `index.html`**:
   - Memperbarui deskripsi dan badge awal pada tab Grammar agar sinkron dengan total soal baru (dari 16 menjadi 55 soal total).
   - Memperbarui ringkasan di tabel materi atau deskripsi materi jika diperlukan.

3. **Pembaruan `README.md`**:
   - Mendokumentasikan ekspansi 50 soal Part of Speech otentik dosen pada bagian ringkasan Structure & Grammar.

## Verifikasi
- Melakukan verifikasi runtime via Node/Browser untuk memastikan tidak ada syntax error dalam `app.js`.
- Memastikan fungsi `handleGrammarAnswer`, rendering kartu soal, tombol opsi A/B/C/D, dan kartu pembahasan bekerja dengan baik.
- Memastikan penghitungan badge progres akurat (`Dijawab: X / 55 | Benar: Y`).
