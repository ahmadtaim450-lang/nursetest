/* =====================================================================
   DocBook — خريطة الأدوار (مصدر واحد للحقيقة)
   ⚠️ ضع هنا بريد جوجل لكل من الطبيب والممرضة (يمكن إضافة أكثر من بريد للقائمة).
   نفس هذه القائمة يجب أن تُكرَّر في قواعد Firestore (انظر تعليمات الإعداد).
   ===================================================================== */
window.DOCBOOK_ROLES = {
  doctor: [
    'REPLACE_doctor@gmail.com'   // ← بريد جوجل الخاص بالطبيب
  ],
  nurse: [
    'REPLACE_nurse@gmail.com'    // ← بريد جوجل الخاص بالممرضة
  ]
};

// يُرجع 'doctor' أو 'nurse' أو null (غير مصرّح)
window.DOCBOOK_ROLE_OF = function (email) {
  email = (email || '').toLowerCase().trim();
  if (window.DOCBOOK_ROLES.doctor.map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'doctor';
  if (window.DOCBOOK_ROLES.nurse.map(function (e) { return e.toLowerCase(); }).indexOf(email) !== -1) return 'nurse';
  return null;
};
