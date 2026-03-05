(function(){
  var blueCard = 'rgba(220, 232, 252, 0.45)';
  var cards = document.querySelectorAll('.glass-hero, .glass-card-section, .research-card');
  cards.forEach(function(card){
    card.addEventListener('mousemove', function(e){
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var rotateX = ((y - centerY) / centerY) * -4;
      var rotateY = ((x - centerX) / centerX) * 4;
      card.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';
      card.style.background = 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(210,225,250,0.7) 0%, rgba(220,232,252,0.5) 50%, ' + blueCard + ' 100%)';
    });
    card.addEventListener('mouseleave', function(){
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      card.style.background = blueCard;
      card.style.transition = 'transform 0.5s ease, background 0.5s ease';
    });
    card.addEventListener('mouseenter', function(){
      card.style.transition = 'none';
    });
  });
})();
