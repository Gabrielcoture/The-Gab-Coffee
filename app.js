const menu = [
  {
   id: 1,
    title: "Caprese Toast",
    category: "breakfast",
    price: 22.90,
    img: "./images/item-1.jpg",
    desc: `Tomates confitados, mussarela de búfala, pesto e mix de brotos.`,  },
  {
    id: 2,
    title: "Carreteiro do Gab",
    category: "lunch",
    price: 37.99,
    img: "./images/carreteiro.jpg",
    desc: `Nossa versão de um clássico. Surpreendente! O classico feito pelo meu pai, que faz o melhor carreteiro do mundo.`,
  },
  {
    id: 3,
    title: "Chai Latte",
    category: "tea",
    price: 12.99,
    img: "./images/dirty_chai_vanill_latte.jpg",
    desc: `Segundo a minha namorada, a maior sommelie da Chai Latte de Curitiba, esse aqui te faz ir as nuvens.`,
  },
  {
    id: 4,
    title: "English Breakfast",
    category: "breakfast",
    price: 39.99,
    img: "./images/english.jpg",
    desc: `Esse café da manhã sustentava um operário da 1ª Revolução Industrial, mas eu aposto que você também é bom de garfo, rs. `,
  },
  {
    id: 5,
    title: "Caeser de frango",
    category: "lunch",
    price: 32.99,
    img: "./images/caesar.jpg",
    desc: `Tiras de frango grelhadas, mix de folhas verdes, croutons, ovo, parmesão e molho especial da casa. Uma verdadeira perdição. `,
  },
  {
    id: 6,
    title: "Expresso",
    category: "coffee",
    price: 7.00,
    img: "./images/saboroso-cafe-expresso-servido-na-xicara-com-graos-de-cafe-ao-redor-e-colher-fechar-se-fundo-escuro_1220-5749.jpg",
    desc: `A vida só começa depois do primeiro shot de expresso.`,
  },
  {
    id: 7,
    title: "Benedict Eggs",
    category: "breakfast",
    price: 25.90,
    img: "./images/ovos-beneditinos.jpg",
    desc: `O queridinho do café das manhãs estadunidense reproduzidos no conforto de nosso café.`,
  },
  {
    id: 8,
    title: "Risoto ao Funghi",
    category: "lunch",
    price: 42.99,
    img: "./images/funghi.jpg",
    desc: `Esse é o favorito do Chef Gabriel. Como diria o Jacquin: "Ten cremossidad, ten sabour, ten tomperro.`,
  },
  {
    id: 9,
    title: "french press",
    category: "coffee",
    price: 12.00,
    img: "./images/frenchpress.jpg",
    desc: `São 250ml de um café filtrado, aromático denso e encorpado.`,
  },
  {
    id: 11,
    title: "CHÁ VERDE JASMINE DRAGON PEARLS",
    category: "tea",
    price: 16.00,
    img: "./images/cha.jpeg",
    desc: `50ml de um Exuberante Chá Verde com brotos prateados e perfumado com Jasmim, originário da província chinesa de Fujian. Cultivado em jardins e extremamente delicado, seu nome provém da sua luxuosa forma de pérola, elaborada artesanalmente. Seco entre flores de jasmim, tem uma agradável fragrância e um sabor inconfundível. Recomendado para qualquer momento do dia.`,
  },
  {
    id: 10,
    title: "Fatia de bolo bombom de uva ",
    category: "dessert",
    price: 18.90,
    img: "./images/bolo-bombom-de-uva.jpg",
    desc: `Por essa fatia aqui, a Ana Maria passaria pelo umas cinco vezes por debaixo da mesa.`,
  }
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(menu);
  displayMenuButtons();
});

function diplayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">R$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        diplayMenuItems(menu);
      } else {
        diplayMenuItems(menuCategory);
      }
    });
  });
}
