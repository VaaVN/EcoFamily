document.addEventListener("DOMContentLoaded", () => {
  let scrollContainer = document.querySelector(".productsRoller");
  let cards = document.querySelectorAll('[data-js="productCard"]');
  let standartWidth = cards[0].getBoundingClientRect().width;
  let maxScaler = 1.2;
  let minScaler = 0.9;
  let maxDistToScale = cards[0].getBoundingClientRect().width * 2;
  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.style.cursor = "grabbing";
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.style.cursor = "grab";
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.style.cursor = "grab";
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = x - startX;
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  function updateCardsScale() {
    let containerRect = scrollContainer.getBoundingClientRect();
    let containerCenterX = containerRect.left + containerRect.width / 2;
    cards.forEach((card) => {
      let cardRect = card.getBoundingClientRect();
      let cardCenterX = cardRect.left + cardRect.width / 2;
      let distance = Math.abs(containerCenterX - cardCenterX);
      let scale =
        maxScaler - (distance / maxDistToScale) * (maxScaler - minScaler);
      scale = Math.max(minScaler, scale);
      let newWidth = standartWidth * scale;
      card.style.width = `${newWidth}px`;
      let img = card.querySelector("img");
      if (img) {
        img.style.width = "100%";
        img.style.height = "100%";
      }
    });
  }
  let isTicking = false;
  scrollContainer.addEventListener("scroll", () => {
    updateCardsScale();
  });
  window.addEventListener("load", updateCardsScale);
  window.addEventListener("resize", updateCardsScale);
});
