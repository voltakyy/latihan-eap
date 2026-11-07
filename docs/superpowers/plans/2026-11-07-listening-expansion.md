# Penambahan 20 Soal Listening Otentik Cambridge IELTS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengintegrasikan Set 4 (Stretton Festival) dan Set 5 (Future Directions in Computing) ke dalam modul Listening Arena dengan audio British dan audio player lengkap.

**Architecture:** Membangkitkan 2 berkas MP3 British menggunakan `edge-tts` ke dalam `audio/`, menambahkan data soal ke `LISTENING_DRILLS` di `app.js`, menyinkronkan badge counter di `index.html`, dan memperbarui `README.md`.

**Tech Stack:** Python (edge-tts), JavaScript (ES6+), HTML5, CSS3, Git.

## Global Constraints
- Audio harus beraksen British natural (`en-GB-RyanNeural`, `en-GB-SoniaNeural`, `en-GB-LibbyNeural`).
- Kunci jawaban dan transkrip 100% otentik sesuai naskah resmi Cambridge IELTS 11 Test 4 & Cambridge IELTS 6 Test 4.
- Total soal listening di badge harus tepat 42 butir.

---

### Task 1: Generate British Audio Files `lis-festival.mp3` & `lis-conference.mp3`

**Files:**
- Create: `latihan-eap/audio/lis-festival.mp3`
- Create: `latihan-eap/audio/lis-conference.mp3`

- [ ] **Step 1: Write and run `build_more_audio.py`**
- [ ] **Step 2: Verify both MP3 files are generated and >200KB**
- [ ] **Step 3: Remove `build_more_audio.py`**

---

### Task 2: Update LISTENING_DRILLS in `app.js` and Badge in `index.html`

**Files:**
- Modify: `latihan-eap/app.js` (Tambahkan Set 4 dan Set 5 ke `LISTENING_DRILLS`)
- Modify: `latihan-eap/index.html` (Perbarui badge listening dari 22 menjadi 42)

- [ ] **Step 1: Append Set 4 (10 questions) and Set 5 (10 questions) to `LISTENING_DRILLS`**
- [ ] **Step 2: Update initial badge display in `index.html`**
- [ ] **Step 3: Run node integrity and syntax test**

---

### Task 3: Documentation and Git Commit

**Files:**
- Modify: `latihan-eap/README.md`

- [ ] **Step 1: Update README.md documentation for Listening Arena**
- [ ] **Step 2: Commit all changes to git**
