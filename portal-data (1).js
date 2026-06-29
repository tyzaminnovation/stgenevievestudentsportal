/* ============================================================
   ST. GENEVIEVE PORTAL — SHARED DATA & STORAGE LAYER
   This file is loaded by both student-portal.html and teacher-portal.html
   so both apps see the same students, exams, and submitted results.

   STORAGE NOTE:
   Right now this uses localStorage as a DEMO stand-in for a real shared
   database, so you can click through the whole flow on one device.
   When ready to go live with real cross-device sync, replace the
   functions inside `Store` with Firebase calls — everything else
   (UI, grading, release flow) stays exactly the same.
   ============================================================ */

// ───────────────────────── STUDENTS ─────────────────────────
const STUDENTS = [
  // ── PP2 ──
  { name: "Shadrack",   id: "SGP-PP2-001", grade: "PP2" },
  { name: "Tiffany",    id: "SGP-PP2-002", grade: "PP2" },
  { name: "Kyra",       id: "SGP-PP2-003", grade: "PP2" },
  { name: "Victor",     id: "SGP-PP2-004", grade: "PP2" },
  { name: "Ariannah",   id: "SGP-PP2-005", grade: "PP2" },
  { name: "Lyon",       id: "SGP-PP2-006", grade: "PP2" },
  { name: "Destiny",    id: "SGP-PP2-007", grade: "PP2" },
  { name: "Aishavine",  id: "SGP-PP2-008", grade: "PP2" },
  { name: "Patience",   id: "SGP-PP2-009", grade: "PP2" },
  { name: "Ashley",     id: "SGP-PP2-010", grade: "PP2" },

  // ── Grade 1 ──
  { name: "Dennis O.",  id: "SGP-G1-001", grade: "Grade 1" },
  { name: "Emmanuel",   id: "SGP-G1-002", grade: "Grade 1" },
  { name: "Kai",        id: "SGP-G1-003", grade: "Grade 1" },
  { name: "Dennis M.",  id: "SGP-G1-004", grade: "Grade 1" },

  // ── Grade 2 ──
  { name: "Alva Atieno",    id: "SGP-G2-001", grade: "Grade 2" },
  { name: "Ari Raore",      id: "SGP-G2-002", grade: "Grade 2" },
  { name: "Velma Nyambura", id: "SGP-G2-003", grade: "Grade 2" },
  { name: "Kyla Mumbe",     id: "SGP-G2-004", grade: "Grade 2" },
  { name: "Roy Waweru",     id: "SGP-G2-005", grade: "Grade 2" },
  { name: "Patience Myra",  id: "SGP-G2-006", grade: "Grade 2" },

  // ── Grade 3 ──
  { name: "Lloyd",     id: "SGP-G3-001", grade: "Grade 3" },
  { name: "Joy",       id: "SGP-G3-002", grade: "Grade 3" },
  { name: "Fredricho", id: "SGP-G3-003", grade: "Grade 3" },

  // ── Grade 4 ──
  { name: "Kourtney",  id: "SGP-G4-001", grade: "Grade 4" },

  // ADD MORE STUDENTS HERE
];

// ───────────────────────── TEACHERS ─────────────────────────
const TEACHERS = [
  { name: "PP2 Class Teacher",     id: "SGP-T-PP2", grade: "PP2"     },
  { name: "Grade 1 Class Teacher", id: "SGP-T-G1",  grade: "Grade 1" },
  { name: "Grade 2 Class Teacher", id: "SGP-T-G2",  grade: "Grade 2" },
  { name: "Grade 3 Class Teacher", id: "SGP-T-G3",  grade: "Grade 3" },
  { name: "Grade 4 Class Teacher", id: "SGP-T-G4",  grade: "Grade 4" },
  { name: "Grade 5 Class Teacher", id: "SGP-T-G5",  grade: "Grade 5" },
  { name: "Grade 6 Class Teacher", id: "SGP-T-G6",  grade: "Grade 6" },
  // ADD MORE TEACHERS HERE
];

// ───────────────────────── ENCOURAGEMENTS ─────────────────────────
const ENCOURAGEMENTS = [
  "You are capable of amazing things. Every question you answer is a step forward!",
  "Mistakes are proof that you are trying. Keep going — you've got this! 💪",
  "Every expert was once a beginner. Today you are one step closer to greatness.",
  "Your brain grows stronger with every problem you solve. Keep pushing!",
  "Hard work beats talent when talent doesn't work hard. You're working hard — that matters!",
  "Believe in yourself. You are smarter than you think and braver than you feel.",
  "One question at a time, one exam at a time — you're building something amazing.",
  "Learning is a superpower, and you are a superhero in training! 🦸",
];

// ───────────────────────── SUBJECTS ─────────────────────────
const SUBJECTS = [
  { id: "math",      name: "Mathematics",        icon: "➕", color: "#7A1C2E" },
  { id: "kiswahili", name: "Kiswahili",           icon: "🇰🇪", color: "#9B4D62" },
  { id: "english",   name: "English",             icon: "📖", color: "#C0884A" },
  { id: "re",        name: "Religious Education", icon: "✝️", color: "#5B4A8A" },
  // ADD MORE SUBJECTS HERE
];

// ───────────────────────── EXAMS ─────────────────────────
const EXAMS = {
  math: [
    { id: "math-pp2-t1", title: "Term 1 Assessment", desc: "Numbers 1–20, basic counting", grades: ["PP2"],
      questions: [
        { q: "How many apples are in 3 groups of 2?", opts: ["4","5","6","7"], ans: 2 },
        { q: "What number comes after 15?", opts: ["13","14","16","17"], ans: 2 },
        { q: "Which number is the biggest?", opts: ["9","12","7","4"], ans: 1 },
        { q: "5 + 3 = ?", opts: ["7","8","9","10"], ans: 1 },
        { q: "Count: ⭐⭐⭐⭐⭐⭐. How many stars?", opts: ["4","5","6","7"], ans: 2 },
      ] },
    { id: "math-pp2-t2", title: "Term 2 Assessment", desc: "Shapes and simple addition", grades: ["PP2"],
      questions: [
        { q: "A square has how many sides?", opts: ["3","4","5","6"], ans: 1 },
        { q: "2 + 2 = ?", opts: ["3","4","5","6"], ans: 1 },
        { q: "Which shape is round?", opts: ["Square","Triangle","Circle","Rectangle"], ans: 2 },
        { q: "10 - 3 = ?", opts: ["6","7","8","9"], ans: 1 },
        { q: "A triangle has how many corners?", opts: ["2","3","4","5"], ans: 1 },
      ] },
    { id: "math-g1-t1", title: "Term 1 Assessment", desc: "Addition and subtraction up to 30", grades: ["Grade 1"],
      questions: [
        { q: "12 + 8 = ?", opts: ["18","19","20","21"], ans: 2 },
        { q: "25 - 10 = ?", opts: ["14","15","16","17"], ans: 1 },
        { q: "What is 5 × 2?", opts: ["7","8","10","12"], ans: 2 },
        { q: "Which number is even?", opts: ["3","5","7","8"], ans: 3 },
        { q: "30 - 15 = ?", opts: ["13","14","15","16"], ans: 2 },
      ] },
    { id: "math-g2-t1", title: "Term 1 Assessment", desc: "Multiplication and division basics", grades: ["Grade 2"],
      questions: [
        { q: "3 × 4 = ?", opts: ["10","11","12","13"], ans: 2 },
        { q: "20 ÷ 4 = ?", opts: ["3","4","5","6"], ans: 2 },
        { q: "What is the value of 6²?", opts: ["12","18","36","42"], ans: 2 },
        { q: "Half of 50 is?", opts: ["20","25","30","35"], ans: 1 },
        { q: "7 × 6 = ?", opts: ["40","41","42","43"], ans: 2 },
      ] },
    { id: "math-g3-t1", title: "Term 1 Assessment", desc: "Fractions and number patterns", grades: ["Grade 3"],
      questions: [
        { q: "What is ½ of 80?", opts: ["30","35","40","45"], ans: 2 },
        { q: "What fraction of a week is 3 days?", opts: ["1/3","3/7","1/2","2/5"], ans: 1 },
        { q: "Continue the pattern: 2, 4, 8, 16, ___", opts: ["18","24","32","30"], ans: 2 },
        { q: "What is 1/4 expressed as a percentage?", opts: ["20%","25%","30%","40%"], ans: 1 },
        { q: "56 ÷ 8 = ?", opts: ["6","7","8","9"], ans: 1 },
      ] },
    { id: "math-g4-t1", title: "Term 1 Assessment", desc: "Long multiplication, area and perimeter", grades: ["Grade 4"],
      questions: [
        { q: "What is the perimeter of a square with side 7 cm?", opts: ["21 cm","28 cm","35 cm","14 cm"], ans: 1 },
        { q: "Area of a rectangle 8m × 5m?", opts: ["26 m²","35 m²","40 m²","45 m²"], ans: 2 },
        { q: "15 × 12 = ?", opts: ["160","170","180","190"], ans: 2 },
        { q: "What is 3/5 of 100?", opts: ["30","45","60","75"], ans: 2 },
        { q: "Round 4,567 to the nearest hundred?", opts: ["4,500","4,600","4,570","4,000"], ans: 1 },
      ] },
    { id: "math-g5-t1", title: "Term 1 Assessment", desc: "Percentages, decimals, averages", grades: ["Grade 5"],
      questions: [
        { q: "What is 20% of 250?", opts: ["40","45","50","55"], ans: 2 },
        { q: "0.75 as a fraction is?", opts: ["7/5","3/4","3/5","4/5"], ans: 1 },
        { q: "Average of 10, 20, 30 is?", opts: ["15","20","25","30"], ans: 1 },
        { q: "What is 2.5 × 4?", opts: ["8","9","10","11"], ans: 2 },
        { q: "Which is largest: 3/4, 0.7, 70%, 2/3?", opts: ["3/4","0.7","70%","2/3"], ans: 0 },
      ] },
    { id: "math-g6-t1", title: "Term 1 Assessment", desc: "Algebra, ratio, and geometry", grades: ["Grade 6"],
      questions: [
        { q: "If x + 7 = 15, what is x?", opts: ["6","7","8","9"], ans: 2 },
        { q: "Ratio of 12:16 in simplest form?", opts: ["3:4","4:5","2:3","6:8"], ans: 0 },
        { q: "Area of a triangle with base 10 cm and height 6 cm?", opts: ["30 cm²","60 cm²","32 cm²","28 cm²"], ans: 0 },
        { q: "What is 15% of 200?", opts: ["25","30","35","40"], ans: 1 },
        { q: "Solve: 3y = 27. What is y?", opts: ["7","8","9","10"], ans: 2 },
      ] },
  ],
  kiswahili: [
    { id: "kisw-g2-2026", title: "Kiswahili — Mtihani wa Mwaka 2026", desc: "Kusoma, Sarufi, Ufahamu, Uandishi", grades: ["Grade 2"], deadline: "2026-06-20",
      questions: [
        { q: "Kusoma kwa sauti — Jibu swali: Mtoto alipewa zawadi gani na baba yake?", opts: ["Nguo nyeupe","Zawadi ya pesa","Nguo nyeupe na mbuzi","Chakula"], ans: 2 },
        { q: "Nani alimpa mtoto zawadi tele?", opts: ["Mama","Baba","Mwalimu","Dada"], ans: 1 },
        { q: "Mtoto alivyovaa nguo ya rangi gani?", opts: ["Nyekundu","Nyeupe","Bluu","Njano"], ans: 1 },
        { q: "Baba alimpa zawadi ngapi?", opts: ["Moja","Mbili","Tatu","Nne"], ans: 1 },
        { q: "Nani alimfurahisha mtoto zaidi?", opts: ["Shangazi","Baba","Chifu","Mama"], ans: 1 },
        { q: "Akaka alitumia nini kusafiri yeye na familia yake kwenda hospitalini?", opts: ["Baiskeli","Pikipiki","Basi","Mguu"], ans: 2 },
        { q: "Nani alisema 'Nadhani basi hili linaenda kwa kasi'?", opts: ["Akaka","Lucy","Dereva","Daktari"], ans: 1 },
        { q: "Lucy alikuwa akivaa nini alipokuwa akitembea kwenda dukani?", opts: ["Suruali nyekundu","Gauni nyekundu","Kanzu nyeupe","Shati la bluu"], ans: 1 },
        { q: "Ni nini kilifanyika kwa basi hilo baadaye?", opts: ["Lilisimama stendi","Liliharibika","Lilikwenda hospitali","Lilipotea"], ans: 0 },
        { q: "Wapi Lucy na mama yake walikuwa wanaenda?", opts: ["Hospitalini","Shuleni","Dukani","Nyumbani"], ans: 2 },
        { q: "Punda hutusaidia vipi? (Mwanafunzi ajibu)", opts: ["Kubeba mizigo","Kupiga kelele","Kucheza michezo","Kusaidia kupika"], ans: 0 },
        { q: "Taja wanyoma wawili wa nyumbani:", opts: ["Simba na tembo","Ng'ombe na kuku","Chui na fisi","Nyati na mbwa"], ans: 1 },
        { q: "Mnyama anayetoa maziwa ni:", opts: ["Kuku","Ng'ombe","Kondoo","Nguruwe"], ans: 1 },
        { q: "Kuku ana faidagani kwetu?", opts: ["Anatupa nyama na mayai","Anatupa maziwa","Anatucheza","Anatuimbia"], ans: 0 },
        { q: "Mayai hutoka kwa mnyama gani?", opts: ["Ng'ombe","Mbuzi","Kuku","Kondoo"], ans: 2 },
        { q: "Familia yetu ni ___. Chagua jibu sahihi (kubwa, mkubwa, mrefu):", opts: ["kubwa","mkubwa","mrefu","nzuri"], ans: 0 },
        { q: "Mti huu ni ___. Chagua jibu sahihi (kitamu, motomu):", opts: ["kitamu","motomu","kubwa","mrefu"], ans: 1 },
        { q: "Nyinyi milwashatao. Andika majibu ya vifaa vya sebuleni — kiti ni vifaa vya:", opts: ["Jikoni","Bafuni","Sebuleni","Chumbani"], ans: 2 },
        { q: "Tumia 'huu': ___ ni mti mzuri.", opts: ["Huu","Huyu","Hawa","Hizi"], ans: 0 },
        { q: "Tumia 'huyu': ___ ni mtoto mzuri.", opts: ["Huu","Huyu","Hawa","Hizi"], ans: 1 },
        { q: "Watoto wanapenda kucheza nje. Haki ya watoto hii inaitwa:", opts: ["Haki ya chakula","Haki ya mchezo","Haki ya elimu","Haki ya mavazi"], ans: 1 },
        { q: "Watoto wanapenda kusomea vitabu. Haki hii ni:", opts: ["Haki ya mchezo","Haki ya chakula","Haki ya elimu","Haki ya nyumba"], ans: 2 },
        { q: "Chora haki ya watoto — Chakula ni muhimu kwa sababu:", opts: ["Inatupatia nguvu","Inatufanya wachovu","Haina umuhimu","Inatudhuru"], ans: 0 },
        { q: "Nyumba inatupatia:", opts: ["Njaa","Makao salama","Uchovu","Hofu"], ans: 1 },
        { q: "Andika sentensi moja kuhusu familia yako — Familia yangu ni:", opts: ["ndogo na yenye furaha","mbaya","ya hasira","ya huzuni"], ans: 0 },
      ] },
  ],
  english: [
    { id: "eng-g2-2026", title: "English Language — 2026 Assessment", desc: "Listening, Comprehension, Language Use, Writing", grades: ["Grade 2"], deadline: "2026-06-20",
      questions: [
        { q: "What would you like to talk about? (accidents at home) — Which sharp object can cut us?", opts: ["Spoon","Knife","Fork","Plate"], ans: 1 },
        { q: "What can happen when we play with fire?", opts: ["We get cold","We get wet","We get burned","We get lost"], ans: 2 },
        { q: "What can happen when we play on the road?", opts: ["We can get hit by a car","We can get wet","We can sleep","We can eat"], ans: 0 },
        { q: "Climbing trees can cause which accident?", opts: ["Drowning","Falling and getting hurt","Burning","Cutting"], ans: 1 },
        { q: "Where is Lulu placing her books in the story?", opts: ["On the table","Under the desk","On the shelf","In her bag"], ans: 2 },
        { q: "What was Lucy wearing when she walked to the shop?", opts: ["A blue dress","A red dress","A green dress","A white dress"], ans: 1 },
        { q: "Who said 'I think this bus is speeding'?", opts: ["Lucy","Lucy's mother","The driver","A passenger"], ans: 1 },
        { q: "Where were Lucy and her mother going?", opts: ["To school","To the hospital","To the shop","To the market"], ans: 2 },
        { q: "What did the driver say when Lucy's mother spoke?", opts: ["He stopped the bus","He said 'This driver could be sleepy'","He agreed","He ignored them"], ans: 1 },
        { q: "Whose class is arranging books on the shelf?", opts: ["Lucy's class","Cheche's class","Lulu's class","The teacher's class"], ans: 1 },
        { q: "How many books fit on one shelf?", opts: ["5","8","10","12"], ans: 2 },
        { q: "Where does Lulu place her books?", opts: ["On the desk","On the shelf","In the bag","Under the table"], ans: 1 },
        { q: "Match: Boy — opposite is:", opts: ["Man","Girl","Baby","Mother"], ans: 1 },
        { q: "Match: Bull — opposite is:", opts: ["Ram","Cow","Hen","Ewe"], ans: 1 },
        { q: "Match: Father — opposite is:", opts: ["Son","Brother","Mother","Uncle"], ans: 2 },
        { q: "Use 'beside', 'above' or 'below' — Put your hand ___ your head:", opts: ["beside","above","below","through"], ans: 1 },
        { q: "You can stand ___ the tank:", opts: ["beside","above","at","through"], ans: 0 },
        { q: "The boat stopped ___ the bridge:", opts: ["beside","above","at","below"], ans: 3 },
        { q: "Add '-er' to 'tall': A tortoise is ___ than a frog:", opts: ["taller","taller","tallest","tall"], ans: 0 },
        { q: "Add '-er' to 'cold': Today is ___ than yesterday:", opts: ["more cold","coldest","colder","cold"], ans: 2 },
        { q: "Write the plural of 'One Banana' — Many:", opts: ["Banana","Bananas","Bananae","Bananies"], ans: 1 },
        { q: "Write the plural of 'One Duster' — Many:", opts: ["Dusters","Dusteres","Duster","Dusties"], ans: 0 },
        { q: "Write the plural of 'One Potato' — Many:", opts: ["Potatos","Potatoe","Potatoes","Potatoies"], ans: 2 },
        { q: "Complete the sentence using 'This' or 'These': ___ is a flower.", opts: ["This","These","Those","That"], ans: 0 },
        { q: "Complete: ___ are trees.", opts: ["This","These","That","A"], ans: 1 },
        { q: "Complete: ___ are eggs (the picture shows eggs).", opts: ["This","A","These","That"], ans: 2 },
        { q: "Complete: The ___ is playing. (children / child)", opts: ["children","child","childs","childrens"], ans: 1 },
        { q: "Complete: The ___ are playing. (children / child)", opts: ["child","children","childs","childrens"], ans: 1 },
      ] },
  ],
  re: [
    {
      id: "re-pp2-endterm2026",
      title: "Religious Education — End Term 2026",
      desc: "PP2 Religious Education Examination",
      grades: ["PP2"],
      questions: [
        { q: "Who created you?", opts: ["God created me","My parents created me","Teachers created me","Nobody created me"], ans: 0 },
        { q: "We go to church on ___.", opts: ["Sunday","Monday","Tuesday","Wednesday"], ans: 0 },
        { q: "Who is the father of Jesus?", opts: ["King Herod","Joseph","God / Joseph","Moses"], ans: 2 },
        { q: "Who is the mother of Jesus?", opts: ["Elizabeth","Ruth","Mary","Martha"], ans: 2 },
        { q: "We should ___ our parents.", opts: ["obey","fear","ignore","shout at"], ans: 0 },
        { q: "When given a gift we should say ___.", opts: ["sorry","thank you","goodbye","hello"], ans: 1 },
        { q: "We should ___ what we have with others.", opts: ["share","steal","hide","keep"], ans: 0 },
        { q: "Which of these is one of God\'s creations?", opts: ["A car","A phone","The sun ☀️","A house"], ans: 2 },
        { q: "Which of these is one of God\'s creations?", opts: ["A television","A fish 🐟","A shoe","A pen"], ans: 1 },
        { q: "Which of these is one of God\'s creations?", opts: ["A road","A building","A bird 🐦","A book"], ans: 2 },
        { q: "Which of these is one of God\'s creations?", opts: ["A tree 🌳","A table","A chair","A clock"], ans: 0 },
        { q: "Which of these is one of God\'s creations?", opts: ["A lamp","The moon 🌙","A window","A door"], ans: 1 },
        { q: "The Bible is a holy book. It teaches us about ___.", opts: ["Sports","God and how to live","Cooking","Science"], ans: 1 },
        { q: "God created the world in ___ days.", opts: ["5","6","7","8"], ans: 1 },
        { q: "On which day did God rest?", opts: ["The 5th day","The 6th day","The 7th day","The 8th day"], ans: 2 },
      ]
    },
  ],
};

/* ============================================================
   STORE — the swappable data layer.
   DEMO MODE: backed by localStorage so the whole flow (submit →
   pending → teacher review/override → release → student sees result)
   works right now on one device/browser for testing.

   TO GO LIVE: replace the body of each function below with the
   equivalent Firebase call. Function signatures stay the same so
   nothing else in the app needs to change.
   ============================================================ */

const Store = {
  _key() { return 'sgp_submissions_v1'; },

  _all() {
    try {
      const raw = localStorage.getItem(this._key());
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  },

  _saveAll(data) {
    localStorage.setItem(this._key(), JSON.stringify(data));
  },

  // Submission key: studentId + "_" + examId
  _subKey(studentId, examId) { return studentId + '__' + examId; },

  // Student submits an exam — auto-graded, status = pending
  async submitExam(studentId, examId, subjectId, answers, autoScore, autoTotal) {
    const all = this._all();
    const key = this._subKey(studentId, examId);
    all[key] = {
      studentId, examId, subjectId,
      answers,                     // { questionIndex: chosenOptionIndex }
      autoScore, autoTotal,        // system's auto-grade
      finalScore: autoScore,       // teacher can override; starts same as auto
      finalTotal: autoTotal,
      status: 'pending',           // 'pending' | 'released'
      remarks: '',
      submittedAt: new Date().toISOString(),
      releasedAt: null,
    };
    this._saveAll(all);
    return all[key];
  },

  // Get one submission
  async getSubmission(studentId, examId) {
    const all = this._all();
    return all[this._subKey(studentId, examId)] || null;
  },

  // Get all submissions for a student (released only — for student view)
  async getReleasedForStudent(studentId) {
    const all = this._all();
    return Object.values(all).filter(s => s.studentId === studentId && s.status === 'released');
  },

  // Get ALL submissions for a student regardless of status (for "pending" badges)
  async getAllForStudent(studentId) {
    const all = this._all();
    return Object.values(all).filter(s => s.studentId === studentId);
  },

  // Get all submissions for a whole grade (for teacher dashboard)
  async getAllForGrade(grade) {
    const all = this._all();
    const studentIds = STUDENTS.filter(s => s.grade === grade).map(s => s.id);
    return Object.values(all).filter(s => studentIds.includes(s.studentId));
  },

  // Teacher overrides a specific question's correctness, recalculates score
  async overrideAnswer(studentId, examId, questionIndex, markCorrect, exam) {
    const all = this._all();
    const key = this._subKey(studentId, examId);
    const sub = all[key];
    if (!sub) return null;
    if (!sub.overrides) sub.overrides = {};
    sub.overrides[questionIndex] = markCorrect; // true/false override
    // Recalculate final score using overrides where present, auto-grade otherwise
    let correct = 0;
    exam.questions.forEach((q, i) => {
      if (sub.overrides && sub.overrides.hasOwnProperty(i)) {
        if (sub.overrides[i]) correct++;
      } else {
        if (sub.answers[i] === q.ans) correct++;
      }
    });
    sub.finalScore = correct;
    sub.finalTotal = exam.questions.length;
    this._saveAll(all);
    return sub;
  },

  // Teacher saves remarks
  async saveRemarks(studentId, examId, remarks) {
    const all = this._all();
    const key = this._subKey(studentId, examId);
    if (!all[key]) return null;
    all[key].remarks = remarks;
    this._saveAll(all);
    return all[key];
  },

  // Teacher releases the result to the student
  async releaseResult(studentId, examId) {
    const all = this._all();
    const key = this._subKey(studentId, examId);
    if (!all[key]) return null;
    all[key].status = 'released';
    all[key].releasedAt = new Date().toISOString();
    this._saveAll(all);
    return all[key];
  },

  // Teacher un-releases (pulls a result back for further review)
  async unreleaseResult(studentId, examId) {
    const all = this._all();
    const key = this._subKey(studentId, examId);
    if (!all[key]) return null;
    all[key].status = 'pending';
    this._saveAll(all);
    return all[key];
  },
};
