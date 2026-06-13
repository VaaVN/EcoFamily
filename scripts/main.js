document.addEventListener("DOMContentLoaded", () => {
  let header = document.createElement("header");
  header = document.body.appendChild(header);
  header.innerHTML = `<a href="index.html"><img  src="/assets/img/logo.svg" /></a>
      <div class="headerLinks">
        <a href="aboutUs.html">О нас</a
        ><a href="masterСlasses.html">Мастер-классы</a
        ><a href="entFair.html">Ярмарка деревьев</a
        ><a href="products.html  ">Товары</a>
      </div>`;

  const links = document.querySelectorAll('[role="link"]');
  for (let link of links) {
    link.addEventListener("pointerdown", navigateLink);
  }
  function navigateLink(e) {
    let url = e.currentTarget.getAttribute("data-href");

    if (url) {
      window.location.href = url;
    }
  }
});
