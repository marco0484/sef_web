const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  sections.forEach(section => {

    const top = window.scrollY;
    const offset = section.offsetTop - 400;
    const height = section.offsetHeight;

    if (top > offset && top < offset + height) {
      section.classList.add("show");
    }

  });

});


// AVISO DE BIENVENIDA

document.addEventListener("DOMContentLoaded", () => {

  const toast = document.getElementById("welcomeToast");
  const closeToast = document.getElementById("closeToast");

  // Si el aviso no existe, no hacemos nada
  if (!toast) return;

  // Mostrar después de 800 ms
  setTimeout(() => {
    toast.classList.add("show");
  }, 800);

  // Cerrar al hacer clic en X
  if (closeToast) {
    closeToast.addEventListener("click", () => {
      toast.classList.remove("show");
    });
  }

  // Cerrar automáticamente después de 6 segundos
  setTimeout(() => {
    toast.classList.remove("show");
  }, 6800);

});