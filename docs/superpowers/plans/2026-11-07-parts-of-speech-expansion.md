# Penambahan 50 Soal Otentik Part of Speech Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengintegrasikan 50 butir soal otentik Part of Speech dari file dosen `exercise of PART OF SPEECH(2).docx` ke dalam modul Grammar di platform Ruang EAP.

**Architecture:** Memperbarui data array `GRAMMAR_DRILLS` pada `app.js` menjadi 3 drill terstruktur (Drill 1: 40 soal Part A, Drill 2: 10 soal Part B, Drill 3: 5 soal Sentence Types), memperbarui badge progres dinamis, serta menyelaraskan tampilan awal di `index.html` dan dokumentasi di `README.md`.

**Tech Stack:** Vanilla JavaScript (ES6+), HTML5, CSS3, Git.

## Global Constraints
- Seluruh 50 soal harus 100% cocok dengan dokumen dosen `exercise of PART OF SPEECH(2).docx`.
- Setiap soal wajib memiliki properti `id`, `cat` (kelas kata), `q` (pertanyaan), `options` (pilihan A-D), `answer` (indeks 0-3), dan `expl` (pembahasan gramatika mendalam).
- Menjamin tidak ada regression pada fitur Word Puzzle, UTS simulation, Reading drills, maupun Listening arena.

---

### Task 1: Update GRAMMAR_DRILLS Data and Rendering Logic in `app.js`

**Files:**
- Modify: `latihan-eap/app.js:220-338` (Data `GRAMMAR_DRILLS`)
- Modify: `latihan-eap/app.js:1540-1542` (Panggilan `updateGrammarBadge` dalam `renderGrammarDrills`)

**Interfaces:**
- Consumes: Array `GRAMMAR_DRILLS`
- Produces: `renderGrammarDrills()`, `handleGrammarAnswer()`, `updateGrammarBadge()`

- [ ] **Step 1: Expand `GRAMMAR_DRILLS` with 40 questions for Part A (`pos-1`..`pos-40`) and 10 questions for Part B (`pos-b1`..`pos-b10`)**
- [ ] **Step 2: Add call to `updateGrammarBadge()` at the end of `renderGrammarDrills()`**
- [ ] **Step 3: Verify syntax and data integrity of `app.js` using node syntax check (`node -c app.js`)**

---

### Task 2: Update Initial UI Display in `index.html`

**Files:**
- Modify: `latihan-eap/index.html:275-285` (Placeholder progress badge & summary)

- [ ] **Step 1: Update initial badge text to match new total (0 / 55)**
- [ ] **Step 2: Update overview descriptions if applicable**

---

### Task 3: Update Documentation in `README.md` and Git Commit

**Files:**
- Modify: `latihan-eap/README.md`

- [ ] **Step 1: Update Structure & Grammar drill description in `README.md` to reflect 55 questions**
- [ ] **Step 2: Verify git status and commit all changes with a descriptive message**
