const conhecimentos = document.querySelectorAll(".cards, .descricoes");
let animado = false; // controle para não animar mais de uma vez

window.addEventListener("scroll", () => {
  const logo = document.querySelector(".logo");
  const logoTop = logo.getBoundingClientRect().top;
  const trigger = window.innerHeight - 100;

  if (!animado && logoTop < trigger) {
    animado = true;

    conhecimentos.forEach((conhecimento, index) => {
      setTimeout(() => {
        conhecimento.classList.add('visivel');
      }, index *  500 ); // 200ms entre cada card
    });
  }
});

const servicos = document.querySelectorAll(".servicos,.card-1, .card-2, .card-3");
let servico = false; // controle para não animar mais de uma vez

window.addEventListener("scroll", () => {
  const servi = document.querySelector(".container");
  const servidTop = servi.getBoundingClientRect().top;
  const trige= window.innerHeight - 100;

  if (!servico && servidTop < trige) {
    servico = true;

    servicos.forEach((servidor, index) => {
      setTimeout(() => {
        servidor.classList.add('visivel');
      }, index *  500 ); // 200ms entre cada card
    });
  }
});

const projetos = document.querySelectorAll(".animacao");
let  pro = false; // controle para não animar mais de uma vez

window.addEventListener("scroll", () => {
  const project = document.querySelector(".meusprojetos");
  const projectTop = project.getBoundingClientRect().top;
  const trig= window.innerHeight - 100;

  if (!pro && projectTop < trig) {
    pro = true;

    projetos.forEach((projeto, index) => {
      setTimeout(() => {
        projeto.classList.add('visivel');
      }, index *  700 ); // 200ms entre cada card
    });
  }
});