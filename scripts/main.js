document.addEventListener("DOMContentLoaded", () => {
  let header = document.createElement("header");
  header = document.body.appendChild(header);
  header.innerHTML = `<a href="index.html"><img  src="../assets/img/logo.svg" /></a>
      <div class="headerLinks">
        <a href="aboutUs.html">О нас</a
        ><a href="masterСlasses.html">Мастер-классы</a
        ><a href="entFair.html">Ярмарка деревьев</a
        ><a href="products.html  ">Товары</a>
      </div>`;
  let footer = document.createElement("footer");
  footer = document.body.appendChild(footer);
  footer.innerHTML = `<div class="footerBody">
        <div class="linksColumns">
          <div class="linksColumn">
            <a href="">Веб-плакат ЯД</a> <a href="">Веб-плакат ДКВ</a>
            <a href="">Зин ДКВ</a>
          </div>
          <div class="linksColumn">
            <a href="">Портфолио бренда</a>
            <a href="">Портфолио сайта</a>
            <a href="">Портфолио зина ДКВ</a>
            <a href="">Портфолио плаката ДКВ</a>
          </div>
          <div class="linksColumn">
            <p>Нечаев Валерий БРИЦП251</p>
            <a href="">Моё портфолио</a> <a href="">Моё портфолио ШД</a>
          </div>
        </div>
        <img src="../assets/img/footerLogo.svg" />
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
