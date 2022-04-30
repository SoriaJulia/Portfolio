window.onload = function () {
  Particles.init({
    selector: ".background",

    color: ["#f0779c", "#75c7ce", "#130f57"],
    sizeVariations: 4,
    speed: 0.2,
    responsive: [
      {
        breakpoint: 850,
        options: {
          maxParticles: 50,
        },
      },
      {
        breakpoint: 1080,
        options: {
          maxParticles: 120,
        },
      },
    ],
  });
};
