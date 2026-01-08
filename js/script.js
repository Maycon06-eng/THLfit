gsap.registerPlugin(ScrollTrigger);

// Frasco flutuando
gsap.to(".bottle", {
  y: 30,
  repeat: -1,
  yoyo: true,
  duration: 3,
  ease: "sine.inOut"
});

// Frasco gira e "abre"
gsap.to(".bottle", {
  rotation: 25,
  scrollTrigger: {
    trigger: ".pill-zone",
    start: "top bottom",
    end: "center center",
    scrub: true
  }
});

// Cápsulas caindo
gsap.to(".p1", {
  y: 600,
  opacity: 1,
  rotation: 180,
  scrollTrigger: {
    trigger: ".pill-zone",
    scrub: true
  }
});

gsap.to(".p2", {
  y: 700,
  x: -120,
  opacity: 1,
  rotation: -240,
  scrollTrigger: {
    trigger: ".pill-zone",
    scrub: true
  }
});

gsap.to(".p3", {
  y: 650,
  x: 140,
  opacity: 1,
  rotation: 300,
  scrollTrigger: {
    trigger: ".pill-zone",
    scrub: true
  }
});

// Produto → detalhe
function openProduct(name) {
  const title = document.getElementById("detail-title");
  const text = document.getElementById("detail-text");

  title.innerText = name.toUpperCase();
  text.innerText = "Descrição avançada, benefícios, composição e modo de uso.";

  gsap.to(".product-detail", {
    opacity: 1,
    duration: 1
  });

  document.getElementById("detail").scrollIntoView({
    behavior: "smooth"
  });
}
