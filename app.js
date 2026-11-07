/**
 * Ruang EAP — Application Logic & Question Engine
 * Universitas Muhammadiyah Surakarta — Teknik Informatika
 * 
 * Terintegrasi penuh dengan seluruh materi resmi:
 * 1. Listening Arena (Meeting 1 & 2: Nathan's School, Miley Cyrus, Youth Council, Festival, Computing Conference)
 * 2. Structure & Grammar (Meeting 3: Parts of Speech, Meeting 4: Simple, Compound, Complex Sentences)
 * 3. Reading Comprehension (Meeting 5 & 6: 30 Soal Dokumen Dosen READING Drilling ANS)
 * 4. Writing Workshop (Meeting 5 & 7: Paragraph Construction 100-150 words with sentence type rubrics)
 * 5. Simulasi UTS 90 Menit (Full 100 Pts)
 */

// ==========================================
// 1. LISTENING DRILLS (MEETING 2 DOSEN)
// ==========================================

const LISTENING_DRILLS = [
  {
    id: 'lis-nathan',
    title: "Exercise 1: Radio Interview — Nathan's School (Brooklyn Free School)",
    source: 'Latihan Dosen: Meeting 2 (Set 1) | Oxford Solutions British English',
    audioUrl: 'audio/lis-nathan.mp3',
    transcript: `[RADIO INTERVIEW TRANSCRIPT]
Host: "Welcome back to Education Today. Today we're visiting Brooklyn Free School in New York to speak with Nathan, a 16-year-old high school student. Nathan, tell us about how your school works."
Nathan: "Hi! Well, Brooklyn Free School is really unique. There are no tests, no homework, and no mandatory grades. In my section of the school, students are aged 12 to 18, and there are about 60 students in total. We choose what we want to study every day."
Host: "Do you have regular classes with kids your own age?"
Nathan: "Actually, I rarely sit next to students who are only my age. We mix together. For instance, the boy who helps me with advanced mathematics is only 13 years old, but he's a genius at calculus! Our daily lessons run from 9:00 a.m. to 3:00 p.m. And while some think it's completely free, standard tuition actually costs about $12,000 a year, though they offer financial aid."
Host: "Do you enjoy coming to school?"
Nathan: "I absolutely love it. It's an inspiring place to learn."`,
    questions: [
      {
        id: 'ln-1',
        q: '1. Nathan is ___ years old.',
        options: ['15', '16', '17'],
        answer: 1, // 16
        expl: 'Kunci: B (16). Transkrip: <u>"...to speak with Nathan, a 16-year-old high school student."</u>'
      },
      {
        id: 'ln-2',
        q: "2. In Nathan's part of the school the students are aged ___.",
        options: ['4-11', '4-18', '12-18'],
        answer: 2, // 12-18
        expl: 'Kunci: C (12-18). Transkrip: <u>"In my section of the school, students are aged 12 to 18..."</u>'
      },
      {
        id: 'ln-3',
        q: "3. Nathan's part of the school has about ___ students.",
        options: ['16', '60', '66'],
        answer: 1, // 60
        expl: 'Kunci: B (60). Transkrip: <u>"...and there are about 60 students in total."</u>'
      },
      {
        id: 'ln-4',
        q: '4. Nathan ___ sits next to students of his own age.',
        options: ['sometimes', 'never', 'always'],
        answer: 0, // sometimes
        expl: 'Kunci: A (sometimes). Transkrip: Nathan menyatakan ia belajar bercampur usia, sehingga hanya kadang-kadang (sometimes) duduk dengan yang seumuran.'
      },
      {
        id: 'ln-5',
        q: '5. The boy who helps Nathan with maths is ___ years old.',
        options: ['11', '13', '18'],
        answer: 1, // 13
        expl: 'Kunci: B (13). Transkrip: <u>"the boy who helps me with advanced mathematics is only 13 years old..."</u>'
      },
      {
        id: 'ln-6',
        q: '6. Lessons are from ___.',
        options: ['8 a.m. to 3 p.m.', '9 a.m. to 3 p.m.', '9 a.m. to 4 p.m.'],
        answer: 1, // 9 a.m. to 3 p.m.
        expl: 'Kunci: B (9 a.m. to 3 p.m.). Transkrip: <u>"Our daily lessons run from 9:00 a.m. to 3:00 p.m."</u>'
      },
      {
        id: 'ln-7',
        q: '7. It costs ___ a year to study at the school.',
        options: ['$2,000', '$12,000', '$20,000'],
        answer: 1, // $12,000
        expl: 'Kunci: B ($12,000). Transkrip: <u>"...standard tuition actually costs about $12,000 a year..."</u>'
      }
    ]
  },
  {
    id: 'lis-miley',
    title: 'Exercise 2: Biography Profile — Miley Cyrus Short Biography',
    source: 'Latihan Dosen: Meeting 2 (Set 2) | British Narrator Profile',
    audioUrl: 'audio/lis-miley.mp3',
    transcript: `[BIOGRAPHY AUDIO TRANSCRIPT]
Narrator: "Miley Cyrus was born to be a star. She was born on November 23rd, 1992, in Franklin, Tennessee. Cyrus became famous worldwide when she starred in the television show "Hannah Montana" on Disney Channel. Two years later, she expanded her fame into mainstream pop music. Her 3D concert movie obtained more than 55 million dollars at the box office on opening weekend. Remarkably, by age 16, Miley already had achieved two number-one albums on the Billboard charts. Her energetic single "Party in the USA" became her best-selling single across the United States. Many music critics and fans respect her because she fearlessly takes artistic risks. In 2011, she was officially ranked in Hollywood as the second richest person under 25. Later in 2012, Miley made a notable guest appearance in the sitcom "Two and a Half Men", participating a few times throughout the season."`,
    questions: [
      {
        id: 'mc-1',
        q: '1. Miley Cyrus was born to be:',
        options: ['a fan', 'a star', 'a sensation'],
        answer: 1, // a star
        expl: 'Kunci: B (a star). Transkrip: <u>"Miley Cyrus was born to be a star."</u>'
      },
      {
        id: 'mc-2',
        q: '2. When was she born?',
        options: ['On November 21st, 1992', 'On November 23rd, 1992', 'On November 23rd, 1994'],
        answer: 1, // Nov 23, 1992
        expl: 'Kunci: B (On November 23rd, 1992). Transkrip: <u>"She was born on November 23rd, 1992..."</u>'
      },
      {
        id: 'mc-3',
        q: '3. Miley Cyrus became famous:',
        options: ['in a TV show', 'in a concert', 'in a commercial'],
        answer: 0, // TV show
        expl: 'Kunci: A (in a TV show). Transkrip: <u>"...when she starred in the television show \\\'Hannah Montana\\\'..."</u>'
      },
      {
        id: 'mc-4',
        q: '4. Cyrus became more famous with her music:',
        options: ['2 years later', '3 years later', '5 years later'],
        answer: 0, // 2 years later
        expl: 'Kunci: A (2 years later). Transkrip: <u>"Two years later, she expanded her fame into mainstream pop music."</u>'
      },
      {
        id: 'mc-5',
        q: '5. The 3D movie obtained more than:',
        options: ['55 million dollars', '155 million dollars', '115 million dollars'],
        answer: 0, // 55 million
        expl: 'Kunci: A (55 million dollars). Transkrip: <u>"Her 3D concert movie obtained more than 55 million dollars..."</u>'
      },
      {
        id: 'mc-6',
        q: '6. At 16 Miley Cyrus had:',
        options: ['4 #1 albums', '2 #1 albums', '3 #1 albums'],
        answer: 1, // 2 #1 albums
        expl: 'Kunci: B (2 #1 albums). Transkrip: <u>"by age 16, Miley already had achieved two number-one albums..."</u>'
      },
      {
        id: 'mc-7',
        q: '7. What album/single became best-selling single in the USA?',
        options: ['The climb', 'Party in the USA', 'Hannah Montana'],
        answer: 1, // Party in the USA
        expl: 'Kunci: B (Party in the USA). Transkrip: <u>"Her energetic single \\\'Party in the USA\\\' became her best-selling single..."</u>'
      },
      {
        id: 'mc-8',
        q: '8. The speaker likes Miley Cyrus because she:',
        options: ['takes risks', 'sings very well', 'is a good actress'],
        answer: 0, // takes risks
        expl: 'Kunci: A (takes risks). Transkrip: <u>"respect her because she fearlessly takes artistic risks."</u>'
      },
      {
        id: 'mc-9',
        q: '9. In 2011, Cyrus was named ___ in Hollywood.',
        options: ['the first young actress', 'the best singer', 'the second richest person'],
        answer: 2, // second richest
        expl: 'Kunci: C (the second richest person). Transkrip: <u>"...ranked in Hollywood as the second richest person under 25."</u>'
      },
      {
        id: 'mc-10',
        q: '10. In 2012, Miley participated ___ in the sitcom "Two and a Half Men":',
        options: ['many times', 'sometimes', 'few times'],
        answer: 2, // few times
        expl: 'Kunci: C (few times). Transkrip: <u>"...participating a few times throughout the season."</u>'
      }
    ]
  },
  {
    id: 'lis-council',
    title: 'Exercise 3: IELTS Form Completion — Joining Youth Council (Roger Brown)',
    source: 'Latihan Dosen: Meeting 2 (Set 3) | Cambridge IELTS 11 Test 2 (UK RP)',
    audioUrl: 'audio/lis-council.mp3',
    officialSourceUrl: 'https://mini-ielts.com/1296/listening/joining-the-youth-council',
    transcript: `[IELTS SECTION 1 CONVERSATION]
Officer: "Good morning, Youth Council office. How can I help you?"
Roger: "Hello, my name is Roger Brown, and I'd like to ask about joining the Youth Council."
Officer: "Great! Let me take down a few details. You're 18, correct? And where are you currently living?"
Roger: "During weekdays, I'm staying in a hostel near the college. My permanent home postal address is 17 Buckworth Street, Stamford, Lincs."
Officer: "And what is your postcode?"
Roger: "It's PE9 7JR."
Officer: "Thanks. Are you working at the moment?"
Roger: "I'm a full-time university student, but I work a part-time job as a waiter on weekends. My major subject of study is politics, with history as my minor subject."
Officer: "What about personal hobbies and interests?"
Roger: "I do a lot of cycling, and I'm very interested in the cinema."
Officer: "Splendid. Which community focus area would you prefer on the Council?"
Roger: "I really want to work with young people who are disabled. I want to help improve accessibility."
Officer: "That's wonderful. Could you come in to speak with the Elections Officer next Monday at 4:30 pm? And please leave your mobile number."
Roger: "Yes, 4:30 pm is perfect. My mobile number is 07788 136711."`,
    questions: [
      {
        id: 'yc-1',
        q: '1. Currently staying in a [_____] during the week',
        options: ['apartment', 'hostel', 'dormitory'],
        answer: 1,
        expl: 'Kunci: B (hostel). Transkrip: <u>"I\'m staying in a hostel near the college."</u>'
      },
      {
        id: 'yc-2',
        q: '2. Postal street address: 17, [_____] Street',
        options: ['Buckworth', 'Blackwell', 'Barker'],
        answer: 0,
        expl: 'Kunci: A (Buckworth). Transkrip: <u>"17 Buckworth Street, Stamford"</u>'
      },
      {
        id: 'yc-3',
        q: '3. Part-time job as a [_____]',
        options: ['librarian', 'waiter', 'cashier'],
        answer: 1,
        expl: 'Kunci: B (waiter). Transkrip: <u>"work a part-time job as a waiter on weekends."</u>'
      },
      {
        id: 'yc-4',
        q: '4. Major subject of study: [_____]',
        options: ['history', 'politics', 'literature'],
        answer: 1,
        expl: 'Kunci: B (politics). Transkrip: <u>"My major subject of study is politics..."</u>'
      },
      {
        id: 'yc-5',
        q: '5. On Youth Council, wants to work with young people who are [_____]',
        options: ['unemployed', 'homeless', 'disabled'],
        answer: 2,
        expl: 'Kunci: C (disabled). Transkrip: <u>"work with young people who are disabled."</u>'
      }
    ]
  },
  {
  "id": "lis-festival",
  "title": "Exercise 4: Table & Note Completion — Stretton Community Festival",
  "source": "Latihan Dosen: Meeting 2 (Set 4) | Cambridge IELTS 11 Test 4 (UK RP)",
  "audioUrl": "audio/lis-festival.mp3",
  "officialSourceUrl": "https://mini-ielts.com/1297/listening/stretton-festival",
  "transcript": "[IELTS SECTION 1 CONVERSATION — STRETTON FESTIVAL]\nRob: \"Good morning. Stretton Festival box office. How can I help you?\"\nMelanie: \"Oh, hello. My family and I are on holiday in the area, and we've seen some posters about the festival this week. Could you tell me about some of the events, please?\"\nRob: \"Of course.\"\nMelanie: \"First of all, are there still tickets available for the jazz band on Saturday?\"\nRob: \"There are, but only £15. The £12 seats have all been sold.\"\nMelanie: \"OK. And the venue is the school, isn't it?\"\nRob: \"Yes, that's right, the secondary school. Make sure you don't go to the primary school by mistake! And there's an additional performer who isn't mentioned on the posters — Carolyn Hart is going to play with the band.\"\nMelanie: \"Oh, I think I've heard her on the radio. Doesn't she play the oboe, or flute or something?\"\nRob: \"Yes, the flute. She usually plays with symphony orchestras, and apparently this is her first time with a jazz band.\"\nMelanie: \"Well, I'd certainly like to hear her. Then the next thing I want to ask about is the duck races — I saw a poster beside a river. What are they, exactly?\"\nRob: \"Well, you buy a yellow plastic duck — or as many as you like — they're a pound each. And you write your name on each one. There'll be several races, depending on the number of ducks taking part. And John Stevens, a champion swimmer who lives locally, is going to start the races. All the ducks will be launched into the river at the back of the cinema, then they'll float along the river for 500 metres, as far as the railway bridge.\"\nMelanie: \"And are there any prizes?\"\nRob: \"Yes, the first duck in each race to arrive at the finishing line wins its owner free tickets for the concert on the last night of the festival.\"\nMelanie: \"You said you can buy a duck? I'm sure my children will both want one.\"\nRob: \"They're on sale at a stall in the market. You can't miss it — it's got an enormous sign showing a couple of ducks.\"\nMelanie: \"OK. I'll go there this afternoon. I remember walking past there yesterday. Now could you tell me something about the flower show, please?\"\nRob: \"Well, admission is free, and the show is being held in Bythwaite Hall.\"\nMelanie: \"Sorry, how do you spell that?\"\nRob: \"B-Y-T-H-W-A-I-T-E. Bythwaite.\"\nMelanie: \"Is it easy to find? I'm not very familiar with the town yet.\"\nRob: \"Oh, you won't have any problem. It's right in the centre of Stretton. It's the only old building in the town, so it's easy to recognise. But if you want to see the best flowers, you'll need to be there at 5 o'clock, when the prizes are presented by a well-known actor — Kevin Shapless.\"\nMelanie: \"Right. Now, what about the plays? I'd like to know which are suitable for my children, and which ones my husband and I might go to.\"\nRob: \"How old are your children?\"\nMelanie: \"Five and seven. What about The Mystery of Muldoon?\"\nRob: \"That's aimed at five to ten-year-olds.\"\nMelanie: \"Oh, right.\"\nRob: \"If you and your husband want to leave your children with a babysitter, you might like to see Fire and Flood — it's about events that really happened in Stretton two hundred years ago, and children might find it rather frightening.\"\nMelanie: \"I see. And what about the third play, Silly Sailor?\"\nRob: \"That's a comedy, and it's for young and old. It won an award in the Stretton Drama Festival a couple of months ago.\"\nMelanie: \"Fantastic. Thank you very much for your help!\"\nRob: \"You're very welcome. Enjoy the festival!\"",
  "questions": [
    {
      "id": "fest-1",
      "q": "1. [Jazz band] The venue for the Saturday jazz concert is the _____ school.",
      "options": [
        "primary",
        "secondary",
        "boarding",
        "grammar"
      ],
      "answer": 1,
      "expl": "Kunci: B (secondary). Transkrip: <u>\"Yes, that's right, the secondary school. Make sure you don't go to the primary school by mistake!\"</u>"
    },
    {
      "id": "fest-2",
      "q": "2. [Jazz band] Additional performer Carolyn Hart plays the _____.",
      "options": [
        "oboe",
        "flute",
        "violin",
        "trumpet"
      ],
      "answer": 1,
      "expl": "Kunci: B (flute). Transkrip: <u>\"Yes, the flute. She usually plays with symphony orchestras...\"</u>"
    },
    {
      "id": "fest-3",
      "q": "3. [Duck races] All the plastic ducks will be launched into the river at the back of the _____.",
      "options": [
        "railway bridge",
        "cinema",
        "town hall",
        "market stall"
      ],
      "answer": 1,
      "expl": "Kunci: B (cinema). Transkrip: <u>\"All the ducks will be launched into the river at the back of the cinema...\"</u>"
    },
    {
      "id": "fest-4",
      "q": "4. [Duck races] The prize for the winning duck in each race is tickets for the _____.",
      "options": [
        "jazz band",
        "concert",
        "drama show",
        "flower exhibition"
      ],
      "answer": 1,
      "expl": "Kunci: B (concert). Transkrip: <u>\"wins its owner free tickets for the concert on the last night of the festival.\"</u>"
    },
    {
      "id": "fest-5",
      "q": "5. [Duck races] Plastic ducks can be bought at a stall in the _____.",
      "options": [
        "school",
        "cinema",
        "market",
        "library"
      ],
      "answer": 2,
      "expl": "Kunci: C (market). Transkrip: <u>\"They're on sale at a stall in the market. You can't miss it...\"</u>"
    },
    {
      "id": "fest-6",
      "q": "6. [Flower show] Admission is free, and the flower show is being held in _____ Hall.",
      "options": [
        "Bythwaite",
        "Blythewood",
        "Braithwaite",
        "Borthwick"
      ],
      "answer": 0,
      "expl": "Kunci: A (Bythwaite). Transkrip: <u>\"B-Y-T-H-W-A-I-T-E. Bythwaite.\"</u>"
    },
    {
      "id": "fest-7",
      "q": "7. [Flower show] Prizes will be presented at 5:00 pm by a well-known _____.",
      "options": [
        "champion swimmer",
        "actor",
        "musician",
        "mayor"
      ],
      "answer": 1,
      "expl": "Kunci: B (actor). Transkrip: <u>\"...when the prizes are presented by a well-known actor — Kevin Shapless.\"</u>"
    },
    {
      "id": "fest-8",
      "q": "8. [Plays] The play \"The Mystery of Muldoon\" is suitable for:",
      "options": [
        "mainly for children (aged 5–10)",
        "mainly for adults",
        "suitable for people of all ages"
      ],
      "answer": 0,
      "expl": "Kunci: A (mainly for children). Transkrip: <u>\"That's aimed at five to ten-year-olds.\"</u>"
    },
    {
      "id": "fest-9",
      "q": "9. [Plays] The play \"Fire and Flood\" is suitable for:",
      "options": [
        "mainly for children",
        "mainly for adults",
        "suitable for people of all ages"
      ],
      "answer": 1,
      "expl": "Kunci: B (mainly for adults). Transkrip: <u>\"If you and your husband want to leave your children with a babysitter, you might like to see Fire and Flood... children might find it rather frightening.\"</u>"
    },
    {
      "id": "fest-10",
      "q": "10. [Plays] The comedy play \"Silly Sailor\" is suitable for:",
      "options": [
        "mainly for children",
        "mainly for adults",
        "suitable for people of all ages"
      ],
      "answer": 2,
      "expl": "Kunci: C (suitable for people of all ages). Transkrip: <u>\"That's a comedy, and it's for young and old.\"</u>"
    }
  ]
},
  {
  "id": "lis-conference",
  "title": "Exercise 5: Note Completion — Future Directions in Computing Conference",
  "source": "Latihan Dosen: Meeting 2 (Set 5) | Cambridge IELTS 6 Test 4 (UK RP)",
  "audioUrl": "audio/lis-conference.mp3",
  "officialSourceUrl": "https://mini-ielts.com/1298/listening/future-directions-in-computing",
  "transcript": "[IELTS SECTION 1 CONVERSATION — COMPUTING CONFERENCE]\nClerk: \"Conference Centre Reservations. Good morning.\"\nWoman: \"Hi. I'm interested in the computing conference next month.\"\nClerk: \"Future Directions in Computing?\"\nWoman: \"Yes, that's right. Could I ask you a few questions about it?\"\nClerk: \"Of course.\"\nWoman: \"OK. I know the conference is for three days, but actually I want to attend on the Friday and Saturday only. Will that work out to be any cheaper?\"\nClerk: \"Let me have a look. Well, you could register for the two days separately, but that wouldn't actually save you very much as it still costs £35 for each day. In fact, if you register for the three days, you also get an invitation to a free dinner on the Saturday night, so that's probably the better option.\"\nWoman: \"Right, I'll do that. How much will the fees be in that case?\"\nClerk: \"It is £75.\"\nWoman: \"All right. I'd like to register for the full three days. Now, can I pay that by credit card?\"\nClerk: \"I'm afraid not. You'll have to send a cheque to us, or you can pay in person at the conference office.\"\nWoman: \"Fine. So it's probably easiest if I pay by cheque. Now then, what else do I need to arrange? How about accommodation? I guess that's not included in the price.\"\nClerk: \"No, I'm sorry, it's not. But we do have a few rooms available for delegates at the conference centre, if you'd like. Those are very cheap, but if you're interested, you'll need to book soon because there's always a heavy demand for them. They are only £15 per night, but they are very basic, and you'd have to get your own breakfast because they don't provide you with that. But it's very convenient because it's in the same building as the conference rooms. Oh, there's also a very reasonable guesthouse which is £25 per night, and I think that includes your breakfast.\"\nWoman: \"Is it close to the conference centre?\"\nClerk: \"It would be about a 10-minute walk away from here.\"\nWoman: \"I see. That sounds quite reasonable.\"\nClerk: \"Shall I send you a conference pack and an application form?\"\nWoman: \"Yes, please.\"\nClerk: \"OK. Now about the location. The conference centre is on South Park Road.\"\nWoman: \"Right.\"\nClerk: \"And it's next to the library.\"\nWoman: \"Right, thank you. And is there any public transport from the station?\"\nClerk: \"Yes, a taxi will cost about £5, or you can take bus number 21A from the station.\"\nWoman: \"Great. Thanks very much for all your help.\"\nClerk: \"You're welcome. Have a wonderful day.\"",
  "questions": [
    {
      "id": "conf-1",
      "q": "1. The total registration fee for attending the full three-day conference is £_____.",
      "options": [
        "35",
        "70",
        "75",
        "105"
      ],
      "answer": 2,
      "expl": "Kunci: C (75). Transkrip: <u>\"In fact, if you register for the three days... How much will the fees be in that case? It is £75.\"</u>"
    },
    {
      "id": "conf-2",
      "q": "2. Since credit cards are not accepted, advance payment must be made by _____ or upon arrival.",
      "options": [
        "cash",
        "cheque",
        "bank transfer",
        "money order"
      ],
      "answer": 1,
      "expl": "Kunci: B (cheque). Transkrip: <u>\"You'll have to send a cheque to us, or you can pay at the conference office.\"</u>"
    },
    {
      "id": "conf-3",
      "q": "3. Accommodation at the Conference Centre costs £_____ per night.",
      "options": [
        "10",
        "15",
        "25",
        "35"
      ],
      "answer": 1,
      "expl": "Kunci: B (15). Transkrip: <u>\"They are only £15 per night, but they are very basic...\"</u>"
    },
    {
      "id": "conf-4",
      "q": "4. Accommodation at the nearby Guest House costs £_____ per night (including breakfast).",
      "options": [
        "15",
        "20",
        "25",
        "30"
      ],
      "answer": 2,
      "expl": "Kunci: C (25). Transkrip: <u>\"there's a very reasonable guesthouse which is £25 per night, and I think that includes your breakfast.\"</u>"
    },
    {
      "id": "conf-5",
      "q": "5. The Guest House is approximately a _____ walk away from the Conference Centre.",
      "options": [
        "5-minute",
        "10-minute",
        "15-minute",
        "20-minute"
      ],
      "answer": 1,
      "expl": "Kunci: B (10-minute). Transkrip: <u>\"It would be about a 10-minute walk away from here.\"</u>"
    },
    {
      "id": "conf-6",
      "q": "6. The clerk will send the woman an application form and a _____.",
      "options": [
        "conference pack",
        "hotel directory",
        "campus map",
        "speaker list"
      ],
      "answer": 0,
      "expl": "Kunci: A (conference pack). Transkrip: <u>\"Shall I send you a conference pack and an application form?\"</u>"
    },
    {
      "id": "conf-7",
      "q": "7. The Conference Centre is located on _____ Park Road.",
      "options": [
        "North",
        "South",
        "East",
        "West"
      ],
      "answer": 1,
      "expl": "Kunci: B (South). Transkrip: <u>\"The conference centre is on South Park Road.\"</u>"
    },
    {
      "id": "conf-8",
      "q": "8. The Conference Centre building is located right next to the _____.",
      "options": [
        "train station",
        "city council",
        "library",
        "shopping mall"
      ],
      "answer": 2,
      "expl": "Kunci: C (library). Transkrip: <u>\"And it's next to the library.\"</u>"
    },
    {
      "id": "conf-9",
      "q": "9. Taking a taxi from the railway station to the Conference Centre costs approximately £_____.",
      "options": [
        "3",
        "5",
        "8",
        "12"
      ],
      "answer": 1,
      "expl": "Kunci: B (5). Transkrip: <u>\"Yes, a taxi will cost about £5...\"</u>"
    },
    {
      "id": "conf-10",
      "q": "10. Delegates can also reach the Conference Centre from the station by taking bus number _____.",
      "options": [
        "12A",
        "15B",
        "21A",
        "32C"
      ],
      "answer": 2,
      "expl": "Kunci: C (21A). Transkrip: <u>\"...or you can take bus number 21A.\"</u>"
    }
  ]
}
];

// ==========================================
// 2. GRAMMAR & STRUCTURE DRILLS (MEETING 3 & 4)
// ==========================================

const GRAMMAR_DRILLS = [
  {
    "id": "g-pos",
    "title": "Drill 1: Parts of Speech Mastery — 8 Classes (Meeting 3, Part A)",
    "source": "Dokumen Dosen: exercise of PART OF SPEECH (Section A - 40 Soal)",
    "questions": [
      {
        "id": "pos-1",
        "cat": "NOUN",
        "q": "1. The engineer checked the _____ before starting the test.",
        "options": [
          "equipment",
          "carefully",
          "because",
          "strong"
        ],
        "answer": 0,
        "expl": "Kunci: A (equipment). Kata benda (Noun) dibutuhkan sebagai direct object setelah kata sandang \"the\". \"Carefully\" adalah adverb, \"because\" adalah konjungsi, dan \"strong\" adalah adjective."
      },
      {
        "id": "pos-2",
        "cat": "NOUN",
        "q": "2. Regular _____ can prevent machine failure.",
        "options": [
          "maintains",
          "maintenance",
          "maintained",
          "efficient"
        ],
        "answer": 1,
        "expl": "Kunci: B (maintenance). \"Maintenance\" adalah kata benda (Noun) berakhiran -ance yang menempati posisi Subject kalimat."
      },
      {
        "id": "pos-3",
        "cat": "NOUN",
        "q": "3. The _____ of the bridge requires accurate measurements.",
        "options": [
          "design",
          "designed",
          "designing",
          "designs"
        ],
        "answer": 0,
        "expl": "Kunci: A (design). Kata benda tunggal (Noun) dibutuhkan setelah \"The\" dan sebelum preposisi \"of\". Kata kerja tunggal \"requires\" menunjukkan subjek berbentuk tunggal (singular)."
      },
      {
        "id": "pos-4",
        "cat": "NOUN",
        "q": "4. Which word is a noun?",
        "options": [
          "efficient",
          "improves",
          "efficiently",
          "efficiency"
        ],
        "answer": 3,
        "expl": "Kunci: D (efficiency). Kata berakhiran sufiks -cy adalah Noun (kata benda). \"Efficient\" (adjective), \"improves\" (verb), \"efficiently\" (adverb)."
      },
      {
        "id": "pos-5",
        "cat": "NOUN",
        "q": "5. The laboratory has modern _____ for measuring temperature.",
        "options": [
          "tools",
          "equips",
          "predicts",
          "discovery"
        ],
        "answer": 0,
        "expl": "Kunci: A (tools). \"Tools\" adalah kata benda jamak (countable noun) yang tepat menduduki posisi objek setelah kata sifat \"modern\"."
      },
      {
        "id": "pos-6",
        "cat": "PRONOUN",
        "q": "6. The engineers finished the test, and _____ wrote a report.",
        "options": [
          "they",
          "them",
          "their",
          "theirs"
        ],
        "answer": 0,
        "expl": "Kunci: A (they). Kata ganti subjek jamak (Subject Pronoun) untuk menggantikan \"The engineers\"."
      },
      {
        "id": "pos-7",
        "cat": "PRONOUN",
        "q": "7. The machine is old, but _____ still works.",
        "options": [
          "he",
          "they",
          "it",
          "them"
        ],
        "answer": 2,
        "expl": "Kunci: C (it). \"It\" adalah kata ganti orang ketiga tunggal netral (Pronoun) yang menggantikan benda tunggal \"The machine\"."
      },
      {
        "id": "pos-8",
        "cat": "PRONOUN",
        "q": "8. The technician gave the tools to _____.",
        "options": [
          "we",
          "us",
          "our",
          "ours"
        ],
        "answer": 1,
        "expl": "Kunci: B (us). \"Us\" adalah kata ganti objek (Object Pronoun) yang mengikuti kata depan (preposisi) \"to\"."
      },
      {
        "id": "pos-9",
        "cat": "PRONOUN",
        "q": "9. This is the sensor _____ measures pressure.",
        "options": [
          "who",
          "which",
          "them",
          "he"
        ],
        "answer": 1,
        "expl": "Kunci: B (which). \"Which\" adalah kata ganti penghubung (Relative Pronoun) untuk merujuk pada benda/alat (\"the sensor\")."
      },
      {
        "id": "pos-10",
        "cat": "PRONOUN",
        "q": "10. The students brought _____ own laptops.",
        "options": [
          "they",
          "them",
          "their",
          "theirs"
        ],
        "answer": 2,
        "expl": "Kunci: C (their). \"Their\" adalah Possessive Determiner/Adjective yang menerangkan kepemilikan sebelum frasa kata benda \"own laptops\"."
      },
      {
        "id": "pos-11",
        "cat": "VERB",
        "q": "11. The machine _____ automatically when the temperature is too high.",
        "options": [
          "stops",
          "stopping",
          "stop",
          "stopped"
        ],
        "answer": 0,
        "expl": "Kunci: A (stops). Subjek orang ketiga tunggal (\"The machine\") dalam fakta ilmiah (Simple Present) memerlukan kata kerja tunggal berakhiran -s."
      },
      {
        "id": "pos-12",
        "cat": "VERB",
        "q": "12. The engineers _____ the system last week.",
        "options": [
          "test",
          "tests",
          "tested",
          "testing"
        ],
        "answer": 2,
        "expl": "Kunci: C (tested). Keterangan waktu lampau yang pasti (\"last week\") menuntut bentuk Past Tense (V2) \"tested\"."
      },
      {
        "id": "pos-13",
        "cat": "VERB",
        "q": "13. The device can _____ pressure accurately.",
        "options": [
          "measures",
          "measuring",
          "measure",
          "measured"
        ],
        "answer": 2,
        "expl": "Kunci: C (measure). Setelah modal auxiliary verb (\"can\"), kata kerja selalu dalam bentuk dasar tanpa imbuhan (Bare Infinitive / V1)."
      },
      {
        "id": "pos-14",
        "cat": "VERB",
        "q": "14. The report _____ been completed.",
        "options": [
          "has",
          "have",
          "is",
          "does"
        ],
        "answer": 0,
        "expl": "Kunci: A (has). Kalimat pasif Present Perfect (\"has been completed\") dengan subjek tunggal \"The report\" menggunakan auxiliary \"has\"."
      },
      {
        "id": "pos-15",
        "cat": "VERB",
        "q": "15. Students _____ wear safety equipment in the laboratory.",
        "options": [
          "should",
          "can to",
          "would to",
          "are"
        ],
        "answer": 0,
        "expl": "Kunci: A (should). Modal verb \"should\" diikuti langsung oleh bare infinitive \"wear\" untuk menyatakan anjuran/kewajiban standar laboratorium."
      },
      {
        "id": "pos-16",
        "cat": "ADJECTIVE",
        "q": "16. The technician used an _____ instrument.",
        "options": [
          "accuracy",
          "accurately",
          "accurate",
          "accurateness"
        ],
        "answer": 2,
        "expl": "Kunci: C (accurate). Kata sifat (Adjective) dibutuhkan di depan kata benda \"instrument\" untuk menerangkan karakteristik alat."
      },
      {
        "id": "pos-17",
        "cat": "ADJECTIVE",
        "q": "17. This motor is _____ than the previous model.",
        "options": [
          "efficient",
          "more efficient",
          "most efficiently",
          "efficiency"
        ],
        "answer": 1,
        "expl": "Kunci: B (more efficient). Derajat perbandingan komparatif (Comparative Adjective) untuk kata sifat bersuku kata banyak sebelum kata \"than\" adalah \"more efficient\"."
      },
      {
        "id": "pos-18",
        "cat": "ADJECTIVE",
        "q": "18. The _____ cable needs to be replaced.",
        "options": [
          "damage",
          "damaged",
          "damagingly",
          "damages"
        ],
        "answer": 1,
        "expl": "Kunci: B (damaged). Participle adjective (V3) \"damaged\" berfungsi sebagai kata sifat yang menerangkan kondisi kabel (\"kabel yang rusak\")."
      },
      {
        "id": "pos-19",
        "cat": "ADJECTIVE",
        "q": "19. Which word is an adjective?",
        "options": [
          "reliability",
          "reliably",
          "reliable",
          "rely"
        ],
        "answer": 2,
        "expl": "Kunci: C (reliable). Kata berakhiran -able adalah Adjective (kata sifat). \"Reliability\" (noun), \"reliably\" (adverb), \"rely\" (verb)."
      },
      {
        "id": "pos-20",
        "cat": "ADJECTIVE",
        "q": "20. We need a _____ solution to the problem.",
        "options": [
          "practical",
          "practically",
          "practice",
          "practiced"
        ],
        "answer": 0,
        "expl": "Kunci: A (practical). Kata berakhiran sufiks -al di sini adalah Adjective yang memodifikasi kata benda \"solution\"."
      },
      {
        "id": "pos-21",
        "cat": "ADVERB",
        "q": "21. The technician measured the temperature _____.",
        "options": [
          "accurate",
          "accuracy",
          "accurately",
          "accurateness"
        ],
        "answer": 2,
        "expl": "Kunci: C (accurately). Kata keterangan cara (Adverb of Manner berakhiran -ly) menerangkan bagaimana kata kerja \"measured\" dilaksanakan."
      },
      {
        "id": "pos-22",
        "cat": "ADVERB",
        "q": "22. The new system works _____ efficiently than the old one.",
        "options": [
          "more",
          "very",
          "much",
          "most"
        ],
        "answer": 0,
        "expl": "Kunci: A (more). Bentuk perbandingan komparatif untuk adverb \"efficiently\" sebelum kata \"than\" adalah \"more efficiently\"."
      },
      {
        "id": "pos-23",
        "cat": "ADVERB",
        "q": "23. The result was _____ accurate.",
        "options": [
          "extreme",
          "extremely",
          "extremity",
          "extremes"
        ],
        "answer": 1,
        "expl": "Kunci: B (extremely). Kata keterangan derajat (Adverb of Degree berakhiran -ly) memodifikasi dan menguatkan kata sifat \"accurate\"."
      },
      {
        "id": "pos-24",
        "cat": "ADVERB",
        "q": "24. The machine was old; _____, it still worked.",
        "options": [
          "however",
          "careful",
          "because",
          "under"
        ],
        "answer": 0,
        "expl": "Kunci: A (however). \"However\" adalah Conjunctive Adverb (kata keterangan penghubung antar-klausa) yang menyatakan kontras di antara titik-koma dan koma."
      },
      {
        "id": "pos-25",
        "cat": "ADVERB",
        "q": "25. The temperature increased; _____, the system stopped.",
        "options": [
          "therefore",
          "slow",
          "accurate",
          "between"
        ],
        "answer": 0,
        "expl": "Kunci: A (therefore). \"Therefore\" adalah Conjunctive Adverb yang menyatakan konsekuensi/akibat logis di antara titik-koma dan koma."
      },
      {
        "id": "pos-26",
        "cat": "PREPOSITION",
        "q": "26. The sensor is _____ the two components.",
        "options": [
          "between",
          "during",
          "because",
          "with"
        ],
        "answer": 0,
        "expl": "Kunci: A (between). Preposisi \"between\" digunakan untuk menyatakan posisi ruang di antara dua objek/komponen."
      },
      {
        "id": "pos-27",
        "cat": "PREPOSITION",
        "q": "27. The cable passes _____ the wall.",
        "options": [
          "through",
          "at",
          "for",
          "during"
        ],
        "answer": 0,
        "expl": "Kunci: A (through). Preposisi \"through\" menunjukkan lintasan yang menembus atau melewati bagian dalam suatu penghalang (dinding)."
      },
      {
        "id": "pos-28",
        "cat": "PREPOSITION",
        "q": "28. The experiment was conducted _____ the laboratory.",
        "options": [
          "by",
          "on",
          "to",
          "in"
        ],
        "answer": 3,
        "expl": "Kunci: D (in). Preposisi \"in\" digunakan untuk menunjukkan keberadaan atau aktivitas di dalam ruangan tertutup/laboratorium."
      },
      {
        "id": "pos-29",
        "cat": "PREPOSITION",
        "q": "29. The device was repaired _____ the technician.",
        "options": [
          "with",
          "by",
          "between",
          "during"
        ],
        "answer": 1,
        "expl": "Kunci: B (by). Preposisi \"by\" digunakan dalam konstruksi pasif (\"was repaired\") untuk menandai pelaku (agent) perbaikan."
      },
      {
        "id": "pos-30",
        "cat": "PREPOSITION",
        "q": "30. The machine stopped _____ a power failure.",
        "options": [
          "because of",
          "between",
          "through",
          "on"
        ],
        "answer": 0,
        "expl": "Kunci: A (because of). \"Because of\" adalah frasa preposisi majemuk yang diikuti frasa kata benda (\"a power failure\") untuk menunjukkan penyebab."
      },
      {
        "id": "pos-31",
        "cat": "CONJUNCTION",
        "q": "31. The machine stopped _____ the temperature was too high.",
        "options": [
          "although",
          "but",
          "or",
          "because"
        ],
        "answer": 3,
        "expl": "Kunci: D (because). Konjungsi subordinatif \"because\" menghubungkan klausa alasan (\"the temperature was too high\") dengan klausa utama tanpa tanda koma."
      },
      {
        "id": "pos-32",
        "cat": "CONJUNCTION",
        "q": "32. The motor is small, _____ it is powerful.",
        "options": [
          "although",
          "but",
          "because",
          "when"
        ],
        "answer": 1,
        "expl": "Kunci: B (but). Konjungsi koordinatif FANBOYS \"but\" didahului tanda koma untuk menggabungkan dua klausa independen yang bertentangan/kontras."
      },
      {
        "id": "pos-33",
        "cat": "CONJUNCTION",
        "q": "33. The test failed, _____ we repeated it.",
        "options": [
          "so",
          "although",
          "because",
          "while"
        ],
        "answer": 0,
        "expl": "Kunci: A (so). Konjungsi koordinatif FANBOYS \"so\" didahului koma untuk menyatakan hubungan hasil atau akibat langsung."
      },
      {
        "id": "pos-34",
        "cat": "CONJUNCTION",
        "q": "34. _____ the device is expensive, it is reliable.",
        "options": [
          "Although",
          "And",
          "Or",
          "So"
        ],
        "answer": 0,
        "expl": "Kunci: A (Although). Konjungsi subordinatif \"Although\" di awal kalimat majemuk bertingkat (Complex Sentence) menyatakan konsesi/kontras."
      },
      {
        "id": "pos-35",
        "cat": "CONJUNCTION",
        "q": "35. Call the technician _____ the system stops unexpectedly.",
        "options": [
          "and",
          "but",
          "because of",
          "if"
        ],
        "answer": 3,
        "expl": "Kunci: D (if). Konjungsi subordinatif bersyarat \"if\" memperkenalkan klausa kondisi di masa mendatang."
      },
      {
        "id": "pos-36",
        "cat": "INTERJECTION",
        "q": "36. _____! I forgot to save the file.",
        "options": [
          "Wow",
          "Because",
          "Oops",
          "Carefully"
        ],
        "answer": 2,
        "expl": "Kunci: C (Oops). Kata seru \"Oops!\" secara universal dipakai untuk mengekspresikan kesadaran akan kekeliruan atau kecerobohan yang tak disengaja."
      },
      {
        "id": "pos-37",
        "cat": "INTERJECTION",
        "q": "37. _____! The prototype works perfectly.",
        "options": [
          "Wow",
          "Although",
          "Under",
          "Efficiently"
        ],
        "answer": 0,
        "expl": "Kunci: A (Wow). Kata seru \"Wow!\" mengekspresikan rasa kagum, kepuasan, atau apresiasi tinggi terhadap hasil kerja prototipe."
      },
      {
        "id": "pos-38",
        "cat": "INTERJECTION",
        "q": "38. _____! We finally solved the problem.",
        "options": [
          "Ghoshhhhh",
          "Because",
          "Through",
          "Great"
        ],
        "answer": 3,
        "expl": "Kunci: D (Great). Kata seru \"Great!\" digunakan untuk merayakan keberhasilan atau kepuasan setelah memecahkan suatu permasalahan rumit."
      },
      {
        "id": "pos-39",
        "cat": "INTERJECTION",
        "q": "39. _____ no! The computer has stopped.",
        "options": [
          "Oh",
          "So",
          "And",
          "Very"
        ],
        "answer": 0,
        "expl": "Kunci: A (Oh). \"Oh no!\" adalah ungkapan seru (interjection phrase) umum yang menyatakan rasa kaget atau cemas atas kendala sistem yang mendadak mati."
      },
      {
        "id": "pos-40",
        "cat": "INTERJECTION",
        "q": "40. Which word is an interjection?",
        "options": [
          "Excellent!",
          "efficient",
          "efficiency",
          "efficiently"
        ],
        "answer": 0,
        "expl": "Kunci: A (Excellent!). \"Excellent!\" yang diakhiri tanda seru berfungsi sebagai kata seru (Interjection) untuk memuji atau menyatakan apresiasi tinggi."
      }
    ]
  },
  {
    "id": "g-pos-academic",
    "title": "Drill 2: Parts of Speech in Academic Sentences (Meeting 3, Part B)",
    "source": "Dokumen Dosen: exercise of PART OF SPEECH (Section B - 10 Soal)",
    "questions": [
      {
        "id": "pos-b1",
        "cat": "NOUN",
        "q": "1. The students collected several __________ for their research, and they analyzed them carefully before writing the report.",
        "options": [
          "information",
          "informative",
          "inform",
          "informatively"
        ],
        "answer": 0,
        "expl": "Kunci: A (information). Posisi setelah determiner \"several\" dan sebelum frasa preposisi \"for their research\" membutuhkan Noun (kata benda)."
      },
      {
        "id": "pos-b2",
        "cat": "PRONOUN",
        "q": "2. Rina submitted the assignment before the deadline, and the lecturer praised __________ for her careful work.",
        "options": [
          "she",
          "hers",
          "herself",
          "her"
        ],
        "answer": 3,
        "expl": "Kunci: D (her). Kata kerja transitif \"praised\" membutuhkan Object Pronoun pihak ketiga tunggal perempuan (\"her\")."
      },
      {
        "id": "pos-b3",
        "cat": "VERB",
        "q": "3. The engineers __________ the new system, and they will present the results tomorrow.",
        "options": [
          "tested",
          "testing",
          "test",
          "tests"
        ],
        "answer": 0,
        "expl": "Kunci: A (tested). Finite Verb dalam bentuk Past Tense (\"tested\") menyatakan pengujian yang sudah tuntas dilaksanakan sebelum hasil dipresentasikan besok."
      },
      {
        "id": "pos-b4",
        "cat": "ADJECTIVE",
        "q": "4. The university bought a __________ laboratory computer, and the students used it to complete their programming project.",
        "options": [
          "powerful new black Japanese",
          "new powerful Japanese black",
          "Japanese black powerful new",
          "black Japanese new powerful"
        ],
        "answer": 0,
        "expl": "Kunci: A (powerful new black Japanese). Urutan standar susunan kata sifat (Royal Order of Adjectives): Opinion (powerful) → Age (new) → Color (black) → Origin/Nationality (Japanese)."
      },
      {
        "id": "pos-b5",
        "cat": "ADVERB",
        "q": "5. The students completed the experiment __________, and they submitted the report before the lecturer arrived.",
        "options": [
          "careful",
          "carefully",
          "care",
          "carefulness"
        ],
        "answer": 1,
        "expl": "Kunci: B (carefully). Dibutuhkan Adverb of Manner (-ly) untuk memodifikasi bagaimana kata kerja \"completed\" dilakukan."
      },
      {
        "id": "pos-b6",
        "cat": "PREPOSITION",
        "q": "6. The researcher stored the important data __________ a secure server, and she checked the files every evening.",
        "options": [
          "at",
          "on",
          "by",
          "from"
        ],
        "answer": 1,
        "expl": "Kunci: B (on). Dalam konteks komputasi akademik, data disimpan \"on a server\" atau \"on a cloud drive\" (menggunakan preposisi \"on\")."
      },
      {
        "id": "pos-b7",
        "cat": "CONJUNCTION",
        "q": "7. The internet connection was unstable, __________ the students continued their online presentation successfully.",
        "options": [
          "because",
          "although",
          "so that",
          "but"
        ],
        "answer": 3,
        "expl": "Kunci: D (but). Dua klausa independen yang menunjukkan kontras/pertentangan dan dipisahkan tanda koma memerlukan konjungsi koordinatif FANBOYS \"but\"."
      },
      {
        "id": "pos-b8",
        "cat": "INTERJECTION",
        "q": "8. __________! The computer suddenly restarted, and we had not saved the latest version of our project.",
        "options": [
          "However",
          "Unfortunately",
          "Wow",
          "Oh No"
        ],
        "answer": 3,
        "expl": "Kunci: D (Oh No). Ungkapan seru (Interjection) \"Oh No!\" paling tepat menggambarkan rasa terkejut dan kesal atas insiden komputer mendadak restart."
      },
      {
        "id": "pos-b9",
        "cat": "ADVERB",
        "q": "9. The lecturer explained the complicated concept __________, so the students could understand it easily.",
        "options": [
          "clear",
          "clearly",
          "clarity",
          "clearing"
        ],
        "answer": 1,
        "expl": "Kunci: B (clearly). Kata keterangan cara (Adverb of Manner) \"clearly\" diperlukan untuk memodifikasi kata kerja \"explained\"."
      },
      {
        "id": "pos-b10",
        "cat": "ADJECTIVE",
        "q": "10. The researchers developed an __________ application, and it helped users manage their daily activities more efficiently.",
        "options": [
          "innovative useful",
          "useful innovation",
          "innovatively use",
          "innovation useful"
        ],
        "answer": 0,
        "expl": "Kunci: A (innovative useful). Artikel \"an\" mewajibkan kata berikutnya diawali bunyi vokal (\"innovative\" diawali /ɪ/), berfungsi sebagai kata sifat berurutan untuk kata benda \"application\"."
      }
    ]
  },
  {
    "id": "g-sent-types",
    "title": "Drill 3: Simple, Compound, & Complex Sentences (Meeting 4)",
    "source": "Slide Kuliah Dosen: Meeting 4 - Sentences (10 Soal Otentik)",
    "questions": [
      {
        "id": "st-1",
        "cat": "SIMPLE",
        "q": "1. Identify the sentence type:\n\"The internet helps students to find information quickly.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 0,
        "expl": "Kunci: A (Simple Sentence). Kalimat ini hanya memiliki 1 klausa independen (Subject: The internet, Verb: helps)."
      },
      {
        "id": "st-2",
        "cat": "COMPOUND",
        "q": "2. Identify the sentence type:\n\"I like programming, and I also enjoy designing websites.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 1,
        "expl": "Kunci: B (Compound Sentence). Terdiri dari 2 klausa independen yang dihubungkan konjungsi koordinatif FANBOYS \"and\" dengan tanda koma."
      },
      {
        "id": "st-3",
        "cat": "COMPLEX",
        "q": "3. Identify the sentence type:\n\"She stayed at home because it was raining heavily.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 2,
        "expl": "Kunci: C (Complex Sentence). Terdiri dari 1 klausa independen (\"She stayed at home\") dan 1 klausa dependen diawali subordinator \"because\"."
      },
      {
        "id": "st-4",
        "cat": "COMPOUND",
        "q": "4. Identify the sentence type:\n\"We use computers every day, but we sometimes forget how powerful they are.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 1,
        "expl": "Kunci: B (Compound Sentence). Dua klausa independen dihubungkan oleh FANBOYS \"but\" dengan tanda koma untuk menyatakan kontras."
      },
      {
        "id": "st-5",
        "cat": "COMPLEX",
        "q": "5. Identify the sentence type:\n\"Although he was nervous, he gave a good presentation.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 2,
        "expl": "Kunci: C (Complex Sentence). Terdiri dari klausa dependen diawali subordinator \"Although\" di depan (dengan koma) dan klausa independen."
      },
      {
        "id": "st-6",
        "cat": "COMPLEX",
        "q": "6. Identify the sentence type:\n\"Many students join online courses because they want to improve their skills.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 2,
        "expl": "Kunci: C (Complex Sentence). Terdiri dari klausa independen utama dan klausa dependen yang diawali subordinator alasan \"because\"."
      },
      {
        "id": "st-7",
        "cat": "COMPOUND",
        "q": "7. Identify the sentence type:\n\"The server crashed, so the technician fixed it immediately.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 1,
        "expl": "Kunci: B (Compound Sentence). Dua klausa independen dihubungkan oleh FANBOYS \"so\" dengan tanda koma untuk menyatakan akibat logis."
      },
      {
        "id": "st-8",
        "cat": "SIMPLE",
        "q": "8. Identify the sentence type:\n\"Computers are very useful in education.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 0,
        "expl": "Kunci: A (Simple Sentence). Hanya memiliki 1 klausa independen lengkap (Subject: Computers, Linking Verb: are, Subject Complement: very useful)."
      },
      {
        "id": "st-9",
        "cat": "COMPOUND",
        "q": "9. Identify the sentence type:\n\"I wanted to buy a new laptop, but it was too expensive.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 1,
        "expl": "Kunci: B (Compound Sentence). Dua klausa independen digabungkan oleh FANBOYS \"but\" dengan koma."
      },
      {
        "id": "st-10",
        "cat": "COMPLEX",
        "q": "10. Identify the sentence type:\n\"If students practice every day, they will become better at programming.\"",
        "options": [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        "answer": 2,
        "expl": "Kunci: C (Complex Sentence). Klausa dependen bersyarat (\"If students practice every day,\") diletakkan di depan dengan koma sebelum induk kalimat."
      }
    ]
  }
];

// ==========================================
// 3. AUTHENTIC READING DRILLING (QUESTIONS 1 - 30)
// ==========================================
// DRILLING_PASSAGES (Tetap dipertahankan 30 soal lengkap dengan kunci hijau)
const DRILLING_PASSAGES = [
  // 1. Laura Collins (1-4)
  {
    id: 'p-laura',
    title: 'Questions 1–4 refer to the following email.',
    source: 'Dokumen Dosen: READING 1–Q4',
    text: `Dear Ms. Longueview,

I'm so thrilled to receive the offer to intern at Bright Works Incorporated. I am truly looking forward to working with the team, and I'm particularly excited to work on the solar panel project this summer.

I would like to accept the terms outlined in the offer, but I'd appreciate the opportunity to speak with you about altering the start date for the role. I'm currently finishing up my fellowship program at the university and will be taking exams until May 27, 2025, so I may need accommodations in this respect. Would you have time to chat at the end of this week?

Thank you for your time. I look forward to hearing from you soon and learning more about Bright Works.

Best wishes,
Laura Collins`,
    questions: [
      {
        id: 'drill-1',
        num: 1,
        clo: 'CLO 3',
        q: '1. Why is Laura Collins writing to Ms. Longueview?',
        options: [
          'To reject the internship offered',
          'To accept the internship',
          'To ask for a higher salary',
          'To complain about the work conditions'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. To accept the internship.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>I would like to accept the terms outlined in the offer</u>, but I\'d appreciate the opportunity to speak with you about altering the start date for the role."</em>'
      },
      {
        id: 'drill-2',
        num: 2,
        clo: 'CLO 3',
        q: '2. Why does Laura need to change the start date? Because…',
        options: [
          'She is moving to a new city.',
          'She wants to travel first.',
          'She wants to learn about Bright Works.',
          'She is finishing fellowship program.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. She is finishing fellowship program.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>I\'m currently finishing up my fellowship program at the university</u> and will be taking exams until May 27, 2025..."</em>'
      },
      {
        id: 'drill-3',
        num: 3,
        clo: 'CLO 3',
        q: '3. When does Laura suggest having a conversation with Ms. Longueview?',
        options: [
          'Next month',
          'Tomorrow morning',
          'At the end of this week',
          'In two weeks'
        ],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. At the end of this week.<br><strong>Kalimat Pendukung yang Digarisbawahi:</strong><br><em>"<u>Would you have time to chat at the end of this week?</u>"</em>'
      },
      {
        id: 'drill-4',
        num: 4,
        clo: 'CLO 3',
        q: '4. What will Ms. Longueview most likely do next?',
        options: [
          'Ignore Laura’s email completely',
          'Reply to schedule a conversation about the start date',
          'Tell Laura she cannot change the internship dates',
          'Offer Laura a full-time job instead'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Reply to schedule a conversation about the start date.<br><strong>Penjelasan Logis:</strong><br>Sebagai tindak lanjut profesional, pihak HRD akan membalas email Laura untuk mengatur jadwal perbincangan.'
      }
    ]
  },
  // 2. Nutrition Chart (5-7)
  {
    id: 'p-chart',
    title: 'Questions 5–7 refer to the following chart.',
    source: 'Dokumen Dosen: READING 5–Q7',
    text: `Recommendations for adult Women 18-45
(Men 18-45, see page 16. Children under 18, see page 17)

Food Group                                               No. of recommended Daily Servings
Dairy Products (Milk and Milk Products, Eggs)             3
Meat (fish, Chicken, Beef)                                2
Vegetables (Carrots, Tomatoes, spinach)                   5
Fruit (oranges, Apples, Berries)                          3
Grains (bread, Cereal, Rice)                              4`,
    questions: [
      {
        id: 'drill-5',
        num: 5,
        clo: 'CLO 3',
        q: '5. According to this chart, what should women do every day?',
        options: [
          'Eat three servings of meat',
          'Eat cereal for breakfast',
          'Eat five servings of vegetables',
          'Eat more fruit than vegetables'
        ],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. Eat five servings of vegetables.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Vegetables (Carrots, Tomatoes, spinach) : 5</u>"</em>'
      },
      {
        id: 'drill-6',
        num: 6,
        clo: 'CLO 3',
        q: '6. Which of the following is a dairy product?',
        options: [
          'Crackers',
          'Chicken',
          'Onions',
          'Cheese'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Cheese.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Dairy Products (Milk and Milk Products, Eggs)</u>"</em>.<br>Keju (cheese) adalah olahan susu.'
      },
      {
        id: 'drill-7',
        num: 7,
        clo: 'CLO 3',
        q: '7. Which of the following foods belongs to the grain group?',
        options: [
          'Oranges',
          'Rice',
          'Eggs',
          'Fish'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Rice.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Grains (bread, Cereal, Rice)</u>"</em>.'
      }
    ]
  },
  // 3. Telephone Listings (8-11)
  {
    id: 'p-listings',
    title: 'Questions 8–11 refer to the following List.',
    source: 'Dokumen Dosen: READING 8–Q11',
    text: `Telephone Listings:
Craig, Mary         1245 Grayson Ln.        541-0987
Craig, Samuel       1346 Bear Ct            541-3211
Lambert, Wm.        4567 Center St.         654-9087
Layton, Tim         1235 Grayson Ln         541-2345
Mc Grath, R.        1897 Lee Dr.            541-8765
Meyer, Walter       1346 Bear Ct            541-3211
Ryan, Patrick       5678 Taylor St.         541-9087`,
    questions: [
      {
        id: 'drill-8',
        num: 8,
        clo: 'CLO 3',
        q: '8. How many phone numbers which possibly take on the same area?',
        options: ['Four', 'Six', 'Five', 'Seven'],
        answer: 1,
        expl: 'Kunci Jawaban: B. Six.<br><strong>Analisis:</strong> Ada 6 nomor berawalan <u>541</u> (Mary, Samuel, Tim, R. Mc Grath, Walter, Patrick).'
      },
      {
        id: 'drill-9',
        num: 9,
        clo: 'CLO 3',
        q: '9. From the lists, it is obviously described that …lives in different area from others.',
        options: ['Craig, Samuel', 'Lambert, Wm.', 'Mc Grath, R.', 'Layton, Tim'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Lambert, Wm.<br><strong>Baris Pendukung yang Digarisbawahi:</strong><br><em>"<u>Lambert, Wm.  4567 Center St.  654-9087</u>"</em>.'
      },
      {
        id: 'drill-10',
        num: 10,
        clo: 'CLO 3',
        q: '10. Which two people are possibly living at the same address?',
        options: [
          'Patrick Ryan and Wm. Lambert.',
          'Mary Craig and Tim Layton.',
          'Walter Meyer and Tim Layton',
          'Samuel Craig and Walter Meyer.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Samuel Craig and Walter Meyer.<br><strong>Bukti Pendukung:</strong> Keduanya beralamat di <u>1346 Bear Ct</u> dengan telepon <u>541-3211</u>.'
      },
      {
        id: 'drill-11',
        num: 11,
        clo: 'CLO 3',
        q: '11. Which two people are probably neighbors?',
        options: [
          'Patrick Ryan and Wm. Lambert.',
          'Mary Craig and Tim Layton.',
          'Walter Meyer and Tim Layton.',
          'Samuel Craig and Walter Meyer.'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. Mary Craig and Tim Layton.<br><strong>Bukti Pendukung:</strong> Keduanya bertetangga di <u>Grayson Ln.</u> (1245 dan 1235).'
      }
    ]
  },
  // 4. Job Vacancy (12-15)
  {
    id: 'p-vacancy',
    title: 'Questions 12–15 refer to the following text.',
    source: 'Dokumen Dosen: READING 12–Q15',
    text: `URGENTLY REQUIRED: Secretary
- Female, graduated from a reputable university
- Min. 5 years of work experience
- Good command of English (oral and written)
- Computer literate (min. Word, Excel, Internet)

Please submit your complete application, resume and recent photograph not more than 10 days after this ads to:
HRD PT CITRA ENERGY DEVELOPMENT
Wisma Emha Jln. Wijaya I No. IIA, Kebayoran Baru, Jakarta Selatan 12170
Fax no. 021-7207978
e-mail address: mitraenergy@cbn.net.id
(only short-listed candidates will be notified)`,
    questions: [
      {
        id: 'drill-12',
        num: 12,
        clo: 'CLO 3',
        q: '12. What is the text about?',
        options: ['Wisma Emha', 'A job vacancy', 'A senior secretary', 'An application center'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. A job vacancy.<br><strong>Bukti Pendukung:</strong> <u>"URGENTLY REQUIRED: Secretary"</u>.'
      },
      {
        id: 'drill-13',
        num: 13,
        clo: 'CLO 3',
        q: '13. The following are requirements asked, EXCEPT....',
        options: [
          'five years’ experience',
          'able to operate a computer',
          'able to speak and write in English',
          'application letter should be sent ten days after this ad'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. application letter should be sent ten days after this ad.<br><strong>Penjelasan:</strong> Teks menyatakan: <em>"<u>not more than 10 days after this ads</u>"</em> (maksimal dalam waktu 10 hari, bukan 10 hari setelahnya).'
      },
      {
        id: 'drill-14',
        num: 14,
        clo: 'CLO 3',
        q: '14. Which statement is TRUE based on the text above?',
        options: [
          'A mining company is looking for a consultant manager.',
          'The application letter is sent to the director of PT CITRA ENERGY DEVELOPMENT.',
          'The application letter can only be sent via email.',
          'The skill to communicate in English is required.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. The skill to communicate in English is required.<br><strong>Bukti Pendukung:</strong> <u>"Good command of English (oral and written)"</u>.'
      },
      {
        id: 'drill-15',
        num: 15,
        clo: 'CLO 3',
        q: '15. The word “reputable” in “Female, graduated from a reputable university” has the closest meaning to the word ….',
        options: ['famous', 'respectable', 'reliable', 'valid'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. respectable.'
      }
    ]
  },
  // 5. Gregor & Samia (16-18)
  {
    id: 'p-gregor',
    title: 'Questions 16–18 refer to the following email.',
    source: 'Dokumen Dosen: READING 16–Q18',
    text: `Hi Samia,
Just a quick email to say that sounds like a great idea. Saturday is better for me because I'm meeting my parents on Sunday. So, if that's still good for you, why don't you come here? Then you can see the new flat and all the work we've done on the kitchen since we moved in. We can eat at home and then go for a walk in the afternoon. It's going to be so good to catch up finally. I want to hear all about your new job!

Our address is 52 Charles Road, but it's a bit difficult to find because the house numbers are really strange here. If you turn left at the post office and keep going past the big white house on Charles Road, there's a small side street behind it with the houses 50–56 in. Don't ask me why the side street doesn't have a different name! But call me if you get lost and I'll come and get you.

Let me know if there's anything you do/don't like to eat. Really looking forward to seeing you!
See you soon!
Gregor`,
    questions: [
      {
        id: 'drill-16',
        num: 16,
        clo: 'CLO 3',
        q: '16. What day does Gregor prefer Samia to visit?',
        options: ['Sunday', 'Monday', 'Friday', 'Saturday'],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Saturday.<br><strong>Kalimat Pendukung:</strong> <u>"Saturday is better for me because I\'m meeting my parents on Sunday."</u>'
      },
      {
        id: 'drill-17',
        num: 17,
        clo: 'CLO 3',
        q: '17. Why does Gregor prefer Saturday?',
        options: [
          'Because he is meeting his parents on Sunday.',
          'Because he has a new job on Sunday.',
          'Because his new flat is free on Saturday.',
          'Because Samia cannot visit on Sunday.'
        ],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. Because he is meeting his parents on Sunday.'
      },
      {
        id: 'drill-18',
        num: 18,
        clo: 'CLO 3',
        q: '18. What does Gregor want to know about Samia?',
        options: [
          'Her new address on Charles Road',
          'The food she likes or does not like',
          'Her parents\' plans in New Year',
          'Her new job in the new company'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. The food she likes or does not like.<br><strong>Kalimat Pendukung:</strong> <u>"Let me know if there\'s anything you do/don\'t like to eat."</u>'
      }
    ]
  },
  // 6. Jarvis Cleaner (19-22)
  {
    id: 'p-jarvis',
    title: 'Questions 19–22 refer to the following Advertisement.',
    source: 'Dokumen Dosen: READING 19–Q22',
    text: `Jarvis Miracle Cleaner is the one product engineers, mechanics and construction workers just cannot do without. Its unique patented formula allows you to quickly and easily remove dirt, grime, and oil from your hands without damaging your skin. For 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry, and it is now available for home use for the first time.

Jarvis Deluxe Cleaner is a milder version of the industrial cleaver with a new yellow color and fresh lemon scent. Jarvis Deluxe Cleaner removes not just oil and grease but also paint, ink, and almost anything else you or your children get on your hands and skin. Jarvis Deluxe Cleaner has been tested and demonstrated to be gentle enough for even the most sensitive skin.

Bath products are now available at all good supermarkets and drugstores.`,
    questions: [
      {
        id: 'drill-19',
        num: 19,
        clo: 'CLO 3',
        q: '19. What is the main purpose of the passage?',
        options: [
          'To explain how to make a cleaning product',
          'To advertise Jarvis cleaning products',
          'To compare American and European cleaning products',
          'To warn about harmful effects of industrial cleaners'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. To advertise Jarvis cleaning products.'
      },
      {
        id: 'drill-20',
        num: 20,
        clo: 'CLO 3',
        q: '20. How long has Jarvis Miracle Cleaner been the number 1 cleaning product in American industry?',
        options: ['10 years', '20 years', '40 years', '50 years'],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. 40 years.<br><strong>Kalimat Pendukung:</strong> <u>"For 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry..."</u>'
      },
      {
        id: 'drill-21',
        num: 21,
        clo: 'CLO 3',
        q: '21. According to the passage, where can Jarvis Deluxe Cleaner now be purchased?',
        options: [
          'Only at hardware stores',
          'At supermarkets and drugstores',
          'From construction companies',
          'Only in factories'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. At supermarkets and drugstores.<br><strong>Kalimat Pendukung:</strong> <u>"Bath products are now available at all good supermarkets and drugstores."</u>'
      },
      {
        id: 'drill-22',
        num: 22,
        clo: 'CLO 3',
        q: '22. The word Its in "Its unique patented formula allows you to quickly and easily remove dirt..." refers to:',
        options: [
          'Jarvis Miracle Cleaner',
          'Lemon oil',
          'Industrial dirt',
          'Construction workers'
        ],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. Jarvis Miracle Cleaner.'
      }
    ]
  },
  // 7. Airport Baggage (23-25)
  {
    id: 'p-airport',
    title: 'Questions 23–25 refer to the following airport notice.',
    source: 'Dokumen Dosen: READING 23–Q25',
    text: `What can I take on the plane as hand luggage?
Please note that passengers can only take ONE suitcase onto the plane. It must be no bigger than 55cm x 22cm x 35cm and weigh no more than 10kg.

You can also take one small laptop bag or handbag that can fit under the seat in front of you. If you have two bags, their total weight cannot be more than 10kg. If your bag is too big or too heavy, you will not be allowed to take it onto the plane. Staff will put it in the hold for you and you will have to pay extra.

Please make sure mobile phones and other devices are fully charged so that security staff can check them.

Liquids in bottles bigger than 100ml are allowed on board if you buy them in the airport shops after you've passed security. 

We hope you enjoy your flight!`,
    questions: [
      {
        id: 'drill-23',
        num: 23,
        clo: 'CLO 3',
        q: '23. What is the maximum weight for the suitcase?',
        options: ['5 kg', '10 kg', '15 kg', '20 kg'],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. 10 kg.<br><strong>Kalimat Pendukung:</strong> <u>"...and weigh no more than 10kg."</u>'
      },
      {
        id: 'drill-24',
        num: 24,
        clo: 'CLO 3',
        q: '24. When are passengers allowed to take bottles bigger than 100ml onto the plane?',
        options: [
          'Before they arrive at the airport.',
          'Before they pass security.',
          'When they buy them after passing security.',
          'When they put them in their suitcase.'
        ],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. When they buy them after passing security.<br><strong>Kalimat Pendukung:</strong> <u>"Liquids in bottles bigger than 100ml are allowed on board if you buy them in the airport shops after you\'ve passed security."</u>'
      },
      {
        id: 'drill-25',
        num: 25,
        clo: 'CLO 3',
        q: '25. Why will passengers have to pay extra if their bag is too big or too heavy?',
        options: [
          'Because they need to buy another bag.',
          'Because they need to buy a new ticket.',
          'Because they need to pass security again.',
          'Because staff will put the bag in the hold.'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Because staff will put the bag in the hold.<br><strong>Kalimat Pendukung:</strong> <u>"Staff will put it in the hold for you and you will have to pay extra."</u>'
      }
    ]
  },
  // 8. MIT Drones (26-30)
  {
    id: 'p-mit',
    title: 'Questions 26–30 refer to the following News.',
    source: 'Dokumen Dosen: READING 26–Q30',
    text: `Designing a complex electronic device like a delivery drone involves juggling many choices, such as selecting motors and batteries that minimize cost while maximizing the payload the drone can carry or the distance it can travel.

Unraveling that conundrum is no easy task, but what happens if the designers don't know the exact specifications of each battery and motor? On top of that, the real-world performance of these components will likely be affected by unpredictable factors, like changing weather along the drone's route.

MIT researchers developed a new framework that helps engineers design complex systems in a way that explicitly accounts for such uncertainty. The framework allows them to model the performance trade-offs of a device with many interconnected parts, each of which could behave in unpredictable ways.

The research is published on the arXiv preprint server. Their technique captures the likelihood of many outcomes and trade-offs, giving designers more information than many existing approaches which, at most, can usually only model best-case and worst-case scenarios.

Ultimately, this framework could help engineers develop complex systems like autonomous vehicles, commercial aircraft, or even regional transportation networks that are more robust and reliable in the face of real-world unpredictability`,
    questions: [
      {
        id: 'drill-26',
        num: 26,
        clo: 'CLO 3',
        q: '26. What is the main focus of the passage?',
        options: [
          'The challenges of flying drones in bad weather',
          'MIT’s new framework to design complex systems under uncertainty',
          'The history of battery and motor technology',
          'The economic cost of developing autonomous vehicles'
        ],
        answer: 1,
        expl: 'Kunci Resmi Dosen (Hijau): B. MIT’s new framework to design complex systems under uncertainty.<br><strong>Kalimat Pendukung:</strong> <u>"MIT researchers developed a new framework that helps engineers design complex systems in a way that explicitly accounts for such uncertainty."</u>'
      },
      {
        id: 'drill-27',
        num: 27,
        clo: 'CLO 3',
        q: '27. According to the text, what unpredictable factor can affect drone performance?',
        options: ['Motor type', 'Battery price', 'Weather conditions', 'Designer preferences'],
        answer: 2,
        expl: 'Kunci Resmi Dosen (Hijau): C. Weather conditions.<br><strong>Kalimat Pendukung:</strong> <u>"...affected by unpredictable factors, like changing weather along the drone\'s route."</u>'
      },
      {
        id: 'drill-28',
        num: 28,
        clo: 'CLO 3',
        q: '28. What is the potential benefit of this new framework?',
        options: [
          'Making drones cheaper than ever before',
          'Eliminating the need for testing in real life',
          'Allowing designers to ignore unpredictable conditions',
          'Helping engineers build more reliable and robust complex systems'
        ],
        answer: 3,
        expl: 'Kunci Resmi Dosen (Hijau): D. Helping engineers build more reliable and robust complex systems.<br><strong>Kalimat Pendukung:</strong> <u>"Ultimately, this framework could help engineers develop complex systems... that are more robust and reliable"</u>.'
      },
      {
        id: 'drill-29',
        num: 29,
        clo: 'CLO 3',
        q: '29. What do existing approaches usually model?',
        options: [
          'Only best-case and worst-case scenarios',
          'The average-case scenarios',
          'The reliability of every motor',
          'The color of the drone'
        ],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. Only best-case and worst-case scenarios.<br><strong>Kalimat Pendukung:</strong> <u>"...giving designers more information than many existing approaches which, at most, can usually only model best-case and worst-case scenarios."</u>'
      },
      {
        id: 'drill-30',
        num: 30,
        clo: 'CLO 3',
        q: '30. The word Their in “Their technique captures the likelihood of many outcomes and trade-offs” refers to:',
        options: ['The MIT researchers', 'The batteries', 'The motors', 'The designers'],
        answer: 0,
        expl: 'Kunci Resmi Dosen (Hijau): A. The MIT researchers.<br><strong>Kalimat Pendukung:</strong> <u>"MIT researchers developed a new framework... Their technique captures the likelihood"</u>.'
      }
    ]
  }
];

// ==========================================
// 4. WRITING MODELS (MEETING 5 DOSEN: 100-150 WORDS)
// ==========================================
const WRITING_TOPIC_MODELS = [
  {
    topic: 'The Importance of Technology in Daily Life',
    modelParagraph: `Technology plays a vital role in our daily lives because it modernizes routine tasks and connects society globally. It helps individuals communicate much faster, and it makes sharing critical academic information substantially easier across diverse platforms. For example, many university students utilize digital portals when they need to submit assignments because online submission saves valuable time and conserves environmental paper resources. Technology also provides widespread digital entertainment, which people can readily access anywhere. Furthermore, it supports modern business enterprises, and it continuously generates novel employment opportunities in computing sectors. Therefore, modern technology serves an indispensable function in rendering human life significantly more efficient and productive.`,
    wordCount: 105,
    analysis: [
      { type: 'Topic Sentence (TS)', text: 'Technology plays a vital role in our daily lives because it modernizes routine tasks and connects society globally.' },
      { type: 'Supporting 1 (Compound)', text: 'It helps individuals communicate much faster, and it makes sharing critical academic information substantially easier across diverse platforms.' },
      { type: 'Supporting 2 (Complex)', text: 'For example, many university students utilize digital portals when they need to submit assignments because online submission saves valuable time and conserves environmental paper resources.' },
      { type: 'Supporting 3 (Simple)', text: 'Technology also provides widespread digital entertainment, which people can readily access anywhere.' },
      { type: 'Supporting 4 (Compound)', text: 'Furthermore, it supports modern business enterprises, and it continuously generates novel employment opportunities in computing sectors.' },
      { type: 'Concluding Sentence (CS)', text: 'Therefore, modern technology serves an indispensable function in rendering human life significantly more efficient and productive.' }
    ]
  },
  {
    topic: 'Why I Chose Informatics Engineering as My Major',
    modelParagraph: `I chose Informatics Engineering as my undergraduate major because I have been deeply fascinated by computer software and digital innovation since my childhood. Writing program code stimulates logical thinking, and constructing algorithmic systems allows me to solve complex real-world challenges systematically. When I first learned fundamental programming languages, I developed an interactive educational website because I wanted to assist my peers in learning mathematics effectively. Information technology continuously transforms modern healthcare, finance, and industrial infrastructure. In addition, software engineering provides abundant career pathways, and it allows professionals to collaborate with international research teams seamlessly. In summary, pursuing an Informatics Engineering degree represents the most fulfilling pathway toward developing impactful technological solutions for the broader community.`,
    wordCount: 115,
    analysis: [
      { type: 'Topic Sentence (TS)', text: 'I chose Informatics Engineering as my undergraduate major because I have been deeply fascinated by computer software and digital innovation since my childhood.' },
      { type: 'Supporting 1 (Compound)', text: 'Writing program code stimulates logical thinking, and constructing algorithmic systems allows me to solve complex real-world challenges systematically.' },
      { type: 'Supporting 2 (Complex)', text: 'When I first learned fundamental programming languages, I developed an interactive educational website because I wanted to assist my peers in learning mathematics effectively.' },
      { type: 'Supporting 3 (Simple)', text: 'Information technology continuously transforms modern healthcare, finance, and industrial infrastructure.' },
      { type: 'Supporting 4 (Compound)', text: 'In addition, software engineering provides abundant career pathways, and it allows professionals to collaborate with international research teams seamlessly.' },
      { type: 'Concluding Sentence (CS)', text: 'In summary, pursuing an Informatics Engineering degree represents the most fulfilling pathway toward developing impactful technological solutions for the broader community.' }
    ]
  }
];

// ==========================================
// 5. UTS FULL SIMULATION QUESTION DATA (100 PTS)
// ==========================================
const UTS_EXAM_DATA = {
  listening: [
    {
      id: 'uts-l1',
      pts: 5,
      clo: 'CLO 1',
      audioUrl: 'audio/uts-lis-1.mp3',
      audioSim: `[ACADEMIC LECTURE EXCERPT — COMPUTER SCIENCE]
Professor: "Good morning class. Today we are initiating our unit on algorithmic optimization. Now, many novice programmers assume optimization simply means shortening lines of code. However, our primary objective this morning is to demonstrate how data structures directly dictate memory allocation and execution time, especially in high-throughput database systems. Therefore, please observe this benchmark graph..."`,
      q: "1. What is the primary purpose of the professor's lecture?",
      options: [
        'To instruct students on how to shorten lines of program code',
        'To explain how data structures influence memory allocation and execution speed',
        'To announce an upcoming midterm examination date',
        'To demonstrate how to build an e-commerce database from scratch'
      ],
      answer: 1,
      expl: '<strong>Tujuan Utama yang Digarisbawahi:</strong> <em>"<u>our primary objective this morning is to demonstrate how data structures directly dictate memory allocation and execution time</u>"</em>.'
    },
    {
      id: 'uts-l2',
      pts: 5,
      clo: 'CLO 1',
      audioUrl: 'audio/uts-lis-2.mp3',
      audioSim: `[CAMPUS CONSULTATION — STUDENT & ACADEMIC ADVISOR]
Advisor: "Come in, Dimas. I received your email regarding course prerequisites. You mentioned wanting to take Advanced Software Engineering next semester. However, the departmental catalog strictly requires that you must have completed Object-Oriented Programming with a minimum grade of B before enrolling."
Dimas: "I see. I took OOP last semester and received an A-, but my grade sheet hasn't updated on the online portal yet."
Advisor: "In that case, bring a signed verification slip from your instructor to the department office by this Thursday at 3 PM, and we will manually unlock the enrollment system for you."`,
      q: '2. What specific action must the student take to enroll in the course?',
      options: [
        'Retake the Object-Oriented Programming course next semester',
        'Submit a signed instructor verification slip to the department office by Thursday 3 PM',
        'Pay an additional manual registration fee to the university registrar',
        'Send another email inquiry to the academic portal webmaster'
      ],
      answer: 1,
      expl: '<strong>Detail Spesifik yang Digarisbawahi:</strong> <em>"<u>bring a signed verification slip from your instructor to the department office by this Thursday at 3 PM</u>"</em>.'
    },
    {
      id: 'uts-l3',
      pts: 5,
      clo: 'CLO 1',
      audioUrl: 'audio/uts-lis-3.mp3',
      audioSim: `[SEMINAR ANNOUNCEMENT — FACULTY OF INFORMATICS]
Host: "Attention all attendees. Before Dr. Hartono delivers the keynote on Artificial Intelligence ethics, please take note of our workshop schedule. The interactive lab breakout session will take place in Multimedia Lab 3 on the second floor, not the auditorium as printed in the flyer. Furthermore, all participants requiring a certificate of participation must scan the QR code located near the exit doors prior to 4:30 PM."`,
      q: '3. What specific detail did the host correct regarding the workshop schedule?',
      options: [
        'The keynote speaker has been replaced by Dr. Hartono',
        'The breakout lab session will be held in Multimedia Lab 3 on the 2nd floor, not the auditorium',
        'The certificates will be mailed to participants\' home addresses',
        'The seminar will finish earlier at 12:00 PM'
      ],
      answer: 1,
      expl: '<strong>Koreksi Lokasi yang Digarisbawahi:</strong> <em>"<u>The interactive lab breakout session will take place in Multimedia Lab 3 on the second floor, not the auditorium</u> as printed in the flyer"</em>.'
    },
    {
      id: 'uts-l4',
      pts: 5,
      clo: 'CLO 1',
      audioUrl: 'audio/uts-lis-4.mp3',
      audioSim: `[STUDY GROUP DISCUSSION — UNIVERSITY LIBRARY]
Aisha: "So for our research outline on cloud storage security, we already have our topic sentence and two supporting arguments regarding data encryption and redundancy. What we're lacking is empirical statistical evidence to support our second claim."
Budi: "Actually, I found a 2025 survey from the IEEE Computer Society showing that 73% of cloud breaches were due to misconfigured access credentials rather than faulty cryptographic algorithms."
Aisha: "That is perfect! That precisely reinforces our argument that human administrative protocol is the critical vulnerability."`,
      q: '4. Which phrase best paraphrases the students\' consensus on cloud security vulnerability?',
      options: [
        'Cloud breaches are predominantly triggered by administrative configuration errors rather than flawed cryptography.',
        'Cryptographic algorithms are completely obsolete and insecure in modern distributed computing.',
        'Only 27% of organizations utilize cloud storage systems due to extreme risk.',
        'IEEE surveys should not be cited in academic computer science papers.'
      ],
      answer: 0,
      expl: '<strong>Parafrase Akademis yang Tepat:</strong> <em>"73% of cloud breaches were due to misconfigured access credentials rather than faulty cryptographic algorithms"</em> diparafrase menjadi <em>"predominantly triggered by administrative configuration errors rather than flawed cryptography"</em>.'
    },
    {
      id: 'uts-l5',
      pts: 5,
      clo: 'CLO 1',
      audioUrl: 'audio/uts-lis-5.mp3',
      audioSim: `[CAMPUS BRIEFING — UTS EXAM PREPARATION]
Proctor: "Welcome students. Please listen attentively to the examination guidelines. To answer the multiple-choice questions on your LJK sheet, a 2B pencil is mandatory; pens cannot be scanned by the optical grader. However, for Section 4, the paragraph outline writing task, you must use a black or blue pen. You are strictly prohibited from bringing cell phones or smartwatches to your desk. Arrive at least 30 minutes early, as any student arriving even one second late will face immediate disqualification."`,
      q: '5. What is the mandatory rule regarding the Writing section of the exam?',
      options: [
        'It must be filled in with a 2B pencil on the circle sheet',
        'It must be written using a pen (black or blue)',
        'It can be typed using a laptop or smartphone',
        'It is an optional bonus section that can be skipped'
      ],
      answer: 1,
      expl: '<strong>Aturan Resmi Dosen UMS:</strong> <em>"<u>while for the writing section, you should use a pen</u>"</em>. Pilihan ganda wajib pensil 2B, bagian menulis wajib pulpen.'
    }
  ],

  grammar: [
    {
      id: 'uts-g1',
      pts: 4,
      clo: 'CLO 2',
      q: '6. Identify the sentence component of the bracketed portion:\n"The software development team [carefully reviewed] the security audit logs."',
      options: [
        'Subject (S)',
        'Verb / Predicate (V)',
        'Direct Object (O)',
        'Subject Complement (C)'
      ],
      answer: 1,
      expl: '<strong>Analisis S-V-O-C-A:</strong> Bagian <em>"carefully reviewed"</em> adalah <strong>Verb / Predicate (V)</strong>.'
    },
    {
      id: 'uts-g2',
      pts: 4,
      clo: 'CLO 2',
      q: '7. Which coordinating conjunction (FANBOYS) logically completes the compound sentence?\n"The database server experienced a sudden voltage drop, _____ the automated backup protocol instantly switched power to the auxiliary generator."',
      options: ['for', 'so', 'nor', 'but'],
      answer: 1,
      expl: '<strong>Aturan FANBOYS:</strong> Konjungsi <strong>"so"</strong> menyatakan konsekuensi/akibat logis.'
    },
    {
      id: 'uts-g3',
      pts: 4,
      clo: 'CLO 2',
      q: '8. Choose the grammatically correct COMPLEX sentence with proper punctuation:',
      options: [
        'Although quantum computing holds immense potential, researchers still face significant physical constraints in hardware stabilization.',
        'Although quantum computing holds immense potential researchers still face significant physical constraints.',
        'Researchers still face significant physical constraints, although quantum computing holds immense potential.',
        'Because researchers face physical constraints and quantum computing holds immense potential.'
      ],
      answer: 0,
      expl: '<strong>Aturan Koma Kalimat Kompleks:</strong> Jika Dependent Clause diletakkan di depan, maka <strong>WAJIB</strong> diberi tanda koma.'
    },
    {
      id: 'uts-g4',
      pts: 4,
      clo: 'CLO 2',
      q: '9. Analyze the grammatical structure of the following sentence:\n"Neural networks require massive training datasets, but they can identify complex patterns that human analysts frequently overlook."',
      options: [
        'Simple Sentence',
        'Compound Sentence',
        'Complex Sentence',
        'Compound-Complex Sentence'
      ],
      answer: 3,
      expl: '<strong>Analisis Jenis Kalimat:</strong> Gabungan Compound (koordinasi "but") dan Complex (klausa dependen "that...").'
    },
    {
      id: 'uts-g5',
      pts: 4,
      clo: 'CLO 2',
      q: '10. Which of the following is a SENTENCE FRAGMENT (an incomplete sentence that must be avoided in academic writing)?',
      options: [
        'Firewalls filter unauthorized network traffic effectively.',
        'Because encryption keys must remain confidential to protect financial transactions.',
        'The engineer debugged the recursive function and recompiled the module.',
        'Modern microprocessors generate substantial heat under sustained heavy loads.'
      ],
      answer: 1,
      expl: '<strong>Sentence Fragment:</strong> Opsi B adalah klausa dependen yang berdiri sendiri tanpa induk kalimat.'
    }
  ],

  reading: [
    {
      id: 'uts-r1',
      pts: 5,
      clo: 'CLO 3',
      passage: `Airport Hand Baggage Regulations:
"Please note that passengers can only take ONE suitcase onto the plane. It must be no bigger than 55cm x 22cm x 35cm and weigh no more than 10kg. You can also take one small laptop bag or handbag that can fit under the seat in front of you. If you have two bags, their total weight cannot be more than 10kg. If your bag is too big or too heavy, staff will put it in the hold for you and you will have to pay extra."`,
      q: '11. Under what condition is a passenger required to pay an extra fee at the boarding gate?',
      options: [
        'When carrying a fully charged smartphone into the cabin',
        'When purchasing duty-free perfumes after passing the security checkpoint',
        'When their cabin bag exceeds the permitted dimensions or weight limit and must be placed in the hold',
        'When traveling with only a single 5kg laptop briefcase'
      ],
      answer: 2,
      expl: '<strong>Kunci Jawaban Soal Asli Dosen:</strong> <em>"<u>Staff will put it in the hold for you and you will have to pay extra</u>"</em>.'
    },
    {
      id: 'uts-r2',
      pts: 5,
      clo: 'CLO 3',
      passage: `Autonomous Drones Research:
"Designing a complex electronic device like a delivery drone involves juggling many choices, such as selecting motors and batteries that minimize cost while maximizing payload. Existing engineering approaches usually model only best-case and worst-case scenarios. To address this challenge, MIT researchers have introduced a new framework to design complex systems under uncertainty. Their technique captures the likelihood of many outcomes and evaluates how tradeoffs affect total performance."`,
      q: '12. What limitation of existing engineering approaches did the MIT framework overcome?',
      options: [
        'Existing approaches were unable to test drones in outdoor environments',
        'Existing approaches only modeled extreme best-case and worst-case scenarios rather than probabilistic outcomes',
        'Existing approaches required too many human drone pilots',
        'Existing approaches completely neglected the aerodynamic design of aircraft wings'
      ],
      answer: 1,
      expl: '<strong>Kunci Jawaban Soal Asli Dosen:</strong> <em>"<u>can usually only model best-case and worst-case scenarios</u>"</em>.'
    },
    {
      id: 'uts-r3',
      pts: 5,
      clo: 'CLO 3',
      passage: `Academic Paragraph Structure:
"A well-structured academic paragraph is built around three foundational pillars: a concise topic sentence embodying a focused controlling idea, coherent supporting details fortified with empirical evidence or technical illustrations, and a synthesized concluding sentence that reinforces the thesis without merely mimicking the opening line."`,
      q: '13. What constitutes an effective Topic Sentence according to academic writing principles?',
      options: [
        'A broad announcement of a topic with no argumentative stance (e.g., "I will discuss computers.")',
        'A specific topic paired with a defined controlling idea that limits the scope of discussion',
        'A lengthy list of statistical data gathered from outside references',
        'A rhetorical question intended solely to entertain casual readers'
      ],
      answer: 1,
      expl: '<strong>Materi Dosen Pertemuan 5 & 7:</strong> Topic Sentence wajib memuat <strong>Specific Topic</strong> + <strong>Controlling Idea</strong>.'
    },
    {
      id: 'uts-r4',
      pts: 5,
      clo: 'CLO 3',
      passage: `Industrial Cleaning Products:
"For over 40 years, Jarvis Miracle Cleaner has been the number 1 cleaning product in American industry. Its unique patented formula allows technicians to quickly and safely dissolve petroleum residue without corroding treated metal surfaces."`,
      q: '14. In the text above, the possessive pronoun "Its" directly refers to:',
      options: [
        'American industry',
        'Petroleum residue',
        'Jarvis Miracle Cleaner',
        'Treated metal surfaces'
      ],
      answer: 2,
      expl: '<strong>Rujukan Pronoun:</strong> Kata <em>"Its"</em> merujuk ke <strong>Jarvis Miracle Cleaner</strong>.'
    },
    {
      id: 'uts-r5',
      pts: 5,
      clo: 'CLO 3',
      passage: `Corporate Recruitment Notice:
"A multinational renewable energy consortium is recruiting a Lead Cybersecurity Analyst. Candidates must possess a Bachelor's degree in Computer Science or Information Technology from a reputable academic institution, alongside verifiable credentials in ethical hacking."`,
      q: '15. The word "reputable" in the context of the recruitment notice is closest in meaning to:',
      options: [
        'inexpensive',
        'respectable and widely recognized',
        'geographically adjacent',
        'recently established'
      ],
      answer: 1,
      expl: '<strong>Kunci Resmi Dosen:</strong> <em>reputable = respectable</em>.'
    },
    {
      id: 'uts-r6',
      pts: 5,
      clo: 'CLO 3',
      passage: `Academic Text Outlining:
"When synthesizing academic literature, effective scholars employ text outlining to map macro-structures. By isolating primary claims, secondary rationale, and empirical verifications, readers can discern whether an author relies on causal chains, comparative matrices, or chronological progressions."`,
      q: '16. What is the primary function of text outlining in academic reading?',
      options: [
        'To memorize every individual word in the dictionary',
        'To map macro-structures by organizing main claims, reasons, and evidence logically',
        'To replace the need to write academic citations',
        'To translate English texts automatically into another language'
      ],
      answer: 1,
      expl: '<strong>Fungsi Outlining:</strong> Memetakan struktur makro teks.'
    },
    {
      id: 'uts-r7',
      pts: 5,
      clo: 'CLO 3',
      passage: `Contextual Vocabulary Clues:
"Unlike volatile memory such as SRAM and DRAM which instantaneously purge data upon electrical disconnection, non-volatile storage media retain digital bits indefinitely even during sudden blackout events."`,
      q: '17. Based on the contextual contrast clue, what does the word "purge" mean?',
      options: [
        'permanently duplicate',
        'rapidly erase or eliminate',
        'safely encrypt',
        'physically accelerate'
      ],
      answer: 1,
      expl: '<strong>Contextual Clue:</strong> Lawan dari <em>"retain digital bits indefinitely"</em> adalah <em>purge</em> (menghapus/mengosongkan data).'
    }
  ]
};

// ==========================================
// 6. APPLICATION STATE & CONTROLLER
// ==========================================

const AppState = {
  activeTab: 'panel-reading',
  drillingAnswers: {},
  listeningAnswers: {},
  grammarAnswers: {},
  examAnswers: {},
  examFlags: {},
  examTimer: null,
  examSecondsLeft: 90 * 60,
  examStarted: false,
  examSubmitted: false
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initGrammarPuzzles();
  initAccordions();
  renderListeningDrills();
  renderGrammarDrills();
  renderDrillingQuestions();
  initExamTimerControls();
  renderExamQuestions();
  renderExamLJKGrid();
  initOutlineBuilder();
  renderWritingModels();
  renderVocabList();
});


// ================= Interactive Word Puzzle Engine =================
const GRAMMAR_PUZZLES_DATA = [
  {
    id: 'puz-simple',
    tokens: ['Both software engineers', 'and data analysts', 'tested', 'the neural network.'],
    targetOrder: [0, 1, 2, 3],
    ruleInfo: 'Pola Simple Sentence: Subjek Majemuk ("Both software engineers and data analysts") + 1 Finite Verb ("tested") + Objek ("the neural network"). Kalimat ini tetap Simple Sentence karena hanya memiliki 1 klausa independen.'
  },
  {
    id: 'puz-compound',
    tokens: ['The autonomous drone returned to base,', 'for', 'its primary battery', 'depleted below ten percent.'],
    targetOrder: [0, 1, 2, 3],
    ruleInfo: 'Pola Compound Sentence: [Klausa Mandiri 1] , [FANBOYS "for"] [Klausa Mandiri 2]. Tanda koma wajib persis sebelum konjungsi for (makna: sebab/because).'
  },
  {
    id: 'puz-complex',
    tokens: ['Although he was nervous,', 'he delivered', 'an exceptional presentation.'],
    targetOrder: [0, 1, 2],
    ruleInfo: 'Pola Complex Sentence (Pola A): Dependent Clause di awal ("Although he was nervous") WAJIB diikuti tanda koma sebelum Independent Clause ("he delivered an exceptional presentation").'
  },
  {
    id: 'puz-trap',
    tokens: ['I like coding,', 'and', 'I also design', 'intuitive websites.'],
    targetOrder: [0, 1, 2, 3],
    ruleInfo: 'Perbaikan Comma Splice: Menambahkan tanda koma dan Coordinating Conjunction FANBOYS ("and") berhasil menyatukan dua klausa mandiri menjadi Compound Sentence yang sah secara akademis.'
  }
];

const PuzzleState = {
  'puz-simple': { current: [], used: [] },
  'puz-compound': { current: [], used: [] },
  'puz-complex': { current: [], used: [] },
  'puz-trap': { current: [], used: [] }
};

function initGrammarPuzzles() {
  GRAMMAR_PUZZLES_DATA.forEach(puz => {
    renderPuzzleBank(puz.id);
  });
}

function renderPuzzleBank(puzId) {
  const puz = GRAMMAR_PUZZLES_DATA.find(p => p.id === puzId);
  if (!puz) return;

  const bankEl = document.getElementById('bank-' + puzId);
  const slotEl = document.getElementById('slot-' + puzId);
  const placeholderEl = document.getElementById('placeholder-' + puzId);
  if (!bankEl || !slotEl) return;

  const state = PuzzleState[puzId];

  // Render tokens in bank (shuffled view initially if needed, here we provide chips)
  let bankHtml = '';
  // Deterministic scramble indices: [2, 0, 3, 1]
  const scrambleOrder = [2, 0, 3, 1].filter(idx => idx < puz.tokens.length);
  // Any remaining indices
  for (let i = 0; i < puz.tokens.length; i++) {
    if (!scrambleOrder.includes(i)) scrambleOrder.push(i);
  }

  scrambleOrder.forEach(idx => {
    const isUsed = state.used.includes(idx);
    bankHtml += `<button type="button" class="puzzle-chip ${isUsed ? 'used' : ''}" onclick="clickPuzzleToken('${puzId}', ${idx})">${escapeHtml(puz.tokens[idx])}</button>`;
  });
  bankEl.innerHTML = bankHtml;

  // Render tokens in drop slot
  if (state.current.length === 0) {
    if (placeholderEl) placeholderEl.style.display = 'inline';
    slotEl.innerHTML = `<span class="puzzle-drop-placeholder" id="placeholder-${puzId}">Klik kata di bawah untuk memindahkannya ke sini...</span>`;
  } else {
    let slotHtml = '';
    state.current.forEach((idx, slotIdx) => {
      slotHtml += `<button type="button" class="puzzle-chip placed" onclick="removePuzzleToken('${puzId}', ${slotIdx})">${escapeHtml(puz.tokens[idx])} ✕</button>`;
    });
    slotEl.innerHTML = slotHtml;
  }
}

window.clickPuzzleToken = function(puzId, tokenIdx) {
  const state = PuzzleState[puzId];
  if (!state || state.used.includes(tokenIdx)) return;

  state.current.push(tokenIdx);
  state.used.push(tokenIdx);
  renderPuzzleBank(puzId);

  // Hide feedback when editing
  const fb = document.getElementById('feedback-' + puzId);
  if (fb) fb.className = 'puzzle-feedback-badge';
};

window.removePuzzleToken = function(puzId, slotIdx) {
  const state = PuzzleState[puzId];
  if (!state || slotIdx >= state.current.length) return;

  const tokenIdx = state.current[slotIdx];
  state.current.splice(slotIdx, 1);
  state.used = state.used.filter(idx => idx !== tokenIdx);
  renderPuzzleBank(puzId);

  const fb = document.getElementById('feedback-' + puzId);
  if (fb) fb.className = 'puzzle-feedback-badge';
};

window.checkPuzzle = function(puzId) {
  const puz = GRAMMAR_PUZZLES_DATA.find(p => p.id === puzId);
  const state = PuzzleState[puzId];
  const fb = document.getElementById('feedback-' + puzId);
  if (!puz || !state || !fb) return;

  if (state.current.length !== puz.targetOrder.length) {
    fb.className = 'puzzle-feedback-badge show wrong';
    fb.innerHTML = '⚠️ Kepingan kalimat belum lengkap. Masukkan semua kata ke dalam slot sebelum memeriksa.';
    return;
  }

  const isCorrect = state.current.every((val, idx) => val === puz.targetOrder[idx]);

  if (isCorrect) {
    fb.className = 'puzzle-feedback-badge show correct';
    fb.innerHTML = `🎉 <strong>Susunan Benar!</strong> ${puz.ruleInfo}`;
  } else {
    fb.className = 'puzzle-feedback-badge show wrong';
    fb.innerHTML = '❌ <strong>Susunan belum tepat.</strong> Perhatikan kembali posisi subjek, predikat (finite verb), atau letak tanda koma dan konjungsi!';
  }
};

window.resetPuzzle = function(puzId) {
  const state = PuzzleState[puzId];
  if (!state) return;
  state.current = [];
  state.used = [];
  renderPuzzleBank(puzId);
  const fb = document.getElementById('feedback-' + puzId);
  if (fb) fb.className = 'puzzle-feedback-badge';
};

// ================= Tab Navigation =================
function initTabs() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (window.stopPassageAudio) window.stopPassageAudio();
      const targetPanelId = btn.getAttribute('data-target');
      
      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPanel = document.getElementById(targetPanelId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        AppState.activeTab = targetPanelId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });
}

// ================= Accordions =================
function initAccordions() {
  const moduleHeaders = document.querySelectorAll('.module-header');
  moduleHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.closest('.module-item');
      if (parent) {
        parent.classList.toggle('open');
      }
    });
  });
}

// ================= Web Speech Listening Audio Engine =================
let activeSpeechUtterance = null;
let currentPlayingId = null;

function prepareSpeechText(raw) {
  if (!raw) return '';
  return raw
    .replace(/\[.*?\]/g, '') // remove bracket headers
    .replace(/(Host|Nathan|Miley|Presenter|Speaker 1|Speaker 2|Professor|Advisor|Dimas|Aisha|Budi|Proctor):/gi, '$1 says, ')
    .replace(/"/g, '')
    .trim();
}

window.toggleListeningAudio = function(drillId, rawTranscript) {
  const btn = document.getElementById(`btn-audio-${drillId}`);
  const statusEl = document.getElementById(`status-${drillId}`);
  const speedSelect = document.getElementById(`speed-${drillId}`);

  if (!('speechSynthesis' in window)) {
    alert('Browser Anda tidak mendukung Web Speech API. Silakan gunakan Chrome, Edge, atau Safari.');
    return;
  }

  // If already playing this drill, stop it
  if (currentPlayingId === drillId && window.speechSynthesis.speaking) {
    window.stopPassageAudio();
    return;
  }

  window.stopPassageAudio();

  const textToSpeak = prepareSpeechText(rawTranscript);
  const rate = speedSelect ? parseFloat(speedSelect.value) || 1.0 : 1.0;

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = 'en-US';
  utterance.rate = rate;

  const voices = window.speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('English')));
  if (enVoice) utterance.voice = enVoice;

  utterance.onstart = function() {
    currentPlayingId = drillId;
    if (btn) {
      btn.innerHTML = '⏹ Berhenti';
      btn.className = 'audio-btn audio-btn-play playing';
    }
    if (statusEl) {
      statusEl.textContent = '▶ Sedang Membaca...';
      statusEl.className = 'audio-status-pill playing';
    }
  };

  utterance.onend = utterance.onerror = function() {
    resetAudioUI(drillId);
  };

  activeSpeechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
};

window.playPassageAudio = function(qId, rawText) {
  if (!('speechSynthesis' in window)) {
    alert('Browser Anda tidak mendukung Web Speech API.');
    return;
  }

  window.stopPassageAudio();
  const text = prepareSpeechText(rawText);
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 1.0;

  const btn = document.getElementById(`btn-audio-${qId}`);
  if (btn) {
    btn.innerHTML = '⏹ Stop Audio';
    btn.classList.add('is-flagged');
  }

  utterance.onend = utterance.onerror = function() {
    if (btn) {
      btn.innerHTML = '▶ Putar Audio';
      btn.classList.remove('is-flagged');
    }
    currentPlayingId = null;
  };

  currentPlayingId = qId;
  activeSpeechUtterance = utterance;
  window.speechSynthesis.speak(utterance);
};

window.stopPassageAudio = function() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  if (currentPlayingId) {
    resetAudioUI(currentPlayingId);
    const qBtn = document.getElementById(`btn-audio-${currentPlayingId}`);
    if (qBtn) {
      qBtn.innerHTML = '▶ Putar Audio';
      qBtn.classList.remove('is-flagged');
    }
  }
  currentPlayingId = null;
  activeSpeechUtterance = null;
};

function resetAudioUI(drillId) {
  const btn = document.getElementById(`btn-audio-${drillId}`);
  const statusEl = document.getElementById(`status-${drillId}`);
  if (btn) {
    btn.innerHTML = '▶ Putar Audio';
    btn.className = 'audio-btn audio-btn-play';
  }
  if (statusEl) {
    statusEl.textContent = '● Siap Diputar';
    statusEl.className = 'audio-status-pill';
  }
}

window.changeAudioSpeed = function(drillId) {
  if (currentPlayingId === drillId && window.speechSynthesis.speaking) {
    const drill = LISTENING_DRILLS.find(d => d.id === drillId);
    if (drill) {
      window.toggleListeningAudio(drillId, drill.transcript);
    }
  }
};

window.toggleBlindTranscript = function(drillId) {
  const pre = document.getElementById(`transcript-${drillId}`);
  const hint = document.getElementById(`blind-hint-${drillId}`);
  const btn = document.getElementById(`btn-blind-${drillId}`);
  if (!pre) return;

  const isBlind = pre.classList.toggle('is-blind');
  if (isBlind) {
    if (hint) hint.classList.add('show');
    if (btn) btn.innerHTML = '👁️ Buka Transkrip';
  } else {
    if (hint) hint.classList.remove('show');
    if (btn) btn.innerHTML = '🙈 Uji Telinga (Sembunyikan)';
  }
};

// ================= Render Dedicated Listening Arena =================
function renderListeningDrills() {
  const container = document.getElementById('listening-content-container');
  if (!container) return;

  let html = '';
  LISTENING_DRILLS.forEach(drill => {
    html += `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(drill.title)}</h3>
            <span class="badge badge-teal" style="margin-top: 6px;">${escapeHtml(drill.source)}</span>
          </div>
        </div>

        <div class="audio-player-box">
          <div class="audio-player-header">
            <div class="audio-player-title">
              <span>🎙️ British Audio Track</span>
              <span class="audio-player-accent-badge">🇬🇧 UK RP Accent</span>
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
              <span style="font-size:12px; font-weight:700; color:var(--ink-soft);">Speed:</span>
              <button type="button" class="audio-speed-btn" onclick="setAudioSpeed('audio-${drill.id}', 0.8, this)">0.8x</button>
              <button type="button" class="audio-speed-btn active" onclick="setAudioSpeed('audio-${drill.id}', 1.0, this)">1.0x</button>
              <button type="button" class="audio-speed-btn" onclick="setAudioSpeed('audio-${drill.id}', 1.2, this)">1.2x</button>
            </div>
          </div>
          
          <div class="audio-player-controls">
            <audio id="audio-${drill.id}" controls preload="metadata" style="width: 100%;">
              <source src="${drill.audioUrl}" type="audio/mpeg">
              Browser Anda tidak mendukung audio HTML5.
            </audio>
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; flex-wrap:wrap; gap:8px;">
            <button type="button" class="transcript-toggle-btn" onclick="toggleTranscript('trans-${drill.id}', this)">
              👁️ Tampilkan Transkrip Teks
            </button>
            ${drill.officialSourceUrl ? `
              <a href="${drill.officialSourceUrl}" target="_blank" rel="noopener noreferrer" style="font-size:12px; font-weight:700; color:#0056b3; text-decoration:underline;">
                🔗 Buka Audio Asli Cambridge IELTS 11 ↗
              </a>
            ` : ''}
          </div>

          <div class="transcript-collapsible" id="trans-${drill.id}">
            <strong style="display:block; margin-bottom:4px; font-size:12px; color:var(--ink-soft); font-family:var(--mono);">TRANSCRIPT:</strong>
            <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 13.5px; line-height: 1.6; background:#fff; padding:10px; border-radius:8px; border:1px solid #ddd;">${escapeHtml(drill.transcript)}</pre>
          </div>
        </div>

        <div class="drilling-questions-wrap">
    `;

    drill.questions.forEach(q => {
      html += `
        <div class="question-block" id="lis-box-${q.id}">
          <div class="q-header">
            <span class="q-text">${escapeHtml(q.q)}</span>
            <span class="q-clo-badge">CLO 1</span>
          </div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        html += `
          <button type="button" class="opt-btn" onclick="handleListeningAnswer('${drill.id}', '${q.id}', ${optIdx})">
            <span class="opt-letter">${letter}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      });

      html += `
          </div>
          <div class="explanation-card" id="lis-expl-${q.id}">
            <strong>💡 Penjelasan & Transkrip yang Digarisbawahi:</strong>
            <div style="margin-top: 6px; line-height: 1.6;">${q.expl}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateListeningBadge();
}

window.handleListeningAnswer = function(drillId, questionId, selectedIdx) {
  const drill = LISTENING_DRILLS.find(d => d.id === drillId);
  if (!drill) return;
  const question = drill.questions.find(q => q.id === questionId);
  if (!question) return;

  const box = document.getElementById(`lis-box-${questionId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.opt-btn');
  const isCorrect = selectedIdx === question.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === question.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const expl = document.getElementById(`lis-expl-${questionId}`);
  if (expl) {
    const statusHtml = isCorrect
      ? '<div class="expl-status-banner banner-success">🎉 <strong>Jawaban Anda Benar!</strong> Pilihan Anda tepat sesuai transkrip percakapan audio resmi dosen.</div>'
      : '<div class="expl-status-banner banner-danger">❌ <strong>Jawaban Belum Tepat.</strong> Opsi yang Anda pilih kurang akurat. Pelajari rujukan materi dan bukti transkrip di bawah:</div>';

    const rpsModuleHtml = '<div class="expl-meta-ref">📚 Materi Perkuliahan RPS: Pertemuan 1 & 2 (Listening Comprehension — Extracting Specific Details & Note Taking)</div>';

    expl.innerHTML = `
      ${statusHtml}
      ${rpsModuleHtml}
      <div class="expl-section-block">
        <strong>💡 Pembahasan Mendalam & Bukti Transkrip:</strong>
        <div style="margin-top: 6px; line-height: 1.6;">${question.expl}</div>
      </div>
    `;
    expl.classList.add('show');
  }

  AppState.listeningAnswers[questionId] = isCorrect;
  updateListeningBadge();
};

function updateListeningBadge() {
  const badge = document.getElementById('listening-progress-badge');
  if (!badge) return;
  const total = LISTENING_DRILLS.reduce((acc, d) => acc + d.questions.length, 0);
  const answered = Object.keys(AppState.listeningAnswers).length;
  const correct = Object.values(AppState.listeningAnswers).filter(Boolean).length;
  badge.textContent = `Dijawab: ${answered} / ${total} | Benar: ${correct}`;
}

// ================= Render Dedicated Grammar Arena =================
function renderGrammarDrills() {
  const container = document.getElementById('grammar-content-container');
  if (!container) return;

  let html = '';
  GRAMMAR_DRILLS.forEach(drill => {
    html += `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(drill.title)}</h3>
            <span class="badge badge-mustard" style="margin-top: 6px;">${escapeHtml(drill.source)}</span>
          </div>
        </div>

        <div class="drilling-questions-wrap">
    `;

    drill.questions.forEach(q => {
      html += `
        <div class="question-block" id="gram-box-${q.id}">
          <div class="q-header">
            <span class="q-text">${escapeHtml(q.q)}</span>
            <span class="q-clo-badge">${q.cat || 'CLO 2'}</span>
          </div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        html += `
          <button type="button" class="opt-btn" onclick="handleGrammarAnswer('${drill.id}', '${q.id}', ${optIdx})">
            <span class="opt-letter">${letter}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      });

      html += `
          </div>
          <div class="explanation-card" id="gram-expl-${q.id}">
            <strong>💡 Pembahasan Kaidah Gramatika:</strong>
            <div style="margin-top: 6px; line-height: 1.6;">${q.expl}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateGrammarBadge();
}

window.handleGrammarAnswer = function(drillId, questionId, selectedIdx) {
  const drill = GRAMMAR_DRILLS.find(d => d.id === drillId);
  if (!drill) return;
  const question = drill.questions.find(q => q.id === questionId);
  if (!question) return;

  const box = document.getElementById(`gram-box-${questionId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.opt-btn');
  const isCorrect = selectedIdx === question.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === question.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const expl = document.getElementById(`gram-expl-${questionId}`);
  if (expl) {
    const statusHtml = isCorrect
      ? '<div class="expl-status-banner banner-success">🎉 <strong>Jawaban Anda Benar!</strong> Analisis tata bahasa Anda tepat.</div>'
      : '<div class="expl-status-banner banner-danger">❌ <strong>Jawaban Belum Tepat.</strong> Analisis struktur kalimat Anda keliru. Pelajari tabel materi dan kaidah di bawah:</div>';

    const isMeeting3 = drillId.includes('pos');
    const rpsModuleHtml = isMeeting3
      ? '<div class="expl-meta-ref">📚 Materi Perkuliahan RPS: Pertemuan 3 (The Basic Parts of Speech & Sentence Components S-V-O-C-A)</div>'
      : '<div class="expl-meta-ref">📚 Materi Perkuliahan RPS: Pertemuan 4 (Simple, Compound Sentences [FANBOYS], and Complex Sentences)</div>';

    const miniTableHtml = isMeeting3
      ? '<div class="expl-section-block"><strong>📌 Rujukan Cepat Komponen Kalimat (Meeting 3):</strong><br>S (Pelaku) + V (Finite Verb) + O (Objek Langsung/Tak Langsung) + C (Pelengkap Subjek/Objek) + A (Keterangan waktu/tempat/cara).</div>'
      : '<div class="expl-section-block"><strong>📌 Rujukan Cepat Aturan Koma & Konjungsi (Meeting 4):</strong><br>• Compound: <code>[Klausa Bebas 1] , [FANBOYS] [Klausa Bebas 2]</code><br>• Complex Pola A: <code>[Subordinator + Klausa] , [Klausa Utama]</code> (Wajib Koma!)<br>• Complex Pola B: <code>[Klausa Utama] [Subordinator + Klausa]</code> (Dilarang Koma!)</div>';

    expl.innerHTML = `
      ${statusHtml}
      ${rpsModuleHtml}
      ${miniTableHtml}
      <div class="expl-section-block">
        <strong>💡 Pembahasan Mendalam & Kaidah Gramatika:</strong>
        <div style="margin-top: 6px; line-height: 1.6;">${question.expl}</div>
      </div>
    `;
    expl.classList.add('show');
  }

  AppState.grammarAnswers[questionId] = isCorrect;
  updateGrammarBadge();
};

function updateGrammarBadge() {
  const badge = document.getElementById('grammar-progress-badge');
  if (!badge) return;
  const total = GRAMMAR_DRILLS.reduce((acc, d) => acc + d.questions.length, 0);
  const answered = Object.keys(AppState.grammarAnswers).length;
  const correct = Object.values(AppState.grammarAnswers).filter(Boolean).length;
  badge.textContent = `Dijawab: ${answered} / ${total} | Benar: ${correct}`;
}

// ================= Render 30 Reading Questions =================
function renderDrillingQuestions() {
  const container = document.getElementById('drilling-content-container');
  if (!container) return;

  let html = '';
  let totalDrillQs = 0;

  DRILLING_PASSAGES.forEach((passage) => {
    html += `
      <div class="card">
        <div class="card-header">
          <div>
            <h3 class="card-title">${escapeHtml(passage.title)}</h3>
            <span class="badge badge-teal" style="margin-top: 6px;">${escapeHtml(passage.source)}</span>
          </div>
        </div>
        
        <div class="passage-card">
          <h4>📖 Reading Text / Prompt:</h4>
          <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 14.5px; line-height: 1.6;">${escapeHtml(passage.text)}</pre>
        </div>

        <div class="drilling-questions-wrap">
    `;

    passage.questions.forEach((q) => {
      totalDrillQs++;
      html += `
        <div class="question-block" id="drill-box-${q.id}">
          <div class="q-header">
            <span class="q-text">${escapeHtml(q.q)}</span>
            <span class="q-clo-badge">${q.clo}</span>
          </div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        const letter = String.fromCharCode(65 + optIdx);
        html += `
          <button type="button" class="opt-btn" onclick="handleDrillAnswer('${passage.id}', '${q.id}', ${optIdx})">
            <span class="opt-letter">${letter}</span>
            <span>${escapeHtml(opt)}</span>
          </button>
        `;
      });

      html += `
          </div>
          <div class="explanation-card" id="drill-expl-${q.id}">
            <strong>💡 Penjelasan & Kunci Resmi Dosen (Dengan Kalimat yang Digarisbawahi):</strong>
            <div style="margin-top: 6px; line-height: 1.6;">${q.expl}</div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateDrillStats(totalDrillQs);
}

window.handleDrillAnswer = function(passageId, questionId, selectedIdx) {
  const passage = DRILLING_PASSAGES.find(p => p.id === passageId);
  if (!passage) return;
  const question = passage.questions.find(q => q.id === questionId);
  if (!question) return;

  const box = document.getElementById(`drill-box-${questionId}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.opt-btn');
  const isCorrect = selectedIdx === question.answer;

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === question.answer) {
      btn.classList.add('correct');
    } else if (idx === selectedIdx && !isCorrect) {
      btn.classList.add('wrong');
    }
  });

  const explCard = document.getElementById(`drill-expl-${questionId}`);
  if (explCard) {
    const statusHtml = isCorrect
      ? '<div class="expl-status-banner banner-success">🎉 <strong>Jawaban Anda Benar!</strong> Pilihan Anda tepat sesuai kunci hijau resmi naskah dosen.</div>'
      : '<div class="expl-status-banner banner-danger">❌ <strong>Jawaban Belum Tepat.</strong> Anda memilih opsi yang keliru. Silakan pelajari rujukan materi dosen dan kalimat bukti di bawah:</div>';

    const rpsModuleHtml = '<div class="expl-meta-ref">📚 Materi Perkuliahan: Pertemuan 5 & 6 (Reading Comprehension — Main Ideas, Detail Scanning & Text Evidence)</div>';

    explCard.innerHTML = `
      ${statusHtml}
      ${rpsModuleHtml}
      <div class="expl-section-block">
        <strong>💡 Penjelasan & Kunci Resmi Dosen (Dengan Kalimat yang Digarisbawahi):</strong>
        <div style="margin-top: 6px; line-height: 1.6;">${question.expl}</div>
      </div>
    `;
    explCard.classList.add('show');
  }

  AppState.drillingAnswers[questionId] = {
    selected: selectedIdx,
    correct: isCorrect
  };

  updateDrillStats();
};

function updateDrillStats(totalOverride) {
  const statsEl = document.getElementById('drill-progress-badge');
  if (!statsEl) return;

  const total = totalOverride || 30;
  const answeredKeys = Object.keys(AppState.drillingAnswers);
  const correctCount = answeredKeys.filter(k => AppState.drillingAnswers[k].correct).length;

  statsEl.textContent = `Dijawab: ${answeredKeys.length} / ${total} | Benar: ${correctCount}`;
}

// ================= Render Writing Models =================
function renderWritingModels() {
  const container = document.getElementById('writing-models-container');
  if (!container) return;

  let html = '';
  WRITING_TOPIC_MODELS.forEach((m, idx) => {
    html += `
      <div class="card" style="margin-bottom: 20px;">
        <div class="card-header">
          <div>
            <h4 class="card-title" style="font-size: 18px;">Contoh Paragraf Akademik ${idx + 1}: ${escapeHtml(m.topic)}</h4>
            <span class="badge badge-teal" style="margin-top: 4px;">Panjang: ${m.wordCount} Kata (Standar Dosen: 100–150 Kata)</span>
          </div>
        </div>

        <div class="passage-card" style="background: var(--mustard-soft); border-color: var(--mustard); font-size: 15px;">
          ${escapeHtml(m.modelParagraph)}
        </div>

        <h5 style="margin: 12px 0 6px; font-family: var(--display); font-size: 14px;">Bedah Struktur Jenis Kalimat:</h5>
        <div class="rubrik-table-wrap">
          <table>
            <thead>
              <tr>
                <th style="width: 180px;">Komponen Kalimat</th>
                <th>Kalimat dalam Paragraf</th>
              </tr>
            </thead>
            <tbody>
              ${m.analysis.map(a => `
                <tr>
                  <td><strong>${escapeHtml(a.type)}</strong></td>
                  <td>${escapeHtml(a.text)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ================= 90-Minute Exam Simulator =================
function initExamTimerControls() {
  const startBtn = document.getElementById('btn-timer-toggle');
  const resetBtn = document.getElementById('btn-timer-reset');

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      if (!AppState.examStarted) {
        startExamTimer();
        startBtn.textContent = '⏸️ Pause Timer';
        startBtn.classList.remove('badge-mustard');
        startBtn.classList.add('badge-blue');
      } else {
        pauseExamTimer();
        startBtn.textContent = '▶️ Lanjutkan Ujian';
        startBtn.classList.remove('badge-blue');
        startBtn.classList.add('badge-mustard');
      }
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (confirm('Ulangi simulasi ujian dari awal (reset waktu 90 menit)?')) {
        resetExam();
      }
    });
  }
}

function startExamTimer() {
  AppState.examStarted = true;
  if (AppState.examTimer) clearInterval(AppState.examTimer);

  AppState.examTimer = setInterval(() => {
    if (AppState.examSecondsLeft > 0) {
      AppState.examSecondsLeft--;
      renderTimerDisplay();
    } else {
      clearInterval(AppState.examTimer);
      alert('⏰ WAKTU UJIAN 90 MENIT HABIS! Ujian otomatis dikumpulkan.');
      submitUTSExam();
    }
  }, 1000);
}

function pauseExamTimer() {
  AppState.examStarted = false;
  if (AppState.examTimer) {
    clearInterval(AppState.examTimer);
    AppState.examTimer = null;
  }
}

function resetExam() {
  pauseExamTimer();
  AppState.examSecondsLeft = 90 * 60;
  AppState.examAnswers = {};
  AppState.examSubmitted = false;
  renderTimerDisplay();

  const startBtn = document.getElementById('btn-timer-toggle');
  if (startBtn) startBtn.textContent = '▶️ Mulai Simulasi 90 Menit';

  const resultCard = document.getElementById('uts-result-card');
  if (resultCard) resultCard.classList.remove('show');

  // Re-enable options
  const buttons = document.querySelectorAll('.exam-opt-btn');
  buttons.forEach(b => {
    b.disabled = false;
    b.classList.remove('correct', 'wrong', 'selected');
    b.style.background = 'var(--paper)';
    b.style.fontWeight = 'normal';
  });

  const expls = document.querySelectorAll('.exam-expl');
  expls.forEach(e => e.classList.remove('show'));
}

function renderTimerDisplay() {
  const timerEl = document.getElementById('uts-timer-display');
  if (!timerEl) return;

  const m = Math.floor(AppState.examSecondsLeft / 60);
  const s = AppState.examSecondsLeft % 60;
  timerEl.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;

  if (AppState.examSecondsLeft <= 10 * 60) {
    timerEl.classList.add('danger');
  } else {
    timerEl.classList.remove('danger');
  }
}

// Render UTS Simulation Questions
function renderExamQuestions() {
  // 1. Listening
  const listeningContainer = document.getElementById('exam-listening-container');
  if (listeningContainer) {
    let html = '';
    UTS_EXAM_DATA.listening.forEach((q) => {
      html += createExamQuestionHTML(q, 'listening');
    });
    listeningContainer.innerHTML = html;
  }

  // 2. Grammar
  const grammarContainer = document.getElementById('exam-grammar-container');
  if (grammarContainer) {
    let html = '';
    UTS_EXAM_DATA.grammar.forEach((q) => {
      html += createExamQuestionHTML(q, 'grammar');
    });
    grammarContainer.innerHTML = html;
  }

  // 3. Reading
  const readingContainer = document.getElementById('exam-reading-container');
  if (readingContainer) {
    let html = '';
    UTS_EXAM_DATA.reading.forEach((q) => {
      html += createExamQuestionHTML(q, 'reading');
    });
    readingContainer.innerHTML = html;
  }
}

function createExamQuestionHTML(q, section) {
  let extraBox = '';
  if (q.audioSim) {
    extraBox = `
      <div class="audio-player-box" style="margin-bottom: 14px;">
        <div class="audio-player-header">
          <div class="audio-player-title">
            <span>🎧 Audio Butir Soal ${escapeHtml(q.id.replace('uts-l', ''))}</span>
            <span class="audio-player-accent-badge">🇬🇧 UK Accent</span>
          </div>
          <div style="display:flex; gap:6px; align-items:center;">
            <button type="button" class="audio-speed-btn" onclick="setAudioSpeed('audio-${q.id}', 0.8, this)">0.8x</button>
            <button type="button" class="audio-speed-btn active" onclick="setAudioSpeed('audio-${q.id}', 1.0, this)">1.0x</button>
          </div>
        </div>
        <audio id="audio-${q.id}" controls preload="metadata" style="width: 100%;">
          <source src="${q.audioUrl}" type="audio/mpeg">
        </audio>
        <div style="margin-top: 8px;">
          <button type="button" class="transcript-toggle-btn" style="font-size:11.5px; padding:4px 10px;" onclick="toggleTranscript('trans-${q.id}', this)">
            👁️ Tampilkan Transkrip Audio
          </button>
          <div class="transcript-collapsible" id="trans-${q.id}">
            <pre style="white-space: pre-wrap; font-family: var(--font); margin: 6px 0 0; font-size: 13px; line-height: 1.5; background:#fff; padding:8px; border-radius:6px; border:1px solid #ddd;">${escapeHtml(q.audioSim)}</pre>
          </div>
        </div>
      </div>
    `;
  } else if (q.passage) {
    extraBox = `
      <div class="passage-card" style="margin-bottom: 12px;">
        <strong style="display:block; margin-bottom: 4px; font-family: var(--mono); font-size: 12px;">📖 READING EXCERPT:</strong>
        <pre style="white-space: pre-wrap; font-family: var(--font); margin: 0; font-size: 13.5px; line-height: 1.5;">${escapeHtml(q.passage)}</pre>
      </div>
    `;
  }

  let optionsHTML = '';
  q.options.forEach((opt, idx) => {
    const letter = String.fromCharCode(65 + idx);
    optionsHTML += `
      <button type="button" class="opt-btn exam-opt-btn" id="opt-${q.id}-${idx}" onclick="selectExamAnswer('${q.id}', ${idx}, '${section}')">
        <span class="opt-letter">${letter}</span>
        <span>${escapeHtml(opt)}</span>
      </button>
    `;
  });

  const isFlagged = Boolean(AppState.examFlags[q.id]);

  return `
    <div class="question-block" id="exam-q-${q.id}">
      ${extraBox}
      <div class="q-header">
        <span class="q-text">${escapeHtml(q.q)}</span>
        <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
          <button type="button" class="btn-flag-q ${isFlagged ? 'is-flagged' : ''}" id="flag-btn-${q.id}" onclick="toggleExamFlag('${q.id}')" title="Tandai jika masih ragu-ragu">
            ${isFlagged ? '🚩 Ditandai Ragu' : '🚩 Ragu-ragu'}
          </button>
          <span class="q-clo-badge">${q.clo}</span>
          <span class="badge badge-mustard" style="font-size:11px; padding:2px 8px;">${q.pts} pts</span>
        </div>
      </div>
      <div class="options-list">
        ${optionsHTML}
      </div>
      <div class="explanation-card exam-expl" id="expl-${q.id}">
        <strong>💡 Pembahasan Dosen (Underlined Phrase):</strong>
        <div style="margin-top: 4px; line-height: 1.5;">${q.expl}</div>
      </div>
    </div>
  `;
}

window.selectExamAnswer = function(questionId, selectedIdx, section) {
  if (AppState.examSubmitted) return;

  AppState.examAnswers[questionId] = {
    selected: selectedIdx,
    section: section
  };

  const box = document.getElementById(`exam-q-${questionId}`);
  if (box) {
    const buttons = box.querySelectorAll('.exam-opt-btn');
    buttons.forEach((b, idx) => {
      if (idx === selectedIdx) {
        b.style.borderColor = 'var(--ink)';
        b.style.background = 'var(--mustard-soft)';
        b.style.fontWeight = '700';
      } else {
        b.style.borderColor = 'var(--ink)';
        b.style.background = 'var(--paper)';
        b.style.fontWeight = 'normal';
      }
    });
  }

  updateLJKSummary();
  renderExamLJKGrid();
};

const ALL_EXAM_MC_IDS = [
  'uts-l1', 'uts-l2', 'uts-l3', 'uts-l4', 'uts-l5',
  'uts-g1', 'uts-g2', 'uts-g3', 'uts-g4', 'uts-g5',
  'uts-r1', 'uts-r2', 'uts-r3', 'uts-r4', 'uts-r5', 'uts-r6', 'uts-r7'
];
window.ALL_EXAM_MC_IDS = ALL_EXAM_MC_IDS;

window.renderExamLJKGrid = function() {
  const container = document.getElementById('ljk-bubbles-grid');
  if (!container) return;

  let answeredCount = 0;
  let flaggedCount = 0;
  let html = '';

  ALL_EXAM_MC_IDS.forEach((id, idx) => {
    const num = idx + 1;
    const ans = AppState.examAnswers[id];
    const isAnswered = ans !== undefined;
    const isFlagged = Boolean(AppState.examFlags[id]);

    if (isAnswered) answeredCount++;
    if (isFlagged) flaggedCount++;

    const letter = isAnswered ? String.fromCharCode(65 + ans.selected) : '';

    let bubbleClass = 'ljk-bubble';
    if (isAnswered) bubbleClass += ' answered';
    if (isFlagged) bubbleClass += ' flagged';

    const subText = isFlagged ? '🚩' : (isAnswered ? letter : '-');

    html += `
      <button type="button" class="${bubbleClass}" onclick="jumpToExamQuestion('${id}')" title="Soal No. ${num}: ${isAnswered ? 'Jawaban ' + letter : 'Belum Terisi'}${isFlagged ? ' (Ragu-ragu)' : ''}">
        <span>${num}</span>
        <span class="ljk-bubble-sub">${subText}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  const unansweredCount = ALL_EXAM_MC_IDS.length - answeredCount;
  const statUnans = document.getElementById('ljk-stat-unanswered');
  if (statUnans) statUnans.textContent = unansweredCount;

  const statAns = document.getElementById('ljk-stat-answered');
  if (statAns) statAns.textContent = answeredCount;

  const statFlag = document.getElementById('ljk-stat-flagged');
  if (statFlag) statFlag.textContent = flaggedCount;

  const badge = document.getElementById('exam-ljk-counter');
  if (badge) {
    badge.textContent = `LJK Terisi: ${answeredCount} / 17 Soal MC`;
  }
};

window.toggleExamFlag = function(qId) {
  if (AppState.examSubmitted) return;
  AppState.examFlags[qId] = !AppState.examFlags[qId];

  const flagBtn = document.getElementById(`flag-btn-${qId}`);
  if (flagBtn) {
    if (AppState.examFlags[qId]) {
      flagBtn.classList.add('is-flagged');
      flagBtn.innerHTML = '🚩 Ditandai Ragu';
    } else {
      flagBtn.classList.remove('is-flagged');
      flagBtn.innerHTML = '🚩 Ragu-ragu';
    }
  }

  renderExamLJKGrid();
};

window.jumpToExamQuestion = function(qId) {
  const el = document.getElementById(`exam-q-${qId}`);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.style.transition = 'box-shadow 0.25s ease, border-color 0.25s ease';
  el.style.borderColor = 'var(--mustard)';
  el.style.boxShadow = '0 0 0 4px var(--mustard-soft)';
  setTimeout(() => {
    el.style.borderColor = 'var(--ink)';
    el.style.boxShadow = 'var(--shadow-sm)';
  }, 1200);
};

function updateLJKSummary() {
  const answeredCount = Object.keys(AppState.examAnswers).length;
  const badge = document.getElementById('exam-ljk-counter');
  if (badge) {
    badge.textContent = `LJK Terisi: ${answeredCount} / 17 Soal MC`;
  }
}

// ================= Writing Outline & Word Count Evaluator =================
function initOutlineBuilder() {
  const tsInput = document.getElementById('outline-ts');
  const sd1Input = document.getElementById('outline-sd1');
  const sd2Input = document.getElementById('outline-sd2');
  const sd3Input = document.getElementById('outline-sd3');
  const csInput = document.getElementById('outline-cs');
  const fullParagraphArea = document.getElementById('full-paragraph-area');

  const inputs = [tsInput, sd1Input, sd2Input, sd3Input, csInput];
  inputs.forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        evaluateWritingRubric();
        syncFullParagraphDraft();
      });
    }
  });

  if (fullParagraphArea) {
    fullParagraphArea.addEventListener('input', updateParagraphWordCounter);
  }

  const checkboxes = document.querySelectorAll('.checklist-item input');
  checkboxes.forEach(cb => {
    cb.addEventListener('change', evaluateWritingRubric);
  });
}

function syncFullParagraphDraft() {
  const ts = document.getElementById('outline-ts')?.value.trim() || '';
  const sd1 = document.getElementById('outline-sd1')?.value.trim() || '';
  const sd2 = document.getElementById('outline-sd2')?.value.trim() || '';
  const sd3 = document.getElementById('outline-sd3')?.value.trim() || '';
  const cs = document.getElementById('outline-cs')?.value.trim() || '';

  const area = document.getElementById('full-paragraph-area');
  if (area && !area.getAttribute('data-manual-edit')) {
    const sentences = [ts, sd1, sd2, sd3, cs].filter(Boolean);
    area.value = sentences.join(' ');
    updateParagraphWordCounter();
  }
}

// ================= Academic Word Counter Engine =================
function countAcademicWords(text) {
  if (!text || typeof text !== 'string') return 0;
  // Normalize whitespace (including non-breaking spaces, zero-width chars, newlines, tabs)
  const normalized = text
    .replace(/[\u00A0\u1680\u180E\u2000-\u200B\u202F\u205F\u3000\uFEFF]/g, ' ')
    .trim();
  if (!normalized) return 0;
  // Match genuine academic words: letters/numbers with optional internal hyphens/apostrophes
  // Standalone symbols, punctuation, bullets, or multiple spaces/newlines are never counted
  const matches = normalized.match(/\b[a-zA-Z0-9]+(?:['’\-][a-zA-Z0-9]+)*\b/g);
  return matches ? matches.length : 0;
}

function countAcademicSentences(text) {
  if (!text || typeof text !== 'string') return 0;
  // Split by terminal punctuation (. ! ?)
  const segments = text.split(/[.!?]+/);
  let count = 0;
  segments.forEach(seg => {
    // Only count as a sentence if the segment contains at least one genuine word
    // Standalone dots, blank lines, or spaces will NEVER be counted as sentences
    if (countAcademicWords(seg) > 0) {
      count++;
    }
  });
  return count;
}

function updateParagraphWordCounter() {
  const area = document.getElementById('full-paragraph-area');
  const badge = document.getElementById('paragraph-word-counter');
  if (!area) return;

  // Mark as manually edited so auto-sync doesn't overwrite user's work
  area.setAttribute('data-manual-edit', 'true');

  const text = area.value || '';
  const words = countAcademicWords(text);

  // Compute detailed analytics
  const cleanNoSpace = text.replace(/\s+/g, '');
  const charsNoSpace = cleanNoSpace.length;
  const charsTotal = text.length;

  // Sentences: genuine sentence segments containing actual words
  const sentences = countAcademicSentences(text);
  const avgWordsPerSentence = sentences > 0 ? (words / sentences).toFixed(1) : 0;

  // Update DOM elements if present
  const exactNumEl = document.getElementById('counter-exact-num');
  if (exactNumEl) exactNumEl.textContent = words;

  const mWords = document.getElementById('m-words');
  if (mWords) mWords.textContent = words;

  const mCharsNoSpace = document.getElementById('m-chars-nospace');
  if (mCharsNoSpace) mCharsNoSpace.textContent = charsNoSpace;

  const mCharsTotal = document.getElementById('m-chars-total');
  if (mCharsTotal) mCharsTotal.textContent = charsTotal;

  const mSentences = document.getElementById('m-sentences');
  if (mSentences) mSentences.textContent = sentences;

  const mAvgSentence = document.getElementById('m-avg-sentence');
  if (mAvgSentence) mAvgSentence.textContent = avgWordsPerSentence;

  // Progress Bar (0 to 150 words = 0% to 100%)
  const progressBar = document.getElementById('counter-progress-bar');
  const progressPercent = Math.min(100, Math.round((words / 150) * 100));
  if (progressBar) {
    progressBar.style.width = `${progressPercent}%`;
  }

  // Status message & badge styling
  const feedbackEl = document.getElementById('counter-feedback-msg');

  if (words === 0) {
    if (badge) {
      badge.textContent = '⚪ Belum Ada Teks (Target: 100–150 Kata)';
      badge.className = 'badge badge-mustard';
    }
    if (progressBar) progressBar.style.background = 'var(--mustard)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-info';
      feedbackEl.innerHTML = 'ℹ️ Masukkan draf paragraf Anda. Sistem menghitung token kata akademik murni (tidak menghitung spasi atau enter berulang).';
    }
  } else if (words < 100) {
    const diff = 100 - words;
    if (badge) {
      badge.textContent = `⚠️ ${words} Kata (Kurang ${diff} kata lagi)`;
      badge.className = 'badge badge-mustard';
    }
    if (progressBar) progressBar.style.background = 'var(--mustard)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-warning';
      feedbackEl.innerHTML = `⚠️ <strong>Kurang ${diff} kata lagi</strong> untuk mencapai standar minimal 100 kata. Kembangkan supporting details Anda.`;
    }
  } else if (words <= 150) {
    if (badge) {
      badge.textContent = `✅ ${words} Kata (Optimal 100–150 Kata)`;
      badge.className = 'badge badge-teal';
    }
    if (progressBar) progressBar.style.background = 'var(--teal)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-success';
      feedbackEl.innerHTML = `✅ <strong>Sempurna!</strong> Panjang paragraf (${words} kata) memenuhi standar resmi dosen perkuliahan (100–150 kata).`;
    }
  } else {
    const over = words - 150;
    if (badge) {
      badge.textContent = `⛔ ${words} Kata (Kelebihan ${over} kata)`;
      badge.className = 'badge badge-tomato';
    }
    if (progressBar) progressBar.style.background = 'var(--tomato)';
    if (feedbackEl) {
      feedbackEl.className = 'counter-status-banner banner-danger';
      feedbackEl.innerHTML = `⛔ <strong>Melebihi batas ${over} kata!</strong> Ringkas kalimat Anda agar tidak melampaui batas 150 kata.`;
    }
  }

  // Live Heuristic Evaluation of Paragraph Anatomy (CLO 2 & 4)
  analyzeAcademicParagraphAnatomy(text);
}

// Topic Selection & Studio Helpers
let currentSelectedTopicIdx = 0;

window.selectWritingTopic = function(idx) {
  currentSelectedTopicIdx = idx;
  const pills = document.querySelectorAll('.topic-pill');
  pills.forEach((p, i) => {
    if (i === idx) p.classList.add('active');
    else p.classList.remove('active');
  });
};

window.loadSelectedTopicModel = function() {
  const model = WRITING_TOPIC_MODELS[currentSelectedTopicIdx] || WRITING_TOPIC_MODELS[0];
  const area = document.getElementById('full-paragraph-area');
  if (!area) return;
  area.value = model.modelParagraph;
  updateParagraphWordCounter();
};

window.copyParagraphDraft = function() {
  const area = document.getElementById('full-paragraph-area');
  if (!area || !area.value.trim()) {
    alert('Area tulisan masih kosong.');
    return;
  }
  navigator.clipboard.writeText(area.value.trim()).then(() => {
    alert('Draf paragraf berhasil disalin ke clipboard!');
  }).catch(() => {
    area.select();
    document.execCommand('copy');
    alert('Draf paragraf berhasil disalin!');
  });
};

window.clearParagraphDraft = function() {
  const area = document.getElementById('full-paragraph-area');
  if (!area) return;
  if (confirm('Yakin ingin membersihkan area tulisan?')) {
    area.value = '';
    updateParagraphWordCounter();
  }
};

function evaluateWritingRubric() {
  let writingScore = 0;
  const tsVal = document.getElementById('outline-ts')?.value.trim() || '';
  const sd1Val = document.getElementById('outline-sd1')?.value.trim() || '';
  const sd2Val = document.getElementById('outline-sd2')?.value.trim() || '';
  const sd3Val = document.getElementById('outline-sd3')?.value.trim() || '';
  const csVal = document.getElementById('outline-cs')?.value.trim() || '';

  // 1. Topic Sentence & Controlling Idea (max 5 pts)
  if (tsVal.length > 25) {
    writingScore += 5;
  } else if (tsVal.length > 10) {
    writingScore += 3;
  }

  // 2. Supporting Details 1-3 (max 6 pts: 2 pts each)
  if (sd1Val.length > 15) writingScore += 2;
  if (sd2Val.length > 15) writingScore += 2;
  if (sd3Val.length > 15) writingScore += 2;

  // 3. Concluding Sentence (max 4 pts)
  if (csVal.length > 20) {
    writingScore += 4;
  } else if (csVal.length > 8) {
    writingScore += 2;
  }

  // 4. Checklist Self-Audit (max 5 pts)
  const cbChecked = document.querySelectorAll('.checklist-item input:checked').length;
  writingScore += Math.min(5, Math.round((cbChecked / 5) * 5));

  writingScore = Math.min(20, writingScore);

  const scoreBadge = document.getElementById('writing-live-score');
  if (scoreBadge) {
    scoreBadge.textContent = `${writingScore} / 20 pts`;
  }

  return writingScore;
}

// ================= Submit UTS Exam =================
window.submitUTSExam = function() {
  if (AppState.examSubmitted) {
    alert('Ujian telah dikumpulkan. Silakan lihat hasil evaluasi di atas.');
    return;
  }

  pauseExamTimer();
  AppState.examSubmitted = true;

  let listeningScore = 0;
  let grammarScore = 0;
  let readingScore = 0;

  // Grade Listening (25 pts)
  UTS_EXAM_DATA.listening.forEach(q => {
    const userAns = AppState.examAnswers[q.id];
    const isCorrect = userAns && userAns.selected === q.answer;
    if (isCorrect) listeningScore += q.pts;
    revealQuestionResult(q, userAns);
  });

  // Grade Grammar (20 pts)
  UTS_EXAM_DATA.grammar.forEach(q => {
    const userAns = AppState.examAnswers[q.id];
    const isCorrect = userAns && userAns.selected === q.answer;
    if (isCorrect) grammarScore += q.pts;
    revealQuestionResult(q, userAns);
  });

  // Grade Reading (35 pts)
  UTS_EXAM_DATA.reading.forEach(q => {
    const userAns = AppState.examAnswers[q.id];
    const isCorrect = userAns && userAns.selected === q.answer;
    if (isCorrect) readingScore += q.pts;
    revealQuestionResult(q, userAns);
  });

  // Grade Writing (20 pts)
  const writingScore = evaluateWritingRubric();

  const totalScore = listeningScore + grammarScore + readingScore + writingScore;

  // Render Result Card
  renderExamResultCard(totalScore, listeningScore, grammarScore, readingScore, writingScore);
};

function revealQuestionResult(q, userAns) {
  const box = document.getElementById(`exam-q-${q.id}`);
  if (!box) return;

  const buttons = box.querySelectorAll('.exam-opt-btn');
  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add('correct');
    } else if (userAns && idx === userAns.selected) {
      btn.classList.add('wrong');
    }
  });

  const expl = document.getElementById(`expl-${q.id}`);
  if (expl) expl.classList.add('show');
}

function renderExamResultCard(total, lScore, gScore, rScore, wScore) {
  const resultCard = document.getElementById('uts-result-card');
  if (!resultCard) return;

  let predikat = 'A';
  let badgeClass = 'badge-teal';

  if (total >= 80) {
    predikat = 'A (Sangat Baik / Lulus Prima)';
    badgeClass = 'badge-teal';
  } else if (total >= 75) {
    predikat = 'AB (Baik Sekali)';
    badgeClass = 'badge-mustard';
  } else if (total >= 70) {
    predikat = 'B (Baik)';
    badgeClass = 'badge-blue';
  } else if (total >= 60) {
    predikat = 'C (Cukup / Perlu Review FANBOYS & Skimming)';
    badgeClass = 'badge-plum';
  } else {
    predikat = 'D / E (Perlu Drilling Intensif Ulang)';
    badgeClass = 'badge-tomato';
  }

  document.getElementById('res-total-score').textContent = `${total} / 100`;
  const predikatEl = document.getElementById('res-predikat');
  predikatEl.textContent = predikat;
  predikatEl.className = `result-badge-predikat ${badgeClass}`;

  document.getElementById('res-clo1').textContent = `${lScore} / 25 pts`;
  document.getElementById('res-clo2').textContent = `${gScore} / 20 pts`;
  document.getElementById('res-clo3').textContent = `${rScore} / 35 pts`;
  document.getElementById('res-clo4').textContent = `${wScore} / 20 pts`;

  resultCard.classList.add('show');
  resultCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ================= Academic Paragraph Diagnostics Engine =================
function analyzeAcademicParagraphAnatomy(text) {
  const overallBadge = document.getElementById('diag-overall-score');
  if (!overallBadge) return;

  if (!text || !text.trim()) {
    overallBadge.textContent = 'Status: Belum Menganalisis';
    overallBadge.className = 'badge badge-mustard';
    resetDiagItem('ts', 'Belum Ada', 'fail', 'Kalimat pertama harus jelas menyatakan topik utama dan fokus pembatasan.', null);
    resetDiagItem('compound', 'Belum Ada', 'fail', 'Minimal 1 kalimat majemuk setara dengan tanda koma sebelum FANBOYS (, and / , but / , so).', null);
    resetDiagItem('complex', 'Belum Ada', 'fail', 'Minimal 1 kalimat bertingkat dengan kata hubung subordinat (because, although, if, since, while).', null);
    resetDiagItem('transitions', 'Belum Ada', 'fail', 'Gunakan kata transisi resmi seperti Furthermore, Therefore, For example, In conclusion.', null);
    return;
  }

  let passCount = 0;

  // 1. Topic Sentence: First sentence of text
  const cleanSentences = text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => countAcademicWords(s) > 0);

  const firstSentence = cleanSentences[0] || '';
  const firstWordCount = countAcademicWords(firstSentence);
  if (firstWordCount >= 7) {
    passCount++;
    const preview = firstSentence.length > 70 ? firstSentence.slice(0, 70) + '...' : firstSentence;
    resetDiagItem('ts', 'Terpenuhi (Pass)', 'pass', 'Topic sentence terdeteksi di awal paragraf dengan struktur yang cukup mendalam.', `Snippet: "${preview}"`);
  } else if (firstWordCount > 0) {
    resetDiagItem('ts', 'Kurang Panjang', 'warn', 'Kalimat pembuka terlalu pendek (< 7 kata). Tambahkan controlling idea yang spesifik.', `Snippet: "${firstSentence}"`);
  } else {
    resetDiagItem('ts', 'Belum Ada', 'fail', 'Tuliskan satu kalimat pembuka yang memperkenalkan topik utama dan controlling idea.', null);
  }

  // 2. Compound Sentence: FANBOYS with comma
  const fanboysRegex = /,\s*(?:for|and|nor|but|or|yet|so)\b\s+[^.!?]+/i;
  const fanboysMatch = text.match(fanboysRegex);
  if (fanboysMatch) {
    passCount++;
    const snippet = fanboysMatch[0].trim();
    const preview = snippet.length > 60 ? snippet.slice(0, 60) + '...' : snippet;
    resetDiagItem('compound', 'Terdeteksi (Pass)', 'pass', 'Ditemukan struktur kalimat majemuk setara: [Independent Clause] , [FANBOYS] [Independent Clause].', `Pola: "...${preview}"`);
  } else {
    const fanboysNoComma = /\b(?:for|and|nor|but|or|yet|so)\b/i.test(text);
    if (fanboysNoComma) {
      resetDiagItem('compound', 'Koma Kurang', 'warn', 'Ditemukan konjungsi koordinat, namun belum didahului tanda koma sebelum FANBOYS (, and / , but / , so).', null);
    } else {
      resetDiagItem('compound', 'Belum Ada', 'fail', 'Gunakan minimal 1 kalimat majemuk setara yang dihubungkan tanda koma dan konjungsi FANBOYS.', null);
    }
  }

  // 3. Complex Sentence: Subordinator (because, although, even though, since, while, whereas, if, unless, after, before, when, until)
  const subordinatorRegex = /\b(?:because|although|even though|since|while|whereas|if|unless|after|before|when|until)\b\s+[^.!?]+/i;
  const subMatch = text.match(subordinatorRegex);
  if (subMatch) {
    passCount++;
    const snippet = subMatch[0].trim();
    const preview = snippet.length > 60 ? snippet.slice(0, 60) + '...' : snippet;
    resetDiagItem('complex', 'Terdeteksi (Pass)', 'pass', 'Ditemukan klausa subordinat / kalimat majemuk bertingkat (Complex Sentence).', `Subordinator: "${preview}"`);
  } else {
    resetDiagItem('complex', 'Belum Ada', 'fail', 'Sisipkan klausa dependen menggunakan subordinating conjunction (because, although, if, since, while).', null);
  }

  // 4. Transitions / Cohesion
  const transRegex = /\b(?:furthermore|moreover|in addition|additionally|however|on the other hand|therefore|thus|consequently|in conclusion|for example|for instance)\b/gi;
  const transMatches = text.match(transRegex) || [];
  if (transMatches.length >= 2) {
    passCount++;
    const unique = [...new Set(transMatches.map(m => m.toLowerCase()))];
    resetDiagItem('transitions', `${unique.length} Transisi (Pass)`, 'pass', 'Alur kohesi paragraf sangat baik berkat penggunaan penanda transisi akademik resmi.', `Kata transisi: ${unique.join(', ')}`);
  } else if (transMatches.length === 1) {
    resetDiagItem('transitions', '1 Transisi (Cukup)', 'warn', 'Sudah ada 1 penanda transisi. Tambahkan 1 lagi (misal: Therefore, Furthermore) untuk kohesi optimal.', `Ditemukan: "${transMatches[0]}"`);
  } else {
    resetDiagItem('transitions', 'Belum Ada', 'fail', 'Gunakan penanda transisi akademik seperti Furthermore, However, For example, In conclusion.', null);
  }

  if (passCount === 4) {
    overallBadge.textContent = '🌟 Rubrik Lengkap: A+ (4/4 Kriteria)';
    overallBadge.className = 'badge badge-teal';
  } else if (passCount >= 2) {
    overallBadge.textContent = `⚡ Bagus: ${passCount}/4 Kriteria Terpenuhi`;
    overallBadge.className = 'badge badge-mustard';
  } else {
    overallBadge.textContent = `⚠️ Perlu Variasi Kalimat (${passCount}/4)`;
    overallBadge.className = 'badge badge-tomato';
  }
}
window.analyzeAcademicParagraphAnatomy = analyzeAcademicParagraphAnatomy;

function resetDiagItem(key, badgeText, badgeClass, descText, snippetText) {
  const badgeEl = document.getElementById(`diag-badge-${key}`);
  const descEl = document.getElementById(`diag-desc-${key}`);
  const snipEl = document.getElementById(`diag-snip-${key}`);

  if (badgeEl) {
    badgeEl.textContent = badgeText;
    badgeEl.className = `diag-badge ${badgeClass}`;
  }
  if (descEl) descEl.textContent = descText;
  if (snipEl) {
    if (snippetText) {
      snipEl.style.display = 'block';
      snipEl.textContent = snippetText;
    } else {
      snipEl.style.display = 'none';
      snipEl.textContent = '';
    }
  }
}

// ================= Vocabulary Vault Dataset & Engine =================
const EAP_VOCABULARY_DATA = [
  { word: 'Autonomous', pos: 'adjective', meaning: 'Mandiri / dapat beroperasi sendiri tanpa kendali langsung manusia', ex: 'The autonomous drone returned to base before its battery depleted.', src: 'Meeting 4 (FANBOYS Drilling)', cat: 'it' },
  { word: 'Feasible', pos: 'adjective', meaning: 'Layak / dapat dikerjakan secara teknis dan praktis', ex: 'Deploying a localized cache server is economically feasible for our lab.', src: 'Reading Drilling ANS (Q12)', cat: 'reading' },
  { word: 'Corroborate', pos: 'verb', meaning: 'Memperkuat / mengonfirmasi kebenaran bukti dengan data lain', ex: 'The log records corroborated that the system crashed due to memory leak.', src: 'Reading Drilling ANS (Q19)', cat: 'reading' },
  { word: 'Deplete', pos: 'verb', meaning: 'Menguras / menghabiskan persediaan daya atau sumber daya', ex: 'High-frequency network polling will rapidly deplete server memory.', src: 'Meeting 4 (FANBOYS Drilling)', cat: 'it' },
  { word: 'Consensus', pos: 'noun', meaning: 'Kesepakatan bersama / mufakat seluruh anggota tim', ex: 'The engineering team reached a consensus regarding the database migration.', src: 'Reading Drilling ANS (Q6)', cat: 'reading' },
  { word: 'Prerequisite', pos: 'noun', meaning: 'Syarat wajib yang harus dipenuhi sebelum melanjutkan ke tahap berikutnya', ex: 'OOP is a mandatory prerequisite for Advanced Software Engineering.', src: 'Simulasi UTS (Q2 Listening)', cat: 'reading' },
  { word: 'Mitigate', pos: 'verb', meaning: 'Meredakan / mengurangi dampak risiko atau kerentanan', ex: 'Multi-factor authentication helps mitigate unauthorized database intrusions.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Vulnerability', pos: 'noun', meaning: 'Celah kerentanan keamanan yang dapat dieksploitasi', ex: 'Human administrative protocol remains the critical vulnerability in cloud systems.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Benchmark', pos: 'noun / verb', meaning: 'Tolok ukur uji performa standar suatu algoritma atau hardware', ex: 'The sorting algorithm achieved the fastest benchmark in execution time.', src: 'Simulasi UTS (Q1 Listening)', cat: 'it' },
  { word: 'Subordinate', pos: 'adjective / verb', meaning: 'Terikat / berada di bawah kendali klausa utama (induk kalimat)', ex: 'A subordinate clause cannot stand alone as a complete sentence.', src: 'Meeting 4 (Complex Sentence)', cat: 'grammar' },
  { word: 'Splice', pos: 'noun', meaning: 'Kesalahan penggabungan dua klausa mandiri hanya dengan tanda koma (Comma Splice)', ex: 'Avoid comma splices by placing a coordinating conjunction after the comma.', src: 'Meeting 4 (Sentence Traps)', cat: 'grammar' },
  { word: 'Fragment', pos: 'noun', meaning: 'Penggalan kalimat tidak lengkap yang kehilangan subjek atau predikat utama', ex: 'Starting a sentence with "Because" without an independent clause creates a fragment.', src: 'Meeting 4 (Sentence Traps)', cat: 'grammar' },
  { word: 'Cohesion', pos: 'noun', meaning: 'Keterpaduan antar-kalimat dalam paragraf menggunakan kata transisi', ex: 'Academic transitions like "Furthermore" and "Therefore" strengthen paragraph cohesion.', src: 'Meeting 5 & 7 (Writing Rubric)', cat: 'grammar' },
  { word: 'Redundancy', pos: 'noun', meaning: 'Pencadangan ganda untuk mencegah kehilangan data jika server utama gagal', ex: 'Data redundancy ensures business continuity during hard drive failures.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Discrepancy', pos: 'noun', meaning: 'Ketidaksesuaian atau perbedaan antara dua data yang seharusnya sama', ex: 'The audit discovered a minor discrepancy in the hardware inventory logs.', src: 'Reading Drilling ANS (Q24)', cat: 'reading' },
  { word: 'Proprietary', pos: 'adjective', meaning: 'Hak milik eksklusif / perangkat lunak berlisensi tertutup', ex: 'The company migrated from proprietary software to open-source Linux servers.', src: 'Reading Drilling ANS (Q9)', cat: 'it' },
  { word: 'Empirical', pos: 'adjective', meaning: 'Berdasarkan bukti pengamatan atau eksperimen nyata di lapangan', ex: 'The researchers gathered empirical data from 500 active mobile app users.', src: 'Simulasi UTS (Q4 Listening)', cat: 'reading' },
  { word: 'Breach', pos: 'noun / verb', meaning: 'Pembobolan atau pelanggaran batas keamanan data', ex: 'Misconfigured cloud credentials caused the confidential data breach.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Optimization', pos: 'noun', meaning: 'Proses penyempurnaan kode agar berjalan lebih hemat memori dan cepat', ex: 'Algorithmic optimization dictates memory allocation in large database engines.', src: 'Simulasi UTS (Q1 Listening)', cat: 'it' },
  { word: 'Encryption', pos: 'noun', meaning: 'Penyandian data acak untuk melindungi informasi dari akses tanpa izin', ex: 'End-to-end encryption protects sensitive packets across public Wi-Fi networks.', src: 'Simulasi UTS (Q4 Listening)', cat: 'it' },
  { word: 'Throughput', pos: 'noun', meaning: 'Jumlah data yang berhasil diproses per satuan waktu', ex: 'The new fiber optic cable tripled our departmental network throughput.', src: 'Simulasi UTS (Q1 Listening)', cat: 'it' },
  { word: 'Coordinate', pos: 'adjective / verb', meaning: 'Setara secara gramatikal dalam menggabungkan dua klausa bebas (FANBOYS)', ex: 'Coordinating conjunctions connect two grammatically equal independent clauses.', src: 'Meeting 4 (FANBOYS)', cat: 'grammar' },
  { word: 'Predicate', pos: 'noun', meaning: 'Bagian kalimat yang memuat verba dan menyatakan perbuatan dari subjek', ex: 'Every complete academic sentence must contain a subject and a finite predicate.', src: 'Meeting 3 (Parts of Speech)', cat: 'grammar' },
  { word: 'Countermeasure', pos: 'noun', meaning: 'Tindakan pencegahan atau penanggulangan terhadap ancaman siber', ex: 'Installing automated firewall rules is an effective countermeasure against DDoS.', src: 'Reading Drilling ANS (Q28)', cat: 'it' },
  { word: 'Intuitive', pos: 'adjective', meaning: 'Mudah dipahami dan digunakan pengguna tanpa perlu instruksi rumit', ex: 'The frontend engineer developed an intuitive user interface for mobile clients.', src: 'Meeting 4 (Compound Sentence)', cat: 'it' },
  { word: 'Execute', pos: 'verb', meaning: 'Menjalankan instruksi program komputer hingga tuntas', ex: 'The binary search algorithm executed in less than two milliseconds.', src: 'Meeting 4 (Compound Sentence)', cat: 'it' },
  { word: 'Termination', pos: 'noun', meaning: 'Penghentian proses atau koneksi secara paksa', ex: 'Unauthorized login attempts will result in immediate session termination.', src: 'Meeting 4 (Compound Sentence)', cat: 'it' },
  { word: 'Corrupt', pos: 'verb / adjective', meaning: 'Merusak integritas file data sehingga tidak dapat dibaca kembali', ex: 'The power surge did not corrupt any critical operating system files.', src: 'Meeting 4 (Compound Sentence)', cat: 'it' },
  { word: 'Controlling Idea', pos: 'noun', meaning: 'Gagasan pengontrol yang membatasi topik bahasan dalam Topic Sentence', ex: 'A topic sentence combines a clear subject with a specific controlling idea.', src: 'Meeting 5 & 7 (Writing Workshop)', cat: 'grammar' },
  { word: 'Transitional Signal', pos: 'noun', meaning: 'Kata penghubung antar-ide yang membimbing alur berpikir pembaca', ex: 'Transitions like "However" and "In conclusion" signal logical shifts in argumentation.', src: 'Meeting 7 (Paragraph Writing)', cat: 'grammar' }
];
window.EAP_VOCABULARY_DATA = EAP_VOCABULARY_DATA;

let activeVocabCategory = 'all';
let vocabSearchQuery = '';

window.openVocabVault = function() {
  const modal = document.getElementById('vocabModal');
  if (modal) {
    modal.classList.add('open');
    renderVocabList();
    const input = document.getElementById('vocabSearchInput');
    if (input) setTimeout(() => input.focus(), 100);
  }
};

window.closeVocabVault = function() {
  const modal = document.getElementById('vocabModal');
  if (modal) modal.classList.remove('open');
};

window.handleVocabSearch = function(query) {
  vocabSearchQuery = query || '';
  renderVocabList();
};

window.setVocabCategory = function(cat, btnEl) {
  activeVocabCategory = cat;
  const pills = document.querySelectorAll('.vocab-filter-pill');
  pills.forEach(p => p.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderVocabList();
};

window.pronounceWord = function(word) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.9;
  window.speechSynthesis.speak(utterance);
};

window.renderVocabList = function() {
  const container = document.getElementById('vocabListContainer');
  if (!container) return;

  const q = vocabSearchQuery.toLowerCase().trim();
  const filtered = EAP_VOCABULARY_DATA.filter(item => {
    const matchesCat = activeVocabCategory === 'all' || item.cat === activeVocabCategory;
    const matchesQuery = !q || item.word.toLowerCase().includes(q) || item.meaning.toLowerCase().includes(q) || item.ex.toLowerCase().includes(q);
    return matchesCat && matchesQuery;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 30px; font-style: italic; color: var(--ink-soft);">Tidak ada kosakata yang cocok dengan pencarian Anda.</div>';
    return;
  }

  let html = '';
  filtered.forEach(item => {
    html += `
      <div class="vocab-item-card">
        <div class="vocab-term-row">
          <div style="display:flex; align-items:center; gap:8px;">
            <span class="vocab-word">${escapeHtml(item.word)}</span>
            <button type="button" class="vocab-pronounce-btn" onclick="pronounceWord('${escapeHtml(item.word)}')" title="Dengarkan pengucapan audio">
              🔊 Pronounce
            </button>
          </div>
          <span class="vocab-pos">${escapeHtml(item.pos)}</span>
        </div>
        <div class="vocab-meaning">🇮🇩 ${escapeHtml(item.meaning)}</div>
        <div class="vocab-example">"${escapeHtml(item.ex)}"</div>
        <div class="vocab-badge-source">📌 Sumber: ${escapeHtml(item.src)}</div>
      </div>
    `;
  });

  container.innerHTML = html;
};

// Utility: HTML Escape
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Audio Player Helpers
window.setAudioSpeed = function(audioId, speed, btn) {
  const audio = document.getElementById(audioId);
  if (audio) {
    audio.playbackRate = speed;
  }
  if (btn && btn.parentElement) {
    const btns = btn.parentElement.querySelectorAll('.audio-speed-btn');
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
};

window.toggleTranscript = function(transId, btn) {
  const transEl = document.getElementById(transId);
  if (!transEl) return;
  const isShown = transEl.classList.toggle('show');
  if (btn) {
    btn.textContent = isShown ? '🙈 Sembunyikan Transkrip' : '👁️ Tampilkan Transkrip Teks';
  }
};
