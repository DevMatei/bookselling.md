const left = document.getElementById("left-side");

const handleMove = (e) => {
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const widthPercentage = (clientX / window.innerWidth) * 100;
  left.style.width = `${widthPercentage}%`;
};

document.onmousemove = (e) => handleMove(e);
document.ontouchmove = (e) => handleMove(e);