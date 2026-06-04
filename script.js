const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId.length <= 1) {
      return;
    }
    const target = document.querySelector(targetId);
    if (!target) {
      return;
    }
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const carousel = document.querySelector("[data-carousel]");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");

if (carousel && prevButton && nextButton) {
  const items = Array.from(carousel.querySelectorAll(".course-item"));
  const visibleCount = 3;
  let startIndex = 0;
  let autoTimer = null;

  const renderCarousel = () => {
    items.forEach((item, index) => {
      const shouldShow =
        index >= startIndex && index < startIndex + visibleCount;
      item.classList.toggle("hidden", !shouldShow);
    });
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  };

  const goNext = () => {
    startIndex = (startIndex + 1) % items.length;
    renderCarousel();
  };

  const goPrev = () => {
    startIndex = (startIndex - 1 + items.length) % items.length;
    renderCarousel();
  };

  const startAuto = () => {
    if (items.length <= visibleCount) {
      return;
    }
    autoTimer = window.setInterval(goNext, 5000);
  };

  const stopAuto = () => {
    if (autoTimer) {
      window.clearInterval(autoTimer);
      autoTimer = null;
    }
  };

  prevButton.addEventListener("click", () => {
    stopAuto();
    goPrev();
    startAuto();
  });

  nextButton.addEventListener("click", () => {
    stopAuto();
    goNext();
    startAuto();
  });

  carousel.addEventListener("mouseenter", stopAuto);
  carousel.addEventListener("mouseleave", startAuto);

  renderCarousel();
  startAuto();
}

const achievementsTrack = document.querySelector("[data-achievement-track]");

if (achievementsTrack) {
  const achievementImages = [
    "photo/奪星學生相-01.png",
    "photo/奪星學生相-02.png",
    "photo/奪星學生相-03.png",
    "photo/奪星學生相-04.png",
    "photo/奪星學生相-05.png",
    "photo/奪星學生相-06.png",
    "photo/奪星學生相-07.png",
    "photo/奪星學生相-08.png",  
    "photo/奪星學生相-09.png",
    "photo/奪星學生相-10.png",  
    "photo/奪星學生相-11.png",
    "photo/奪星學生相-12.png",
    "photo/奪星學生相-13.png",
    "photo/奪星學生相-14.png",
    "photo/奪星學生相-15.png",
    "photo/奪星學生相-16.png",
    "photo/奪星學生相-17.png",
    "photo/奪星學生相-18.png",
    "photo/奪星學生相-19.png",
    "photo/奪星學生相-20.png",
    "photo/奪星學生相-21.png",
    "photo/奪星學生相-22.png",
    "photo/奪星學生相-23.png",
    "photo/奪星學生相-24.png",
  ];

  const createAchievementCard = (src, index) => {
    const card = document.createElement("article");
    card.className = "achievement-card";

    const image = document.createElement("img");
    image.src = src;
    image.alt = `學生佳績照片 ${index + 1}`;
    image.loading = "lazy";
    image.decoding = "async";

    card.appendChild(image);
    return card;
  };

  achievementImages.forEach((src, index) => {
    achievementsTrack.appendChild(createAchievementCard(src, index));
  });

  achievementImages.forEach((src, index) => {
    achievementsTrack.appendChild(createAchievementCard(src, index));
  });
}
