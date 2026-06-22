document.addEventListener("DOMContentLoaded", () => {
  let header = document.createElement("header");
  header = document.body.appendChild(header);
  header.innerHTML = `<a href="index.html"><img  src="assets/img/logo.svg" /></a>
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
            <a href="https://vaavn.github.io/EntFair-AdaptivePposter/"  target="_blank">Веб-плакат ЯД</a> <a href="https://vaavn.github.io/TreesAsInspiration/" target="_blank">Веб-плакат ДКВ</a>
            <a href="https://www.calameo.com/read/008187931fe053970702e?authid=asxczqyHLspE" target="_blank">Зин ДКВ</a>
          </div>
          <div class="linksColumn">
            <a href="https://hsedesign.ru/project/eko-semya-brending-55ed45e70ae1412c995e1890a3bdfcdb" target="_blank">Портфолио бренда</a>
            <a href="https://hsedesign.ru/project/eko-semya-mnogostranichnyj-sajt-1bed777ec9f74eeabd3c59d7e74eae81" target="_blank">Портфолио сайта</a>
            <a href="https://hsedesign.ru/project/derevya-kak-vdokhno-453ebd4e1ec0488280d07945bfc632fd" target="_blank">Портфолио зина ДКВ</a>
            <a href="https://hsedesign.ru/project/interaktivnyj-veb-plakat-7f890805c4894ba08f7d17a317bcad43" target="_blank">Портфолио плаката ДКВ</a>
          </div>
          <div class="linksColumn">
            <p>Нечаев Валерий БРИЦП251</p>
            <a href="https://vaavn.github.io/Portfolio/" target="_blank">Моё портфолио</a> <a href="https://hsedesign.ru/account/valeriy-nechaev-e59cea8229d146afbba67d43d4a850be" target="_blank">Моё портфолио ШД</a>
          </div>
        </div>
        <img src="assets/img/footerLogo.svg" />
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
