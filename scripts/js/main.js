// Yuvarlak butonu seçin
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Kullanıcı aşağı kaydıktan sonra yuvarlak butonu görünür hale getirin
window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

// Yuvarlak butona tıklandığında sayfanın en üstüne gitme işlemi
scrollToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0; // Safari için
    document.documentElement.scrollTop = 0; // Diğer tarayıcılar için
});
