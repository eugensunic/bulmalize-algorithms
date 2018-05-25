(function() {
  let colorArray = ['#ff3860', '#3273dc', '#00d1b2', '#ffdd57', '#23d160', '#e8e8e8'];
  for (let i = 0; i < document.querySelectorAll('.box-config').length; i++) {
    document.querySelectorAll('.box-config')[i].addEventListener('mouseover', function() {
      document.querySelectorAll('.box-config')[i].style.background = colorArray[getRandomNum(0, colorArray.length - 1)];
    });
    // clear background color on mouseout
    document.querySelectorAll('.box-config')[i].addEventListener('mouseout', function() {
      document.querySelectorAll('.box-config')[i].style.background = 'white';
    });
  }
  function getRandomNum(bottom, top) {
    return Math.floor(Math.random() * (1 + top - bottom)) + bottom;
  }
})();
