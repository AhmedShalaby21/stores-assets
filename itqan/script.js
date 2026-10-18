document.addEventListener("DOMContentLoaded", function() {
  // اللوجو الجديد
  const logo = document.createElement("img");
  logo.src = "https://i.postimg.cc/crZRxLB2/download-2026-10-05T151715-436-1.png";
  logo.alt = "Abnorm logo";
  logo.style.maxWidth = "160px";
  logo.style.marginBottom = "15px";

  // المكان اللي هنضيف فيه اللوجو
  const targetDiv = document.querySelector("div.lg\\:col-span-2.rtl\\:lg\\:pl-20.ltr\\:lg\\:pr-20");
  
  if (targetDiv) {
    targetDiv.prepend(logo); // يحط اللوجو في أول الديف
  }
});
