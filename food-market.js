const FOOD_CATEGORIES = ['home', 'takeout', 'snacks'];
const FOOD_TEXT = {
  ar: {
    market: 'سوق الأكل الحقيقي',
    marketIntro: 'شارك وجبات جربتها، وتابع مشترياتك من ميزانيتك الفعلية.',
    wallet: 'المحفظة والإنفاق',
    balance: 'المبلغ المتاح',
    budget: 'الميزانية المرجعية',
    weeklySpent: 'الإنفاق خلال 7 أيام',
    spendingHistory: 'مشترياتي الأخيرة',
    noRecentSpend: 'لا توجد مشتريات مسجلة خلال آخر 7 أيام.',
    stars: 'نجومك',
    setMoney: 'تحديث المبلغ الذي تملكه',
    saveMoney: 'حفظ المبلغ',
    income: 'أموال اكتسبتها',
    addIncome: 'إضافة للدخل',
    extravaganceRule: 'خطة الصرف: اختر عدد الأيام التي تريد أن تكفيك فيها أموالك، ويُحسب حد اليوم بقسمة رصيدك المتبقي على الأيام المتبقية. عند تجاوز الحد اليومي يُسجل الشراء ويُوقف الشراء حتى اليوم التالي، وتُخصم نجمة عن كل 10% من التجاوز. وتظل عقوبات الكمية والإنفاق الأسبوعي سارية: 5–9 قطع تخصم نجمة، و10–19 تخصم نجمتين وإيقاف 24 ساعة، و20 فأكثر تخصم 3 نجوم وإيقاف 7 أيام؛ و3 مشتريات خلال 7 أيام تبلغ نصف الميزانية تخصم 50 نجمة مرة أسبوعياً. إذا أصبحت النجوم صفراً، يكون الإيقاف 7 أيام على الأقل.',
    planTitle: 'خطة مدة الميزانية',
    planIntro: 'حدد المدة التي تريد أن يكفيك فيها رصيدك الحالي. يمكنك الاختيار بالأيام حتى للمدد الأطول.',
    planDaysLabel: 'مدة الخطة بالأيام',
    days: 'يوم',
    savePlan: 'حفظ الخطة',
    dailyAllowance: 'حد الصرف اليومي',
    weeklyAllowance: 'حد الصرف الأسبوعي',
    monthlyAllowance: 'حد الصرف الشهري (30 يوماً)',
    todayRemaining: 'المتبقي من حصة اليوم',
    noPlan: 'لم تحدد خطة بعد. أدخل عدد الأيام واحفظ خطتك.',
    planActive: 'الخطة فعالة حتى {date} — متبقٍ {days} يوم.',
    planInvalid: 'أدخل مدة من يوم واحد إلى 3650 يوماً، وتأكد من وجود رصيد في المحفظة.',
    planSaved: 'تم حفظ خطة الصرف واحتساب حصتك اليومية.',
    dailyOverLimit: 'تجاوزت حصة اليوم بنسبة {percent}%. خُصمت {stars} نجوم، وتوقف الشراء حتى {date}.',
    dailyOverLimitNoStars: 'تجاوزت حصة اليوم بنسبة {percent}%. لم يتبق لديك نجوم، وتوقف الشراء حتى {date}.',
    addProduct: 'إضافة وجبة جربتها',
    refresh: 'تحديث المنتجات',
    search: 'ابحث في هذا المتجر',
    searchPlaceholder: 'اسم المنتج أو النوع أو مكان الشراء',
    shopCategory: 'المتجر',
    productName: 'اسم المنتج',
    foodType: 'نوع الوجبة أو الطعام',
    boughtFrom: 'من أين اشتريته؟',
    price: 'السعر الفعلي (جنيه)',
    imageOptional: 'رابط صورة (اختياري)',
    imagePreviewLoading: 'جارٍ تحميل معاينة الصورة...',
    imagePreviewReady: 'معاينة الصورة. إذا لم تكن هذه هي الصورة المطلوبة، عدّل الرابط أعلاه.',
    imagePreviewError: 'تعذر تحميل الصورة من هذا الرابط. تحقق منه أو استبدله.',
    imagePreviewInvalid: 'أدخل رابطاً مباشراً صالحاً يبدأ بـ https:// أو http://.',
    description: 'وصف الوجبة',
    submitProduct: 'إرسال للمراجعة',
    editProduct: 'تعديل المنتج',
    saveProductChanges: 'حفظ التعديلات',
    editNotAllowed: 'يمكن لصاحب المنتج أو الإدارة فقط تعديله.',
    productSaved: 'تم حفظ تعديلات المنتج.',
    productModeration: 'ستظهر المنتجات للجميع بعد مراجعة الإدارة.',
    noProducts: 'لا توجد منتجات هنا حالياً. كن أول من يضيف منتجاً!',
    loadError: 'تعذر تحميل سوق الطعام. تحقق من اتصالك ثم أعد المحاولة.',
    firestorePermission: 'رفضت صلاحيات Firestore هذه العملية. يجب تعديل قواعد Firestore للسماح للإدارة بمراجعة realFoodProducts و realFoodReports.',
    firestoreUnavailable: 'تعذر الاتصال بـ Firestore. تحقق من الإنترنت وحالة خدمة Firebase.',
    firestoreIndex: 'تحتاج قاعدة Firestore إلى فهرس مطلوب. راجع رابط إنشاء الفهرس في وحدة تحكم Firebase.',
    operationFailed: 'فشلت العملية ({code}). تحقق من وحدة تحكم Firebase وقواعد Firestore.',
    productUpdated: 'تم تحديث حالة المنتج.',
    category_home: 'خضروات وأكل بيتي',
    category_takeout: 'وجبات سريعة وطلبات خارجية',
    category_snacks: 'سناكس وحلويات',
    invalidProduct: 'أكمل جميع الحقول المطلوبة، وأدخل سعراً ورابط صورة صالحين.',
    sentForReview: 'تم إرسال المنتج للإدارة للمراجعة.',
    walletSaved: 'تم تحديث رصيد المحفظة والميزانية.',
    incomeAdded: 'تمت إضافة المبلغ إلى رصيدك وميزانيتك.',
    invalidAmount: 'أدخل مبلغاً صحيحاً أكبر من صفر.',
    buy: 'شراء وتسجيل',
    quantity: 'الكمية',
    purchaseSuccess: 'تم تسجيل الشراء وخصم المبلغ من محفظتك.',
    penaltyApplied: 'عقوبة إسراف: خُصمت {stars} نجوم. {lock}',
    penaltyNoLock: 'لا يوجد إيقاف شراء إضافي.',
    penaltyLock: 'تم إيقاف الشراء حتى {date}.',
    insufficientFunds: 'رصيدك غير كافٍ لهذا الشراء.',
    locked: 'الشراء من محفظتك متوقف حتى {date}.',
    lockCannotBuy: 'لا يمكنك الشراء من المحفظة أثناء فترة التوقف.',
    notAvailable: 'هذا المنتج لم يعد متاحاً للشراء.',
    alreadyRated: 'لقد قيّمت هذا المنتج من قبل.',
    rateOnlyAfterPurchase: 'يمكنك التقييم بعد شراء المنتج.',
    rate: 'قيّم بعد الشراء',
    submitRating: 'حفظ التقييم',
    ratingSaved: 'تم حفظ تقييمك.',
    averageRating: 'التقييم',
    noRating: 'لا توجد تقييمات',
    report: 'إبلاغ',
    reportReasonPrompt: 'ما سبب الإبلاغ؟ اذكر مثالاً واضحاً (مثل السعر الأصلي الصحيح).',
    reportPricePrompt: 'ما السعر الأصلي الواقعي بالجنيه؟ اكتب رقماً أو اتركه فارغاً.',
    reportSent: 'تم إرسال البلاغ للإدارة.',
    invalidReport: 'اكتب سبباً واضحاً للإبلاغ.',
    adminProducts: 'مراجعة منتجات الطعام والبلاغات',
    adminProductsLoading: 'جارٍ تحميل المنتجات والبلاغات...',
    adminProductsEmpty: 'لا توجد منتجات أو بلاغات حالياً.',
    status_pending: 'بانتظار المراجعة',
    status_approved: 'منشور',
    status_rejected: 'مرفوض',
    status_removed: 'محذوف',
    approve: 'موافقة ونشر',
    reject: 'رفض',
    remove: 'إزالة المنتج',
    reports: 'البلاغات المفتوحة',
    reportBy: 'البلاغ من',
    reportOriginalPrice: 'السعر الواقعي المذكور',
    reportReason: 'السبب',
    resolve: 'حسم البلاغ',
    decisionPrompt: 'اكتب قرار الإدارة وسببه:',
    reportResolved: 'تم حفظ القرار وإغلاق البلاغ.',
    adminOnly: 'هذه الصفحة خاصة بالإدارة.',
    productBy: 'أضافه',
    reviewed: 'تم تحديث حالة المنتج.',
    daysLock: 'إيقاف الشراء',
    categoryLabel: 'المتجر',
    sourceLabel: 'مكان الشراء',
    submittedBy: 'المستخدم',
    descriptionLabel: 'الوصف',
    ratingCount: 'تقييم'
  },
  en: {
    market: 'Real-food market',
    marketIntro: 'Share meals you have tried and track purchases against your real budget.',
    wallet: 'Wallet and spending',
    balance: 'Available balance',
    budget: 'Reference budget',
    weeklySpent: 'Spent in the last 7 days',
    spendingHistory: 'Recent purchases',
    noRecentSpend: 'No purchases recorded in the last 7 days.',
    stars: 'Your stars',
    setMoney: 'Update the money you currently have',
    saveMoney: 'Save amount',
    income: 'Money earned',
    addIncome: 'Add income',
    extravaganceRule: 'Spending plan: choose how many days your money should last. Your daily limit is your remaining wallet balance divided by the remaining plan days. If you exceed the daily limit, the purchase is recorded, buying is paused until the next day, and one star is deducted for every 10% over the limit. Quantity and weekly penalties still apply: 5–9 items deduct 1 star; 10–19 deduct 2 stars and pause buying for 24 hours; 20+ deduct 3 stars and pause buying for 7 days. Three purchases totaling half the budget within 7 days deduct 50 stars once per week. If stars reach zero, buying is paused for at least 7 days.',
    planTitle: 'Budget duration plan',
    planIntro: 'Choose how long your current wallet balance should last. Enter any number of days, including longer durations.',
    planDaysLabel: 'Plan duration in days',
    days: 'days',
    savePlan: 'Save plan',
    dailyAllowance: 'Daily spending limit',
    weeklyAllowance: 'Weekly spending limit',
    monthlyAllowance: 'Monthly spending limit (30 days)',
    todayRemaining: 'Today’s remaining allowance',
    noPlan: 'No plan set. Enter a number of days and save your plan.',
    planActive: 'Plan active until {date} — {days} days remaining.',
    planInvalid: 'Enter 1–3650 days and make sure your wallet has a balance.',
    planSaved: 'Spending plan saved and daily allowance calculated.',
    dailyOverLimit: 'Daily allowance exceeded by {percent}%. {stars} stars deducted; buying paused until {date}.',
    dailyOverLimitNoStars: 'Daily allowance exceeded by {percent}%. No stars remain; buying paused until {date}.',
    addProduct: 'Add a meal you tried',
    refresh: 'Refresh products',
    search: 'Search this shop',
    searchPlaceholder: 'Product, food type, or place',
    shopCategory: 'Shop',
    productName: 'Product name',
    foodType: 'Meal or food type',
    boughtFrom: 'Where did you buy it?',
    price: 'Actual price (EGP)',
    imageOptional: 'Image URL (optional)',
    imagePreviewLoading: 'Loading image preview...',
    imagePreviewReady: 'Image preview. If this is not the expected image, edit the URL above.',
    imagePreviewError: 'The image could not be loaded from this URL. Check or replace it.',
    imagePreviewInvalid: 'Enter a valid direct image URL starting with https:// or http://.',
    description: 'Meal description',
    submitProduct: 'Submit for review',
    editProduct: 'Edit product',
    saveProductChanges: 'Save changes',
    editNotAllowed: 'Only the product owner or an admin can edit it.',
    productSaved: 'Product changes saved.',
    productModeration: 'Products become visible to everyone after admin review.',
    noProducts: 'No products here yet. Be the first to add one!',
    loadError: 'Could not load the food market. Check your connection and try again.',
    firestorePermission: 'Firestore denied this operation. Update Firestore rules to allow admins to review realFoodProducts and realFoodReports.',
    firestoreUnavailable: 'Could not connect to Firestore. Check your internet connection and Firebase service status.',
    firestoreIndex: 'A Firestore index is required. Check the index creation link in the Firebase console.',
    operationFailed: 'The operation failed ({code}). Check the Firebase console and Firestore rules.',
    productUpdated: 'Product status updated.',
    category_home: 'Vegetables & home-cooked',
    category_takeout: 'Fast food & takeout',
    category_snacks: 'Snacks & sweets',
    invalidProduct: 'Complete all required fields and enter a valid price and image URL.',
    sentForReview: 'Product submitted to the admin for review.',
    walletSaved: 'Wallet balance and budget updated.',
    incomeAdded: 'The amount was added to your balance and budget.',
    invalidAmount: 'Enter a valid amount greater than zero.',
    buy: 'Buy and record',
    quantity: 'Qty',
    purchaseSuccess: 'Purchase recorded and deducted from your wallet.',
    penaltyApplied: 'Overspending penalty: {stars} stars deducted. {lock}',
    penaltyNoLock: 'No additional purchase pause.',
    penaltyLock: 'Purchases are paused until {date}.',
    insufficientFunds: 'You do not have enough money for this purchase.',
    locked: 'Wallet purchases are paused until {date}.',
    lockCannotBuy: 'Wallet purchases are paused for your account.',
    notAvailable: 'This product is no longer available for purchase.',
    alreadyRated: 'You have already rated this product.',
    rateOnlyAfterPurchase: 'You can rate this product after buying it.',
    rate: 'Rate after purchase',
    submitRating: 'Save rating',
    ratingSaved: 'Your rating was saved.',
    averageRating: 'Rating',
    noRating: 'No ratings yet',
    report: 'Report',
    reportReasonPrompt: 'Why are you reporting this? Include a clear example (such as the correct real-world price).',
    reportPricePrompt: 'What is the realistic original price in EGP? Enter a number or leave blank.',
    reportSent: 'Your report was sent to the admin.',
    invalidReport: 'Please provide a clear reason for the report.',
    adminProducts: 'Food products and reports review',
    adminProductsLoading: 'Loading products and reports...',
    adminProductsEmpty: 'There are no products or reports right now.',
    status_pending: 'Pending review',
    status_approved: 'Published',
    status_rejected: 'Rejected',
    status_removed: 'Removed',
    approve: 'Approve and publish',
    reject: 'Reject',
    remove: 'Remove product',
    reports: 'Open reports',
    reportBy: 'Reported by',
    reportOriginalPrice: 'Suggested actual price',
    reportReason: 'Reason',
    resolve: 'Resolve report',
    decisionPrompt: 'Enter the admin decision and reason:',
    reportResolved: 'Decision saved and report closed.',
    adminOnly: 'This page is for administrators only.',
    productBy: 'Added by',
    reviewed: 'Product status updated.',
    daysLock: 'Purchase pause',
    categoryLabel: 'Shop',
    sourceLabel: 'Bought from',
    submittedBy: 'User',
    descriptionLabel: 'Description',
    ratingCount: 'ratings'
  }
};

let foodActiveCategory = 'home';
let foodPurchasedIds = new Set();
let foodWallet = { balance: 0, budget: 0, spendLog: [], lockUntil: 0 };
let foodPlan = { days: 0, endsAt: 0, dayKey: '', daySpent: 0, dayLimit: 0 };
let foodEditingProductId = null;
let foodEditReturnScreen = 'food-market-screen';
const FOOD_DAY_MS = 86400000;

function foodErrorMessage(error) {
  const code = String(error?.code || '').toLowerCase();
  if (code.includes('permission-denied')) return foodText('firestorePermission');
  if (code.includes('unavailable') || code.includes('deadline-exceeded')) return foodText('firestoreUnavailable');
  if (code.includes('failed-precondition')) return foodText('firestoreIndex');
  return foodText('operationFailed', { code: code || error?.message || 'unknown' });
}

function foodText(key, vars = {}) {
  let value = (FOOD_TEXT[currentLang] || FOOD_TEXT.ar)[key] || FOOD_TEXT.ar[key] || key;
  Object.keys(vars).forEach(name => { value = value.replaceAll(`{${name}}`, String(vars[name])); });
  return value;
}

function localizeFoodUi() {
  document.querySelectorAll('[data-food-text]').forEach(el => { el.textContent = foodText(el.dataset.foodText); });
  document.querySelectorAll('[data-food-placeholder]').forEach(el => { el.placeholder = foodText(el.dataset.foodPlaceholder); });
  const select = $('food-category');
  if (select) select.innerHTML = FOOD_CATEGORIES.map(category => `<option value="${category}">${foodText('category_' + category)}</option>`).join('');
  renderFoodTabs();
}

function foodMoney(value) {
  return new Intl.NumberFormat(loc(), { maximumFractionDigits: 2 }).format(Number(value) || 0) + (currentLang === 'ar' ? ' ج.م' : ' EGP');
}

function foodWeekKey(date = new Date()) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

function foodRecentSpend(log, now = Date.now()) {
  return (Array.isArray(log) ? log : []).filter(entry => Number(entry.at) >= now - 7 * 86400000 && Number(entry.at) <= now);
}

function foodLocalDayKey(timestamp = Date.now()) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function foodPlanSummary(now = Date.now()) {
  if (!foodPlan.days || foodPlan.endsAt <= now) return null;
  const daysRemaining = Math.max(1, Math.ceil((foodPlan.endsAt - now) / FOOD_DAY_MS));
  const todayKey = foodLocalDayKey(now);
  const hasTodayRecord = foodPlan.dayKey === todayKey && Number.isFinite(foodPlan.dayLimit);
  const dailyLimit = hasTodayRecord ? Math.max(0, foodPlan.dayLimit) : Math.max(0, foodWallet.balance / daysRemaining);
  const todaySpent = hasTodayRecord ? Math.max(0, foodPlan.daySpent) : 0;
  return {
    daysRemaining,
    dailyLimit,
    todayRemaining: Math.max(0, dailyLimit - todaySpent),
    weeklyLimit: dailyLimit * 7,
    monthlyLimit: dailyLimit * 30
  };
}

function renderFoodWallet() {
  $('food-balance').textContent = foodMoney(foodWallet.balance);
  $('food-budget').textContent = foodMoney(foodWallet.budget);
  const recent = foodRecentSpend(foodWallet.spendLog);
  $('food-weekly-spent').textContent = foodMoney(recent.reduce((sum, item) => sum + (Number(item.amount) || 0), 0));
  const history = $('food-spend-history');
  history.innerHTML = recent.length
    ? recent.slice().reverse().slice(0, 10).map(item => `<div class="food-spend-row"><span>${esc(item.productName || foodText('market'))} × ${Math.max(1, Number(item.quantity) || 1)}<small style="display:block;">${new Date(Number(item.at) || Date.now()).toLocaleString(loc())}</small></span><strong>${foodMoney(item.amount)}</strong></div>`).join('')
    : `<p class="food-wallet-hint">${esc(foodText('noRecentSpend'))}</p>`;
  $('food-stars').textContent = `${Math.max(0, totalPoints)} ⭐`;
  const planSummary = foodPlanSummary();
  $('food-plan-days').value = foodPlan.days || '';
  $('food-plan-status').textContent = planSummary
    ? foodText('planActive', { date: new Date(foodPlan.endsAt).toLocaleDateString(loc()), days: planSummary.daysRemaining })
    : foodText('noPlan');
  $('food-daily-allowance').textContent = planSummary ? foodMoney(planSummary.dailyLimit) : '—';
  $('food-weekly-allowance').textContent = planSummary ? foodMoney(planSummary.weeklyLimit) : '—';
  $('food-monthly-allowance').textContent = planSummary ? foodMoney(planSummary.monthlyLimit) : '—';
  $('food-today-remaining').textContent = planSummary ? foodMoney(planSummary.todayRemaining) : '—';
  const notice = $('food-lock-notice');
  const locked = foodWallet.lockUntil > Date.now();
  notice.classList.toggle('hidden', !locked);
  notice.textContent = locked ? foodText('locked', { date: new Date(foodWallet.lockUntil).toLocaleString(loc()) }) : '';
  document.querySelectorAll('.food-buy-button').forEach(button => { button.disabled = locked; });
}

async function loadFoodWallet() {
  if (!currentUser || currentUser === 'admin') return;
  const snapshot = await db.collection('users').doc(currentUser).get();
  const data = snapshot.data() || {};
  foodWallet = {
    balance: Math.max(0, Number(data.foodWalletBalance) || 0),
    budget: Math.max(0, Number(data.foodBudgetAmount) || 0),
    spendLog: Array.isArray(data.foodSpendLog) ? data.foodSpendLog.slice(-100) : [],
    lockUntil: Math.max(0, Number(data.foodLockUntil) || 0)
  };
  foodPlan = {
    days: Math.max(0, Math.floor(Number(data.foodPlanDays) || 0)),
    endsAt: Math.max(0, Number(data.foodPlanEndsAt) || 0),
    dayKey: typeof data.foodPlanDayKey === 'string' ? data.foodPlanDayKey : '',
    daySpent: Math.max(0, Number(data.foodPlanDaySpent) || 0),
    dayLimit: Math.max(0, Number(data.foodPlanDayLimit) || 0)
  };
  $('food-wallet-amount').value = foodWallet.balance;
  totalPoints = Math.max(0, Number(data.points) || 0);
  foodPurchasedIds = new Set();
  const purchases = await db.collection('users').doc(currentUser).collection('foodPurchases').get();
  purchases.forEach(doc => { if (doc.data().productId) foodPurchasedIds.add(doc.data().productId); });
  updateUI(false);
  renderFoodWallet();
}

function setFoodPlanDuration(days) {
  $('food-plan-days').value = String(days);
}

function foodOverspendingStars(spent, purchaseTotal, dailyLimit) {
  const overage = Math.max(0, spent + purchaseTotal - dailyLimit);
  return {
    overage,
    stars: overage > 0 && dailyLimit > 0 ? Math.ceil((overage / dailyLimit) * 10) : 0,
    percent: overage > 0 && dailyLimit > 0 ? Math.ceil((overage / dailyLimit) * 100) : 0
  };
}

async function saveFoodSpendingPlan() {
  if (!currentUser || currentUser === 'admin') return uiAlert(foodText('adminOnly'));
  const days = Math.floor(Number($('food-plan-days').value) || 0);
  if (days < 1 || days > 3650 || foodWallet.balance <= 0) return uiAlert(foodText('planInvalid'));
  const ref = db.collection('users').doc(currentUser);
  const now = Date.now();
  const planEndsAt = now + days * FOOD_DAY_MS;
  const todayKey = foodLocalDayKey(now);
  const dayLimit = foodWallet.balance / days;
  try {
    await ref.update({
      foodPlanDays: days,
      foodPlanEndsAt: planEndsAt,
      foodPlanDayKey: todayKey,
      foodPlanDaySpent: 0,
      foodPlanDayLimit: dayLimit
    });
    foodPlan = { days, endsAt: planEndsAt, dayKey: todayKey, daySpent: 0, dayLimit };
    renderFoodWallet();
    toast(foodText('planSaved'), 'success');
  } catch (error) {
    console.error('Could not save food spending plan', error);
    uiAlert(foodErrorMessage(error), { icon: '📡' });
  }
}

function renderFoodTabs() {
  const tabs = $('food-shop-tabs');
  if (!tabs) return;
  tabs.innerHTML = FOOD_CATEGORIES.map(category => `<button class="btn secondary-btn small-btn food-shop-tab ${category === foodActiveCategory ? 'active' : ''}" onclick="selectFoodCategory('${category}')">${foodText('category_' + category)}</button>`).join('');
}

function selectFoodCategory(category) {
  if (!FOOD_CATEGORIES.includes(category)) return;
  foodActiveCategory = category;
  renderFoodTabs();
  renderFoodProducts();
}

async function openFoodMarket() {
  if (!currentUser) return uiAlert(foodText('adminOnly'));
  localizeFoodUi();
  const isAdmin = currentUser === 'admin';
  $('food-wallet-section').classList.toggle('hidden', isAdmin);
  $('food-add-product-button').classList.toggle('hidden', isAdmin);
  $('food-market-admin-card').classList.toggle('hidden', !isAdmin);
  showScreen('food-market-screen');
  if (isAdmin) await renderFoodAdminQueue('food-market-admin-list');
  else await loadFoodWallet().catch(error => {
    console.error('Could not load food wallet', error);
    toast(foodErrorMessage(error), 'error');
  });
  await renderFoodProducts();
}

function openFoodProductForm() {
  if (!currentUser || currentUser === 'admin') return uiAlert(foodText('adminOnly'));
  localizeFoodUi();
  foodEditingProductId = null;
  foodEditReturnScreen = 'food-market-screen';
  $('food-product-form-title').textContent = foodText('addProduct');
  $('food-product-submit-button').textContent = foodText('submitProduct');
  ['food-name', 'food-kind', 'food-place', 'food-price', 'food-image', 'food-description'].forEach(id => { $(id).value = ''; });
  $('food-category').value = FOOD_CATEGORIES[0];
  previewFoodImage();
  showScreen('food-product-form-screen');
}

function cancelFoodProductForm() {
  foodEditingProductId = null;
  if (currentUser === 'admin' && foodEditReturnScreen === 'admin-panel-screen') {
    showScreen('admin-panel-screen');
    renderFoodAdminQueue();
  } else {
    openFoodMarket();
  }
}

async function editFoodProduct(productId) {
  if (!currentUser) return uiAlert(foodText('editNotAllowed'));
  try {
    const snapshot = await db.collection('realFoodProducts').doc(productId).get();
    if (!snapshot.exists) return uiAlert(foodText('notAvailable'));
    const product = snapshot.data();
    if (currentUser !== 'admin' && product.owner !== currentUser) return uiAlert(foodText('editNotAllowed'));
    foodEditingProductId = productId;
    foodEditReturnScreen = currentScreen === 'admin-panel-screen' ? 'admin-panel-screen' : 'food-market-screen';
    localizeFoodUi();
    $('food-product-form-title').textContent = foodText('editProduct');
    $('food-product-submit-button').textContent = foodText('saveProductChanges');
    $('food-category').value = FOOD_CATEGORIES.includes(product.category) ? product.category : FOOD_CATEGORIES[0];
    $('food-name').value = product.name || '';
    $('food-kind').value = product.kind || '';
    $('food-place').value = product.place || '';
    $('food-price').value = Number(product.price) || '';
    $('food-image').value = product.image || '';
    $('food-description').value = product.description || '';
    previewFoodImage();
    showScreen('food-product-form-screen');
  } catch (error) {
    console.error('Could not load food product for editing', error);
    uiAlert(foodErrorMessage(error), { icon: '📡' });
  }
}

function previewFoodImage() {
  const input = $('food-image');
  const preview = $('food-image-preview');
  if (!input || !preview) return;
  const url = input.value.trim();
  preview.replaceChildren();
  if (!url) {
    preview.classList.add('hidden');
    return;
  }
  preview.classList.remove('hidden');
  const image = document.createElement('img');
  image.alt = currentLang === 'ar' ? 'معاينة صورة المنتج' : 'Product image preview';
  const status = document.createElement('p');
  if (!safeUrl(url)) {
    status.className = 'food-image-error';
    status.textContent = foodText('imagePreviewInvalid');
    preview.append(image, status);
    return;
  }
  status.textContent = foodText('imagePreviewLoading');
  image.onload = () => {
    status.textContent = foodText('imagePreviewReady');
    status.classList.remove('food-image-error');
  };
  image.onerror = () => {
    status.textContent = foodText('imagePreviewError');
    status.classList.add('food-image-error');
  };
  preview.append(image, status);
  image.src = url;
}

async function renderFoodMarket() {
  localizeFoodUi();
  await renderFoodProducts();
}

async function renderFoodProducts() {
  const list = $('food-product-list');
  if (!list || currentScreen !== 'food-market-screen') return;
  list.innerHTML = `<p class="instruction">${esc(foodText('adminProductsLoading'))}</p>`;
  try {
    const snapshot = await db.collection('realFoodProducts').where('category', '==', foodActiveCategory).get();
    const query = ($('food-search')?.value || '').trim().toLocaleLowerCase();
    const products = [];
    snapshot.forEach(doc => {
      const product = { id: doc.id, ...doc.data() };
      const text = [product.name, product.kind, product.place, product.description].join(' ').toLocaleLowerCase();
      if (product.status === 'approved' && (!query || text.includes(query))) products.push(product);
    });
    products.sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
    list.innerHTML = products.length ? products.map(renderFoodProductCard).join('') : `<p class="instruction">${esc(foodText('noProducts'))}</p>`;
    renderFoodWallet();
  } catch (error) {
    console.error('Could not load food products', error);
    list.innerHTML = `<p class="instruction">${esc(foodErrorMessage(error))}</p>`;
  }
}

function renderFoodProductCard(product) {
  const image = safeUrl(product.image);
  const count = Math.max(0, Number(product.ratingCount) || 0);
  const average = count ? (Number(product.ratingTotal) || 0) / count : 0;
  const rating = count ? `⭐ ${average.toFixed(1)} (${count})` : foodText('noRating');
  const purchased = foodPurchasedIds.has(product.id);
  const imageMarkup = image ? `<img class="food-product-image" src="${esc(image)}" alt="${esc(product.name || '')}" loading="lazy" onerror="this.remove()">` : '';
  const editMarkup = currentUser === 'admin' || product.owner === currentUser
    ? `<button class="btn secondary-btn small-btn" onclick="editFoodProduct(${attr(product.id)})">${esc(foodText('editProduct'))}</button>`
    : '';
  const ratingMarkup = purchased
    ? `<div class="food-rating-row"><select id="food-rating-${esc(product.id)}" class="input-field" aria-label="${esc(foodText('rate'))}"><option value="5">5 ⭐</option><option value="4">4 ⭐</option><option value="3">3 ⭐</option><option value="2">2 ⭐</option><option value="1">1 ⭐</option></select><button class="btn secondary-btn small-btn" onclick="rateFoodProduct(${attr(product.id)})">${esc(foodText('submitRating'))}</button></div>`
    : `<small class="food-product-meta">${esc(foodText('rateOnlyAfterPurchase'))}</small>`;
  const buyMarkup = currentUser === 'admin' ? '' : `<div class="food-buy-row"><label class="food-product-meta" for="food-qty-${esc(product.id)}">${esc(foodText('quantity'))}</label><input class="input-field" id="food-qty-${esc(product.id)}" type="number" min="1" max="99" value="1" step="1"><button class="btn subject-btn small-btn food-buy-button" onclick="buyFoodProduct(${attr(product.id)})">${esc(foodText('buy'))}</button></div>`;
  return `<article class="food-product-card">${imageMarkup}<h3>${esc(product.name || '')}</h3><p class="food-product-meta">${esc(foodText('category_' + product.category))} · ${esc(product.kind || '')}</p><p class="food-product-meta">${esc(foodText('sourceLabel'))}: ${esc(product.place || '')}</p><p class="food-product-description">${esc(product.description || '')}</p><strong class="food-product-price">${foodMoney(product.price)}</strong><span class="food-product-meta">${esc(foodText('averageRating'))}: ${esc(rating)}</span><small class="food-product-meta">${esc(foodText('productBy'))}: ${esc(product.owner || '')}</small>${buyMarkup}${ratingMarkup}${editMarkup}<button class="btn cancel-btn small-btn" onclick="reportFoodProduct(${attr(product.id)})">${esc(foodText('report'))}</button></article>`;
}

async function submitFoodProduct() {
  if (!currentUser || (currentUser === 'admin' && !foodEditingProductId)) return uiAlert(foodText('adminOnly'));
  const category = $('food-category').value;
  const name = $('food-name').value.trim();
  const kind = $('food-kind').value.trim();
  const place = $('food-place').value.trim();
  const description = $('food-description').value.trim();
  const price = Number($('food-price').value);
  const imageValue = $('food-image').value.trim();
  const image = imageValue ? safeUrl(imageValue) : '';
  if (!FOOD_CATEGORIES.includes(category) || !name || !kind || !place || !description || !Number.isFinite(price) || price <= 0 || (imageValue && !image)) {
    return uiAlert(foodText('invalidProduct'), { icon: '⚠️' });
  }
  try {
    if (foodEditingProductId) {
      const productRef = db.collection('realFoodProducts').doc(foodEditingProductId);
      const snapshot = await productRef.get();
      if (!snapshot.exists) return uiAlert(foodText('notAvailable'));
      const existingProduct = snapshot.data();
      if (currentUser !== 'admin' && existingProduct.owner !== currentUser) return uiAlert(foodText('editNotAllowed'));
      await productRef.update({
        category, name, kind, place, description, price, image,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      toast(foodText('productSaved'), 'success');
      const returnScreen = foodEditReturnScreen;
      foodEditingProductId = null;
      if (returnScreen === 'admin-panel-screen') {
        showScreen(returnScreen);
        await renderFoodAdminQueue();
      } else {
        await openFoodMarket();
      }
      return;
    }
    await db.collection('realFoodProducts').add({
      category, name, kind, place, description, price, image,
      owner: currentUser, status: 'pending', ratingCount: 0, ratingTotal: 0,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    ['food-name', 'food-kind', 'food-place', 'food-price', 'food-image', 'food-description'].forEach(id => { $(id).value = ''; });
    toast(foodText('sentForReview'), 'success');
    await openFoodMarket();
  } catch (error) {
    console.error('Could not submit food product', error);
    uiAlert(foodText('loadError'), { icon: '📡' });
  }
}

async function setFoodWallet() {
  if (!currentUser || currentUser === 'admin') return uiAlert(foodText('adminOnly'));
  const amount = Number($('food-wallet-amount').value);
  if (!Number.isFinite(amount) || amount < 0) return uiAlert(foodText('invalidAmount'));
  try {
    const now = Date.now();
    const days = foodPlan.days;
    const endsAt = days ? now + days * FOOD_DAY_MS : 0;
    const dayKey = foodLocalDayKey(now);
    const dayLimit = days ? amount / days : 0;
    await db.collection('users').doc(currentUser).update({
      foodWalletBalance: amount,
      foodBudgetAmount: amount,
      foodPlanDays: days,
      foodPlanEndsAt: endsAt,
      foodPlanDayKey: dayKey,
      foodPlanDaySpent: 0,
      foodPlanDayLimit: dayLimit
    });
    foodWallet.balance = amount;
    foodWallet.budget = amount;
    foodPlan = { days, endsAt, dayKey, daySpent: 0, dayLimit };
    $('food-wallet-amount').value = amount;
    renderFoodWallet();
    toast(foodText('walletSaved'), 'success');
  } catch (error) {
    console.error('Could not update food wallet', error);
    uiAlert(foodText('loadError'), { icon: '📡' });
  }
}

async function addFoodIncome() {
  if (!currentUser || currentUser === 'admin') return uiAlert(foodText('adminOnly'));
  const amount = Number($('food-income-amount').value);
  if (!Number.isFinite(amount) || amount <= 0) return uiAlert(foodText('invalidAmount'));
  try {
    const ref = db.collection('users').doc(currentUser);
    const result = await db.runTransaction(async transaction => {
      const snapshot = await transaction.get(ref);
      const data = snapshot.data() || {};
      const balance = Math.max(0, Number(data.foodWalletBalance) || 0) + amount;
      const budget = Math.max(0, Number(data.foodBudgetAmount) || 0) + amount;
      transaction.update(ref, { foodWalletBalance: balance, foodBudgetAmount: budget });
      return { balance, budget };
    });
    foodWallet.balance = result.balance;
    foodWallet.budget = result.budget;
    $('food-income-amount').value = '';
    renderFoodWallet();
    toast(foodText('incomeAdded'), 'success');
  } catch (error) {
    console.error('Could not add food income', error);
    uiAlert(foodText('loadError'), { icon: '📡' });
  }
}

function foodPenaltyTier(quantity, total, budget) {
  const tiers = [
    { quantity: 20, share: 1, stars: 3, lockMs: 7 * 86400000 },
    { quantity: 10, share: 0.5, stars: 2, lockMs: 86400000 },
    { quantity: 5, share: 0.25, stars: 1, lockMs: 0 }
  ];
  return tiers.find(tier => quantity >= tier.quantity || (budget > 0 && total >= budget * tier.share)) || { stars: 0, lockMs: 0 };
}

async function buyFoodProduct(productId) {
  if (!currentUser || currentUser === 'admin') return uiAlert(foodText('adminOnly'));
  const quantity = Math.floor(Number($(`food-qty-${productId}`)?.value) || 0);
  if (quantity < 1 || quantity > 99) return uiAlert(foodText('invalidAmount'));
  const productRef = db.collection('realFoodProducts').doc(productId);
  const userRef = db.collection('users').doc(currentUser);
  const purchaseRef = userRef.collection('foodPurchases').doc();
  try {
    const result = await db.runTransaction(async transaction => {
      const [userSnapshot, productSnapshot] = await Promise.all([transaction.get(userRef), transaction.get(productRef)]);
      if (!productSnapshot.exists || productSnapshot.data().status !== 'approved') throw new Error('food_product_unavailable');
      const user = userSnapshot.data() || {};
      const lockUntil = Math.max(0, Number(user.foodLockUntil) || 0);
      if (lockUntil > Date.now()) throw new Error('food_wallet_locked');
      const product = productSnapshot.data();
      const total = Number(product.price) * quantity;
      const balance = Math.max(0, Number(user.foodWalletBalance) || 0);
      if (!Number.isFinite(total) || total <= 0) throw new Error('food_price_invalid');
      if (balance < total) throw new Error('food_insufficient_funds');
      const now = Date.now();
      const spendLog = foodRecentSpend(user.foodSpendLog, now);
      spendLog.push({ amount: total, at: now, productId, productName: product.name || '', quantity });
      const recentTotal = spendLog.reduce((sum, item) => sum + (Number(item.amount) || 0), 0);
      const week = foodWeekKey();
      const todayKey = foodLocalDayKey(now);
      let points = Math.max(0, Number(user.points) || 0);
      const weeklyBudget = Math.max(0, Number(user.foodBudgetAmount) || 0);
      const orderTier = foodPenaltyTier(quantity, total, weeklyBudget);
      const weeklyPenalty = user.foodPenaltyWeek !== week && weeklyBudget > 0 && spendLog.length >= 3 && recentTotal >= weeklyBudget * 0.5;
      const planDays = Math.max(0, Math.floor(Number(user.foodPlanDays) || 0));
      const planEndsAt = Math.max(0, Number(user.foodPlanEndsAt) || 0);
      const planActive = planDays > 0 && planEndsAt > now;
      const daysRemaining = planActive ? Math.max(1, Math.ceil((planEndsAt - now) / FOOD_DAY_MS)) : 0;
      const samePlanDay = user.foodPlanDayKey === todayKey;
      const dailyLimit = planActive
        ? samePlanDay ? Math.max(0, Number(user.foodPlanDayLimit) || 0) : balance / daysRemaining
        : 0;
      const daySpent = planActive && samePlanDay ? Math.max(0, Number(user.foodPlanDaySpent) || 0) : 0;
      const totalDaySpent = daySpent + total;
      const dailyPenalty = planActive ? foodOverspendingStars(daySpent, total, dailyLimit) : { overage: 0, stars: 0, percent: 0 };
      const dailyOverage = dailyPenalty.overage;
      const dailyOverLimit = dailyOverage > 0;
      const dailyStarsLost = dailyPenalty.stars;
      const starsLost = orderTier.stars + dailyStarsLost + (weeklyPenalty ? 50 : 0);
      const penalty = starsLost > 0;
      points = Math.max(0, points - starsLost);
      let lockDuration = orderTier.lockMs;
      if (penalty && points === 0) lockDuration = Math.max(lockDuration, 7 * 86400000);
      const nextDay = new Date(now);
      nextDay.setHours(24, 0, 0, 0);
      const dailyLockUntil = dailyOverLimit ? nextDay.getTime() : 0;
      const newLockUntil = Math.max(lockUntil, dailyLockUntil, lockDuration ? now + lockDuration : lockUntil);
      const userUpdate = {
        foodWalletBalance: balance - total,
        foodSpendLog: spendLog.slice(-100),
        foodPenaltyWeek: weeklyPenalty ? week : (user.foodPenaltyWeek || null),
        foodLockUntil: newLockUntil,
        points
      };
      if (planActive) {
        userUpdate.foodPlanDayKey = todayKey;
        userUpdate.foodPlanDaySpent = totalDaySpent;
        userUpdate.foodPlanDayLimit = dailyLimit;
      }
      transaction.update(userRef, userUpdate);
      transaction.set(purchaseRef, {
        productId, productName: product.name || '', quantity, unitPrice: Number(product.price),
        total, purchasedAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      return {
        balance: balance - total, points, spendLog, lockUntil: newLockUntil, penalty, starsLost, weeklyPenalty,
        dailyOverLimit, dailyStarsLost, dailyOveragePercent: dailyPenalty.percent,
        planDays, planEndsAt, dayKey: planActive ? todayKey : user.foodPlanDayKey || '',
        daySpent: planActive ? totalDaySpent : Math.max(0, Number(user.foodPlanDaySpent) || 0),
        dayLimit: planActive ? dailyLimit : Math.max(0, Number(user.foodPlanDayLimit) || 0)
      };
    });
    foodWallet.balance = result.balance;
    foodWallet.spendLog = result.spendLog;
    foodWallet.lockUntil = result.lockUntil;
    foodPlan = {
      days: result.planDays,
      endsAt: result.planEndsAt,
      dayKey: result.dayKey,
      daySpent: result.daySpent,
      dayLimit: result.dayLimit
    };
    foodPurchasedIds.add(productId);
    totalPoints = result.points;
    updateUI(false);
    renderFoodWallet();
    await renderFoodProducts();
    toast(foodText('purchaseSuccess'), 'success');
    if (result.dailyOverLimit) {
      const dailyMessage = result.points === 0 ? 'dailyOverLimitNoStars' : 'dailyOverLimit';
      toast(foodText(dailyMessage, {
        percent: result.dailyOveragePercent,
        stars: result.dailyStarsLost,
        date: new Date(result.lockUntil).toLocaleString(loc())
      }), 'error');
    }
    const otherStarsLost = result.starsLost - result.dailyStarsLost;
    if (otherStarsLost > 0) {
      const lock = result.lockUntil > Date.now()
        ? foodText('penaltyLock', { date: new Date(result.lockUntil).toLocaleString(loc()) })
        : foodText('penaltyNoLock');
      toast(foodText('penaltyApplied', { stars: otherStarsLost, lock }), result.lockUntil > Date.now() ? 'error' : 'warn');
    }
  } catch (error) {
    if (error.message === 'food_insufficient_funds') return uiAlert(foodText('insufficientFunds'), { icon: '💸' });
    if (error.message === 'food_wallet_locked') return uiAlert(foodText('lockCannotBuy'), { icon: '⏳' });
    if (error.message === 'food_product_unavailable') return uiAlert(foodText('notAvailable'), { icon: '🔎' });
    console.error('Could not record food purchase', error);
    uiAlert(foodText('loadError'), { icon: '📡' });
  }
}

async function rateFoodProduct(productId) {
  if (!foodPurchasedIds.has(productId)) return uiAlert(foodText('rateOnlyAfterPurchase'));
  const rating = Number($(`food-rating-${productId}`)?.value);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return;
  const productRef = db.collection('realFoodProducts').doc(productId);
  const ratingRef = productRef.collection('ratings').doc(encodeURIComponent(currentUser));
  try {
    await db.runTransaction(async transaction => {
      const [productSnapshot, ratingSnapshot] = await Promise.all([transaction.get(productRef), transaction.get(ratingRef)]);
      if (ratingSnapshot.exists) throw new Error('food_already_rated');
      if (!productSnapshot.exists || productSnapshot.data().status !== 'approved') throw new Error('food_product_unavailable');
      const product = productSnapshot.data();
      transaction.update(productRef, {
        ratingCount: Math.max(0, Number(product.ratingCount) || 0) + 1,
        ratingTotal: Math.max(0, Number(product.ratingTotal) || 0) + rating
      });
      transaction.set(ratingRef, { user: currentUser, rating, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    });
    toast(foodText('ratingSaved'), 'success');
    await renderFoodProducts();
  } catch (error) {
    if (error.message === 'food_already_rated') return uiAlert(foodText('alreadyRated'));
    console.error('Could not save food rating', error);
    uiAlert(foodText('loadError'), { icon: '📡' });
  }
}

async function reportFoodProduct(productId) {
  const reason = await uiPrompt(foodText('reportReasonPrompt'), { icon: '🚩', validate: value => value && value.trim().length >= 5 ? null : foodText('invalidReport') });
  if (!reason) return;
  const priceText = await uiPrompt(foodText('reportPricePrompt'), { icon: '💰', type: 'number', validate: value => !value || (Number.isFinite(Number(value)) && Number(value) > 0) ? null : foodText('invalidAmount') });
  if (priceText === null) return;
  try {
    await db.collection('realFoodReports').add({
      productId, reason: reason.trim(), originalPrice: priceText ? Number(priceText) : null,
      reporter: currentUser, status: 'open', createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    toast(foodText('reportSent'), 'success');
  } catch (error) {
    console.error('Could not submit food report', error);
    uiAlert(foodText('loadError'), { icon: '📡' });
  }
}

async function renderFoodAdminQueue(targetId = 'food-admin-list') {
  const box = $(targetId);
  if (!box) return;
  if (currentUser !== 'admin') {
    box.innerHTML = `<p>${esc(foodText('adminOnly'))}</p>`;
    return;
  }
  box.innerHTML = `<p>${esc(foodText('adminProductsLoading'))}</p>`;
  try {
    const [productsSnapshot, reportsSnapshot] = await Promise.all([
      db.collection('realFoodProducts').get(),
      db.collection('realFoodReports').where('status', '==', 'open').get()
    ]);
    const products = [];
    productsSnapshot.forEach(doc => products.push({ id: doc.id, ...doc.data() }));
    const reports = [];
    reportsSnapshot.forEach(doc => reports.push({ id: doc.id, ...doc.data() }));
    const reportMarkup = reports.length ? `<h4>${esc(foodText('reports'))}</h4>${reports.map(report => {
      const product = products.find(item => item.id === report.productId);
      return `<div class="food-admin-report"><strong>${esc(product?.name || report.productId)}</strong><p>${esc(foodText('reportBy'))}: ${esc(report.reporter || '')}</p><p>${esc(foodText('reportReason'))}: ${esc(report.reason || '')}</p>${report.originalPrice ? `<p>${esc(foodText('reportOriginalPrice'))}: ${foodMoney(report.originalPrice)}</p>` : ''}<button class="btn secondary-btn small-btn" onclick="resolveFoodReport(${attr(report.id)})">${esc(foodText('resolve'))}</button></div>`;
    }).join('')}` : '';
    const productMarkup = products.length ? products.sort((a, b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0)).map(product => {
      const actions = product.status === 'pending'
        ? `<button class="btn success-btn small-btn" onclick="reviewFoodProduct(${attr(product.id)},'approved')">${esc(foodText('approve'))}</button><button class="btn cancel-btn small-btn" onclick="reviewFoodProduct(${attr(product.id)},'rejected')">${esc(foodText('reject'))}</button>`
        : product.status === 'approved'
          ? `<button class="btn cancel-btn small-btn" onclick="reviewFoodProduct(${attr(product.id)},'removed')">${esc(foodText('remove'))}</button>`
          : '';
      return `<div class="food-admin-product"><strong>${esc(product.name || '')}</strong><p>${esc(foodText('status_' + product.status))} · ${esc(foodText('category_' + product.category))} · ${foodMoney(product.price)}</p><p>${esc(foodText('submittedBy'))}: ${esc(product.owner || '')} · ${esc(foodText('sourceLabel'))}: ${esc(product.place || '')}</p><p>${esc(foodText('descriptionLabel'))}: ${esc(product.description || '')}</p><div class="responsive-flex"><button class="btn secondary-btn small-btn" onclick="editFoodProduct(${attr(product.id)})">${esc(foodText('editProduct'))}</button>${actions}</div></div>`;
    }).join('') : '';
    box.innerHTML = productMarkup + reportMarkup || `<p>${esc(foodText('adminProductsEmpty'))}</p>`;
  } catch (error) {
    console.error('Could not load food admin queue', error);
    box.innerHTML = `<p>${esc(foodErrorMessage(error))}</p>`;
  }
}

async function reviewFoodProduct(productId, status) {
  if (currentUser !== 'admin' || !['approved', 'rejected', 'removed'].includes(status)) return uiAlert(foodText('adminOnly'));
  try {
    await db.collection('realFoodProducts').doc(productId).update({
      status, reviewedBy: 'admin', reviewedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    toast(foodText('productUpdated'), 'success');
    await renderFoodAdminQueue(currentScreen === 'food-market-screen' ? 'food-market-admin-list' : 'food-admin-list');
  } catch (error) {
    console.error('Could not review food product', error);
    uiAlert(foodErrorMessage(error), { icon: '📡' });
  }
}

async function resolveFoodReport(reportId) {
  if (currentUser !== 'admin') return uiAlert(foodText('adminOnly'));
  const decision = await uiPrompt(foodText('decisionPrompt'), { icon: '⚖️', validate: value => value && value.trim() ? null : foodText('invalidReport') });
  if (!decision) return;
  try {
    await db.collection('realFoodReports').doc(reportId).update({
      status: 'resolved', decision: decision.trim(), reviewedBy: 'admin',
      reviewedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    toast(foodText('reportResolved'), 'success');
    await renderFoodAdminQueue(currentScreen === 'food-market-screen' ? 'food-market-admin-list' : 'food-admin-list');
  } catch (error) {
    console.error('Could not resolve food report', error);
    uiAlert(foodErrorMessage(error), { icon: '📡' });
  }
}

localizeFoodUi();
