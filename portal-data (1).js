/* ============================================================
   ST. GENEVIEVE PORTAL — SHARED DATA & STORAGE LAYER
   This file is loaded by both index.html (student portal) and
   teacher.html (teacher portal) so both apps see the same
   students, exams, and submitted results.

   LIVE MODE: this is backed by a Google Apps Script web app
   (see AppsScript_Code.gs) which reads/writes a Google Sheet —
   that's what makes data sync across different devices/browsers.
   Set SCRIPT_URL below to your deployed Apps Script web app URL.
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

// ───────────────────────── PORTAL PASSWORD ─────────────────────────
// Shared password for ALL students. Change this to whatever you want.
// Keep it simple enough for your students to remember!
const PORTAL_PASSWORD = 'stgen2026';

// ───────────────────────── SUBJECTS ─────────────────────────
const SUBJECTS = [
  { id: "math",          name: "Mathematics",             icon: "➕", color: "#7A1C2E" },
  { id: "english",       name: "English",                 icon: "📖", color: "#C0884A" },
  { id: "kiswahili",     name: "Kiswahili",               icon: "🇰🇪", color: "#9B4D62" },
  { id: "re",            name: "Religious Education",     icon: "✝️",  color: "#5B4A8A" },
  { id: "environmental", name: "Environmental Activities",icon: "🌿", color: "#3A7D44" },
  { id: "creative-arts", name: "Creative Arts",           icon: "🎨", color: "#D4620A" },
  { id: "psychomotor",   name: "Psychomotor Activities",  icon: "🏃", color: "#1A6B8A" },
  { id: "Kiswahili",   name: "Kiswahili",  icon: "🏃", color: "#1A6B8A" },
  
  // ADD MORE SUBJECTS HERE
];

// ───────────────────────── EXAMS (seed/fallback) ─────────────────────────
// NOTE: This is now just the STARTING set. Once your Apps Script backend
// is live, exams created via the teacher "Create Exam" form are saved
// there and merged in at runtime — see loadAllExams() below. EXAMS stays
// as a fallback in case the backend is unreachable (e.g. offline demo).
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

// PASTE YOUR APPS SCRIPT WEB APP URL HERE (ends in /exec):
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxyOq0jpvS0vl_oQV5fZoUi28z2QvqipOjFH3X9nL4Ua0l44k6HLVIlRF8Edf5tkPPI/exec';

async function scriptGet_(action, params) {
  const qs = new URLSearchParams({ action, ...(params || {}) }).toString();
  const res = await fetch(`${SCRIPT_URL}?${qs}`);
  return res.json();
}

// Sent as text/plain (NOT application/json) on purpose — this avoids a
// CORS preflight request, which Apps Script web apps don't handle well.
// The script still parses the body as JSON on its end.
//
// IMPORTANT: this is fired with mode:'no-cors'. Apps Script web app POST
// responses frequently come back without an Access-Control-Allow-Origin
// header, even when the deployment is configured correctly (Execute as:
// Me, Who has access: Anyone) — this is a longstanding Apps Script quirk,
// not a config mistake. With mode:'cors' (the default), the browser
// blocks reading that response and fetch() throws, even though the
// write actually reached and ran on the server. GET requests don't have
// this problem. So writes are fire-and-forget here (we can't read the
// response body — it comes back opaque), and every caller below follows
// up with a real GET to confirm and fetch the fresh saved state.
async function scriptPost_(action, payload) {
  await fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    redirect: 'follow',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ action, ...payload }),
  });
}


// In-memory cache of submissions for this page load (refreshed on each
// write, and on each render call) — avoids hammering the API on every
// single read.
let _subCache = null;
async function allSubmissions_(forceRefresh) {
  if (_subCache && !forceRefresh) return _subCache;
  try {
    const data = await scriptGet_('getSubmissions');
    _subCache = data.ok ? data.submissions : [];
  } catch (e) {
    console.error('Could not reach Apps Script backend for submissions:', e);
    _subCache = [];
  }
  return _subCache;
}

/* ============================================================
   STORE — the swappable data layer.
   LIVE MODE: backed by the Apps Script web app (set SCRIPT_URL
   above). All reads/writes go through `fetch`, so submit →
   pending → teacher review/override → release → student sees
   result works across any device, not just one browser.
   ============================================================ */
// After a write, scriptPost_ can't hand us the saved row directly anymore
// (see the comment above scriptPost_), so we force-refresh submissions
// from a real GET and pull the row back out of that. This is also just a
// more trustworthy source of truth than an echoed response would be,
// since it confirms the write actually landed in the Sheet.
async function refreshedSubmission_(studentId, examId) {
  const all = await allSubmissions_(true);
  return all.find(s => s.studentId === studentId && s.examId === examId) || null;
}

const Store = {
  // autoScore and autoTotal are no longer sent — the Apps Script
  // calculates the score server-side using the stored ans values
  // so students can never read correct answers from the browser.
  async submitExam(studentId, examId, subjectId, answers) {
    await scriptPost_('submitExam', { studentId, examId, subjectId, answers });
    return refreshedSubmission_(studentId, examId);
  },

  async getSubmission(studentId, examId) {
    const all = await allSubmissions_();
    return all.find(s => s.studentId === studentId && s.examId === examId) || null;
  },

  async getReleasedForStudent(studentId) {
    const all = await allSubmissions_();
    return all.filter(s => s.studentId === studentId && s.status === 'released');
  },

  async getAllForStudent(studentId) {
    const all = await allSubmissions_();
    return all.filter(s => s.studentId === studentId);
  },

  async getAllForGrade(grade) {
    const all = await allSubmissions_();
    const studentIds = STUDENTS.filter(s => s.grade === grade).map(s => s.id);
    return all.filter(s => studentIds.includes(s.studentId));
  },

  async overrideAnswer(studentId, examId, questionIndex, markCorrect, exam) {
    await scriptPost_('overrideAnswer', { studentId, examId, questionIndex, markCorrect, questions: exam.questions });
    return refreshedSubmission_(studentId, examId);
  },

  async saveRemarks(studentId, examId, remarks) {
    await scriptPost_('saveRemarks', { studentId, examId, remarks });
    return refreshedSubmission_(studentId, examId);
  },

  async releaseResult(studentId, examId) {
    await scriptPost_('releaseResult', { studentId, examId });
    return refreshedSubmission_(studentId, examId);
  },

  async unreleaseResult(studentId, examId) {
    await scriptPost_('unreleaseResult', { studentId, examId });
    return refreshedSubmission_(studentId, examId);
  },
};

/* ============================================================
   EXAM SYNC — merges teacher-created exams (saved to the
   Apps Script backend) into the EXAMS object so they show up
   on every device, not just the one that created them.
   Call `await loadAllExams()` once on page load, BEFORE
   rendering anything, in both index.html and teacher.html.
   ============================================================ */
async function loadAllExams() {
  try {
    const data = await scriptGet_('getExams');
    if (data.ok) {
      data.exams.forEach(exam => {
        const subjectId = exam.subjectId;
        if (!EXAMS[subjectId]) EXAMS[subjectId] = [];
        const idx = EXAMS[subjectId].findIndex(e => e.id === exam.id);
        const examNoSubject = { id: exam.id, title: exam.title, desc: exam.desc, grades: exam.grades, questions: exam.questions };
        if (exam.deadline) examNoSubject.deadline = exam.deadline;
        if (idx >= 0) EXAMS[subjectId][idx] = examNoSubject;
        else EXAMS[subjectId].push(examNoSubject);
      });
    }
  } catch (e) {
    console.error('Could not reach Apps Script backend for exams — using built-in exams only:', e);
  }

  // Strip ans from ALL exams (including the hardcoded fallback ones) so
  // correct answers are never readable in the browser's DevTools.
  Object.values(EXAMS).forEach(list => list.forEach(exam => {
    if (exam.questions) exam.questions.forEach(q => { delete q.ans; });
  }));
}

// Called by teacher.html's saveNewExam() so new exams are saved to the
// shared backend (not just the local EXAMS object in memory).
// Since scriptPost_ can no longer read the write response (see comment
// above scriptPost_), we confirm success by doing a fresh GET afterward
// and checking the exam actually landed in the sheet. We retry the
// verification a couple of times with a short delay in case there's a
// brief lag between the write finishing and it being readable again.
async function saveExamToBackend(subjectId, exam) {
  try {
    await scriptPost_('saveExam', { subjectId, exam });

    let landed = false;
    for (let attempt = 0; attempt < 4 && !landed; attempt++) {
      if (attempt > 0) await new Promise(r => setTimeout(r, 800));
      const data = await scriptGet_('getExams');
      const ids = (data.exams || []).map(e => e.id);
      console.log(`saveExamToBackend verify attempt ${attempt}: ok=${data.ok} examCount=${ids.length} lookingFor=${exam.id} found=${ids.includes(exam.id)}`);
      landed = !!(data.ok && ids.includes(exam.id));
    }
    if (!landed) console.error('saveExamToBackend: exam still not found on backend after 4 verify attempts — see logs above');
    return landed;
  } catch (e) {
    console.error('saveExamToBackend failed:', e);
    return false;
  }
}
  
