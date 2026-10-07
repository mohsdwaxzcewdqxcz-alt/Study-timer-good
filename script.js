const i18n = {
  ar: {
    main_title: "مؤقت المذاكرة ونظام الامتحانات", select_subject: "اختر المادة للبدء", select_session_instruction: "اختر نوع الجلسة للبدء:",
    btn_homework: "واجب ورقي (120 دقيقة - 100 نقطة)", btn_study: "مذاكرة درس", btn_summary: "تلخيص مادة", btn_back: "العودة للقائمة الرئيسية",
    label_time: "حدد مدة الجلسة بالدقائق (1 - 120 دقيقة):", btn_start: "ابدأ الجلسة ⏱️", btn_cancel: "إلغاء", timer_instruction: "قم بالعمل في الكشكول الآن!",
    timer_break_instruction: "استمتع بوقت الاستراحة والترفيه! 🎮🎬",
    btn_finish: "انتهاء", btn_abort: "إلغاء الجلسة", btn_home: "الرئيسية", history_title: "سجل الإنجازات", btn_clear_all: "مسح الكل",
    empty_history: "لا توجد سجلات بعد", setup_title: "إعداد جلسة {type}: {subject}", study_topic_label: "عنوان الدرس المراد مذاكرته:", summary_topic_label: "عنوان الموضوع المراد تلخيصه:",
    untitled: "بدون عنوان", topic_label: "الموضوع: ", result_title_success: "أحسنت! أتممت {type} 🎉", result_title_failed: "انتهى الوقت! ⏰",
    result_msg_success: "أنهيت {type} <strong>{subject}</strong> {topic} في:<br><br><span style='font-size: 1.3rem; color: #3182ce;'>{time}</span>{reward}",
    result_msg_failed: "لم تنهِ {type} <strong>{subject}</strong> في الوقت المحدد ({minutes} دقيقة).", time_taken_str: "{mins} د و {secs} ث",
    time_expired_str: "انتهى الوقت ({minutes} د)", completed_in: "تم في: ", time_spent_label: "مدة الحل: ", status_failed: "الحالة: ", delete_btn: "حذف",
    confirm_clear_all: "مسح جميع السجلات؟", type_homework: "واجب", type_study: "مذاكرة", type_summary: "تلخيص", 
    type_gaming: "استراحة لعب", type_watch: "استراحة مشاهدة",
    pause_btn_text: "إيقاف مؤقت", resume_btn_text: "استئناف", pause_credits_label: "الفرص: ",
    gaming_label: "{m} د للعب", watch_label: "{m} د للمشاهدة",
    available_label: "المتاح: {m} دقيقة",
    reward_msg: "<br><br><span style='color: #d69e2e; font-weight: bold;'>⭐حصلت على +{pts} نجمة!</span>",
    nav_instructions: "التعليمات ℹ️", nav_store: "المتجر 🛒", nav_logout: "خروج", nav_leaderboard: "لوحة الصدارة 🏆",
    label_username: "اسم المستخدم:", label_password: "كلمة المرور:", btn_login: "دخول",
    msg_no_account: "ليس لديك حساب؟", link_create_account: "إنشاء حساب جديد",
    break_section_title: "وقتا الاستراحة والمكافآت", btn_start_game: "بدء وقت اللعب 🎮", btn_start_watch: "بدء وقت المشاهدة 🎬",
    shop_title: "المتجر 🛒", shop_subtitle: "استبدل نجوم المذاكرة التي جمعتها بمكافآت ومتعة!", btn_create_product: "➕ إنشاء منتج جديد (200⭐)",
    btn_back_home: "العودة للرئيسية", add_item_title: "إنشاء منتج جديد للمتجر", add_item_cost: "⭐ تكلفة نشر منتج جديد: 200 نجمة",
    label_img_url: "رابط الصورة (URL):", label_item_title: "اسم المنتج:", label_item_desc: "الوصف:", label_item_price: "السعر بالنجوم (للمشترين):",
    btn_publish_item: "خصم 200⭐ ونشر المنتج", owner_badge: "منتجك (لا يمكنك شراؤه)", buy_btn: "شراء عادي",
    
    inst_title: "📖 دليل استخدام التطبيق", 
    inst_welcome_subtitle: "أهلاً بك! دليل مبسط لشرح كيفية الاستفادة الكاملة من مميزات الموقع:",
    inst_sec1_title: "1️⃣ نظام المذاكرة والمؤقت",
    inst_sec1_p1: "اختر المادة ثم حدد نوع الجلسة (واجب، مذاكرة، أو تلخيص).",
    inst_sec1_p2: "عند إتمام الجلسة في الوقت المحدد، ستحصل تلقائياً على ⭐ نجوم المكافأة في حسابك.",
    inst_sec1_p3: "يمكنك استخدام فرص الإيقاف المؤقت (⚡) عند الحاجة لأخذ استراحة سريعة أثناء المذاكرة.",
    inst_sec2_title: "2️⃣ امتحانات الأدمن والنقاط النادرة",
    inst_sec2_p1: "ينشر الأدمن امتحانات دورية، أجب عنها بدقة واحصل على العلامة الكاملة لتحصل على نقطة أدمن نادرة (💎).",
    inst_sec2_p2: "تمنحك نقاط الأدمن إمكانية الحصول على خصومات كبيرة وقوية على المنتجات في المتجر!",
    inst_sec3_title: "3️⃣ الأغاني والأفكار بالموقع",
    inst_sec3_p1: "اشتري عنصر 'أغاني وأفكار' (140⭐) من المتجر واكتب فكرتك أو أغنيتك المفضلة لإرسالها للأدمن.",
    inst_sec3_p2: "عند موافقة الأدمن، سيتم نشر فكرتك رسمياً داخل الموقع ليراها الجميع!",
    inst_sec4_title: "4️⃣ المتجر والمكافآت الترفيهية",
    inst_sec4_p1: "استبدل نجومك بـ وقتاً للعب (🎮) أو المشاهدة (🎬) وفعّلها مباشرة من الصفحة الرئيسية!",
    inst_sec4_p2: "يمكنك أيضاً شراء قوة 'مضاعف النجوم 2x' أو 'تجميد الستريك 🔥' للحفاظ على استمرارك.",
    btn_understand: "فهمت ذلك، العودة للرئيسية 🚀",
    
    currency_stars: "نجوم المذاكرة", currency_gems: "نقاط الأدمن", currency_credits: "فرص الإيقاف",
    waiting_exam_title: "صالة انتظار الامتحان المباشر",
    waiting_exam_desc: "في انتظار تحديد الامتحان ونشره بواسطة الأدمن...",
    exam_ready_title: "الامتحان جاهز الآن!",
    exam_ready_desc: "قام الأدمن بنشر الامتحان. يمكنك البدء الآن!",
    btn_start_exam_now: "بدء الامتحان الآن 🚀",
    btn_submit_exam: "إرسال الحل للإدمن 📤",
    status_online: "متصل الآن", status_offline: "غير متصل", status_banned: "محظور 🚫",
    admin_panel_title: "👑 لوحة تحكم الأدمن",
    admin_create_exam: "➕ إنشاء امتحان جديد",
    label_subject: "المادة:", label_repeat_type: "نوع التكرار:", label_duration: "مدة الامتحان (بالدقائق):", label_q_count: "عدد الأسئلة المطلوب الإجابة عليها:",
    btn_publish_exam: "نشر الامتحان 🚀", admin_users_list_title: "👥 قائمة المستخدمين وحالة التواجد والإدارة", admin_songs_title: "🎶 الأغاني والأفكار المقترحة في الموقع",
    admin_change_pass_title: "🔐 تغيير كلمة مرور الأدمن",
    label_new_admin_pass: "كلمة المرور الجديدة للأدمن:",
    btn_save_admin_pass: "حفظ كلمة المرور الجديدة 💾",
    msg_admin_pass_updated: "تم حفظ بيانات الأدمن الجديدة بنجاح! 🔑📧",
    msg_admin_pass_empty: "يرجى إدخال كلمة مرور جديدة أو 😏بريد إلكتروني جديد على الأقل!😎",
    subjects: {
      english: "اللغة الإنجليزية",
      history: "التاريخ",
      programming: "البرمجة",
      arabic: "اللغة العربية",
      gaming: "استراحة لعب",
      watch: "استراحة مشاهدة"
    }
  },
  en: {
    main_title: "Study Timer & Exam System", select_subject: "Select a Subject to Start", select_session_instruction: "Choose session type:",
    btn_homework: "Homework (120 mins - 100 Points)", btn_study: "Study Lesson", btn_summary: "Summarize Subject", btn_back: "Back to Main Menu",
    label_time: "Set Duration in minutes (1-120):", btn_start: "Start Session ⏱️", btn_cancel: "Cancel", timer_instruction: "Work on your notebook now!",
    timer_break_instruction: "Enjoy your break and entertainment time! 🎮🎬",
    btn_finish: "Finish", btn_abort: "Cancel Session", btn_home: "Home", history_title: "Achievements Log", btn_clear_all: "Clear All",
    empty_history: "No records yet", setup_title: "Setup {type} session: {subject}", study_topic_label: "Lesson Topic:", summary_topic_label: "Summary Topic:",
    untitled: "Untitled", topic_label: "Topic: ", result_title_success: "Great job! Completed {type} 🎉", result_title_failed: "Time's up! ⏰",
    result_msg_success: "Finished {type} <strong>{subject}</strong> {topic} in:<br><br><span style='font-size: 1.3rem; color: #3182ce;'>{time}</span>{reward}",
    result_msg_failed: "You did not finish {type} <strong>{subject}</strong> in time ({minutes} mins).", time_taken_str: "{mins}m {secs}s",
    time_expired_str: "Time expired ({minutes} mins)", completed_in: "Completed in: ", time_spent_label: "Time taken: ", status_failed: "Status: ", delete_btn: "Delete",
    confirm_clear_all: "Clear all records?", type_homework: "Homework", type_study: "Study", type_summary: "Summary", 
    type_gaming: "Gaming Break", type_watch: "Watch Break",
    pause_btn_text: "Pause", resume_btn_text: "Resume", pause_credits_label: "Credits: ",
    gaming_label: "{m} mins gaming", watch_label: "{m} mins watching",
    available_label: "Available: {m} mins",
    reward_msg: "<br><br><span style='color: #d69e2e; font-weight: bold;'>⭐ You earned +{pts} Stars!</span>",
    nav_instructions: "Instructions ℹ️️", nav_store: "Store 🛒", nav_logout: "Logout", nav_leaderboard: "Leaderboard 🏆",
    label_username: "Username:", label_password: "Password:", btn_login: "Login",
    msg_no_account: "Don't have an account?", link_create_account: "Create New Account",
    break_section_title: "Break Time & Rewards", btn_start_game: "Start Gaming Time 🎮", btn_start_watch: "Start Watching Time 🎬",
    shop_title: "Store 🛒", shop_subtitle: "Exchange your collected study stars for fun rewards!", btn_create_product: "➕ New Product (200⭐)",
    btn_back_home: "Back to Home", add_item_title: "Create New Shop Item", add_item_cost: "⭐ Cost to publish new product: 200 Stars",
    label_img_url: "Image Link (URL):", label_item_title: "Product Name:", label_item_desc: "Description:", label_item_price: "Price in Stars (for buyers):",
    btn_publish_item: "Deduct 200⭐ & Publish", owner_badge: "Your Item (Cannot Buy)", buy_btn: "Buy Regular",
    
    inst_title: "📖 App User Guide", 
    inst_welcome_subtitle: "Welcome! A simple guide explaining how to make full use of the app features:",
    inst_sec1_title: "1️⃣ Study System & Timer",
    inst_sec1_p1: "Select a subject then choose session type (Homework, Study, or Summary).",
    inst_sec1_p2: "Upon completing the session on time, you automatically earn ⭐ reward stars.",
    inst_sec1_p3: "You can use pause credits (⚡) when you need a quick break during study.",
    inst_sec2_title: "2️⃣ Admin Exams & Rare Gems",
    inst_sec2_p1: "Admin posts periodic exams. Answer accurately with full marks to earn a rare Admin Gem (💎).",
    inst_sec2_p2: "Gems unlock massive discounts on store items!",
    inst_sec3_title: "3️⃣ Songs & Ideas Feature",
    inst_sec3_p1: "Buy 'Songs & Ideas' (140⭐) in the store and send your favorite song or idea to the Admin.",
    inst_sec3_p2: "Once approved, your idea will be officially published on the app for everyone to see!",
    inst_sec4_title: "4️⃣ Store & Entertainment Rewards",
    inst_sec4_p1: "Exchange stars for Gaming (🎮) or Watching (🎬) time and activate them from home!",
    inst_sec4_p2: "You can also buy 'Double Stars 2x' or 'Streak Freeze 🔥' to keep your progress.",
    btn_understand: "Got it, back to home 🚀",
    
    currency_stars: "Study Stars", currency_gems: "Admin Gems", currency_credits: "Pause Credits",
    waiting_exam_title: "Exam Waiting Lounge",
    waiting_exam_desc: "Waiting for the admin to schedule and publish the exam...",
    exam_ready_title: "Exam is Ready Now!",
    exam_ready_desc: "Admin published the exam. You can start now!",
    btn_start_exam_now: "Start Exam Now 🚀",
    btn_submit_exam: "Submit to Admin 📤",
    status_online: "Online", status_offline: "Offline", status_banned: "Banned 🚫",
    admin_panel_title: "👑 Admin Control Panel",
    admin_create_exam: "➕ Create New Exam",
    label_subject: "Subject:", label_repeat_type: "Frequency:", label_duration: "Exam Duration (mins):", label_q_count: "Number of Questions:",
    btn_publish_exam: "Publish Exam 🚀", admin_users_list_title: "👥 Users List & Presence Status", admin_songs_title: "🎶 Suggested Songs & Ideas",
    admin_change_pass_title: "🔐 Change Admin Password",
    label_new_admin_pass: "New Admin Password:",
    btn_save_admin_pass: "Save New Password 💾",
    msg_admin_pass_updated: "New admin details saved successfully! 🔑📧",
    msg_admin_pass_empty: "Please enter a new password😎 or at least a new email address!😏",
    subjects: {
      english: "English",
      history: "History",
      programming: "Programming",
      arabic: "Arabic",
      gaming: "Gaming Break",
      watch: "Watching Break"
    }
  }
};

const SUBJECT_KEYS = [{key:'english'}, {key:'history'}, {key:'programming'}, {key:'arabic'}];
let timerInterval = null, secondsElapsed = 0, totalSecondsRemaining = 0, isPaused = false;
let pauseCredits = 2, totalPoints = 0, adminPoints = 0, totalStudyMinutes = 0, gameTimeMins = 0, watchTimeMins = 0;
let userStreak = 1, lastLoginDate = null;
let doubleStarsUntil = null, specialGameUntil = null;
let selectedSubjectKey = "arabic", sessionType = "واجب", currentTopic = "", allottedMinutes = 120, currentLang = "ar";
let isSignUpMode = false, currentUser = null;
let purchasedGames = [], currentPurchasedGame = null, purchasedGameScore = 0;
let isBreakSession = false, isExamSession = false;
let activeCloudExam = null;
let userBanListener = null;

let miniGameInterval = null, miniGameScore = 0, specialGameTimerInterval = null;
let miniGameCanvas, miniGameCtx;
let basket = { x: 140, y: 340, width: 60, height: 20 };
let fallingObjects = [];

const $ = (id) => document.getElementById(id);

const DEFAULT_SHOP_ITEMS = [
  { id: 1, creator: "system", title: "🎮 وقت اللعب (30 دقيقة)", script: "استبدل النجوم بـ 30 دقيقة لعب ألعاب فيديو", price: 50, img: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=300&q=80", type: "game", mins: 30, sales: [] },
  { id: 2, creator: "system", title: "🎬 وقت المشاهدة (30 دقيقة)", script: "استبدل النجوم بـ 30 دقيقة مشاهدة أنمي أو يوتيوب", price: 40, img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=300&q=80", type: "watch", mins: 30, sales: [] },
  { id: 3, creator: "system", title: "🎶 أغاني وأفكار (مشاركة مع الموقع)", script: "اكتب أغنيتك أو فكرتك وأرسلها للأدمن لنشرها بالموقع!", price: 140, img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80", type: "song_idea", sales: [] },
  { id: 4, creator: "system", title: "❄️ تعويض يوم الغياب (Streak Freeze)", script: "يعوض اليوم الذي غبت فيه لحماية الـ Streak من الضياع!", price: 350, img: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=300&q=80", type: "streak_freeze", sales: [] },
  { id: 5, creator: "system", title: "⚡ النجمة الذهبية (مضاعفة النجوم 2x)", script: "تمنحك قوة مضاعفة جميع النجوم التي تكسبها لمدة 24 ساعة!", price: 600, img: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&q=80", type: "double_stars", sales: [] },
  { id: 6, creator: "system", title: "🎮 فتح لعبة صائد النجوم والماس (30 دقيقة)", script: "تفتح زر لعبة مخصصة وممتعة تتيح لك اللعب لمدة 30 دقيقة مستمرة!", price: 899, img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=300&q=80", type: "unlock_game", sales: [] },
  { id: 7, creator: "system", title: "🏴‍☠️ مغامرة بحار القراصنة", script: "مغامرة خيالية مستوحاة من Blox Fruits وOne Piece: أبحر بين الجزر، اجمع الفواكه السحرية، وطوّر مهاراتك لتصبح قرصاناً أسطورياً!", price: 999, img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&q=80", type: "blox_onepiece_game", sales: [] },
  { id: 8, creator: "system", title: "⚽ تحدي المهاجم الأول", script: "لعبة كرة قدم خيالية مستوحاة من أنمي Blue Lock وألعاب Roblox: اختبر دقة تسديدك وسجّل أهدافاً لتصبح المهاجم الأقوى!", price: 799, img: "https://w.wallhaven.cc/full/jx/wallhaven-jxk9qp.png", type: "bluelock_roblox_game", sales: [] },
  { id: 9, creator: "system", title: "⚡ فرص إيقاف إضافية (2 فرصة)", script: "تمنحك 2 فرصة إيقاف مؤقت إضافية لاستخدامها أثناء المذاكرة!", price: 210, img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&q=80", type: "pause_credits", credits: 2, sales: [] }
];

const PURCHASED_GAME_TYPES = ["blox_onepiece_game", "bluelock_roblox_game"];

document.addEventListener("DOMContentLoaded", () => {
  checkAuthStatus();
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const toggleCheckbox = $('theme-toggle-checkbox');
  if(toggleCheckbox) toggleCheckbox.checked = (savedTheme === "dark");

  setupPresenceSystem();
  startSpecialGameGlobalTimer();
  renderSubjectsGrid();
});

function setupPresenceSystem() {
  const setStatus = (status) => {
    if (!currentUser || currentUser === 'admin') return;
    db.collection("users").doc(currentUser).set({
      isOnline: (status === 'online'),
      lastActive: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).catch(err => console.error(err));
  };

  window.addEventListener("focus", () => setStatus('online'));
  window.addEventListener("blur", () => setStatus('offline'));
  window.addEventListener("beforeunload", () => setStatus('offline'));
}

function listenToUserBanStatus(username) {
  if (userBanListener) userBanListener();
  userBanListener = db.collection("users").doc(username).onSnapshot(doc => {
    if (!doc.exists) {
      alert("تم حذف هذا الحساب نهائيًا.");
      logout();
      return;
    }
    if (doc.exists && doc.data().isBanned) {
      alert("🚫 تم حظر حسابك من قبل الأدمن لانتهاك القوانين أو استخدام طرق غير مشروعة.");
      logout();
      return;
    }

    const data = doc.data();
    if (data && typeof data.points !== 'undefined') {
      totalPoints = data.points; // تحديث المتغير الرئيسي
      $('points-text').textContent = `${totalPoints} ⭐`; // تحديث النص
    }
  });
}

function toggleAuthMode(e) {
  if(e) e.preventDefault();
  isSignUpMode = !isSignUpMode;
  
  $('auth-title').textContent = isSignUpMode ? (currentLang === 'ar' ? "إنشاء حساب جديد" : "Create Account") : (currentLang === 'ar' ? "تسجيل الدخول" : "Login");
  $('auth-submit-btn').textContent = isSignUpMode ? (currentLang === 'ar' ? "إنشاء حساب" : "Sign Up") : (currentLang === 'ar' ? "دخول" : "Login");
  $('auth-toggle-msg').textContent = isSignUpMode ? (currentLang === 'ar' ? "لديك حساب بالفعل؟" : "Already have an account?") : i18n[currentLang].msg_no_account;
  $('auth-toggle-link').textContent = isSignUpMode ? (currentLang === 'ar' ? "تسجيل الدخول" : "Login") : i18n[currentLang].link_create_account;
  
  // إظهار وإخفاء البريد وزر نسيت كلمة المرور
  if (isSignUpMode) {
    $('email-group').classList.remove('hidden');
    $('email-input').required = true;
    $('forgot-pass-container').classList.add('hidden');
  } else {
    $('email-group').classList.add('hidden');
    $('email-input').required = false;
    $('forgot-pass-container').classList.remove('hidden');
  }
}

async function handleAuth(e) {
  e.preventDefault();
  const username = $('username-input').value.trim();
  const password = $('password-input').value.trim();
  const email = $('email-input').value.trim();

  if (!username || !password) return alert("يرجى ملء كافة البيانات!");

  if (username === "admin" && password === getAdminPassword()) {
    currentUser = "admin";
    localStorage.setItem("current_user", "admin");
    loginSuccess();
    openAdminPanel();
    return;
  }

  try {
    const userRef = db.collection("users").doc(username);
    const doc = await userRef.get();

    if (isSignUpMode) {
      if (!email || !email.includes('@')) {
        return alert("يرجى إدخال بريد إلكتروني صحيح ومُفعّل!");
      }
      if (doc.exists) return alert("اسم المستخدم هذا موجود بالفعل!");
      
      const todayStr = new Date().toDateString();

      // إنشاء المستخدم في Firebase Auth أولاً
      try {
        await auth.createUserWithEmailAndPassword(email, password);
      } catch (authErr) {
        console.log("Auth createUser note:", authErr.message);
      }

      // حفظ البيانات الأساسية في Firestore
      await userRef.set({
        email: email,
        password: password,
        points: 0,
        adminPoints: 0,
        totalStudyMinutes: 0,
        pauseCredits: 2,
        gameTime: 0,
        watchTime: 0,
        streak: 1,
        lastLoginDate: todayStr,
        isOnline: true,
        isBanned: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });

      alert("تم إنشاء الحساب بنجاح!");
      toggleAuthMode();
    } else {
      if (!doc.exists || doc.data().password !== password) {
        return alert("اسم المستخدم أو كلمة المرور غير صحيحة!");
      }
      if (doc.data().isBanned) {
        return alert("🚫 هذا الحساب محظور حالياً بواسطة الأدمن!");
      }

      // فحص إن كان المستخدم القديم لم يُسجّل إيميله بعد
      if (!doc.data().email) {
        const userEmail = prompt("مرحباً بك! يرجى إدخال بريدك الإلكتروني لربطه بحسابك وتفعيل خاصية استرجاع كلمة المرور عند الحاجة:");
        if (userEmail && userEmail.includes('@')) {
          await userRef.update({ email: userEmail });
        }
      }

      currentUser = username;
      await userRef.update({ isOnline: true });
      localStorage.setItem("current_user", username);
      loginSuccess();
    }
  } catch (err) {
    alert("حدث خطأ في الاتصال بالخادم، يرجى التحقق من الشبكة!");
    console.error(err);
  }
}

function getAdminPassword() {
  return localStorage.getItem("admin_password") || "admin123";
}

function changeAdminCredentials() {
  const newPassInput = document.getElementById("new-admin-pass-input");
  const newEmailInput = document.getElementById("new-admin-email-input");
  
  const newPass = newPassInput.value.trim();
  const newEmail = newEmailInput.value.trim();

  if (!newPass && !newEmail) {
    alert(i18n[currentLang].msg_admin_pass_empty || "يرجى إدخال كلمة مرور جديدة أو 😏بريد إلكتروني جديد على الأقل!😎");
    return;
  }

  if (newPass) {
    localStorage.setItem("admin_password", newPass);
  }
  if (newEmail) {
    localStorage.setItem("admin_email", newEmail);
  }

  alert(i18n[currentLang].msg_admin_pass_updated ||"تم حفظ بيانات الأدمن الجديدة بنجاح! 🔑📧");
  newPassInput.value = "";
  newEmailInput.value = "";
}

// إظهار وإخفاء واجهة الاسترجاع
function showResetPasswordModal(e) {
  if (e) e.preventDefault();
  $('auth-screen').classList.add('hidden');$('reset-password-modal').classList.remove('hidden');
}

function hideResetPasswordModal() {
  $('reset-password-modal').classList.add('hidden');$('auth-screen').classList.remove('hidden');
}

async function handlePasswordReset() {
  const email = $('reset-email-input').value.trim().toLowerCase();
  
  if (!email || !email.includes('@')) {
    alert("يرجى إدخال بريد إلكتروني صحيح!");
    return;
  }

  // 1. التحقق أولاً إذا كان البريد يدخل ضمن بريد الأدمن المسجل
  const adminEmail = (localStorage.getItem("admin_email") || "").toLowerCase();
  if (adminEmail && email === adminEmail) {
    const newPassword = prompt("مرحباً بك يا أدمن! 👑\nأدخل كلمة المرور الجديدة الخاصة بحساب الأدمن:");
    if (newPassword && newPassword.trim().length >= 4) {
      localStorage.setItem("admin_password", newPassword.trim());
      alert("🎉 تم تغيير كلمة مرور الأدمن بنجاح! يمكنك تسجيل الدخول الآن.");
      hideResetPasswordModal();
      $('reset-email-input').value = "";
    } else if (newPassword !== null) {
      alert("كلمة المرور قصيرة جداً! يجب أن تكون 4 أحرف/أرقام على الأقل.");
    }
    return; // إنهاء الدالة لأن الحساب هو حساب الأدمن
  }

  // 2. إذا لم يكن بريد الأدمن، يتم البحث في قاعدة البيانات عن باقي المستخدمين
  try {
    const usersSnap = await db.collection("users").where("email", "==", email).get();

    if (usersSnap.empty) {
      return alert("عذراً، لم يتم العثور على أي حساب مرتبط بهذا البريد الإلكتروني!");
    }

    let username = "";
    usersSnap.forEach(doc => {
      username = doc.id;
    });

    const newPassword = prompt(`مرحباً ${username}!\nأدخل كلمة المرور الجديدة الخاصة بك:`);
    
    if (newPassword && newPassword.trim().length >= 4) {
      await db.collection("users").doc(username).update({
        password: newPassword.trim()
      });
      alert(`🎉 تم تغيير كلمة المرور للحساب (${username}) بنجاح!\nيمكنك الآن تسجيل الدخول بكلمة المرور الجديدة.`);
      hideResetPasswordModal();
      $('reset-email-input').value = "";
    } else if (newPassword !== null) {
      alert("كلمة المرور قصيرة جداً! يرجى إدخال 4 أحرف/أرقام على الأقل.");
    }

  } catch (error) {
    console.error("Reset Password Error:", error);
    alert("حدث خطأ أثناء استرجاع الحساب: " + error.message);
  }
}

function checkAuthStatus() {
  const savedUser = localStorage.getItem("current_user");
  if(savedUser) {
    currentUser = savedUser;
    loginSuccess();
  } else {
    $('auth-screen').classList.remove('hidden');
    $('app-container').classList.add('hidden');
  }
}

function loginSuccess() {
  purchasedGames = [];
  currentPurchasedGame = null;
  $('purchased-game-btn').classList.add('hidden');$('auth-screen').classList.add('hidden');
  $('app-container').classList.remove('hidden');$('user-name-text').textContent = currentUser;

  // وضع نص مؤقت أثناء تحميل النجوم بدلاً من الصفر الافتراضي
  $('points-text').textContent = "جاري التحميل...";

  if (currentUser === 'admin') {
    $('admin-panel-btn').style.display = 'inline-block';
    openAdminPanel();
  } else {
    $('admin-panel-btn').style.display = 'none';
    listenToUserBanStatus(currentUser);
    showScreen('subject-selection');
  }

  // جلب البيانات أولاً ثم تطبيق باقي الواجهات
  initUserData();
  applyLanguage(localStorage.getItem("lang") || "ar");
  checkAvailableAdminExam();
  renderShop();
  renderHistory();
}

function logout() {
  if (currentUser && currentUser !== 'admin') {
    db.collection("users").doc(currentUser).update({ isOnline: false }).catch(() => {});
  }
  if (userBanListener) userBanListener();
  localStorage.removeItem("current_user");
  currentUser = null;
  purchasedGames = [];
  currentPurchasedGame = null;
  $('purchased-game-btn').classList.add('hidden');

  document.querySelectorAll('.view-screen').forEach(s => s.classList.add('hidden'));
  $('app-container').classList.add('hidden');
  $('auth-screen').classList.remove('hidden');
}

async function deleteAccount() {
  if (!currentUser || currentUser === 'admin') return;
  const confirm1 = confirm("⚠️️ هل أنت متأكد تماماً من رغبتك في حذف حسابك نهائياً؟");
  if (!confirm1) return;

  const confirm2 = confirm("🚨 تحذير أخير: سيتم مسح حسابك وكافة إنجازاتك ودرجاتك من قاعدة البيانات دون إمكانية لاسترجاعها!");
  if (!confirm2) return;

  try {
    const userRef = db.collection("users").doc(currentUser);
    const subSnap = await userRef.collection("submissions").get();
    subSnap.forEach(doc => doc.ref.delete());

    const histSnap = await userRef.collection("history").get();
    histSnap.forEach(doc => doc.ref.delete());

    await userRef.delete();

    alert("تم حذف حسابك بنجاح وبشكل كامل. نتمنى لك التوفيق!");
    logout();
  } catch (err) {
    alert("حدث خطأ أثناء حذف الحساب: " + err.message);
  }
}

function initUserData() {
  if (!currentUser || currentUser === 'admin') return;

  db.collection("users").doc(currentUser).get().then((doc) => {
    if (doc.exists) {
      const data = doc.data();
      if (data.isBanned) {
        alert("🚫 هذا الحساب محظور!");
        logout();
        return;
      }
      pauseCredits = data.pauseCredits ?? 2;
      totalPoints = data.points ?? 0;
      adminPoints = data.adminPoints ?? 0;
      totalStudyMinutes = data.totalStudyMinutes ?? 0;
      gameTimeMins = data.gameTime ?? 0;
      watchTimeMins = data.watchTime ?? 0;
      userStreak = data.streak ?? 1;
      lastLoginDate = data.lastLoginDate ?? null;
      doubleStarsUntil = data.doubleStarsUntil ?? null;
      specialGameUntil = data.specialGameUntil ?? null;
      purchasedGames = Array.isArray(data.purchasedGames)
        ? data.purchasedGames.filter(type => PURCHASED_GAME_TYPES.includes(type))
        : [];

      checkAndUpdateStreak();
      
      // إيقاف حفظ البيانات الافتراضية عند أول تحميل
      updateUI(false); 
    }
  }).catch((error) => console.error("خطأ في جلب البيانات: ", error));
}

function checkAndUpdateStreak() {
  const today = new Date();
  const todayStr = today.toDateString();

  if (!lastLoginDate) {
    userStreak = 1;
    lastLoginDate = todayStr;
  } else if (lastLoginDate !== todayStr) {
    const lastDate = new Date(lastLoginDate);
    const diffTime = Math.abs(today - lastDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      userStreak += 1;
    } else if (diffDays > 1) {
      userStreak = 1;
    }
    lastLoginDate = todayStr;
  }
}

function saveUserData() {
  if (!currentUser || currentUser === 'admin') return;
  
  const userData = {
    pauseCredits: pauseCredits,
    points: totalPoints,
    adminPoints: adminPoints,
    totalStudyMinutes: totalStudyMinutes,
    gameTime: gameTimeMins,
    watchTime: watchTimeMins,
    streak: userStreak,
    lastLoginDate: lastLoginDate,
    doubleStarsUntil: doubleStarsUntil || null,
    specialGameUntil: specialGameUntil || null,
    purchasedGames: purchasedGames,
    isOnline: true,
    lastActive: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection("users").doc(currentUser).set(userData, { merge: true })
    .catch((error) => console.error("خطأ في حفظ البيانات: ", error));
}

// تعديل بسيط على updateUI لتقبل خيار بعدم إعادة الحفظ الفوري لقاعدة البيانات عند التحديث الأولي
function updateUI(shouldSave = true) {
  $('pause-credits-text').textContent = `${pauseCredits}`;
  $('points-text').textContent = `${totalPoints} ⭐`;
  $('admin-points-text').textContent = `💎 ${adminPoints}`;
  $('streak-count-text').textContent = `${userStreak}`;
  
  $('game-time-text').textContent = i18n[currentLang].gaming_label.replace('{m}', gameTimeMins);$('watch-time-text').textContent = i18n[currentLang].watch_label.replace('{m}', watchTimeMins);
  
  const availText = i18n[currentLang].available_label;
  if($('sub-game-time'))$('sub-game-time').textContent = availText.replace('{m}', gameTimeMins);
  if($('sub-watch-time'))$('sub-watch-time').textContent = availText.replace('{m}', watchTimeMins);

  if (doubleStarsUntil && Date.now() < doubleStarsUntil) {
    $('double-stars-badge').classList.remove('hidden');
  } else {
    $('double-stars-badge').classList.add('hidden');
  }

  if (specialGameUntil && Date.now() < specialGameUntil) {
    $('special-game-btn').classList.remove('hidden');
  } else {
    $('special-game-btn').classList.add('hidden');
  }

  if (purchasedGames.length > 0) {
    $('purchased-game-btn').classList.remove('hidden');
  } else {
    $('purchased-game-btn').classList.add('hidden');
  }

  if (shouldSave) {
    saveUserData();
  }
}

function renderSubjectsGrid() {
  const container = $('subjects-grid');
  if(!container) return;
  container.innerHTML = SUBJECT_KEYS.map(s => `
    <button class="btn subject-btn" onclick="handleSubjectClick('${s.key}')">
      ${i18n[currentLang].subjects[s.key]}
    </button>
  `).join('');
}

function showScreen(id) {
  document.querySelectorAll('.view-screen').forEach(s => s.classList.add('hidden'));
  const target = $(id);
  if(target) target.classList.remove('hidden');
}

function openPurchasedGameScreen() {
  const listContainer = $('purchased-games-list');
  if (!listContainer) return;
  if (!currentUser || currentUser === 'admin' || purchasedGames.length === 0) {
    return alert("لا توجد ألعاب مشتراة متاحة في حسابك.");
  }

  const games = getShopItems().filter(item => purchasedGames.includes(item.type));
  if (games.length === 0) {
    listContainer.innerHTML = `<p style="text-align:center; color:var(--subtext-color);">لم تقم بشراء أي لعبة بعد من المتجر!</p>`;
  } else {
    listContainer.innerHTML = games.map(game => `
      <div class="shop-item" style="border-color:var(--primary-color);">
        <img src="${game.img}" class="shop-item-img" alt="${game.title}">
        <h3>${game.title}</h3>
        <p class="shop-item-script">${game.script}</p>
        <button class="btn success-btn full-width-btn" onclick="playGame('${game.type}')">بدء اللعب الآن 🎮</button>
      </div>
    `).join('');
  }

  showScreen('purchased-game-screen');
}

function playGame(type) {
  if (!currentUser || currentUser === 'admin' || !PURCHASED_GAME_TYPES.includes(type) || !purchasedGames.includes(type)) {
    return alert("يجب شراء هذه اللعبة أولاً من المتجر!");
  }

  const game = getShopItems().find(item => item.type === type);
  if (!game) return alert("تعذر العثور على اللعبة في المتجر.");

  currentPurchasedGame = type;
  purchasedGameScore = 0;
  $('game-play-title').textContent = game.title;
  $('game-play-description').textContent = game.script;
  $('game-play-instructions').textContent = type === "blox_onepiece_game"
    ? "اجمع فواكه المغامرة بالضغط على الزر، وحاول تحطيم رقمك القياسي!"
    : "سدّد الكرة بالضغط على الزر؛ فكل تسديدة لديها فرصة لتسجيل هدف!";
  $('game-action-button').textContent = type === "blox_onepiece_game" ? "🍈 اجمع ثمرة" : "⚽ سدّد الكرة";
  $('game-action-score').textContent = "0";
  $('game-action-result').textContent = "ابدأ اللعب!";
  showScreen('game-play-screen');
}

function playGameAction() {
  if (!currentPurchasedGame || !purchasedGames.includes(currentPurchasedGame)) {
    return alert("هذه اللعبة غير متاحة في حسابك.");
  }

  if (currentPurchasedGame === "blox_onepiece_game") {
    purchasedGameScore += 1;
    $('game-action-result').textContent = "رائع! أضفت ثمرة جديدة إلى مجموعتك.";
  } else {
    const scored = Math.random() < 0.65;
    if (scored) purchasedGameScore += 1;
    $('game-action-result').textContent = scored ? "هدف! تسديدة رائعة! ⚽" : "صدّ الحارس الكرة، حاول مرة أخرى!";
  }

  $('game-action-score').textContent = purchasedGameScore;
}

function startSpecialGameGlobalTimer() {
  setInterval(() => {
    if (specialGameUntil && Date.now() < specialGameUntil) {
      const remainingMs = specialGameUntil - Date.now();
      const totalSecs = Math.floor(remainingMs / 1000);
      const m = Math.floor(totalSecs / 60).toString().padStart(2, '0');
      const s = (totalSecs % 60).toString().padStart(2, '0');
      
      const timeStr = `${m}:${s}`;
      if ($('special-game-timer')) $('special-game-timer').textContent = timeStr;
      if ($('mini-game-time-left')) $('mini-game-time-left').textContent = timeStr;
    } else {
      if (specialGameUntil && Date.now() >= specialGameUntil) {
        specialGameUntil = null;
        updateUI();
        if (!$('special-game-screen').classList.contains('hidden')) {
          alert("انتهى وقت الـ 30 دقيقة الخاص باللعبة!");
          closeSpecialGame();
        }
      }
    }
  }, 1000);
}

function handleSubjectClick(key) { 
  selectedSubjectKey = key; 
  $('selected-subject-title').textContent = `${i18n[currentLang].subjects[key]}`; 
  showScreen('session-type-screen'); 
}

function startHomeworkSession() { 
  startTask(selectedSubjectKey, 120, 'واجب', 'حل واجب 120 دقيقة'); 
}

function showCustomSetup(type) { 
  sessionType = type; 
  $('custom-setup-title').textContent = `${getTranslatedType(type)}: ${i18n[currentLang].subjects[selectedSubjectKey]}`;
  $('custom-topic-label').textContent = type === 'مذاكرة' ? i18n[currentLang].study_topic_label : i18n[currentLang].summary_topic_label; 
  $('custom-topic').value = ""; 
  $('custom-time').value = "60"; 
  showScreen('custom-setup-screen'); 
}

function confirmCustomStart() { 
  let time = parseInt($('custom-time').value) || 60; 
  let topic = $('custom-topic').value.trim() || i18n[currentLang].untitled;
  startTask(selectedSubjectKey, Math.min(Math.max(time, 1), 120), sessionType, topic); 
}

function startTask(subjectKey, mins, type, topic = "") {
  isBreakSession = (type === 'استراحة لعب' || type === 'استراحة مشاهدة');
  selectedSubjectKey = subjectKey;
  sessionType = type;
  currentTopic = topic;
  allottedMinutes = mins;
  secondsElapsed = 0;
  totalSecondsRemaining = mins * 60;
  isPaused = false;

  $('current-subject-title').textContent = `${getTranslatedType(type)}: ${i18n[currentLang].subjects[subjectKey] || subjectKey}`;
  $('timer-topic-detail').textContent = topic ? `${i18n[currentLang].topic_label} ${topic}` : "";
  $('pause-btn').textContent = i18n[currentLang].pause_btn_text;

  showScreen('timer-screen');
  updateTimerDisplay();

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if(!isPaused) {
      secondsElapsed++;
      totalSecondsRemaining--;
      updateTimerDisplay();

      if(totalSecondsRemaining <= 0) {
        clearInterval(timerInterval);
        finishTask(true);
      }
    }
  }, 1000);
}

function updateTimerDisplay() {
  const m = Math.floor(totalSecondsRemaining / 60).toString().padStart(2, '0');
  const s = (totalSecondsRemaining % 60).toString().padStart(2, '0');
  $('timer-display').textContent = `${m}:${s}`;
}

function togglePauseTimer() {
  if (!isPaused && pauseCredits <= 0) {
    return alert("لا توجد لديك فرص إيقاف مؤقت المتاحة!");
  }

  if (!isPaused) {
    pauseCredits--;
    isPaused = true;
    $('pause-btn').textContent = i18n[currentLang].resume_btn_text;
  } else {
    isPaused = false;
    $('pause-btn').textContent = i18n[currentLang].pause_btn_text;
  }
  updateUI();
}

async function finishTask(isTimeExpired = false) {
  // حساب الثواني والدقائق المستغرقة
  const secondsStudied = secondsElapsed;
  const minutesStudied = Math.ceil(secondsStudied / 60);

  // الشرط: عدم السماح بإنهاء جلسات المذاكرة يدوياً قبل مرور 5 دقائق (300 ثانية) 
  // إلا إذا كانت الجلسة أصلًا أقل من 5 دقائق واكتمل وقتها بالكامل (isTimeExpired)
  const minimumSeconds = 300; // 5 دقائق
  if (!isTimeExpired && !isBreakSession && secondsStudied < minimumSeconds && (allottedMinutes * 60) >= minimumSeconds) {
    const remainingSecs = minimumSeconds - secondsStudied;
    const remMins = Math.floor(remainingSecs / 60);
    const remSecs = remainingSecs % 60;
    alert(`⚠️ لا يمكنك إنهاء الجلسة الآن وتجميع النجوم!\nيجب المذاكرة لمدة 5 دقائق على الأقل قبل الإنهاء.\nالمتبقي لفتح زر الإنهاء: ${remMins} دقيقة و ${remSecs} ثانية.`);
    return;
  }

  clearInterval(timerInterval);

  // --- [إعادة المتبقي من وقت الترفيه إلى الرصيد عند الإنهاء المبكر] ---
  if (isBreakSession && totalSecondsRemaining > 0) {
    const remainingMins = Math.floor(totalSecondsRemaining / 60);
    if (remainingMins > 0) {
      if (sessionType === 'استراحة لعب') {
        gameTimeMins += remainingMins;
      } else if (sessionType === 'استراحة مشاهدة') {
        watchTimeMins += remainingMins;
      }
    }
  }

  let earnedPoints = 0;

  // احتساب النقاط فقط إذا كانت الجلسة ليست استراحة وإذا قُضيت 5 دقائق على الأقل
  if (!isBreakSession && (secondsStudied >= minimumSeconds || (allottedMinutes * 60) < minimumSeconds)) {
    earnedPoints = Math.floor(minutesStudied * 1.5);
    if (doubleStarsUntil && Date.now() < doubleStarsUntil) {
      earnedPoints *= 2;
    }
    totalPoints += earnedPoints;
    totalStudyMinutes += minutesStudied;
  }

  saveHistoryRecord({
    subject: selectedSubjectKey,
    type: sessionType,
    topic: currentTopic,
    minutes: allottedMinutes,
    timeTakenSeconds: secondsElapsed,
    points: earnedPoints,
    completedAt: new Date().toISOString(),
    date: new Date().toLocaleDateString()
  });

  updateUI();

  $('result-title').textContent = isTimeExpired ? i18n[currentLang].result_title_failed : i18n[currentLang].result_title_success.replace('{type}', getTranslatedType(sessionType));
  
  const timeText = i18n[currentLang].time_taken_str.replace('{mins}', Math.floor(secondsElapsed/60)).replace('{secs}', secondsElapsed%60);
  const rewardText = earnedPoints > 0 ? i18n[currentLang].reward_msg.replace('{pts}', earnedPoints) : "";

  $('result-message').innerHTML = i18n[currentLang].result_msg_success
    .replace('{type}', getTranslatedType(sessionType))
    .replace('{subject}', i18n[currentLang].subjects[selectedSubjectKey] || selectedSubjectKey)
    .replace('{topic}', currentTopic ? `(${currentTopic})` : '')
    .replace('{time}', timeText)
    .replace('{reward}', rewardText);

  showScreen('result-screen');
}

function cancelTask() {
  if (confirm("هل تريد إلغاء الجلسة الحالية؟")) {
    clearInterval(timerInterval);

    // --- [إعادة المتبقي من وقت الترفيه إلى الرصيد عند الإلغاء] ---
    if (isBreakSession && totalSecondsRemaining > 0) {
      const remainingMins = Math.floor(totalSecondsRemaining / 60);
      if (remainingMins > 0) {
        if (sessionType === 'استراحة لعب') {
          gameTimeMins += remainingMins;
        } else if (sessionType === 'استراحة مشاهدة') {
          watchTimeMins += remainingMins;
        }
        updateUI(); // تحديث الواجهة وحفظ الرصيد المحدث في قاعدة البيانات
      }
    }

    showScreen('subject-selection');
  }
}

function useRewardTime(type) {
  if (type === 'gaming') {
    if (gameTimeMins <= 0) return alert("ليس لديك وقت لعب متاح!");
    let timeToUse = prompt(`أدخل عدد الدقائق المراد استخدامها للعب (المتاح: ${gameTimeMins} د):`, gameTimeMins);
    timeToUse = parseInt(timeToUse);
    if (timeToUse > 0 && timeToUse <= gameTimeMins) {
      gameTimeMins -= timeToUse;
      updateUI();
      startTask('gaming', timeToUse, 'استراحة لعب', 'وقت اللعب والترفيه');
    }
  } else if (type === 'watch') {
    if (watchTimeMins <= 0) return alert("ليس لديك وقت مشاهدة متاح!");
    let timeToUse = prompt(`أدخل عدد الدقائق المراد استخدامها للمشاهدة (المتاح: ${watchTimeMins} د):`, watchTimeMins);
    timeToUse = parseInt(timeToUse);
    if (timeToUse > 0 && timeToUse <= watchTimeMins) {
      watchTimeMins -= timeToUse;
      updateUI();
      startTask('watch', timeToUse, 'استراحة مشاهدة', 'وقت المشاهدة والترفيه');
    }
  }
}

function saveHistoryRecord(record) {
  if (!currentUser) return;
  const isAdmin = currentUser === 'admin';
  const historyRef = isAdmin ? null : db.collection("users").doc(currentUser).collection("history").doc();
  const history = getLocalHistory();
  history.unshift({ ...record, id: historyRef ? historyRef.id : `admin_${Date.now()}_${Math.random().toString(36).slice(2)}` });
  history.splice(10);
  setLocalHistory(history);
  renderHistoryItems(history);

  if (isAdmin) return;
  historyRef.set({
    ...record,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  }).then(() => renderHistory());
}

function renderHistory() {
  if (!currentUser) return;
  const list = $('history-list');
  if(!list) return;

  renderHistoryItems(getLocalHistory());
  if (currentUser === 'admin') return;
  db.collection("users").doc(currentUser).collection("history").orderBy("createdAt", "desc").limit(10).get().then(snapshot => {
    const history = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setLocalHistory(history);
    renderHistoryItems(history);
  });
}

function getLocalHistory() {
  const storedHistory = getStoredHistoryMap();
  return Array.isArray(storedHistory[currentUser]) ? storedHistory[currentUser] : [];
}

function getStoredHistoryMap() {
  try {
    const storedHistory = JSON.parse(localStorage.getItem('homework_history') || '{}');
    if (Array.isArray(storedHistory)) return { [currentUser]: storedHistory };
    return storedHistory && typeof storedHistory === 'object' ? storedHistory : {};
  } catch (error) {
    return {};
  }
}

function setLocalHistory(history) {
  try {
    const storedHistory = getStoredHistoryMap();
    storedHistory[currentUser] = history;
    localStorage.setItem('homework_history', JSON.stringify(storedHistory));
  } catch (error) {
    console.error('Unable to save local achievement history:', error);
  }
}

function renderHistoryItems(history) {
  const list = $('history-list');
  if (!list) return;
  if (!history.length) {
    list.innerHTML = `<li style="text-align:center; color:var(--subtext-color);">${i18n[currentLang].empty_history}</li>`;
    return;
  }

  list.innerHTML = history.map(item => {
    const completedAt = item.completedAt
      ? new Date(item.completedAt).toLocaleString(currentLang === 'ar' ? 'ar' : 'en')
      : item.date;
    const duration = typeof item.timeTakenSeconds === 'number'
      ? i18n[currentLang].time_taken_str
          .replace('{mins}', Math.floor(item.timeTakenSeconds / 60))
          .replace('{secs}', item.timeTakenSeconds % 60)
      : '';
    return `
      <li class="history-item">
        <div>
          <strong>${getTranslatedType(item.type)}: ${i18n[currentLang].subjects[item.subject] || item.subject}</strong>
          <small style="display:block; color:var(--subtext-color);">${item.topic ? item.topic + ' | ' : ''}${completedAt}</small>
          ${duration ? `<small style="display:block; color:var(--subtext-color);">${i18n[currentLang].time_spent_label}${duration}</small>` : ''}
        </div>
        <div>
          <span style="color:var(--primary-color); font-weight:bold;">+${item.points} ⭐</span>
          <button class="delete-item-btn" onclick="deleteHistoryItem('${item.id}')">🗑️</button>
        </div>
      </li>
    `;
  }).join('');
}

function deleteHistoryItem(id) {
  if (!currentUser) return;
  setLocalHistory(getLocalHistory().filter(item => item.id !== id));
  renderHistoryItems(getLocalHistory());
  if (currentUser === 'admin') return;
  db.collection("users").doc(currentUser).collection("history").doc(id).delete().then(() => renderHistory());
}

function clearAllHistory() {
  if (!currentUser || !confirm(i18n[currentLang].confirm_clear_all)) return;

  const storedHistory = getStoredHistoryMap();
  delete storedHistory[currentUser];
  if (Object.keys(storedHistory).length) {
    localStorage.setItem('homework_history', JSON.stringify(storedHistory));
  } else {
    localStorage.removeItem('homework_history');
  }
  renderHistoryItems([]);

  if (currentUser === 'admin') return;
  db.collection("users").doc(currentUser).collection("history").get().then(snapshot => {
    return Promise.all(snapshot.docs.map(doc => doc.ref.delete()));
  });
}

function getTranslatedType(type) {
  if (type === 'واجب') return i18n[currentLang].type_homework;
  if (type === 'مذاكرة') return i18n[currentLang].type_study;
  if (type === 'تلخيص') return i18n[currentLang].type_summary;
  if (type === 'استراحة لعب') return i18n[currentLang].type_gaming;
  if (type === 'استراحة مشاهدة') return i18n[currentLang].type_watch;
  return type;
}

document.addEventListener("DOMContentLoaded", () => {
  checkAuthStatus();
  
  // مزامنة زر الوضع عند التحميل
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  const toggleCheckbox = $('theme-toggle-checkbox');
  if(toggleCheckbox) {
    // الوضع الفاتح = Checked (شمس) / الوضع الداكن = Unchecked (قمر)
    toggleCheckbox.checked = (savedTheme === "light");
  }

  setupPresenceSystem();
  startSpecialGameGlobalTimer();
  renderSubjectsGrid();
});

// دالة تبديل الثيم المحدثة
function toggleTheme() {
  const toggleCheckbox = $('theme-toggle-checkbox');
  const isLight = toggleCheckbox.checked;
  const newTheme = isLight ? "light" : "dark";
  
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

function toggleLanguage() {
  currentLang = currentLang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", currentLang);
  applyLanguage(currentLang);
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  $('lang-btn-text').textContent = lang === "ar" ? "EN" : "عربي";

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  renderSubjectsGrid();
}

function openInstructions() {
  showScreen('instructions-screen');
}

function closeInstructions() {
  showScreen('subject-selection');
}

function openAdminPanel() {
  if (currentUser !== 'admin') {
    alert("هذه الصفحة مخصصة للأدمن فقط!");
    showScreen('subject-selection');
    return;
  }
  generateExamInputFields();
  renderAdminUsersList();
  renderAcceptedSongs();
  showScreen('admin-panel-screen');
}

function generateExamInputFields() {
  const count = parseInt($('exam-question-count').value) || 1;
  const container = $('exam-questions-inputs');
  container.innerHTML = "<h4 style='margin-bottom:8px;'>الأسئلة:</h4>";
  for(let i = 1; i <= count; i++) {
    container.innerHTML += `
      <div class="form-group" style="border:1px solid var(--border-color); padding:10px; border-radius:8px; margin-bottom:10px;">
        <label>السؤال ${i}:</label>
        <input type="text" id="admin-q-${i}" class="input-field" placeholder="اكتب السؤال هنا...">
      </div>
    `;
  }
}

function saveAdminExam() {
  const subject = $('exam-subject').value;
  const type = $('exam-type').value;
  const duration = parseInt($('exam-duration').value) || 30;
  const count = parseInt($('exam-question-count').value) || 1;
  
  let questions = [];
  for (let i = 1; i <= count; i++) {
    const qField = $(`admin-q-${i}`);
    if (qField && qField.value.trim()) questions.push(qField.value.trim());
  }

  if (questions.length === 0) return alert("يرجى كتابة الأسئلة بشكل صحيح!");

  const examData = {
    subject,
    type,
    duration,
    questions,
    createdDate: new Date().toLocaleDateString(),
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection("exams").doc("current_exam").set(examData)
    .then(() => {
      alert("تم نشر امتحان الأدمن بنجاح على السحابة! 🚀");
      showScreen('subject-selection');
    })
    .catch((error) => console.error("خطأ في نشر الامتحان: ", error));
}

function checkAvailableAdminExam() {
  db.collection("exams").doc("current_exam").onSnapshot((doc) => {
    const loungeCard = $('exam-waiting-lounge');
    const banner = $('admin-exam-banner');
    const loungeIcon = $('lounge-status-icon');
    const loungeTitle = $('lounge-title');
    const loungeDesc = $('lounge-subtitle');

    if (doc.exists && doc.data().questions) {
      activeCloudExam = doc.data();
      loungeCard.classList.remove('pulse-border');
      loungeCard.classList.add('exam-ready');
      loungeIcon.textContent = "📝";
      loungeTitle.textContent = i18n[currentLang].exam_ready_title;
      loungeDesc.textContent = i18n[currentLang].exam_ready_desc;

      banner.classList.remove('hidden');
      $('exam-banner-info').innerHTML = `<strong>امتحان الأدمن (${activeCloudExam.type}):</strong> مادة ${i18n[currentLang].subjects[activeCloudExam.subject] || activeCloudExam.subject} | المدة: ${activeCloudExam.duration} دقيقة | عدد الأسئلة: ${activeCloudExam.questions.length}`;
    } else {
      activeCloudExam = null;
      loungeCard.classList.add('pulse-border');
      loungeCard.classList.remove('exam-ready');
      loungeIcon.textContent = "⏳";
      loungeTitle.textContent = i18n[currentLang].waiting_exam_title;
      loungeDesc.textContent = i18n[currentLang].waiting_exam_desc;

      banner.classList.add('hidden');
    }
  });
}

function startAdminExam() {
  if (!activeCloudExam) return alert("لا يوجد امتحان متاح حالياً!");

  document.querySelector('.top-bar').style.display = 'none';
  document.getElementById('exam-waiting-lounge').style.display = 'none';

  isExamSession = true;
  totalSecondsRemaining = activeCloudExam.duration * 60;
  secondsElapsed = 0;

  $('exam-take-title').textContent = `امتحان الأدمن: ${i18n[currentLang].subjects[activeCloudExam.subject] || activeCloudExam.subject}`;
  
  const qContainer = $('exam-questions-container');
  qContainer.innerHTML = activeCloudExam.questions.map((q, idx) => `
    <div style="margin-bottom:15px; border-bottom:1px solid var(--border-color); padding-bottom:10px; text-align:start;">
      <p><strong>س${idx+1}: ${q}</strong></p>
      <label style="font-size:0.85rem; margin-top:5px; display:block;">كتابة الحل بالنص:</label>
      <textarea id="user-exam-text-${idx}" class="input-field" style="height:70px;"></textarea>
      
      <label style="font-size:0.85rem; margin-top:8px; display:block;">أو ارفع رابط صورة الحل:</label>
      <input type="url" id="user-exam-img-${idx}" class="input-field" placeholder="https://example.com/answer-image.jpg">
    </div>
  `).join('');

  showScreen('exam-take-screen');
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    totalSecondsRemaining--;
    secondsElapsed++;
    $('exam-timer-display').textContent = `${Math.floor(totalSecondsRemaining/60).toString().padStart(2,'0')}:${(totalSecondsRemaining%60).toString().padStart(2,'0')}`;
    if(totalSecondsRemaining <= 0) {
      clearInterval(timerInterval);
      submitExamAnswers();
    }
  }, 1000);
}

function submitExamAnswers() {
  clearInterval(timerInterval);

  document.querySelector('.top-bar').style.display = '';
  document.getElementById('exam-waiting-lounge').style.display = '';

  if (!activeCloudExam) return;

  let answers = [];
  activeCloudExam.questions.forEach((q, idx) => {
    const text = $(`user-exam-text-${idx}`)?.value.trim() || '';
    const img = $(`user-exam-img-${idx}`)?.value.trim() || '';
    answers.push({ question: q, text, img });
  });

  const submission = {
    id: Date.now(),
    subject: activeCloudExam.subject,
    timeTakenSeconds: secondsElapsed,
    answers,
    status: "بانتظار التصحيح",
    feedback: "",
    score: null,
    submittedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection("users").doc(currentUser).collection("submissions").add(submission)
    .then(() => {
      return db.collection("exams").doc("current_exam").delete();
    })
    .then(() => {
      alert("تم إرسال إجاباتك للأدمن بنجاح! سيتم تصحيحها قريباً.");
      showScreen('subject-selection');
    })
    .catch(err => alert("حدث خطأ أثناء حفظ الإجابات: " + err.message));
}

function renderAdminUsersList() {
  const list = $('admin-users-list');
  list.innerHTML = "<p><small>جاري التحميل...</small></p>";

  db.collection("users").get().then(snapshot => {
    list.innerHTML = "";
    snapshot.forEach(doc => {
      if (doc.id === 'admin') return;
      const userData = doc.data();
      const u = doc.id;
      const isOnline = userData.isOnline ?? false;
      const isBanned = userData.isBanned ?? false;

      let statusLabel = isBanned ? i18n[currentLang].status_banned : (isOnline ? i18n[currentLang].status_online : i18n[currentLang].status_offline);
      let statusClass = isBanned ? 'banned' : (isOnline ? 'online' : 'offline');

      let userBlock = document.createElement("div");
      userBlock.className = `user-admin-card ${statusClass}`;
      userBlock.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
          <h4>👤 ${u} (⭐ ${userData.points || 0} | 🔥 ${userData.streak || 1} يوم)</h4>
          
          <div style="display:flex; align-items:center; gap:10px;">
            <span class="user-status-badge ${statusClass}">
              ● ${statusLabel}
            </span>

            ${isBanned ? `
              <button class="btn success-btn small-btn" onclick="toggleUserBan('${u}', false)">إلغاء الحظر 🔓</button>
            ` : `
              <button class="btn cancel-btn small-btn" onclick="toggleUserBan('${u}', true)">حظر الحساب 🚫</button>
            `}
            <button class="btn cancel-btn small-btn" onclick="deleteUserAccount('${u}')">حذف الحساب نهائيًا 🗑️</button>
          </div>
        </div>
        <div class="responsive-flex" style="align-items:flex-end; margin-top:10px;">
          <div class="form-group flex-1" style="margin-bottom:0;">
            <label for="admin-stars-${u}">تعديل رصيد النجوم:</label>
            <input type="number" id="admin-stars-${u}" class="input-field" min="0" step="1" value="${Number(userData.points) || 0}" inputmode="numeric">
          </div>
          <button class="btn success-btn" onclick="setUserStars('${u}')">حفظ رصيد النجوم ⭐</button>
        </div>
        <div id="submissions-container-${u}" style="margin-top:10px;"></div>
      `;
      list.appendChild(userBlock);

      db.collection("users").doc(u).collection("submissions").get().then(subSnap => {
        const subContainer = $(`submissions-container-${u}`);
        if (subSnap.empty) {
          subContainer.innerHTML = "<small style='color:var(--subtext-color);'>لم يقدم أية امتحانات بعد</small>";
        } else {
          subContainer.innerHTML = "";
          subSnap.forEach(subDoc => {
            const ex = subDoc.data();
            const exId = subDoc.id;
            subContainer.innerHTML += `
              <div style="margin-top:8px; padding:10px; background:var(--card-bg); border-radius:8px; border:1px solid var(--border-color);">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                  <strong>امتحان ${i18n[currentLang].subjects[ex.subject] || ex.subject} - الحالة: ${ex.status}</strong>
                  <button class="btn cancel-btn small-btn" onclick="deleteSubmission('${u}', '${exId}')" title="مسح هذا الامتحان">🗑️ مسح</button>
                </div>
                <p style="font-size:0.85rem; margin-top:6px; color:var(--primary-color); font-weight:bold;">${i18n[currentLang].time_spent_label}${i18n[currentLang].time_taken_str.replace('{mins}', Math.floor((ex.timeTakenSeconds || 0) / 60)).replace('{secs}', (ex.timeTakenSeconds || 0) % 60)}</p>

                <div style="font-size:0.85rem; margin:8px 0; color:var(--text-color);">
                  ${ex.answers.map((a, i) => `
                    <p style="margin-top:4px;"><strong>س${i+1}:</strong>${a.question}</p>
                    <p style="color:var(--subtext-color);">💬 الإجابة: ${a.text || 'لا توجد إجابة نصية'}</p>
                    ${a.img ? `<p>🖼️ صورة: <a href="${a.img}" target="_blank" style="color:var(--primary-color);">عرض الصورة</a></p>` : ''}
                  `).join('')}
                </div>
                
                ${ex.status === "بانتظار التصحيح" ? `
                  <div style="margin-top:8px;">
                    <label style="font-size:0.8rem;">ملاحظات/شرح الأدمن للخطأ:</label>
                    <input type="text" id="admin-feedback-${u}-${exId}" class="input-field" placeholder="اكتب الشرح هنا...">
                    <div style="display:flex; gap:5px; margin-top:5px; flex-wrap:wrap;" class="responsive-flex">
                      <button class="btn success-btn flex-1" onclick="gradeExam('${u}', '${exId}', 'full')">الدرجة الكاملة (+1 💎)</button>
                      <button class="btn secondary-btn flex-1" style="background-color:#d69e2e; color:white;" onclick="gradeExam('${u}', '${exId}', 'partial')">إجابة غير كاملة</button>
                      <button class="btn cancel-btn flex-1" onclick="gradeExam('${u}', '${exId}', 'reject')">رفض / حظر 🚫</button>
                    </div>
                  </div>
                ` : `<p style="color:${ex.status === 'مرفوض' ? 'var(--danger-color)' : 'var(--success-color)'}; font-size:0.85rem; font-weight:bold;">النتيجة: ${ex.score}${ex.feedback ? ` - ملاحظات: ${ex.feedback}` : ''}</p>`}
              </div>
            `;
          });
        }
      });
    });
  });
}

async function setUserStars(username) {
  if (currentUser !== 'admin' || !username || username === 'admin') {
    return alert("تعديل رصيد النجوم متاح للأدمن فقط.");
  }

  const input = $(`admin-stars-${username}`);
  const stars = Number(input?.value);
  if (!Number.isSafeInteger(stars) || stars < 0) {
    return alert("أدخل عدد نجوم صحيحاً لا يقل عن صفر.");
  }

  try {
    const userRef = db.collection("users").doc(username);
    await userRef.update({
      points: stars
    });
    alert(`تم تحديث رصيد النجوم للمستخدم ${username} إلى ${stars} ⭐`);
    renderAdminUsersList();
  } catch (error) {
    alert(`تعذر تحديث رصيد النجوم: ${error.message}`);
  }
}

async function deleteUserAccount(username) {
  if (currentUser !== 'admin' || !username || username === 'admin') return;
  if (!confirm(`هل أنت متأكد من حذف حساب (${username}) نهائيًا؟ سيتم حذف بياناته وسجل إنجازاته وامتحاناته، ولا يمكن التراجع عن ذلك.`)) return;

  try {
    const userRef = db.collection("users").doc(username);
    const [historySnapshot, submissionsSnapshot] = await Promise.all([
      userRef.collection("history").get(),
      userRef.collection("submissions").get()
    ]);
    const records = [...historySnapshot.docs, ...submissionsSnapshot.docs];
    await Promise.all(records.map(doc => doc.ref.delete()));
    await userRef.delete();
    alert(`تم حذف حساب (${username}) وبياناته نهائيًا.`);
    renderAdminUsersList();
  } catch (error) {
    alert(`تعذر حذف حساب (${username}): ${error.message}`);
  }
}

function toggleUserBan(username, banStatus) {
  const confirmMsg = banStatus 
    ? `هل أنت تأكد من رغبتك في حظر المستخدم (${username})؟`
    : `هل تريد إلغاء حظر المستخدم (${username})؟`;

  if (confirm(confirmMsg)) {
    db.collection("users").doc(username).update({
      isBanned: banStatus,
      isOnline: false
    }).then(() => {
      alert(banStatus ? `تم حظر الحساب (${username}) بنجاح! 🚫` : `تم إلغاء حظر الحساب (${username})! 🔓`);
      renderAdminUsersList();
    }).catch(err => {
      alert("حدث خطأ أثناء تعديل حالة الحظر: " + err.message);
    });
  }
}

function deleteSubmission(username, subDocId) {
  if (confirm(`هل أنت تأكد من رغبتك في مسح نتيجة الامتحان للمستخدم (${username})؟`)) {
    db.collection("users")
      .doc(username)
      .collection("submissions")
      .doc(subDocId)
      .delete()
      .then(() => {
        alert("تم مسح نتيجة الامتحان بنجاح! 🗑️");
        renderAdminUsersList();
      })
      .catch((err) => {
        alert("حدث خطأ أثناء مسح الامتحان: " + err.message);
      });
  }
}

function gradeExam(username, subDocId, mode) {
  const feedback = $(`admin-feedback-${username}-${subDocId}`)?.value.trim() || '';
  const subRef = db.collection("users").doc(username).collection("submissions").doc(subDocId);
  const userRef = db.collection("users").doc(username);

  let updates = {};

  if (mode === 'full') {
    updates = {
      status: "تم التصحيح",
      feedback: feedback,
      score: "ممتاز! الدرجة الكاملة 💯"
    };
    userRef.update({ adminPoints: firebase.firestore.FieldValue.increment(1) });
  } else if (mode === 'partial') {
    updates = {
      status: "تم التصحيح",
      feedback: feedback,
      score: "لم يحصل على الدرجة الكاملة"
    };
  } else if (mode === 'reject') {
    updates = {
      status: "مرفوض",
      feedback: feedback || "تم رفض الحل من قبل الأدمن",
      score: "مرفوض / Ban 🚫"
    };
  }

  subRef.update(updates).then(() => {
    alert(`تم تحديث تقييم الامتحان للمستخدم ${username}`);
    renderAdminUsersList();
  });
}

function openLeaderboard() {
  $('main-app-title').classList.add('hidden');
  renderLeaderboards();
  showScreen('leaderboard-screen');
}

function closeLeaderboard() {
  $('main-app-title').classList.remove('hidden');
  showScreen('subject-selection');
}

function renderLeaderboards() {
  const timeBoard = $('leaderboard-time-list');
  const pointsBoard = $('leaderboard-points-list');

  timeBoard.innerHTML = "<p><small>جاري التحميل...</small></p>";
  pointsBoard.innerHTML = "<p><small>جاري التحميل...</small></p>";

  db.collection("users").get().then(snapshot => {
    let users = [];
    snapshot.forEach(doc => {
      if (doc.id === 'admin') return;
      users.push({
        name: doc.id,
        minutes: doc.data().totalStudyMinutes || 0,
        points: doc.data().points || 0,
        streak: doc.data().streak || 1
      });
    });

    let timeSorted = [...users].sort((a, b) => b.minutes - a.minutes);
    timeBoard.innerHTML = timeSorted.map((u, index) => {
      let badge = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}.`;
      return `
        <div class="leaderboard-item">
          <span><strong>${badge} ${u.name}</strong> <small>(🔥 ${u.streak} أيام)</small></span>
          <span style="color:var(--primary-color); font-weight:bold;">⏱️ ${u.minutes} دقيقة</span>
        </div>
      `;
    }).join('') || '<p><small>لا يوجد مستخدمون بعد</small></p>';

    let pointsSorted = [...users].sort((a, b) => b.points - a.points);
    pointsBoard.innerHTML = pointsSorted.map((u, index) => {
      let badge = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `${index + 1}.`;
      return `
        <div class="leaderboard-item">
          <span><strong>${badge} ${u.name}</strong></span>
          <span style="color:var(--warning-color); font-weight:bold;">⭐ ${u.points} نقطة</span>
        </div>
      `;
    }).join('') || '<p><small>لا يوجد مستخدمون بعد</small></p>';
  });
}

function openStore() {
  $('main-app-title').classList.add('hidden');
  renderShop();
  showScreen('shop-screen');
}

function closeStore() {
  $('main-app-title').classList.remove('hidden');
  showScreen('subject-selection');
}

function getShopItems() {
  const savedItems = JSON.parse(localStorage.getItem("custom_shop_items") || "[]");
  const items = Array.isArray(savedItems) ? savedItems : [];
  return [
    ...items,
    ...DEFAULT_SHOP_ITEMS.filter(defaultItem => !items.some(item => item.id === defaultItem.id))
  ];
}

function renderShop() {
  const items = getShopItems();
  const shopGrid = $('shop-grid');
  
  shopGrid.innerHTML = items.map(item => {
    const isOwner = item.creator === currentUser;
    const isPurchasedGame = PURCHASED_GAME_TYPES.includes(item.type);
    const hasPurchasedGame = isPurchasedGame && purchasedGames.includes(item.type);
    let discountAmount = item.price >= 150 ? 100 : 30;
    let discountedPrice = Math.max(0, item.price - discountAmount);
    
    let adminDiscountBadge = "";
    if (!isPurchasedGame && adminPoints > 0) {
      adminDiscountBadge = `<small style="color:#ecc94b; display:block; font-weight:bold; margin-top:3px;">💎 خصم الأدمن (توفير ${discountAmount}⭐) متاح!</small>`;
    }

    return `
      <div class="shop-item">
        <img src="${item.img || 'https://via.placeholder.com/150'}" class="shop-item-img" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
        <h3>${item.title}</h3>
        <p class="shop-item-script">${item.script}</p>
        <div class="shop-item-price">⭐ ${item.price}</div>
        ${adminDiscountBadge}
        <small style="color:var(--subtext-color); display:block; margin-top:4px;">المنشئ: ${isOwner ? 'أنت' : item.creator}</small>
        
        ${isOwner ? `
          <button class="btn secondary-btn full-width-btn" style="margin-top:10px; cursor:not-allowed;" disabled>${i18n[currentLang].owner_badge}</button>
        ` : hasPurchasedGame ? `
          <button class="btn success-btn full-width-btn" style="margin-top:10px;" onclick="playGame('${item.type}')">تم الشراء ✔️ — دخول اللعبة</button>
        ` : `
          <div style="display:flex; flex-direction:column; gap:6px; margin-top:10px;">
            <button class="btn subject-btn full-width-btn" onclick="buyShopItem(${item.id}, false)">شراء عادي (⭐ ${item.price})</button>${!isPurchasedGame && adminPoints > 0 ? `
              <button class="btn success-btn full-width-btn" style="background:#d69e2e;" onclick="buyShopItem(${item.id}, true)">💎 شراء بالخصم بـ ⭐ ${discountedPrice}</button>
            ` : ''}
          </div>
        `}
      </div>
    `;
  }).join('');
}

function saveNewShopItem() {
  if (totalPoints < 200) {
    return alert("لا تمتلك 200 نجمة لنشر منتج جديد!");
  }

  const title = $('item-title').value.trim();
  const script = $('item-script').value.trim();
  const price = parseInt($('item-price').value) || 50;
  const img = $('item-img-url').value.trim() || "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80";

  if (!title || !script) {
    return alert("يرجى ملء الاسم والوصف بشكل صحيح!");
  }

  totalPoints -= 200;
  updateUI();

  let items = getShopItems();
  items.push({
    id: Date.now(),
    creator: currentUser,
    title,
    script,
    price,
    img,
    type: 'custom'
  });

  localStorage.setItem("custom_shop_items", JSON.stringify(items));
  alert("تم نشر منتجك الجديد بنجاح في المتجر! 🎉");
  openStore();
}

function buyShopItem(id, useAdminPoint) {
  const items = getShopItems();
  const item = items.find(i => i.id === id);
  if(!item) return;

  if (item.creator === currentUser) {
    return alert("لا يمكنك شراء منتجك الخاص!");
  }

  if (PURCHASED_GAME_TYPES.includes(item.type) && purchasedGames.includes(item.type)) {
    return alert("لقد اشتريت هذه اللعبة بالفعل!");
  }

  if (useAdminPoint && PURCHASED_GAME_TYPES.includes(item.type)) {
    return alert("لا يتوفر خصم نقاط الأدمن على أسعار الألعاب.");
  }

  let finalPrice = item.price;

  if (useAdminPoint) {
    if (adminPoints <= 0) return alert("ليس لديك نقاط أدمن لاستخدام هذا الخصم!");
    let discountAmount = item.price >= 150 ? 100 : 30;
    finalPrice = Math.max(0, item.price - discountAmount);
  }

  if (totalPoints < finalPrice) {
    return alert("عذراً، لا تمتلك نجوم كافية لإنهاء الشراء!");
  }

  if (item.type === 'song_idea') {
    const userSubmission = prompt("اكتب الأغنية أو الفكرة التي تريد مشاركتها وإرسالها للأدمن:");
    if (!userSubmission || !userSubmission.trim()) return alert("تم إلغاء الشراء، يرجى كتابة الأغنية أو الفكرة.");

    let pendingSubmissions = JSON.parse(localStorage.getItem("pending_songs_ideas") || "[]");
    pendingSubmissions.push({
      id: Date.now(),
      user: currentUser,
      text: userSubmission.trim(),
      date: new Date().toLocaleDateString()
    });
    localStorage.setItem("pending_songs_ideas", JSON.stringify(pendingSubmissions));
    alert("تم إرسال أغنيتك/فكرتك للأدمن بنجاح وسيتم مراجعتها لنشرها بالموقع! 🎵");
  }

  totalPoints -= finalPrice;
  if (useAdminPoint) adminPoints--;

  if (item.type === 'streak_freeze') {
    userStreak += 1;
    alert("❄️ تم تعويض اليوم بنجاح وزيادة الـ Streak بـ +1 يوم!");
  } else if (item.type === 'double_stars') {
    doubleStarsUntil = Date.now() + (24 * 60 * 60 * 1000);
    alert("⚡ تم تفعيل مضاعف النجوم (2x) بنجاح لمدة 24 ساعة كاملة!");
  } else if (item.type === 'unlock_game') {
    specialGameUntil = Date.now() + (30 * 60 * 1000);
    alert("🎮 تم فتح زر اللعبة المخصصة في أعلى التطبيق بنجاح! يمكنك اللعب لمدة 30 دقيقة الآن!");
  } else if (item.type === 'pause_credits') {
    pauseCredits += (item.credits || 2);
    alert("⚡ تم إضافة +2 فرصة إيقاف مؤقت إلى حسابك بنجاح!");
  } else if (PURCHASED_GAME_TYPES.includes(item.type)) {
    purchasedGames.push(item.type);
    alert(`🎉 مبروك! تم شراء "${item.title}" بنجاح. يمكنك الدخول إليها من زر الألعاب المشتراة أعلى التطبيق.`);
  }

  if (item.creator !== 'system') {
    db.collection("users").doc(item.creator).update({
      points: firebase.firestore.FieldValue.increment(finalPrice)
    }).catch(err => console.error(err));
  }

  if(item.type === 'game') gameTimeMins += (item.mins || 30);
  if(item.type === 'watch') watchTimeMins += (item.mins || 30);

  updateUI();
  renderShop();
}

function openSpecialGame() {
  if (!specialGameUntil || Date.now() >= specialGameUntil) {
    return alert("انتهت مدة اللعب المتاحة (30 دقيقة)!");
  }
  showScreen('special-game-screen');
  initMiniGame();
}

function closeSpecialGame() {
  clearInterval(miniGameInterval);
  showScreen('subject-selection');
}

function initMiniGame() {
  miniGameCanvas = $('miniGameCanvas');
  miniGameCtx = miniGameCanvas.getContext('2d');
  miniGameScore = 0;
  fallingObjects = [];
  basket.x = miniGameCanvas.width / 2 - basket.width / 2;
  $('game-score-display').textContent = '0';

  miniGameCanvas.onmousemove = (e) => {
    const rect = miniGameCanvas.getBoundingClientRect();
    basket.x = e.clientX - rect.left - basket.width / 2;
  };

  miniGameCanvas.ontouchmove = (e) => {
    const rect = miniGameCanvas.getBoundingClientRect();
    if(e.touches[0]) {
      basket.x = e.touches[0].clientX - rect.left - basket.width / 2;
    }
  };

  clearInterval(miniGameInterval);
  miniGameInterval = setInterval(updateMiniGame, 1000 / 30);
}

function updateMiniGame() {
  miniGameCtx.clearRect(0, 0, miniGameCanvas.width, miniGameCanvas.height);

  if (basket.x < 0) basket.x = 0;
  if (basket.x + basket.width > miniGameCanvas.width) basket.x = miniGameCanvas.width - basket.width;

  miniGameCtx.fillStyle = '#3182ce';
  miniGameCtx.fillRect(basket.x, basket.y, basket.width, basket.height);

  if (Math.random() < 0.08) {
    const type = Math.random() < 0.7 ? 'star' : (Math.random() < 0.85 ? 'gem' : 'bomb');
    fallingObjects.push({
      x: Math.random() * (miniGameCanvas.width - 20),
      y: 0,
      type: type,
      speed: 3 + Math.random() * 3
    });
  }

  for (let i = fallingObjects.length - 1; i >= 0; i--) {
    let obj = fallingObjects[i];
    obj.y += obj.speed;

    miniGameCtx.font = "20px Arial";
    if (obj.type === 'star') miniGameCtx.fillText('⭐', obj.x, obj.y);
    else if (obj.type === 'gem') miniGameCtx.fillText('💎', obj.x, obj.y);
    else miniGameCtx.fillText('💣', obj.x, obj.y);

    if (obj.y >= basket.y - 10 && obj.y <= basket.y + basket.height &&
        obj.x >= basket.x - 10 && obj.x <= basket.x + basket.width) {
      if (obj.type === 'star') miniGameScore += 10;
      else if (obj.type === 'gem') miniGameScore += 30;
      else miniGameScore = Math.max(0, miniGameScore - 20);

      $('game-score-display').textContent = miniGameScore;
      fallingObjects.splice(i, 1);
      continue;
    }

    if (obj.y > miniGameCanvas.height) {
      fallingObjects.splice(i, 1);
    }
  }
}

function renderAcceptedSongs() {
  let pending = JSON.parse(localStorage.getItem("pending_songs_ideas") || "[]");
  let accepted = JSON.parse(localStorage.getItem("accepted_songs_ideas") || "[]");
  const container = $('accepted-songs-list');
  
  if (!container) return;

  container.innerHTML = `
    <h4>طلبات معلقة بانتظار الموافقة:</h4>
    ${pending.length === 0 ? '<p><small style="color:var(--subtext-color);">لا توجد طلبات جديدة</small></p>' : pending.map((p, idx) => `
      <div style="padding:10px; background:var(--card-bg); border-radius:8px; margin-top:8px; border:1px solid var(--border-color);">
        <p><strong>${p.user}:</strong> "${p.text}"</p>
        <div style="display:flex; gap:8px; margin-top:8px;">
          <button class="btn success-btn small-btn" onclick="approveSong(${idx})">موافقة ونشر ✅</button>
          <button class="btn cancel-btn small-btn" onclick="rejectSong(${idx})">رفض ❌</button>
        </div>
      </div>
    `).join('')}

    <h4 style="margin-top:15px;">الأغاني والأفكار المقبولة والمنشورة:</h4>
    ${accepted.length === 0 ? '<p><small style="color:var(--subtext-color);">لا توجد أفكار مقبولة بعد</small></p>' : accepted.map((a, idx) => `
      <div style="padding:8px; background:var(--card-bg); border-radius:6px; margin-top:5px; border:1px solid var(--border-color); display:flex; justify-content:space-between; align-items:center;">
        <span>🎵 <strong>${a.user}:</strong>${a.text}</span>
        <button class="btn cancel-btn small-btn" onclick="deleteAcceptedSong(${idx})">مسح 🗑️</button>
      </div>
    `).join('')}
  `;
}

function approveSong(index) {
  let pending = JSON.parse(localStorage.getItem("pending_songs_ideas") || "[]");
  let accepted = JSON.parse(localStorage.getItem("accepted_songs_ideas") || "[]");

  accepted.push(pending[index]);
  pending.splice(index, 1);

  localStorage.setItem("pending_songs_ideas", JSON.stringify(pending));
  localStorage.setItem("accepted_songs_ideas", JSON.stringify(accepted));
  renderAcceptedSongs();
}

function rejectSong(index) {
  let pending = JSON.parse(localStorage.getItem("pending_songs_ideas") || "[]");
  pending.splice(index, 1);
  localStorage.setItem("pending_songs_ideas", JSON.stringify(pending));
  renderAcceptedSongs();
}

function deleteAcceptedSong(index) {
  let accepted = JSON.parse(localStorage.getItem("accepted_songs_ideas") || "[]");
  accepted.splice(index, 1);
  localStorage.setItem("accepted_songs_ideas", JSON.stringify(accepted));
  renderAcceptedSongs();
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof loadHistory === 'function') {
        loadHistory(); // استدعاء دالة التحميل يدوياً عند بدء التشغيل
    }
    fetchPrayerTimes();
});

// جلب مواقيت الصلاة بحسب الدولة والمدينة
async function fetchPrayerTimes() {
  const city = "Cairo";     // يمكنك تغيير المدينة حسب رغبتك
  const country = "Egypt";   // يمكنك تغيير الدولة

  try {
    const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=5`);
    const data = await response.json();
    
    if (data.code === 200) {
      const timings = data.data.timings;
      const prayers = {
        Fajr: "الفجر",
        Dhuhr: "الظهر",
        Asr: "العصر",
        Maghrib: "المغرب",
        Isha: "العشاء"
      };

      const container = document.getElementById("prayer-times-list");
      if (!container) return;

      container.innerHTML = "";
      
      for (const [key, arabicName] of Object.entries(prayers)) {
        const timeStr = timings[key];
        container.innerHTML += `
          <div style="background: var(--bg-color); padding: 6px 12px; border-radius: 8px; border: 1px solid var(--border-color); text-align: center;">
            <div style="font-weight: bold; color: var(--primary-color);">${arabicName}</div>
            <div>${formatTime12(timeStr)}</div>
          </div>
        `;
      }

      updateNextPrayer(timings, prayers);
    }
  } catch (error) {
    console.error("خطأ في جلب مواقيت الصلاة:", error);
    const info = document.getElementById("next-prayer-info");
    if (info) info.textContent = "تعذر تحميل مواقيت الصلاة حالياً.";
  }
}

// تحويل الوقت إلى صيغة 12 ساعة (AM/PM)
function formatTime12(time24) {
  let [hours, minutes] = time24.split(':').map(Number);
  const period = hours >= 12 ? 'م' : 'ص';
  hours = hours % 12 || 12;
  return `${hours}:${minutes.toString().padStart(2, '0')} ${period}`;
}

// تحديد الصلاة القادمة
function updateNextPrayer(timings, prayers) {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  let nextPrayerName = "";
  let nextPrayerTimeMinutes = Infinity;

  for (const [key, arabicName] of Object.entries(prayers)) {
    const [h, m] = timings[key].split(':').map(Number);
    const prayerMinutes = h * 60 + m;

    if (prayerMinutes > currentMinutes) {
      nextPrayerName = arabicName;
      nextPrayerTimeMinutes = prayerMinutes;
      break;
    }
  }

  const info = document.getElementById("next-prayer-info");
  if (!info) return;

  if (nextPrayerName) {
    const diff = nextPrayerTimeMinutes - currentMinutes;
    const hoursLeft = Math.floor(diff / 60);
    const minsLeft = diff % 60;
    
    let timeText = hoursLeft > 0 ? `${hoursLeft} ساعة و ${minsLeft} دقيقة` : `${minsLeft} دقيقة`;
    info.innerHTML = `الصلاة القادمة: <strong style="color:var(--gold-color);">${nextPrayerName}</strong> بعد <strong>${timeText}</strong>`;
  } else {
    info.innerHTML = `الصلاة القادمة: <strong style="color:var(--gold-color);">الفجر (غداً)</strong>`;
  }
}

// استدعاء الدالة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  fetchPrayerTimes();
});