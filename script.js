function checkOrientation() {
  if (window.innerHeight > window.innerWidth) {
    document.getElementById('landscape-warning').style.display = 'flex';
  } else {
    document.getElementById('landscape-warning').style.display = 'none';
  }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);
