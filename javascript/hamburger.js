document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');
  
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navItems.forEach((item, index) => {
        if (item.style.opacity === "1") {
          item.style.opacity = "0";
          item.style.transform = "translateX(-20px)";
        } else {
          setTimeout(() => {
            item.style.opacity = "1";
            item.style.transform = "translateX(0)";
          }, 100 * index);
        }
      });
    });
  });
  