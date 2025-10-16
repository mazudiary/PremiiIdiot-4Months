<script>
      // Slideshow
      const slides = document.querySelectorAll(".slide");
      let currentSlide = 0;
      function showSlide(n) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[n % slides.length].classList.add("active");
      }
      function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }
      showSlide(currentSlide);
      setInterval(nextSlide, 6000);

      // Counter
      const START_DATE = new Date("2025-06-17T00:00:00");
      const counterDisplay = document.getElementById("counter-display");
      function updateCounter() {
        const now = new Date();
        const diffDays = Math.floor((now - START_DATE) / (1000 * 60 * 60 * 24));
        counterDisplay.textContent = diffDays;
      }
      updateCounter();

      // Floating Hearts
      const emojis = ["💖", "💞", "💕", "💓", "💗"];
      function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 6 + Math.random() * 5 + "s";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 10000);
      }
      setInterval(createHeart, 800);

      // Scroll Animations (Letter + Timeline)
      const letter = document.getElementById("letter");
      const timelineItems = document.querySelectorAll(".timeline-item");

      function revealOnScroll() {
        const trigger = window.innerHeight * 0.85;

        if (letter.getBoundingClientRect().top < trigger) {
          letter.classList.add("visible");
        }
        timelineItems.forEach((item) => {
          if (item.getBoundingClientRect().top < trigger) {
            item.classList.add("visible");
          }
        });
      }

      window.addEventListener("scroll", revealOnScroll);
      revealOnScroll();
    </script>