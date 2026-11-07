# Design Spec: Penambahan Latihan Listening Otentik Cambridge IELTS (Set 4 & Set 5)

## Latar Belakang
Pada kurikulum RPS resmi perkuliahan EAP UMS dan bank materi dosen (`eap m2-L-identifying dates, name, number, sequence..docx`), terdapat dua paket latihan otentik *Cambridge IELTS* yang belum terintegrasi ke dalam aplikasi web:
1. **Set 4: Stretton Community Festival** (*Cambridge IELTS 11 Test 4 Section 1*)
2. **Set 5: Future Directions in Computing Conference** (*Cambridge IELTS 6 Test 4 Section 1*)

## Desain & Spesifikasi
1. **Pembangkitan Audio British Asli (`edge-tts`)**:
   - `audio/lis-festival.mp3`: Dialog reservasi tiket festival (Rob: `en-GB-RyanNeural`, Melanie: `en-GB-SoniaNeural`).
   - `audio/lis-conference.mp3`: Dialog pendaftaran konferensi komputasi (Clerk: `en-GB-RyanNeural`, Woman: `en-GB-LibbyNeural`).

2. **Struktur Data Soal di `app.js`**:
   - **Exercise 4 (`lis-festival`):** 10 butir soal pilihan ganda:
     1. Venue of Jazz band (secondary school)
     2. Performer Carolyn Hart instrument (flute)
     3. Start of duck races (behind cinema)
     4. Prize of duck races (tickets for concert)
     5. Ducks purchase location (market)
     6. Flower show venue (Bythwaite Hall)
     7. Prizes presenter (well-known actor)
     8. Target of "The Mystery of Muldoon" (mainly for children)
     9. Target of "Fire and Flood" (mainly for adults)
     10. Target of "Silly Sailor" (suitable for all ages)
   - **Exercise 5 (`lis-conference`):** 10 butir soal pilihan ganda:
     1. 3-day registration fee (£75)
     2. Payment method (cheque)
     3. Conference Centre accommodation cost (£15 per night)
     4. Guesthouse accommodation cost (£25 per night)
     5. Walking time from Guesthouse (10 minutes)
     6. Documents to be sent (conference pack)
     7. Street direction (South Park Road)
     8. Landmark next to Conference Centre (library)
     9. Taxi cost from station (£5)
     10. Bus route number (21A)

3. **Audio Player & UI Integration**:
   - Masing-masing dilengkapi audio player responsif, speed buttons (0.8x, 1.0x, 1.2x), collapsible transcript, dan link sumber tes online Cambridge IELTS.
   - Sinkronisasi badge progres: total bertambah dari 22 menjadi **42 butir soal**.
