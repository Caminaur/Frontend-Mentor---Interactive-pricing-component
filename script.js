
  const toggle = document.getElementById('payment');
  const body = document.querySelector('body');
  const slider = document.querySelector('.slider__');
  const sliderBtn = document.querySelector('.img-slider-div');
  const emptySlider = document.querySelector('.empty-slider');
  leftClick = false;

  toggle.addEventListener('click',()=>{
    body.dataset.active = (toggle.checked) ? 'true' : 'false';
  });

  // slider.onmousedown = e => handleOnDown(e);

  // slider.ontouchstart = e => handleOnDown(e.touches[0]);

  // slider.onmouseup = e => handleOnUp(e);

  // slider.ontouchend = e => handleOnUp(e.touches[0]);

  // slider.onmousemove = e => handleOnMove(e);

  // slider.ontouchmove = e => handleOnMove(e.touches[0]);

  // emptySlider.onmousedown = e => {
  //   const mouseDelta = parseFloat(emptySlider.dataset.mouseDownAt) - e.clientX; // posicion del mouse 
  //   const maxDelta = parseInt(emptySlider.clientWidth);
  //   const percentage = (mouseDelta / maxDelta) * -100;
  //   const nextPercentageUnconstrained = parseFloat(emptySlider.dataset.prevPercentage) + percentage;
  //   const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  //   console.log('mouseDelta: ' + mouseDelta);
  //   console.log('e.clientX: '+ e.clientX);
  //   console.log('maxDelta: ' + maxDelta);
  //   console.log('percentage: '+ nextPercentage);
  //   console.log('\n');
  // };


  // const handleOnDown = e => {
  //   leftClick = true;
    
  // }
  // const handleOnUp = () => {
  //   slider.dataset.mouseDownAt = "0";  
  //   slider.dataset.prevPercentage = slider.dataset.percentage; 
  //   leftClick = false;
  //   // guardamos el porcentaje del ultimo scroll
  // }

  // const handleOnMove = e => {
  //   if (!leftClick) return;
  //   if(slider.dataset.mouseDownAt === "0") return; // Si no se ha cliqueado que retorne
  
  //   const mouseDelta = parseFloat(slider.dataset.mouseDownAt) - e.clientX; // posicion del mouse 
  //   const maxDelta = slider.innerWidth / 1.5;

    
  //   const percentage = (mouseDelta / maxDelta) * -100;
  //   const nextPercentageUnconstrained = parseFloat(slider.dataset.prevPercentage) + percentage;
  //   const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
  //   slider.dataset.percentage = nextPercentage;
    
  //   slider.animate({
  //     transform:`translate(-${55}%, 0%)`
  //   },{
  //     duration: 500,
  //     fill:"forwards"
  //   });
    
  // }