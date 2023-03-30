var menuItems = document.querySelectorAll('.float-menu p a');

window.addEventListener('scroll', function() {
    var currentPosition = window.pageYOffset;
    if (currentPosition < 812) {
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
        menuItems[0].classList.add('active');
        menuItems[1].classList.add('active');
      }
    if (currentPosition >= 780) {
      menuItems.forEach(function(item) {
        item.classList.remove('active');
      });
      menuItems[2].classList.add('active');
      menuItems[3].classList.add('active');
      menuItems[4].classList.add('active');
    }
    if (currentPosition >= 1200) {
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
        menuItems[5].classList.add('active');
        menuItems[6].classList.add('active');
    }
    if (currentPosition >= 1700) {
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
        menuItems[7].classList.add('active');
        menuItems[8].classList.add('active');
        menuItems[9].classList.add('active');
    }
});