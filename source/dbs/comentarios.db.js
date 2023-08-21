const comentarios = [
    {
    score: 1,
    comments: "¡Parece que el chef intentó hacer una obra de arte abstracta en mi plato! No comas aquí si valoras tu paladar.",
  },
  {
    score: 2,
    comments: "La comida fue tan mala que mi estómago está considerando demandarme por abuso gastronómico.",
  },
  {
    score: 1,
    comments: "Pedí una hamburguesa y me trajeron un misterioso objeto no identificado entre dos panes. Ni Indiana Jones podría descifrar esto.",
  },
  {
    score: 2,
    comments: "El servicio fue tan lento que los camareros se disculparon diciendo que estaban siguiendo el horario de la siesta española.",
  },
  {
    score: 1,
    comments: "Mis papilas gustativas acaban de presentar una queja formal. Esto no es comida, es un experimento fallido de laboratorio.",
  },
  {
    score: 2,
    comments: "Este lugar debe estar patrocinado por una compañía de comida para gatos, porque eso es lo que me sirvieron. ¡Meow!",
  },
  {
    score: 1,
    comments: "La comida era tan mala que incluso los mosquitos se negaron a picarme después de que la probé.",
  },
  {
    score: 2,
    comments: "Pedí sushi y me dieron algo que parecía más una versión triste de un barco pirata. Ni Jack Sparrow lo comería.",
  },
  {
    score: 1,
    comments: "Tienen una placa especial en el menú llamada 'La Sorpresa'. Bueno, la sorpresa es que no tienes idea de lo que estás comiendo.",
  },
  {
    score: 2,
    comments: "El restaurante estaba tan oscuro que tuve que usar mi linterna para encontrar el tenedor. Incluso así, no ayudó a la comida.",
  },
  {
    score: 8,
    comments: "¡Excelente lugar para comer!",
  },
  {
    score: 7,
    comments: "Buena comida, pero el servicio podría mejorar.",
  },
  {
    score: 4,
    comments: "La comida no estuvo a la altura de mis expectativas.",
  },
  {
    score: 9,
    comments: "Muy satisfecho con la experiencia.",
  },
  {
    score: 3,
    comments: "No lo recomendaría, la comida estaba fría.",
  },
  {
    score: 6,
    comments: "El ambiente es agradable, pero los precios son altos.",
  },
  {
    score: 8,
    comments: "Volvería de nuevo, la comida es deliciosa.",
  },
  {
    score: 2,
    comments: "Terrible, la peor experiencia que he tenido.",
  },
  {
    score: 9,
    comments: "Fantástico servicio y comida deliciosa.",
  },
  {
    score: 5,
    comments: "Me esperaba más, la comida no tenía sabor.",
  },
  {
    score: 7,
    comments: "Buen lugar para una cena romántica.",
  },
  {
    score: 4,
    comments: "No regresaría, la atención al cliente fue deficiente.",
  },
  {
    score: 8,
    comments: "La comida estuvo bien, pero el postre fue espectacular.",
  },
  {
    score: 3,
    comments: "No vale la pena, la comida es cara y mediocre.",
  },
  {
    score: 9,
    comments: "¡Increíble! Definitivamente lo recomendaría.",
  },
  {
    score: 2,
    comments: "Mala experiencia, la comida estaba quemada.",
  },
  {
    score: 7,
    comments: "La comida es buena, pero el lugar estaba lleno.",
  },
  {
    score: 6,
    comments: "Podría mejorar en la presentación de los platos.",
  },
  {
    score: 8,
    comments: "Gran lugar para celebrar ocasiones especiales.",
  },
  {
    score: 4,
    comments: "No cumplió con mis expectativas.",
  },
  {
    score: 9,
    comments: "¡Volvería una y otra vez! Excelente servicio.",
  },
  {
    score: 3,
    comments: "Muy decepcionado con la calidad de la comida.",
  },
  {
    score: 6,
    comments: "El personal es amable, pero la comida es promedio.",
  },
  {
    score: 8,
    comments: "La comida es deliciosa y bien presentada.",
  },
  {
    score: 2,
    comments: "No recomendaría este lugar a nadie.",
  },
  {
    score: 7,
    comments: "Buena relación calidad-precio.",
  },
  {
    score: 5,
    comments: "Mejoraría el servicio, la comida estuvo bien.",
  },
  {
    score: 9,
    comments: "Increíble experiencia culinaria.",
  },
  {
    score: 3,
    comments: "No volveré, la comida llegó tarde y fría.",
  },
  {
    score: 6,
    comments: "El ambiente es agradable, pero la comida es regular.",
  },
  {
    score: 8,
    comments: "La comida es sabrosa, pero la porción es pequeña.",
  },
  {
    score: 2,
    comments: "Pésimo servicio, no lo recomendaría.",
  },
  {
    score: 7,
    comments: "La comida estuvo bien, pero el lugar estaba ruidoso.",
  },
  {
    score: 4,
    comments: "No cumplió con mis expectativas, me decepcionó.",
  },
  {
    score: 8,
    comments: "Volvería por la comida casera.",
  },
  {
    score: 3,
    comments: "No es lo que esperaba, la comida es regular.",
  },
  {
    score: 9,
    comments: "¡Fantástico! El mejor restaurante de la ciudad.",
  },
  {
    score: 2,
    comments: "La peor comida que he tenido en mucho tiempo.",
  },
  {
    score: 7,
    comments: "Buena comida, pero el servicio fue lento.",
  },
  {
    score: 6,
    comments: "Podrían mejorar la variedad de platos.",
  },
  {
    score: 8,
    comments: "La comida es fresca y deliciosa.",
  },
  {
    score: 4,
    comments: "No lo recomendaría, la comida es cara para lo que ofrece.",
  },
  {
    score: 9,
    comments: "¡Maravilloso! Todo estuvo perfecto.",
  },
  {
    score: 3,
    comments: "Me sentí decepcionado con la calidad de la comida.",
  },
  {
    score: 6,
    comments: "El personal es amable, pero la comida es regular.",
  },
  {
    score: 8,
    comments: "La comida es sabrosa y bien presentada.",
  },
  {
    score: 2,
    comments: "No volvería a este lugar, fue una mala experiencia.",
  },
  {
    score: 7,
    comments: "Buena comida a un precio razonable.",
  },
  {
    score: 5,
    comments: "Mejoraría la limpieza del restaurante.",
  },
  {
    score: 9,
    comments: "La comida es excepcional, servicio amigable.",
  },
  {
    score: 3,
    comments: "La comida no estuvo a la altura de mis expectativas.",
  },
  {
    score: 6,
    comments: "La comida es promedio, pero el lugar es cómodo.",
  },
];
module.exports = comentarios;