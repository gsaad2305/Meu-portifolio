document.addEventListener("DOMContentLoaded", ()=>{
    const target = document.querySelector("animacao");
      const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.5 }); // ativa quando 50% da imagem estiver visível

    observer.observe(target);
})

document.addEventListener("DOMContentLoaded", () => {
  const html = document.getElementById("html");
  const css = document.getElementById("css");
  const tail = document.getElementById("tail");
  const nest = document.getElementById("nest");
  const react = document.getElementById("react");;
})