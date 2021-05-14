
const box = document.querySelector('.container');

const amove = box.getBoundingClientRect();

box.addEventListener('mousemove',e =>{

   const xPosition = (e.clientX - amove.left)/ amove.width;
   
   const yPosition = (e.clientY - amove.top)/ amove.height -0.6;

   const xOffset = -(xPosition - 0.6);

   const MovingOffset = Math.min(Math.max(xOffset,-0.6),0.6);

   box.style.transform =`perspective(1000px)
                          rotateY(${MovingOffset*45}deg)
                          rotateX(${yPosition*45}deg)  
                       
                         `;



});

// box.addEventListener('mouseleave',e =>{
//    box.style.transform ='none';
// });    