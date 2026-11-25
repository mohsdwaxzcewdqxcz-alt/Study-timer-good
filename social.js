const SOCIAL_TEXT = {
  ar: {
    nav: '👥 المجتمع', title: 'المجتمع والمحادثات', intro: 'تابع أصدقاءك، شارك إنجازاتك، وتواصل معهم.',
    search: 'ابحث عن حساب', searchPlaceholder: 'اكتب اسم المستخدم', users: 'الحسابات', noUsers: 'لا توجد حسابات مطابقة.',
    myFollowers: 'يتابعونني', myFollowing: 'أتابع',
    profile: 'الملف والإنجازات', followers: 'متابعون', following: 'يتابع', follow: 'متابعة', unfollow: 'إلغاء المتابعة',
    request: 'طلب متابعة', requested: 'تم إرسال الطلب', accept: 'قبول', decline: 'رفض', requests: 'طلبات المتابعة',
    noRequests: 'لا توجد طلبات متابعة.', privateProfile: 'هذا الملف خاص. أرسل طلب متابعة لرؤية إنجازاته.',
    followersOnly: 'إنجازات هذا الملف للمتابعين فقط.', badges: 'الشارات المفتوحة', noBadges: 'لم تُفتح شارات بعد.',
    rank: 'الرتبة', level: 'المستوى', xp: 'نقاط الخبرة', message: 'مراسلة', messages: 'المحادثات',
    noChats: 'لا توجد محادثات بعد.', chatBack: 'العودة للمحادثات', messagePlaceholder: 'اكتب رسالتك...', send: 'إرسال',
    noMessages: 'ابدأ المحادثة برسالة.', messageBlocked: 'هذا المستخدم لا يستقبل رسائل منك حسب إعدادات الخصوصية.',
    attachPhoto: 'إرفاق صورة', photoCaption: 'أضف تعليقاً للصورة أو اكتب رسالة...', removePhoto: 'إزالة الصورة',
    selectPhoto: 'اختر صورة', photoTooLarge: 'الصورة كبيرة أو تعذر ضغطها. اختر صورة أصغر.',
    reply: 'رد', star: 'تمييز بنجمة', unstar: 'إزالة النجمة', delete: 'حذف', forward: 'تحويل',
    copy: 'نسخ', share: 'مشاركة', info: 'معلومات', pin: 'تثبيت', unpin: 'إلغاء التثبيت',
    selectionCount: 'تم تحديد {count}', cancelSelection: 'إلغاء', pinned: 'رسالة مثبتة',
    replyTo: 'رد على {name}', forwarded: 'رسالة محوّلة', deletedMessage: 'تم حذف هذه الرسالة',
    deleteConfirm: 'هل تريد حذف رسائلك المحددة؟', ownMessagesOnly: 'يمكنك حذف رسائلك أنت فقط.',
    noForwardRecipient: 'لم يتم العثور على هذا الحساب.', forwardPrompt: 'اكتب اسم دخول الشخص الذي تريد تحويل الرسالة إليه:',
    messageInfo: 'حالة التسليم: {delivery}<br>شوهدت: {seen}', messageDelivered: 'وصلت ✓✓', messageSent: 'أُرسلت ✓', messageSeen: 'نعم، {date}', messageNotSeen: 'لم تُشاهد بعد',
    messageInfoUnavailable: 'معلومات التسليم غير متاحة لهذه الرسالة.', imageAlt: 'صورة مرفقة',
    copyFailed: 'تعذر نسخ الرسالة.', forwardDone: 'تم تحويل الرسالة.',
    profilePrivacy: 'خصوصية الملف والإنجازات', private: 'أنا فقط', followersPrivacy: 'المتابعون المقبولون فقط', public: 'الجميع',
    whoCanMessage: 'من يستطيع مراسلتي؟', everyone: 'أي مستخدم', followingOnly: 'الحسابات التي أتابعها', mutual: 'المتابعة المتبادلة',
    settings: 'إعداداتي', saveSettings: 'حفظ الإعدادات', settingsSaved: 'تم حفظ إعداداتك.',
    language: 'لغة الموقع', arabic: 'العربية', english: 'English', theme: 'مظهر الموقع', dark: 'داكن', light: 'فاتح',
    loginName: 'اسم الدخول الجديد', currentPassword: 'كلمة المرور الحالية', changeName: 'تغيير اسم الدخول',
    nameChanged: 'تم تغيير اسم الدخول. استخدم الاسم الجديد في المرة القادمة.', nameInvalid: 'يجب أن يكون الاسم من 3 إلى 32 حرفاً، بلا مسافات أو علامة /.',
    nameTaken: 'اسم الدخول مستخدم بالفعل.', currentPasswordRequired: 'أدخل كلمة المرور الحالية للتأكيد.',
    adminSettings: 'إعدادات الموقع العامة', socialEnabled: 'تفعيل المجتمع والمحادثات', defaultLanguage: 'اللغة الافتراضية',
    announcement: 'إعلان لجميع المستخدمين', saveGlobal: 'حفظ إعدادات الموقع', globalSaved: 'تم حفظ إعدادات الموقع.',
    announcementPlaceholder: 'اكتب إعلاناً مختصراً (اختياري)', unavailable: 'المجتمع متوقف مؤقتاً من الإدارة.',
    loadError: 'تعذر تحميل بيانات المجتمع. تحقق من اتصال Firebase وصلاحيات Firestore.',
    chatError: 'تعذر إرسال الرسالة. تحقق من اتصال Firebase وصلاحيات Firestore.',
    renameUser: 'تغيير اسم الدخول', save: 'حفظ', siteSettings: 'إعدادات الموقع'
  },
  en: {
    nav: '👥 Community', title: 'Community & conversations', intro: 'Follow friends, share achievements, and chat.',
    search: 'Find an account', searchPlaceholder: 'Enter a username', users: 'Accounts', noUsers: 'No matching accounts.',
    myFollowers: 'My followers', myFollowing: 'Following',
    profile: 'Profile & achievements', followers: 'Followers', following: 'Following', follow: 'Follow', unfollow: 'Unfollow',
    request: 'Request to follow', requested: 'Request sent', accept: 'Accept', decline: 'Decline', requests: 'Follow requests',
    noRequests: 'No follow requests.', privateProfile: 'This profile is private. Request to follow to see achievements.',
    followersOnly: 'Achievements are visible to approved followers only.', badges: 'Unlocked badges', noBadges: 'No badges unlocked yet.',
    rank: 'Rank', level: 'Level', xp: 'XP', message: 'Message', messages: 'Conversations',
    noChats: 'No conversations yet.', chatBack: 'Back to conversations', messagePlaceholder: 'Write a message...', send: 'Send',
    noMessages: 'Start the conversation with a message.', messageBlocked: 'This user does not accept messages from you.',
    attachPhoto: 'Attach photo', photoCaption: 'Add a caption or write a message...', removePhoto: 'Remove photo',
    selectPhoto: 'Choose a photo', photoTooLarge: 'The image is too large or could not be compressed. Choose a smaller image.',
    reply: 'Reply', star: 'Star message', unstar: 'Remove star', delete: 'Delete', forward: 'Forward',
    copy: 'Copy', share: 'Share', info: 'Info', pin: 'Pin', unpin: 'Unpin',
    selectionCount: '{count} selected', cancelSelection: 'Cancel', pinned: 'Pinned message',
    replyTo: 'Reply to {name}', forwarded: 'Forwarded', deletedMessage: 'This message was deleted',
    deleteConfirm: 'Delete your selected messages?', ownMessagesOnly: 'You can only delete your own messages.',
    noForwardRecipient: 'Account not found.', forwardPrompt: 'Enter the login name of the person to forward this message to:',
    messageInfo: 'Delivery: {delivery}<br>Seen: {seen}', messageDelivered: 'Delivered ✓✓', messageSent: 'Sent ✓', messageSeen: 'Yes, {date}', messageNotSeen: 'Not seen yet',
    messageInfoUnavailable: 'Delivery information is unavailable for this message.', imageAlt: 'Attached image',
    copyFailed: 'Could not copy the message.', forwardDone: 'Message forwarded.',
    profilePrivacy: 'Profile and achievements privacy', private: 'Only me', followersPrivacy: 'Approved followers only', public: 'Everyone',
    whoCanMessage: 'Who can message me?', everyone: 'Any user', followingOnly: 'Accounts I follow', mutual: 'Mutual follows',
    settings: 'My settings', saveSettings: 'Save settings', settingsSaved: 'Your settings were saved.',
    language: 'Site language', arabic: 'العربية', english: 'English', theme: 'Site appearance', dark: 'Dark', light: 'Light',
    loginName: 'New login name', currentPassword: 'Current password', changeName: 'Change login name',
    nameChanged: 'Login name changed. Use the new name next time.', nameInvalid: 'Use 3–32 characters with no spaces or /.',
    nameTaken: 'That login name is already in use.', currentPasswordRequired: 'Enter your current password to confirm.',
    adminSettings: 'Global site settings', socialEnabled: 'Enable community and chats', defaultLanguage: 'Default language',
    announcement: 'Announcement for all users', saveGlobal: 'Save site settings', globalSaved: 'Site settings saved.',
    announcementPlaceholder: 'Write a short announcement (optional)', unavailable: 'The community is temporarily disabled by the admin.',
    loadError: 'Could not load community data. Check Firebase connectivity and Firestore permissions.',
    chatError: 'Could not send the message. Check Firebase connectivity and Firestore permissions.',
    renameUser: 'Change login name', save: 'Save', siteSettings: 'Site settings'
  }
};

const SOCIAL_BADGE_DEFAULTS = { profileVisibility: 'private', whoCanMessage: 'everyone', language: '', theme: '' };
let socialProfile = null;
let socialGlobalSettings = { enabled: true, defaultLanguage: 'ar', announcement: '' };
let socialProfileCache = new Map();
let socialChatTarget = null;
let socialViewingProfileId = null;
let socialChatMessages = [];
let socialSelectedMessageIds = new Set();
let socialReplyTarget = null;
let socialDraftImage = '';
let socialLongPressTimer = null;
let socialLongPressTriggered = false;
let socialActionMenuMessageId = null;
let socialGlobalEventsInstalled = false;
let socialChatUnsubscribe = null;
let socialConversationUnsubscribe = null;
let socialGlobalUnsubscribe = null;
let socialLoadingToken = 0;
let applyingSocialDefaults = false;
let socialCurrentUserData = {};

function st(key, vars = {}) {
  let text = (SOCIAL_TEXT[currentLang] && SOCIAL_TEXT[currentLang][key]) || SOCIAL_TEXT.ar[key] || key;
  Object.keys(vars).forEach(name => { text = text.replaceAll(`{${name}}`, String(vars[name])); });
  return text;
}

function socialNameKey(name) {
  return encodeURIComponent(String(name || '').trim().toLocaleLowerCase());
}

async function socialResolveLoginName(name) {
  const key = socialNameKey(name);
  if (!key) return null;
  try {
    const index = await db.collection('usernames').doc(key).get();
    if (index.exists) return index.data().accountId || null;
  } catch (error) {
    console.error('Could not read login-name index; trying legacy account lookup', error);
  }
  try {
    const byKey = await db.collection('users').where('loginNameKey', '==', key).limit(1).get();
    if (!byKey.empty) return byKey.docs[0].id;
  } catch (error) {
    console.error('Could not query normalized login names; trying legacy account lookup', error);
  }
  try {
    const byName = await db.collection('users').where('loginName', '==', name).limit(1).get();
    if (!byName.empty) return byName.docs[0].id;
  } catch (error) {
    console.error('Could not query login names; trying legacy account lookup', error);
  }
  return null;
}

async function socialUsernameTaken(name, accountId = null, allowLegacyFallback = false) {
  if (String(name).toLocaleLowerCase() === 'admin' && accountId !== 'admin') return true;
  const key = socialNameKey(name);
  const errors = [];
  try {
    const index = await db.collection('usernames').doc(key).get();
    if (index.exists && index.data().accountId !== accountId) return true;
  } catch (error) {
    errors.push(error);
  }
  try {
    const oldDoc = await db.collection('users').doc(name).get();
    if (oldDoc.exists && oldDoc.id !== accountId) return true;
  } catch (error) {
    errors.push(error);
  }
  try {
    const matches = await db.collection('users').where('loginName', '==', name).limit(2).get();
    if (matches.docs.some(doc => doc.id !== accountId)) return true;
  } catch (error) {
    errors.push(error);
  }
  try {
    const normalizedMatches = await db.collection('users').where('loginNameKey', '==', key).limit(2).get();
    if (normalizedMatches.docs.some(doc => doc.id !== accountId)) return true;
  } catch (error) {
    errors.push(error);
  }
  if (errors.length) {
    errors.forEach(error => console.error('Could not fully check login-name uniqueness', error));
    if (!allowLegacyFallback) throw errors[0];
  }
  return false;
}

function socialProfileRef(id) {
  return db.collection('socialProfiles').doc(id);
}

function socialConversationId(a, b) {
  return encodeURIComponent([a, b].sort().join('::'));
}

function socialDate(timestamp) {
  const date = timestamp && typeof timestamp.toDate === 'function' ? timestamp.toDate() : null;
  return date ? date.toLocaleString(loc()) : '';
}

function socialBadgeMarkup(ids) {
  const badges = Array.isArray(ids) ? ids : [];
  if (!badges.length) return `<p class="instruction">${esc(st('noBadges'))}</p>`;
  const known = typeof BADGES === 'undefined' ? [] : BADGES.filter(badge => badges.includes(badge.id));
  if (!known.length) return `<p class="instruction">${esc(st('noBadges'))}</p>`;
  return `<div class="badge-grid">${known.map(badge => `<div class="badge-card unlocked"><div style="font-size:2rem;">${badge.icon}</div><strong>${esc(badgeTitle(badge))}</strong><small style="display:block;color:var(--subtext-color);margin-top:4px;">${esc(badgeDesc(badge))}</small></div>`).join('')}</div>`;
}

function socialCanSeeProfile(profile, isFollowing) {
  if (!profile || profile.id === currentUser) return true;
  if (profile.profileVisibility === 'public') return true;
  if (profile.profileVisibility === 'followers' || profile.profileVisibility === 'private') return isFollowing;
  return false;
}

function socialCanMessage(profile, isFollowing, isFollowedBy) {
  if (!profile || profile.id === currentUser) return false;
  if (profile.whoCanMessage === 'following') return isFollowing;
  if (profile.whoCanMessage === 'mutual') return isFollowing && isFollowedBy;
  return profile.whoCanMessage === 'everyone';
}

async function loadSocialApp() {
  if (!currentUser) return;
  const token = ++socialLoadingToken;
  socialChatTarget = null;
  socialViewingProfileId = null;
  socialChatMessages = [];
  socialSelectedMessageIds.clear();
  socialReplyTarget = null;
  socialDraftImage = '';
  $('social-message-input').value = '';
  $('social-image-input').value = '';
  if (socialChatUnsubscribe) socialChatUnsubscribe();
  if (socialConversationUnsubscribe) socialConversationUnsubscribe();
  try {
    const [settingsSnap, userSnap] = await Promise.all([
      db.collection('siteSettings').doc('global').get(),
      currentUser === 'admin' ? Promise.resolve(null) : db.collection('users').doc(currentUser).get()
    ]);
    if (token !== socialLoadingToken || !currentUser) return;
    if (currentUser !== 'admin' && !userSnap?.exists) return;
    socialGlobalSettings = {
      enabled: settingsSnap.exists ? settingsSnap.data().enabled !== false : true,
      defaultLanguage: settingsSnap.exists && ['ar', 'en'].includes(settingsSnap.data().defaultLanguage)
        ? settingsSnap.data().defaultLanguage : 'ar',
      announcement: settingsSnap.exists ? String(settingsSnap.data().announcement || '') : ''
    };
    socialCurrentUserData = userSnap?.exists ? userSnap.data() : {};
    currentLoginName = currentUser === 'admin' ? 'admin' : (socialCurrentUserData.loginName || currentUser);
    const ref = socialProfileRef(currentUser);
    const snapshot = await ref.get();
    if (token !== socialLoadingToken || !currentUser) return;
    const base = snapshot.exists ? snapshot.data() : {};
    socialProfile = {
      ...SOCIAL_BADGE_DEFAULTS,
      ...base,
      id: currentUser,
      username: currentLoginName,
      profileVisibility: ['private', 'followers', 'public'].includes(base.profileVisibility) ? base.profileVisibility : 'private',
      whoCanMessage: ['everyone', 'following', 'mutual'].includes(base.whoCanMessage) ? base.whoCanMessage : 'everyone'
    };
    await ref.set({
      username: currentLoginName,
      profileVisibility: socialProfile.profileVisibility,
      whoCanMessage: socialProfile.whoCanMessage
    }, { merge: true });
    if (currentUser !== 'admin' && userSnap?.exists) {
      await ref.collection('achievements').doc('summary').set(socialPublicStats(socialCurrentUserData), { merge: true });
    }
    socialProfileCache.set(currentUser, socialProfile);
    const preferredLanguage = socialProfile.language || socialGlobalSettings.defaultLanguage;
    const preferredTheme = socialProfile.theme;
    applyingSocialDefaults = true;
    if (['ar', 'en'].includes(preferredLanguage) && preferredLanguage !== currentLang) applyLanguage(preferredLanguage);
    if (['dark', 'light'].includes(preferredTheme)) {
      document.documentElement.setAttribute('data-theme', preferredTheme);
      if ($('theme-toggle-checkbox')) $('theme-toggle-checkbox').checked = preferredTheme === 'light';
      localStorage.setItem('theme', preferredTheme);
    }
    applyingSocialDefaults = false;
    if (socialGlobalUnsubscribe) socialGlobalUnsubscribe();
    socialGlobalUnsubscribe = db.collection('siteSettings').doc('global').onSnapshot(doc => {
      if (currentUser !== socialProfile?.id) return;
      socialGlobalSettings = {
        enabled: doc.exists ? doc.data().enabled !== false : true,
        defaultLanguage: doc.exists && ['ar', 'en'].includes(doc.data().defaultLanguage) ? doc.data().defaultLanguage : 'ar',
        announcement: doc.exists ? String(doc.data().announcement || '') : ''
      };
      if (currentScreen === 'social-screen') renderSocialScreen();
      updateSocialNav();
    }, error => console.error('Could not listen to site settings', error));
    updateSocialNav();
    if (currentScreen === 'social-screen') renderSocialScreen();
    if (currentScreen === 'admin-panel-screen' && currentUser === 'admin') renderSocialAdminSettings();
    refreshDynamic();
    if (currentUser !== 'admin') socialMarkPendingMessagesDelivered();
  } catch (error) {
    applyingSocialDefaults = false;
    console.error('Could not load social data', error);
    toast(st('loadError'), 'error');
  }
}

function socialPublicStats(userData) {
  const rank = userData?.rank || {};
  return {
    xp: Math.max(0, Number(rank.xp) || 0),
    rp: Math.max(0, Number(rank.rp) || 0),
    level: typeof levelFromXp === 'function' ? levelFromXp(Math.max(0, Number(rank.xp) || 0)) : 0,
    badges: Object.keys(rank.badges || {}).filter(id => rank.badges[id]),
    totalStudyMinutes: Math.max(0, Number(userData?.totalStudyMinutes) || 0),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };
}

function updateSocialNav() {
  const button = $('social-nav-button');
  if (!button) return;
  button.classList.toggle('hidden', !currentUser || !socialGlobalSettings.enabled);
  button.textContent = st('nav');
  $('social-settings-button').textContent = `⚙️ ${st('settings')}`;
  $('social-page-title').textContent = st('title');
  $('social-page-intro').textContent = st('intro');
  $('social-search-label').textContent = st('search');
  $('social-user-search').placeholder = st('searchPlaceholder');
  $('social-users-title').textContent = st('users');
  $('social-my-followers-title').textContent = st('myFollowers');
  $('social-my-following-title').textContent = st('myFollowing');
  $('social-requests-title').textContent = st('requests');
  $('social-messages-title').textContent = st('messages');
  $('social-settings-title').textContent = st('settings');
  $('social-chat-back').textContent = st('chatBack');
  $('social-message-input').placeholder = st('photoCaption');
  $('social-send-button').textContent = st('send');
  $('social-attach-button').textContent = `📎 ${st('attachPhoto')}`;
  $('social-image-input').setAttribute('aria-label', st('selectPhoto'));
  $('social-announcement')?.classList.toggle('hidden', !socialGlobalSettings.announcement);
  if ($('social-announcement-text')) $('social-announcement-text').textContent = socialGlobalSettings.announcement;
}

async function socialRefreshPublicStats() {
  if (!currentUser || currentUser === 'admin') return;
  try {
    const snap = await db.collection('users').doc(currentUser).get();
    if (!snap.exists || currentUser !== snap.id) return;
    socialCurrentUserData = snap.data();
    const username = socialCurrentUserData.loginName || currentUser;
    currentLoginName = username;
    await socialProfileRef(currentUser).set({ username }, { merge: true });
    await socialProfileRef(currentUser).collection('achievements').doc('summary').set(socialPublicStats(socialCurrentUserData), { merge: true });
    if (socialProfile?.id === currentUser) {
      socialProfile = { ...socialProfile, username };
      socialProfileCache.set(currentUser, socialProfile);
    }
  } catch (error) {
    console.error('Could not update social profile achievements', error);
  }
}

async function openSocialScreen() {
  if (!currentUser) return;
  if (!socialGlobalSettings.enabled) return uiAlert(st('unavailable'));
  if (!socialProfile) await loadSocialApp();
  socialChatTarget = null;
  showScreen('social-screen');
}

function renderSocialAdminSettings() {
  const box = $('social-admin-settings');
  if (!box || currentUser !== 'admin') return;
  box.innerHTML = `<h3>${esc(st('adminSettings'))}</h3>
    <label class="social-inline-setting"><input type="checkbox" id="social-global-enabled" ${socialGlobalSettings.enabled ? 'checked' : ''}> ${esc(st('socialEnabled'))}</label>
    <div class="form-group"><label for="social-default-language">${esc(st('defaultLanguage'))}</label><select class="input-field" id="social-default-language"><option value="ar" ${socialGlobalSettings.defaultLanguage === 'ar' ? 'selected' : ''}>${esc(st('arabic'))}</option><option value="en" ${socialGlobalSettings.defaultLanguage === 'en' ? 'selected' : ''}>${esc(st('english'))}</option></select></div>
    <div class="form-group"><label for="social-global-announcement">${esc(st('announcement'))}</label><textarea id="social-global-announcement" class="input-field" maxlength="300" rows="3" placeholder="${esc(st('announcementPlaceholder'))}">${esc(socialGlobalSettings.announcement)}</textarea></div>
    <button class="btn success-btn" onclick="saveSocialGlobalSettings()">${esc(st('saveGlobal'))}</button>`;
}

async function saveSocialGlobalSettings() {
  if (currentUser !== 'admin') return uiAlert(t('admin_only'), { icon: '🚫' });
  const announcement = $('social-global-announcement')?.value.trim() || '';
  const language = $('social-default-language')?.value;
  if (!['ar', 'en'].includes(language)) return;
  try {
    await db.collection('siteSettings').doc('global').set({
      enabled: $('social-global-enabled').checked,
      defaultLanguage: language,
      announcement,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedBy: currentUser
    }, { merge: true });
    toast(st('globalSaved'), 'success');
  } catch (error) {
    console.error('Could not save global site settings', error);
    uiAlert(st('loadError'), { icon: '📡' });
  }
}

function renderSocialSettings() {
  const box = $('social-settings-content');
  if (!box || !currentUser) return;
  const p = socialProfile || { ...SOCIAL_BADGE_DEFAULTS };
  box.innerHTML = `<div class="form-group"><label for="social-profile-privacy">${esc(st('profilePrivacy'))}</label>
      <select id="social-profile-privacy" class="input-field">
        <option value="private" ${p.profileVisibility === 'private' ? 'selected' : ''}>${esc(st('private'))}</option>
        <option value="followers" ${p.profileVisibility === 'followers' ? 'selected' : ''}>${esc(st('followersPrivacy'))}</option>
        <option value="public" ${p.profileVisibility === 'public' ? 'selected' : ''}>${esc(st('public'))}</option>
      </select></div>
    <div class="form-group"><label for="social-message-privacy">${esc(st('whoCanMessage'))}</label>
      <select id="social-message-privacy" class="input-field">
        <option value="everyone" ${p.whoCanMessage === 'everyone' ? 'selected' : ''}>${esc(st('everyone'))}</option>
        <option value="following" ${p.whoCanMessage === 'following' ? 'selected' : ''}>${esc(st('followingOnly'))}</option>
        <option value="mutual" ${p.whoCanMessage === 'mutual' ? 'selected' : ''}>${esc(st('mutual'))}</option>
      </select></div>
    <div class="form-group"><label for="social-user-language">${esc(st('language'))}</label><select id="social-user-language" class="input-field">
      <option value="ar" ${currentLang === 'ar' ? 'selected' : ''}>${esc(st('arabic'))}</option><option value="en" ${currentLang === 'en' ? 'selected' : ''}>${esc(st('english'))}</option></select></div>
    <div class="form-group"><label for="social-user-theme">${esc(st('theme'))}</label><select id="social-user-theme" class="input-field">
      <option value="dark" ${document.documentElement.dataset.theme !== 'light' ? 'selected' : ''}>${esc(st('dark'))}</option><option value="light" ${document.documentElement.dataset.theme === 'light' ? 'selected' : ''}>${esc(st('light'))}</option></select></div>
    <button class="btn success-btn" onclick="saveSocialPreferences()">${esc(st('saveSettings'))}</button>
    ${currentUser === 'admin' ? '' : `<hr class="social-divider"><h3>${esc(st('changeName'))}</h3>
      <div class="form-group"><label for="social-new-login-name">${esc(st('loginName'))}</label><input id="social-new-login-name" class="input-field" maxlength="32" value="${esc(currentLoginName || currentUser)}" autocomplete="username"></div>
      <div class="form-group"><label for="social-current-password">${esc(st('currentPassword'))}</label><input id="social-current-password" class="input-field" type="password" autocomplete="current-password"></div>
      <button class="btn secondary-btn" onclick="changeMyLoginName()">${esc(st('changeName'))}</button>`}`;
}

async function saveSocialPreferences() {
  if (!currentUser) return;
  const visibility = $('social-profile-privacy')?.value;
  const whoCanMessage = $('social-message-privacy')?.value;
  const language = $('social-user-language')?.value;
  const theme = $('social-user-theme')?.value;
  if (!['private', 'followers', 'public'].includes(visibility) ||
      !['everyone', 'following', 'mutual'].includes(whoCanMessage) ||
      !['ar', 'en'].includes(language) || !['dark', 'light'].includes(theme)) return;
  try {
    const updates = { profileVisibility: visibility, whoCanMessage, language, theme };
    await socialProfileRef(currentUser).set(updates, { merge: true });
    socialProfile = { ...socialProfile, ...updates };
    socialProfileCache.set(currentUser, socialProfile);
    applyingSocialDefaults = true;
    applyLanguage(language);
    document.documentElement.setAttribute('data-theme', theme);
    $('theme-toggle-checkbox').checked = theme === 'light';
    localStorage.setItem('theme', theme);
    applyingSocialDefaults = false;
    toast(st('settingsSaved'), 'success');
    if (currentScreen === 'social-screen') renderSocialScreen();
  } catch (error) {
    applyingSocialDefaults = false;
    console.error('Could not save social preferences', error);
    uiAlert(st('loadError'), { icon: '📡' });
  }
}

async function changeMyLoginName() {
  if (!currentUser || currentUser === 'admin') return;
  const nextName = $('social-new-login-name')?.value.trim() || '';
  const password = $('social-current-password')?.value || '';
  if (!/^[^\s/]{3,32}$/u.test(nextName)) return uiAlert(st('nameInvalid'));
  if (!password) return uiAlert(st('currentPasswordRequired'));
  try {
    const ref = db.collection('users').doc(currentUser);
    const snapshot = await ref.get();
    if (!snapshot.exists || snapshot.data().password !== password) return uiAlert(t('err_bad_login'), { icon: '🔒' });
    if (nextName === currentLoginName) return;
    if (await socialUsernameTaken(nextName, currentUser)) return uiAlert(st('nameTaken'));
    const oldKey = socialNameKey(currentLoginName || currentUser);
    const newKey = socialNameKey(nextName);
    const batch = db.batch();
    batch.set(ref, { loginName: nextName, loginNameKey: newKey }, { merge: true });
    batch.set(db.collection('usernames').doc(newKey), { accountId: currentUser, loginName: nextName });
    if (oldKey !== newKey) batch.delete(db.collection('usernames').doc(oldKey));
    batch.set(socialProfileRef(currentUser), { username: nextName }, { merge: true });
    await batch.commit();
    currentLoginName = nextName;
    if (socialProfile) socialProfile.username = nextName;
    refreshDynamic();
    renderSocialSettings();
    toast(st('nameChanged'), 'success');
  } catch (error) {
    console.error('Could not change login name', error);
    uiAlert(st('loadError'), { icon: '📡' });
  }
}

async function adminChangeLoginName(accountId) {
  if (currentUser !== 'admin') return uiAlert(t('admin_only'), { icon: '🚫' });
  const nextName = $(`admin-login-name-${encodeURIComponent(accountId)}`)?.value.trim() || '';
  if (!/^[^\s/]{3,32}$/u.test(nextName)) return uiAlert(st('nameInvalid'));
  try {
    const ref = db.collection('users').doc(accountId);
    const snapshot = await ref.get();
    if (!snapshot.exists) return uiAlert(t('err_award_user'), { icon: '🔍' });
    const oldName = snapshot.data().loginName || accountId;
    if (oldName === nextName) return;
    if (await socialUsernameTaken(nextName, accountId)) return uiAlert(st('nameTaken'));
    const batch = db.batch();
    batch.set(ref, { loginName: nextName, loginNameKey: socialNameKey(nextName) }, { merge: true });
    batch.set(db.collection('usernames').doc(socialNameKey(nextName)), { accountId, loginName: nextName });
    if (socialNameKey(oldName) !== socialNameKey(nextName)) batch.delete(db.collection('usernames').doc(socialNameKey(oldName)));
    batch.set(socialProfileRef(accountId), { username: nextName }, { merge: true });
    await batch.commit();
    toast(st('nameChanged'), 'success');
    if (typeof renderAdminUsersList === 'function') renderAdminUsersList();
  } catch (error) {
    console.error('Admin could not change login name', error);
    uiAlert(st('loadError'), { icon: '📡' });
  }
}

async function renderSocialScreen() {
  const root = $('social-screen');
  if (!root || !currentUser) return;
  updateSocialNav();
  const home = $('social-home');
  const profile = $('social-profile-panel');
  const thread = $('social-thread');
  if (!socialGlobalSettings.enabled) {
    home.classList.remove('hidden');
    $('social-users-list').innerHTML = `<p class="instruction">${esc(st('unavailable'))}</p>`;
    profile.classList.add('hidden');
    thread.classList.add('hidden');
    return;
  }
  renderSocialSettings();
  const announcement = $('social-announcement');
  announcement?.classList.toggle('hidden', !socialGlobalSettings.announcement);
  if ($('social-announcement-text')) $('social-announcement-text').textContent = socialGlobalSettings.announcement;
  if (socialChatTarget) {
    home.classList.add('hidden');
    profile.classList.add('hidden');
    thread.classList.remove('hidden');
    return;
  }
  if (socialViewingProfileId) {
    home.classList.add('hidden');
    profile.classList.remove('hidden');
    thread.classList.add('hidden');
    return;
  }
  profile.classList.add('hidden');
  home.classList.remove('hidden');
  thread.classList.add('hidden');
  const query = ($('social-user-search')?.value || '').trim().toLocaleLowerCase();
  try {
    const [profilesSnapshot, requestsSnapshot, conversationsSnapshot, followersSnapshot, followingSnapshot] = await Promise.all([
      db.collection('socialProfiles').get(),
      socialProfileRef(currentUser).collection('followRequests').get(),
      db.collection('socialConversations').where('participants', 'array-contains', currentUser).get(),
      socialProfileRef(currentUser).collection('followers').get(),
      socialProfileRef(currentUser).collection('following').get()
    ]);
    const profiles = [];
    profilesSnapshot.forEach(doc => {
      if (doc.id === currentUser) return;
      const item = { id: doc.id, ...doc.data() };
      if (!query || String(item.username || doc.id).toLocaleLowerCase().includes(query)) profiles.push(item);
    });
    profiles.sort((a, b) => String(a.username || a.id).localeCompare(String(b.username || b.id), currentLang));
    $('social-users-list').innerHTML = profiles.length ? profiles.map(item => `<div class="social-list-item">
      <button class="social-name-button" onclick="openSocialProfile(${attr(item.id)})">${esc(item.username || item.id)}</button>
      <button class="btn secondary-btn small-btn" onclick="openSocialChat(${attr(item.id)})">${esc(st('message'))}</button>
    </div>`).join('') : `<p class="instruction">${esc(st('noUsers'))}</p>`;
    const requests = [];
    requestsSnapshot.forEach(doc => requests.push({ id: doc.id, ...doc.data() }));
    $('social-follow-requests').innerHTML = requests.length ? requests.map(request => `<div class="social-list-item">
      <strong>${esc(request.username || request.id)}</strong><span class="social-actions">
      <button class="btn success-btn small-btn" onclick="respondSocialFollowRequest(${attr(request.id)},true)">${esc(st('accept'))}</button>
      <button class="btn cancel-btn small-btn" onclick="respondSocialFollowRequest(${attr(request.id)},false)">${esc(st('decline'))}</button></span></div>`).join('') : `<p class="instruction">${esc(st('noRequests'))}</p>`;
    const conversations = [];
    conversationsSnapshot.forEach(doc => {
      const data = doc.data();
      const otherId = (data.participants || []).find(id => id !== currentUser);
      if (otherId) conversations.push({ id: doc.id, otherId, ...data });
    });
    conversations.sort((a, b) => (b.updatedAt?.toMillis?.() || 0) - (a.updatedAt?.toMillis?.() || 0));
    const names = await Promise.all(conversations.map(async conversation => {
      let person = socialProfileCache.get(conversation.otherId);
      if (!person) {
        const doc = await socialProfileRef(conversation.otherId).get();
        person = doc.exists ? { id: doc.id, ...doc.data() } : { id: conversation.otherId, username: conversation.otherId };
        socialProfileCache.set(conversation.otherId, person);
      }
      return { ...conversation, person };
    }));
    $('social-conversations-list').innerHTML = names.length ? names.map(item => `<button class="social-conversation" onclick="openSocialChat(${attr(item.otherId)})">
      <strong>${esc(item.person.username || item.otherId)}</strong><span>${esc(item.lastMessage || '')}</span><small>${esc(socialDate(item.updatedAt))}</small></button>`).join('') : `<p class="instruction">${esc(st('noChats'))}</p>`;
    $('social-follow-summary').textContent = `${st('followers')}: ${followersSnapshot.size} · ${st('following')}: ${followingSnapshot.size}`;
    const connectionMarkup = snapshot => {
      const entries = [];
      snapshot.forEach(doc => entries.push({ id: doc.id, ...doc.data() }));
      return entries.length ? entries.map(item => `<button class="social-name-button" onclick="openSocialProfile(${attr(item.userId || item.id)})">${esc(item.username || item.userId || item.id)}</button>`).join('') : `<small class="social-empty-connection">—</small>`;
    };
    $('social-my-followers').innerHTML = connectionMarkup(followersSnapshot);
    $('social-my-following').innerHTML = connectionMarkup(followingSnapshot);
  } catch (error) {
    console.error('Could not render social screen', error);
    $('social-users-list').innerHTML = `<p class="instruction">${esc(st('loadError'))}</p>`;
  }
}

async function openSocialProfile(targetId) {
  if (!currentUser || targetId === currentUser) return;
  try {
    const [profileSnap, followingSnap, followedBySnap, requestSnap] = await Promise.all([
      socialProfileRef(targetId).get(),
      socialProfileRef(currentUser).collection('following').doc(targetId).get(),
      socialProfileRef(targetId).collection('following').doc(currentUser).get(),
      socialProfileRef(targetId).collection('followRequests').doc(currentUser).get()
    ]);
    if (!profileSnap.exists) return uiAlert(st('noUsers'));
    let person = { id: targetId, ...profileSnap.data() };
    socialProfileCache.set(targetId, person);
    const isFollowing = followingSnap.exists;
    const isFollowedBy = followedBySnap.exists;
    const canSee = socialCanSeeProfile(person, isFollowing);
    const canMessage = socialCanMessage(person, isFollowing, isFollowedBy);
    const achievementsSnap = canSee ? await socialProfileRef(targetId).collection('achievements').doc('summary').get() : null;
    if (achievementsSnap?.exists) person = { ...person, ...achievementsSnap.data() };
    const followers = await socialProfileRef(targetId).collection('followers').get();
    const following = await socialProfileRef(targetId).collection('following').get();
    const followAction = isFollowing
      ? `<button class="btn cancel-btn small-btn" onclick="unfollowSocialUser(${attr(targetId)})">${esc(st('unfollow'))}</button>`
      : requestSnap.exists
        ? `<button class="btn secondary-btn small-btn" disabled>${esc(st('requested'))}</button>`
        : `<button class="btn success-btn small-btn" onclick="followSocialUser(${attr(targetId)})">${esc(person.profileVisibility === 'public' ? st('follow') : st('request'))}</button>`;
    const stats = canSee ? `<p>${esc(st('rank'))}: ${esc(typeof tierName === 'function' ? tierName(tierIndexFor(person.rp || 0)) : '—')} · ${esc(st('level'))}: ${Number(person.level) || 0} · ${esc(st('xp'))}: ${Number(person.xp) || 0}</p><h4>${esc(st('badges'))}</h4>${socialBadgeMarkup(person.badges)}` :
      `<p class="instruction">${esc(person.profileVisibility === 'private' ? st('privateProfile') : st('followersOnly'))}</p>`;
    $('social-profile-panel').innerHTML = `<div class="social-panel-heading"><h3>${esc(person.username || targetId)}</h3><button class="btn secondary-btn small-btn" onclick="closeSocialProfile()">${esc(t('close'))}</button></div>
      <p>${esc(st('followers'))}: ${followers.size} · ${esc(st('following'))}: ${following.size}</p>
      <div class="social-actions">${followAction}${canMessage ? `<button class="btn primary-btn small-btn" onclick="openSocialChat(${attr(targetId)})">${esc(st('message'))}</button>` : ''}</div>
      ${stats}`;
    socialViewingProfileId = targetId;
    $('social-profile-panel').classList.remove('hidden');
    $('social-home').classList.add('hidden');
  } catch (error) {
    console.error('Could not open social profile', error);
    uiAlert(st('loadError'), { icon: '📡' });
  }
}

function closeSocialProfile() {
  socialViewingProfileId = null;
  $('social-profile-panel')?.classList.add('hidden');
  $('social-home')?.classList.remove('hidden');
  renderSocialScreen();
}

async function followSocialUser(targetId) {
  if (!currentUser || !targetId || targetId === currentUser) return;
  try {
    const targetRef = socialProfileRef(targetId);
    const targetSnap = await targetRef.get();
    if (!targetSnap.exists) return uiAlert(st('noUsers'));
    const target = targetSnap.data();
    const privateProfile = target.profileVisibility === 'private';
    const edgeId = currentUser;
    const myEdge = socialProfileRef(currentUser).collection('following').doc(targetId);
    if (privateProfile) {
      await targetRef.collection('followRequests').doc(edgeId).set({
        from: currentUser, username: currentLoginName || currentUser,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
    } else {
      const batch = db.batch();
      batch.set(myEdge, { userId: targetId, username: target.username || targetId, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
      batch.set(targetRef.collection('followers').doc(edgeId), { userId: currentUser, username: currentLoginName || currentUser, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
      await batch.commit();
    }
    await openSocialProfile(targetId);
    await renderSocialScreen();
  } catch (error) {
    console.error('Could not follow social account', error);
    uiAlert(st('loadError'), { icon: '📡' });
  }
}

async function respondSocialFollowRequest(requesterId, accept) {
  if (!currentUser) return;
  try {
    const myRef = socialProfileRef(currentUser);
    const requesterRef = socialProfileRef(requesterId);
    const requestRef = myRef.collection('followRequests').doc(requesterId);
    const requestSnap = await requestRef.get();
    if (!requestSnap.exists) return;
    const request = requestSnap.data();
    const batch = db.batch();
    batch.delete(requestRef);
    if (accept) {
      batch.set(myRef.collection('followers').doc(requesterId), { userId: requesterId, username: request.username || requesterId, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
      batch.set(requesterRef.collection('following').doc(currentUser), { userId: currentUser, username: currentLoginName || currentUser, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
    }
    await batch.commit();
    await renderSocialScreen();
  } catch (error) {
    console.error('Could not process follow request', error);
    uiAlert(st('loadError'), { icon: '📡' });
  }
}

async function unfollowSocialUser(targetId) {
  if (!currentUser || !targetId) return;
  try {
    const batch = db.batch();
    batch.delete(socialProfileRef(currentUser).collection('following').doc(targetId));
    batch.delete(socialProfileRef(targetId).collection('followers').doc(currentUser));
    await batch.commit();
    await openSocialProfile(targetId);
  } catch (error) {
    console.error('Could not unfollow social account', error);
    uiAlert(st('loadError'), { icon: '📡' });
  }
}

async function openSocialChat(targetId) {
  if (!currentUser || !targetId || targetId === currentUser) return;
  try {
    const targetRef = socialProfileRef(targetId);
    const [targetSnap, followingSnap, followedBySnap] = await Promise.all([
      targetRef.get(),
      socialProfileRef(currentUser).collection('following').doc(targetId).get(),
      targetRef.collection('following').doc(currentUser).get()
    ]);
    if (!targetSnap.exists) return uiAlert(st('noUsers'));
    const target = { id: targetId, ...targetSnap.data() };
    if (!socialCanMessage(target, followingSnap.exists, followedBySnap.exists)) return uiAlert(st('messageBlocked'));
    socialProfileCache.set(targetId, target);
    socialViewingProfileId = null;
    socialChatTarget = target;
    socialChatMessages = [];
    socialSelectedMessageIds.clear();
    socialReplyTarget = null;
    socialDraftImage = '';
    if (socialChatUnsubscribe) socialChatUnsubscribe();
    $('social-home').classList.add('hidden');
    $('social-profile-panel').classList.add('hidden');
    $('social-thread').classList.remove('hidden');
    $('social-thread-title').textContent = target.username || targetId;
    $('social-thread-messages').innerHTML = `<p class="instruction">${esc(st('noMessages'))}</p>`;
    renderSocialReplyPreview();
    renderSocialDraftImage();
    updateSocialSendButton();
    const conversationId = socialConversationId(currentUser, targetId);
    const conversationRef = db.collection('socialConversations').doc(conversationId);
    const conversationSnapshot = await conversationRef.get();
    if (conversationSnapshot.exists) socialChatTarget.pinnedMessageId = conversationSnapshot.data().pinnedMessageId || null;
    await conversationRef.set({ participants: [currentUser, targetId], updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
    if (socialConversationUnsubscribe) socialConversationUnsubscribe();
    socialConversationUnsubscribe = conversationRef.onSnapshot(snapshot => {
      if (!snapshot.exists || !socialChatTarget || socialChatTarget.id !== targetId) return;
      socialChatTarget.pinnedMessageId = snapshot.data().pinnedMessageId || null;
      renderSocialPinnedMessage();
    }, error => console.error('Could not listen to social conversation updates', error));
    socialChatUnsubscribe = conversationRef.collection('messages').orderBy('createdAt', 'desc').limit(100).onSnapshot(snapshot => {
      const messages = [];
      snapshot.forEach(doc => messages.push({ id: doc.id, ...doc.data() }));
      messages.reverse();
      socialChatMessages = messages;
      socialMarkMessagesSeen(messages, conversationRef);
      renderSocialMessages();
      $('social-thread-messages').scrollTop = $('social-thread-messages').scrollHeight;
      renderSocialSelectionToolbar();
      renderSocialPinnedMessage();
    }, error => {
      console.error('Could not listen to social messages', error);
      $('social-thread-messages').innerHTML = `<p class="instruction">${esc(st('chatError'))}</p>`;
    });
  } catch (error) {
    console.error('Could not open social chat', error);
    uiAlert(st('loadError'), { icon: '📡' });
  }
}

async function socialMarkMessagesSeen(messages, conversationRef) {
  const unseen = messages.filter(message =>
    message.senderId !== currentUser && (!message.deliveredAt || !message.readAt)
  );
  if (!unseen.length) return;
  try {
    const batch = db.batch();
    const now = firebase.firestore.FieldValue.serverTimestamp();
    unseen.forEach(message => {
      const updates = {};
      if (!message.deliveredAt) updates.deliveredAt = now;
      if (!message.readAt) updates.readAt = now;
      batch.update(conversationRef.collection('messages').doc(message.id), updates);
    });
    await batch.commit();
  } catch (error) {
    console.error('Could not update social message read receipts', error);
  }
}

async function socialMarkPendingMessagesDelivered() {
  if (!currentUser) return;
  try {
    const conversations = await db.collection('socialConversations')
      .where('participants', 'array-contains', currentUser).get();
    for (const conversation of conversations.docs) {
      const recentMessages = await conversation.ref.collection('messages')
        .orderBy('createdAt', 'desc').limit(100).get();
      const pending = recentMessages.docs.filter(doc => {
        const message = doc.data();
        return message.senderId !== currentUser && !message.deliveredAt;
      });
      if (!pending.length) continue;
      const batch = db.batch();
      const deliveredAt = firebase.firestore.FieldValue.serverTimestamp();
      pending.forEach(doc => batch.update(doc.ref, {deliveredAt}));
      await batch.commit();
    }
  } catch (error) {
    console.error('Could not update social message delivery receipts', error);
  }
}

async function sendSocialMessage() {
  if (!currentUser || !socialChatTarget || !socialGlobalSettings.enabled) return;
  const input = $('social-message-input');
  const text = input.value.trim();
  const image = socialDraftImage;
  if ((!text && !image) || text.length > 1000) return;
  try {
    const otherId = socialChatTarget.id;
    const [targetSnap, followingSnap, followedBySnap] = await Promise.all([
      socialProfileRef(otherId).get(),
      socialProfileRef(currentUser).collection('following').doc(otherId).get(),
      socialProfileRef(otherId).collection('following').doc(currentUser).get()
    ]);
    if (!targetSnap.exists || !socialCanMessage(
      { id: otherId, ...targetSnap.data() }, followingSnap.exists, followedBySnap.exists
    )) return uiAlert(st('messageBlocked'));
    const conversationId = socialConversationId(currentUser, otherId);
    const conversationRef = db.collection('socialConversations').doc(conversationId);
    const batch = db.batch();
    const now = firebase.firestore.FieldValue.serverTimestamp();
    const message = {
      senderId: currentUser, senderName: currentLoginName || currentUser,
      text, image, replyTo: socialReplyTarget ? {
        id: socialReplyTarget.id,
        senderId: socialReplyTarget.senderId || '',
        senderName: socialReplyTarget.senderName || '',
        text: socialReplyTarget.text || '',
        hasImage: !!socialReplyTarget.image
      } : null,
      forwarded: false, starredBy: [], pinned: false, deleted: false, createdAt: now
    };
    const messageRef = conversationRef.collection('messages').doc();
    message.id = messageRef.id;
    batch.set(messageRef, message);
    batch.set(conversationRef, {
      participants: [currentUser, otherId],
      lastMessage: image ? `📷 ${text}` : text,
      lastSender: currentUser, lastMessageId: messageRef.id,
      updatedAt: now
    }, { merge: true });
    await batch.commit();
    input.value = '';
    socialDraftImage = '';
    socialReplyTarget = null;
    $('social-image-input').value = '';
    renderSocialDraftImage();
    renderSocialReplyPreview();
    updateSocialSendButton();
  } catch (error) {
    console.error('Could not send social message', error);
    uiAlert(st('chatError'), { icon: '📡' });
  }
}

function socialMessagePreviewText(message) {
  if (!message) return '';
  if (message.deleted) return st('deletedMessage');
  return message.text || (message.image ? `📷 ${st('imageAlt')}` : '');
}

function renderSocialMessages() {
  const box = $('social-thread-messages');
  if (!box) return;
  box.innerHTML = socialChatMessages.length
    ? socialChatMessages.map(message => {
      const selected = socialSelectedMessageIds.has(message.id);
      const mine = message.senderId === currentUser;
      const deleted = message.deleted === true;
      const reply = message.replyTo
        ? `<div class="social-reply-quote"><strong>${esc(message.replyTo.senderName || message.replyTo.senderId || '')}</strong>${esc(message.replyTo.text || (message.replyTo.hasImage ? `📷 ${st('imageAlt')}` : ''))}</div>`
        : '';
      const image = !deleted && safeFoodImage(message.image)
        ? `<img class="social-message-image" src="${esc(message.image)}" alt="${esc(st('imageAlt'))}" loading="lazy" onclick="event.stopPropagation();socialOpenImage(this.src)" onerror="this.remove()">`
        : '';
      const content = deleted
        ? `<em>${esc(st('deletedMessage'))}</em>`
        : `${message.forwarded ? `<small class="social-forwarded-label">↪ ${esc(st('forwarded'))}</small>` : ''}${reply}${image}${message.text ? `<div class="social-message-caption">${esc(message.text)}</div>` : ''}`;
      const starred = Array.isArray(message.starredBy) && message.starredBy.includes(currentUser);
      const pinned = message.pinned === true;
      const receipt = mine
        ? `<span class="social-message-receipt ${message.readAt ? 'seen' : ''}" aria-label="${esc(message.readAt ? st('messageSeen', {date: socialDate(message.readAt)}) : message.deliveredAt ? st('messageDelivered') : st('messageSent'))}">${message.readAt || message.deliveredAt ? '✓✓' : '✓'}</span>`
        : '';
      return `<article class="social-message ${mine ? 'mine' : ''} ${selected ? 'selected' : ''}" data-message-id="${esc(message.id)}"
        onclick="socialHandleMessageClick(${attr(message.id)})"
        onpointerdown="socialStartLongPress(event,${attr(message.id)})"
        onpointerup="socialEndLongPress()" onpointercancel="socialEndLongPress()" onpointermove="socialEndLongPress()"
        oncontextmenu="socialOpenMessageMenu(event,${attr(message.id)})">
        <button type="button" class="social-message-menu-button" aria-label="${esc(st('info'))}" onclick="event.stopPropagation();socialOpenMessageMenu(event,${attr(message.id)})">⋯</button>
        <div class="social-message-topline">${esc(message.senderName || message.senderId || '')}${pinned ? ` · 📌 ${esc(st('pinned'))}` : ''}${starred ? ' · ⭐' : ''}</div>
        ${content}
        <small>${esc(socialDate(message.createdAt))} ${receipt}</small>
      </article>`;
    }).join('')
    : `<p class="instruction">${esc(st('noMessages'))}</p>`;
}

function renderSocialSelectionToolbar() {
  const box = $('social-selection-toolbar');
  if (!box) return;
  const ids = [...socialSelectedMessageIds];
  if (!ids.length) {
    box.classList.add('hidden');
    box.replaceChildren();
    return;
  }
  box.classList.remove('hidden');
  box.innerHTML = `<span class="social-selection-count">${esc(st('selectionCount', { count: ids.length }))}</span>
    <button class="btn secondary-btn small-btn" ${ids.length !== 1 ? 'disabled' : ''} onclick="socialReplyToSelection()">↩ ${esc(st('reply'))}</button>
    <button class="btn secondary-btn small-btn" onclick="socialToggleStarSelection()">⭐ ${esc(st('star'))}</button>
    <button class="btn secondary-btn small-btn" onclick="socialForwardSelection()">» ${esc(st('forward'))}</button>
    <button class="btn cancel-btn small-btn" onclick="socialDeleteSelection()">🗑️ ${esc(st('delete'))}</button>
    <button class="btn secondary-btn small-btn" onclick="socialClearSelection()">${esc(st('cancelSelection'))}</button>`;
}

function renderSocialPinnedMessage() {
  const box = $('social-pinned-message');
  if (!box) return;
  const pinnedId = socialChatTarget?.pinnedMessageId;
  const message = socialChatMessages.find(item => item.id === pinnedId);
  if (!message || message.deleted) {
    box.classList.add('hidden');
    box.replaceChildren();
    return;
  }
  box.classList.remove('hidden');
  box.innerHTML = `<strong>📌 ${esc(st('pinned'))}</strong><div>${esc(socialMessagePreviewText(message))}</div>
    <button class="btn secondary-btn small-btn" onclick="document.querySelector('[data-message-id=&quot;${esc(message.id)}&quot;]')?.scrollIntoView({behavior:'smooth',block:'center'})">${esc(st('info'))}</button>`;
}

function socialToggleMessageSelection(messageId) {
  if (!socialChatMessages.some(message => message.id === messageId)) return;
  if (socialSelectedMessageIds.has(messageId)) socialSelectedMessageIds.delete(messageId);
  else socialSelectedMessageIds.add(messageId);
  closeSocialMessageMenu();
  renderSocialMessages();
  renderSocialSelectionToolbar();
}

function socialSelectMessage(messageId) {
  if (!socialChatMessages.some(message => message.id === messageId)) return;
  socialSelectedMessageIds.add(messageId);
  renderSocialMessages();
  renderSocialSelectionToolbar();
}

function socialHandleMessageClick(messageId) {
  if (socialLongPressTriggered) {
    socialLongPressTriggered = false;
    return;
  }
  socialToggleMessageSelection(messageId);
}

function socialStartLongPress(event, messageId) {
  if (event.button !== undefined && event.button !== 0) return;
  socialEndLongPress();
  socialLongPressTimer = setTimeout(() => {
    socialLongPressTriggered = true;
    socialSelectMessage(messageId);
    socialOpenMessageMenu(event, messageId);
  }, 550);
}

function socialEndLongPress() {
  if (socialLongPressTimer) clearTimeout(socialLongPressTimer);
  socialLongPressTimer = null;
}

function socialOpenMessageMenu(event, messageId) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  const message = socialChatMessages.find(item => item.id === messageId);
  if (!message) return;
  socialActionMenuMessageId = messageId;
  const menu = $('social-message-menu');
  menu.innerHTML = `<button onclick="socialReplyToMessage(${attr(messageId)});closeSocialMessageMenu()">${esc(st('reply'))}</button>
    <button onclick="socialToggleStarMessages([${attr(messageId)}]);closeSocialMessageMenu()">${esc(st(Array.isArray(message.starredBy) && message.starredBy.includes(currentUser) ? 'unstar' : 'star'))}</button>
    ${message.senderId === currentUser && !message.deleted ? `<button onclick="socialDeleteMessages([${attr(messageId)}]);closeSocialMessageMenu()">${esc(st('delete'))}</button>` : ''}
    ${!message.deleted ? `<button onclick="socialForwardMessage(${attr(messageId)});closeSocialMessageMenu()">${esc(st('forward'))}</button>` : ''}
    <button onclick="socialCopyMessage(${attr(messageId)});closeSocialMessageMenu()">${esc(st('copy'))}</button>
    <button onclick="socialShareMessage(${attr(messageId)});closeSocialMessageMenu()">${esc(st('share'))}</button>
    <button onclick="socialShowMessageInfo(${attr(messageId)});closeSocialMessageMenu()">${esc(st('info'))}</button>
    ${!message.deleted ? `<button onclick="socialTogglePinMessage(${attr(messageId)});closeSocialMessageMenu()">${esc(st(message.pinned ? 'unpin' : 'pin'))}</button>` : ''}`;
  menu.classList.remove('hidden');
  const width = Math.min(280, window.innerWidth - 24);
  menu.style.left = `${Math.max(12, Math.min(event?.clientX || 20, window.innerWidth - width - 12))}px`;
  menu.style.top = `${Math.max(12, Math.min(event?.clientY || 100, window.innerHeight - 360))}px`;
}

function closeSocialMessageMenu() {
  const menu = $('social-message-menu');
  if (menu) menu.classList.add('hidden');
  socialActionMenuMessageId = null;
}

function socialClearSelection() {
  socialSelectedMessageIds.clear();
  renderSocialMessages();
  renderSocialSelectionToolbar();
}

function socialReplyToMessage(messageId) {
  const message = socialChatMessages.find(item => item.id === messageId);
  if (!message || message.deleted) return;
  socialReplyTarget = message;
  socialClearSelection();
  renderSocialReplyPreview();
  $('social-message-input').focus();
}

function socialReplyToSelection() {
  const ids = [...socialSelectedMessageIds];
  if (ids.length === 1) return socialReplyToMessage(ids[0]);
  socialClearSelection();
}

function renderSocialReplyPreview() {
  const box = $('social-reply-preview');
  if (!box) return;
  if (!socialReplyTarget) {
    box.classList.add('hidden');
    box.replaceChildren();
    return;
  }
  box.classList.remove('hidden');
  box.innerHTML = `<span><strong>${esc(st('replyTo', { name: socialReplyTarget.senderName || socialReplyTarget.senderId || '' }))}</strong>${esc(socialMessagePreviewText(socialReplyTarget))}</span>
    <button class="btn secondary-btn small-btn" onclick="socialReplyTarget=null;renderSocialReplyPreview()">✕</button>`;
}

async function socialToggleStarMessages(messageIds) {
  const messages = messageIds.map(id => socialChatMessages.find(message => message.id === id)).filter(Boolean);
  if (!messages.length) return;
  try {
    const batch = db.batch();
    const conversationRef = db.collection('socialConversations').doc(socialConversationId(currentUser, socialChatTarget.id));
    messages.forEach(message => {
      const starred = Array.isArray(message.starredBy) && message.starredBy.includes(currentUser);
      batch.update(conversationRef.collection('messages').doc(message.id), {
        starredBy: starred
          ? firebase.firestore.FieldValue.arrayRemove(currentUser)
          : firebase.firestore.FieldValue.arrayUnion(currentUser)
      });
    });
    await batch.commit();
    socialClearSelection();
  } catch (error) {
    console.error('Could not star social message', error);
    uiAlert(st('chatError'), { icon: '📡' });
  }
}

function socialToggleStarSelection() {
  const ids = [...socialSelectedMessageIds];
  if (ids.length) socialToggleStarMessages(ids);
}

async function socialDeleteMessages(messageIds) {
  const messages = messageIds.map(id => socialChatMessages.find(message => message.id === id)).filter(Boolean);
  const ownMessages = messages.filter(message => message.senderId === currentUser && !message.deleted);
  if (!ownMessages.length) return uiAlert(st('ownMessagesOnly'));
  if (!await uiConfirm(st('deleteConfirm'), { icon: '🗑️', title: st('delete'), yes: t('yes'), no: t('no_keep'), danger: true })) return;
  try {
    const batch = db.batch();
    const conversationRef = db.collection('socialConversations').doc(socialConversationId(currentUser, socialChatTarget.id));
    ownMessages.forEach(message => batch.delete(conversationRef.collection('messages').doc(message.id)));
    if (ownMessages.some(message => message.id === socialChatTarget.lastMessageId)) {
      const remaining = socialChatMessages.filter(message =>
        message.id !== socialChatTarget.lastMessageId && !ownMessages.some(deleted => deleted.id === message.id)
      ).slice(-1)[0];
      batch.set(conversationRef, {
        lastMessage: remaining ? (remaining.image ? `📷 ${remaining.text || ''}` : remaining.text || '') : '',
        lastSender: remaining ? remaining.senderId : null,
        lastMessageId: remaining ? remaining.id : null,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    }
    await batch.commit();
    socialClearSelection();
  } catch (error) {
    console.error('Could not delete social message', error);
    uiAlert(st('chatError'), { icon: '📡' });
  }
}

function socialDeleteSelection() {
  const ids = [...socialSelectedMessageIds];
  if (ids.length) socialDeleteMessages(ids);
}

function socialForwardSelection() {
  const ids = [...socialSelectedMessageIds];
  if (ids.length === 1) socialForwardMessage(ids[0]);
}

async function socialForwardMessage(messageId) {
  const message = socialChatMessages.find(item => item.id === messageId);
  if (!message || message.deleted || !socialChatTarget) return;
  const recipientName = await uiPrompt(st('forwardPrompt'), {
    icon: '↪️',
    validate: value => value && value.trim().length >= 3 ? null : st('noForwardRecipient')
  });
  if (!recipientName) return;
  try {
    const recipientId = await socialResolveLoginName(recipientName.trim());
    if (!recipientId || recipientId === currentUser) return uiAlert(st('noForwardRecipient'));
    const targetRef = socialProfileRef(recipientId);
    const [targetSnap, followingSnap, followedBySnap] = await Promise.all([
      targetRef.get(),
      socialProfileRef(currentUser).collection('following').doc(recipientId).get(),
      targetRef.collection('following').doc(currentUser).get()
    ]);
    if (!targetSnap.exists) return uiAlert(st('noForwardRecipient'));
    if (!socialCanMessage({ id: recipientId, ...targetSnap.data() }, followingSnap.exists, followedBySnap.exists)) return uiAlert(st('messageBlocked'));
    const conversationRef = db.collection('socialConversations').doc(socialConversationId(currentUser, recipientId));
    const newMessageRef = conversationRef.collection('messages').doc();
    const batch = db.batch();
    const forwardedMessage = {
      senderId: currentUser, senderName: currentLoginName || currentUser,
      text: message.text || '', image: safeFoodImage(message.image), forwarded: true,
      replyTo: null, starredBy: [], pinned: false, deleted: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    forwardedMessage.id = newMessageRef.id;
    batch.set(newMessageRef, forwardedMessage);
    batch.set(conversationRef, {
      participants: [currentUser, recipientId],
      lastMessage: forwardedMessage.image ? `📷 ${forwardedMessage.text}` : forwardedMessage.text,
      lastSender: currentUser, lastMessageId: newMessageRef.id, updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    await batch.commit();
    socialClearSelection();
    toast(st('forwardDone'), 'success');
  } catch (error) {
    console.error('Could not forward social message', error);
    uiAlert(st('chatError'), { icon: '📡' });
  }
}

async function socialCopyMessage(messageId) {
  const message = socialChatMessages.find(item => item.id === messageId);
  if (!message) return;
  try {
    if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(socialMessagePreviewText(message));
    else {
      const field = document.createElement('textarea');
      field.value = socialMessagePreviewText(message);
      document.body.append(field);
      field.select();
      const copied = document.execCommand('copy');
      field.remove();
      if (!copied) throw new Error('clipboard_unavailable');
    }
  } catch (error) {
    console.error('Could not copy social message', error);
    uiAlert(st('copyFailed'), { icon: '📋' });
  }
}

async function socialShareMessage(messageId) {
  const message = socialChatMessages.find(item => item.id === messageId);
  if (!message) return;
  const shareData = { text: socialMessagePreviewText(message) };
  if (message.image && safeFoodImage(message.image)) shareData.url = message.image;
  try {
    if (navigator.share) await navigator.share(shareData);
    else await navigator.clipboard.writeText([shareData.text, shareData.url].filter(Boolean).join('\n'));
  } catch (error) {
    if (error.name !== 'AbortError') {
      console.error('Could not share social message', error);
      uiAlert(st('copyFailed'), { icon: '📋' });
    }
  }
}

function socialShowMessageInfo(messageId) {
  const message = socialChatMessages.find(item => item.id === messageId);
  if (!message) return;
  if (message.senderId !== currentUser) return uiAlert(st('messageInfoUnavailable'), {icon: 'ℹ️'});
  uiAlert(st('messageInfo', {
    delivery: esc(message.deliveredAt || message.readAt ? st('messageDelivered') : st('messageSent')),
    seen: esc(message.readAt ? st('messageSeen', {date: socialDate(message.readAt)}) : st('messageNotSeen'))
  }), { html: true, icon: 'ℹ️' });
}

async function socialTogglePinMessage(messageId) {
  const message = socialChatMessages.find(item => item.id === messageId);
  if (!message || !socialChatTarget) return;
  try {
    const conversationRef = db.collection('socialConversations').doc(socialConversationId(currentUser, socialChatTarget.id));
    const batch = db.batch();
    if (socialChatTarget.pinnedMessageId && socialChatTarget.pinnedMessageId !== messageId) {
      batch.update(conversationRef.collection('messages').doc(socialChatTarget.pinnedMessageId), { pinned: false });
    }
    batch.update(conversationRef.collection('messages').doc(messageId), { pinned: !message.pinned });
    batch.set(conversationRef, { pinnedMessageId: message.pinned ? null : messageId }, { merge: true });
    await batch.commit();
    socialChatTarget.pinnedMessageId = message.pinned ? null : messageId;
    renderSocialPinnedMessage();
  } catch (error) {
    console.error('Could not pin social message', error);
    uiAlert(st('chatError'), { icon: '📡' });
  }
}

function socialOpenImage(src) {
  const safe = safeFoodImage(src);
  if (safe) window.open(safe, '_blank', 'noopener');
}

async function handleSocialImageFile() {
  const file = $('social-image-input').files?.[0];
  socialDraftImage = '';
  if (!file) return renderSocialDraftImage();
  if (typeof compressFoodImage !== 'function') return uiAlert(st('photoTooLarge'));
  try {
    socialDraftImage = await compressFoodImage(file, 380 * 1024);
    renderSocialDraftImage();
    updateSocialSendButton();
  } catch (error) {
    console.error('Could not process social chat image', error);
    $('social-image-input').value = '';
    uiAlert(st('photoTooLarge'), { icon: '🖼️' });
  }
}

function renderSocialDraftImage() {
  const box = $('social-image-preview');
  if (!box) return;
  if (!socialDraftImage) {
    box.classList.add('hidden');
    box.replaceChildren();
    return;
  }
  box.classList.remove('hidden');
  box.innerHTML = `<img src="${esc(socialDraftImage)}" alt="${esc(st('imageAlt'))}"><button type="button" class="btn cancel-btn small-btn" onclick="socialDraftImage='';$('social-image-input').value='';renderSocialDraftImage();updateSocialSendButton()">${esc(st('removePhoto'))}</button>`;
}

function updateSocialSendButton() {
  const button = $('social-send-button');
  if (button) button.disabled = !socialDraftImage && !$('social-message-input')?.value.trim();
}

function closeSocialChat() {
  socialChatTarget = null;
  socialViewingProfileId = null;
  socialChatMessages = [];
  socialSelectedMessageIds.clear();
  socialReplyTarget = null;
  socialDraftImage = '';
  closeSocialMessageMenu();
  if (socialChatUnsubscribe) socialChatUnsubscribe();
  if (socialConversationUnsubscribe) socialConversationUnsubscribe();
  socialChatUnsubscribe = null;
  socialConversationUnsubscribe = null;
  $('social-thread').classList.add('hidden');
  $('social-home').classList.remove('hidden');
  renderSocialScreen();
}

function leaveSocialChat() {
  if (socialChatUnsubscribe) socialChatUnsubscribe();
  if (socialConversationUnsubscribe) socialConversationUnsubscribe();
  socialChatUnsubscribe = null;
  socialConversationUnsubscribe = null;
  socialChatTarget = null;
  socialChatMessages = [];
  socialSelectedMessageIds.clear();
  socialReplyTarget = null;
  socialDraftImage = '';
  closeSocialMessageMenu();
  if (socialLongPressTimer) clearTimeout(socialLongPressTimer);
  socialLongPressTimer = null;
}

function savePersonalSiteSettings(key, value) {
  if (applyingSocialDefaults || !currentUser || !socialProfile) return;
  if (!['language', 'theme'].includes(key)) return;
  socialProfile[key] = value;
  socialProfileRef(currentUser).set({ [key]: value }, { merge: true }).catch(error => {
    console.error('Could not save personal site setting', error);
    toast(st('loadError'), 'error');
  });
}

function cleanupSocial() {
  socialLoadingToken++;
  if (socialChatUnsubscribe) socialChatUnsubscribe();
  if (socialConversationUnsubscribe) socialConversationUnsubscribe();
  if (socialGlobalUnsubscribe) socialGlobalUnsubscribe();
  socialChatUnsubscribe = null;
  socialConversationUnsubscribe = null;
  socialGlobalUnsubscribe = null;
  socialChatTarget = null;
  socialViewingProfileId = null;
  socialChatMessages = [];
  socialSelectedMessageIds.clear();
  socialReplyTarget = null;
  socialDraftImage = '';
  socialProfile = null;
  socialCurrentUserData = {};
  socialProfileCache = new Map();
}

if (!socialGlobalEventsInstalled) {
  document.addEventListener('click', event => {
    const menu = $('social-message-menu');
    if (menu && !menu.classList.contains('hidden') &&
        !menu.contains(event.target) && !event.target.closest('.social-message-menu-button')) closeSocialMessageMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeSocialMessageMenu();
      socialClearSelection();
    }
  });
  socialGlobalEventsInstalled = true;
}
