window.onload= function() {
  Particles.init({
    selector:'.background',
    color:['a42b50', '17464a','297a82', '0b0934'],
    connectParticles:true,
        maxParticles:200,
    responsive:[
      {
        breakpoint:850,
        options:{
          maxParticles:50,
        }
      },
      {
        breakpoint:1080,
        options:{
          maxParticles:120
        }  
      }
    ]
  });
};