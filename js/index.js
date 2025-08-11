document.addEventListener("DOMContentLoaded", ()=>{
    const target = document.querySelector("animacao");
      const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.5}); // ativa quando 50% da imagem estiver visível

    // observer.observe(target);
})





// document.addEventListener("DOMContentLoaded", () => {
//   const html = document.getElementById("html");
//   const css = document.getElementById("css");
//   const tail = document.getElementById("tail");
//   const nest = document.getElementById("nest");
//   const react = document.getElementById("react");
//   const node = document.getElementById("node")
//   const js = document.getElementById("js");
//   const ts = document.getElementById("ts")
//   const descricao = document.getElementById("descricao");
//   const defaultText = descricao.textContent;

//   const description = {
//     html: "HTML é a linguagem de marcação padrão para criar páginas web.",
//     css :"CSS é estilização para páginas Web",
//     node:"Node é uma forma de usar javascript no backend, Utilizando do lado do servidor",
//     js :"É uma linguagem de programação para dar usuabilidade",
//     ts:"Linguagem de programação com linguagem de tipagem forte",
//     tail:"Tailwind fremework de CSS",
//     nest:"Nest é um framework para Node.js",
//     react:"React é uma biblioteca JavaScript para construir interfaces de usuário."
//   };

//   const troca_descriao = (id)=>{
//     descricao.textContent = description[id];
//   };
  
//   const retorne_descricao = ()=>{
//     descricao.textContent = defaultText;
//   };
  
//   [html, css, js, ts, tail, nest, node, react].forEach(el=>{
//     el.addEventListener("mouseenter",()=> troca_descriao(el.id));
//     el.addEventListener("mouseleave", retorne_descricao)
//   })
  
// })  