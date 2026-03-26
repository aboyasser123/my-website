 
    // Initialize AOS animation
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
    });

    // Navbar scroll effect
    window.addEventListener("scroll", function () {
      const nav = document.getElementById("mainNav");
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
          
          // Update active nav link
          document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
          });
          this.classList.add('active');
        }
      });
    });

    // Typing effect in hero section
    const textArray = [
      "مطور Full-Stack",
      "طالب هندسة معلوماتية",
      "مصمم واجهات مستخدم",
      "مبرمج تطبيقات ويب"
    ];
    let typingIndex = 0;
    let charIndex = 0;
    const typingElement = document.getElementById("typing-text");
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
      const currentText = textArray[typingIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
      } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 1500; // Pause at end of typing
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingIndex = (typingIndex + 1) % textArray.length;
        typingSpeed = 500; // Pause before typing next
      }
      
      setTimeout(typeEffect, typingSpeed);
    }

    // Start typing effect when page loads
    document.addEventListener("DOMContentLoaded", function() {
      setTimeout(typeEffect, 1000);
      
      // Animate progress bars on load
      document.querySelectorAll('.progress-bar').forEach(bar => {
        const width = bar.parentElement.nextElementSibling.textContent.match(/\d+/)[0] + '%';
        bar.style.width = width;
      });
    });

    // Initialize particles.js
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: { enable: true, value_area: 800 },
        },
        color: { value: "#00d4ff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#000000" },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 4, size_min: 0.3, sync: false },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00d4ff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 140, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  // =================== منع زر الفأرة الأيمن ===================
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    showToast("🚫 ممنوع استخدام زر الفأرة الأيمن", "warning");
    return false;
});

document.addEventListener("mousedown", function(e) {
    if (e.button === 2) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
});

// =================== منع النسخ ===================
document.addEventListener("selectstart", function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener("copy", function(e) {
    e.preventDefault();
    showToast("📋 معذرة، النسخ غير مسموح", "warning");
    return false;
});

document.addEventListener("cut", function(e) {
    e.preventDefault();
    showToast("✂️ معذرة، القص غير مسموح", "warning");
    return false;
});

// =================== منع اختصارات DevTools ===================
document.addEventListener("keydown", function(e) {
    const forbidden =
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I","C","J"].includes(e.key.toUpperCase())) || 
        (e.ctrlKey && ["U","S","A"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key === "c") ||      // Ctrl+C
        (e.ctrlKey && e.key === "x") ||      // Ctrl+X
        (e.ctrlKey && e.key === "v") ||      // Ctrl+V (اختياري)
        (e.ctrlKey && e.key === "a");        // Ctrl+A (تحديد الكل)
    
    if (forbidden) {
        e.preventDefault();
        showToast("🚫 هذا الاختصار ممنوع على الموقع", "warning");
        return false;
    }
});