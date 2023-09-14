const container = document.querySelector(".container");
const gallery = document.getElementById("gallery");
let offsetX = 0;
let offsetY = 0;

container.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX - container.clientWidth / 2;
  const mouseY = e.clientY - container.clientHeight / 2;
  offsetX = 0.1 * mouseX;
  offsetY = 0.1 * mouseY;

  gallery.style.transition = "transform 0.3s ease";
  gallery.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

container.addEventListener("mouseleave", () => {
  offsetX = 0;
  offsetY = 0;

  gallery.style.transition = "transform 0.3s ease";
  gallery.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
