
var currentPageIndex = 0;
    var pages = document.querySelectorAll('.page');
    var transitionImage = document.querySelector('.transition-image');
    
    function changePage() {
      transitionImage.style.opacity = '1';
      
      setTimeout(function() {
        pages[currentPageIndex].classList.remove('active');
        pages[currentPageIndex].classList.add('hidden');
        
        currentPageIndex = (currentPageIndex + 1) % pages.length;
        
        pages[currentPageIndex].classList.remove('hidden');
        pages[currentPageIndex].classList.add('active');
        
        setTimeout(function() {
          transitionImage.style.opacity = '0';
        }, 250);
      }, 250);
    }