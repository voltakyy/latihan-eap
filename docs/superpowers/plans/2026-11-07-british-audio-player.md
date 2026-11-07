# British Audio Player for Listening Drills Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menghadirkan audio suara British (UK RP) otentik beserta komponen audio player interaktif untuk modul Listening di platform Ruang EAP.

**Architecture:** Membangkitkan 8 file audio MP3 neural British menggunakan `edge-tts` ke dalam folder `audio/`, memperbarui fungsi rendering di `app.js` untuk menyematkan audio player custom dengan kontrol kecepatan & toggle transkrip, menambahkan style di `styles.css`, dan memperbarui `README.md`.

**Tech Stack:** Python (edge-tts), Vanilla JavaScript (ES6+), HTML5 Audio API, CSS3.

## Global Constraints
- Suara audio wajib beraksen British (`en-GB-SoniaNeural`, `en-GB-RyanNeural`, `en-GB-LibbyNeural`).
- File MP3 disimpan di `latihan-eap/audio/`.
- Audio player harus mendukung Play/Pause, speed adjustment (0.8x, 1x, 1.2x), serta toggle transkrip (sembunyikan secara default saat pertama dibuka agar mahasiswa fokus mendengarkan).

---

### Task 1: Generate Authentic British Audio Files

**Files:**
- Create: `latihan-eap/audio/lis-nathan.mp3`
- Create: `latihan-eap/audio/lis-miley.mp3`
- Create: `latihan-eap/audio/lis-council.mp3`
- Create: `latihan-eap/audio/uts-lis-1.mp3` s.d. `uts-lis-5.mp3`

- [ ] **Step 1: Write generation script `build_audio.py` that parses transcripts into speaker-specific speech and writes MP3s**
- [ ] **Step 2: Execute `build_audio.py` and verify all 8 MP3 files exist and are >10KB**
- [ ] **Step 3: Remove temporary `build_audio.py` script**

---

### Task 2: Implement Audio Player UI in `styles.css` & `app.js`

**Files:**
- Modify: `latihan-eap/styles.css` (Style `.audio-player-box`, speed buttons, transcript toggler)
- Modify: `latihan-eap/app.js` (Render audio player in `renderListeningDrills` and `createExamQuestionHTML`)

- [ ] **Step 1: Add CSS rules for modern audio player card in `styles.css`**
- [ ] **Step 2: Update `LISTENING_DRILLS` data objects to include `audioUrl` and official source link**
- [ ] **Step 3: Update `UTS_EXAM_DATA.listening` items to include `audioUrl`**
- [ ] **Step 4: Update `renderListeningDrills()` and `createExamQuestionHTML()` in `app.js` to render audio player and toggleable transcript**
- [ ] **Step 5: Add global JavaScript helper functions `toggleTranscript()`, `setAudioSpeed()`**

---

### Task 3: Verification, Documentation, and Git Commit

**Files:**
- Modify: `latihan-eap/README.md`

- [ ] **Step 1: Run node verification suite to check syntax and rendering**
- [ ] **Step 2: Update `README.md` to highlight the new British Audio Player capability**
- [ ] **Step 3: Commit all changes to git**
