/* =====================================================================
   ⚙️  إعدادات العميل — هذا هو الملف الوحيد الذي تعدّله عند ربط عيادة/مشروع
   Firebase جديد. ضع نسخة مطابقة منه في مجلدات: doctor / nurse / booking.
   لا حاجة للبحث داخل الكود إطلاقاً.
   ===================================================================== */

/* (1) إعدادات مشروع Firebase
   من: Firebase Console → ⚙️ Project settings → Your apps → Web app → SDK config */
window.FIREBASE_CONFIG = {
  apiKey:            "AIzaSyALjoxDqMB0W1Iq2ZOJvVviqg7ZNEnITF4",
  authDomain:        "testdoc-abc01.firebaseapp.com",
  projectId:         "testdoc-abc01",
  storageBucket:     "testdoc-abc01.firebasestorage.app",
  messagingSenderId: "790469564348",
  appId:             "1:790469564348:web:0a5b58912300acc7b03db9",
  measurementId:     "G-MDN0P4JYG7"
};

/* (2) حسابات جوجل للموظفين — نفس هذه الإيميلات يجب أن تُوضع في قواعد Firestore */
window.DOCBOOK_ROLES = {
  doctor: ['ahmadtaim450@gmail.com'],   // ← بريد/بُرُد الطبيب (يمكن أكثر من واحد)
  nurse:  ['aistam379@gmail.com']       // ← بريد/بُرُد الممرضة
};

/* (دالة مساعدة — لا تعدّلها) */
window.DOCBOOK_ROLE_OF = function (email) {
  email = (email || '').toLowerCase().trim();
  if ((window.DOCBOOK_ROLES.doctor || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'doctor';
  if ((window.DOCBOOK_ROLES.nurse  || []).map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'nurse';
  return null;
};
