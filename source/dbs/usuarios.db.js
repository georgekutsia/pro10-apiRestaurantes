const usuarios = [
  {
    name: "Juan Perez",
    email: "juan@example.com",
    password: "Abc12345",
    age: 25,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343396/restaurantes%20y%20usuarios/usuarios/Stunning-Celebrity-Female-Faces-in-the-World_nhyv1v.jpg ",
    favorite: ["64df31ec441ad17d08c1f7b7"],
    comments:["64e1404c2a0cd16e552f0404"]
  },
  {
    name: "Ana Lopez",
    email: "ana@example.com",
    password: "Xyz98765",
    age: 30,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/hipertextual-caidos-cielo-actores-actrices-menos-problematicos-hollywood-2019277810_sgnnf4.webp",
    favorite: ["64df31ec441ad17d08c1f7b8"],
    comments:["64e1404c2a0cd16e552f0404","64e1404c2a0cd16e552f0406"]
  },
  {
    name: "Carlos Rodriguez",
    email: "carlos@example.com",
    password: "Mno78901",
    age: 28,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692351510/restaurantes%20y%20usuarios/usuarios/will-smith-1-e1692140738581_brb75j.webp",
    favorite: ["64df31ec441ad17d08c1f7c2"],
    comments:[]
  },
  {
    name: "María Gonzalez",
    email: "maria@example.com",
    password: "Pqr23456",
    age: 22,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/phalbm25346011_w472h265c1_ofdofo.webp",
    favorite: [],
    comments:[]
  },
  {
    name: "Luis Martinez",
    email: "luis@example.com",
    password: "Fgh78901",
    age: 31,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/GettyImages-1445627761_20_1_qkxzkb.webp ",
    favorite: [],
    comments:[]
  },
  {
    name: "Elena García",
    email: "elena@example.com",
    password: "Ijk23456",
    age: 27,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/ZuAIKKN_be0ji8.jpg",
    favorite: [],
    comments:[]
  },
  {
    name: "Andrés Torres",
    email: "andres@example.com",
    password: "Lmn78901",
    age: 29,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/jqlcici_yji5f7.webp",
    favorite: ["64df31ec441ad17d08c1f7b8"],
    comments:[]
  },
  {
    name: "Tim McIlrath",
    email: "andres@example.com",
    password: "Lmn78901",
    age: 54,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692351775/restaurantes%20y%20usuarios/usuarios/JLEkvgvaWFQrmbGPBDJ7iX_i65gte.jpg",
    favorite: ["64df31ec441ad17d08c1f7b8"],
    comments:[]
  },
  {
    name: "Sofía Ramos",
    email: "sofia@example.com",
    password: "Opq23456",
    age: 24,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/frases-actores-wide_webp_t53uor.webp",
    favorite: [],
    comments:[]
  },
  {
    name: "Sergio Pitel",
    email: "sergio@example.com",
    password: "vivaangular",
    age: 26,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343394/restaurantes%20y%20usuarios/usuarios/1647447980708_kdm3b8.jpg",
    favorite: ["64df31ec441ad17d08c1f7c2"],
    comments:[]
  },
  {
    name: "Laura Fernández",
    email: "laura@example.com",
    password: "Uvw23456",
    age: 32,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/290329_282674_aa42s8.jpg ",
    favorite: ["64df31ec441ad17d08c1f7c4", "64df31ec441ad17d08c1f7c5"],
    comments:[]
  },
  {
    name: "Ricardo Ortega",
    email: "ricardo@example.com",
    password: "Xyz23456",
    age: 23,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/descarga_dkmxvr.jpg",
    favorite: ["64df31ec441ad17d08c1f7c6"],
    comments:[]
  },
  {
    name: "Isabel Navarro",
    email: "isabel@example.com",
    password: "Abc34567",
    age: 28,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/actores-que-desaparecieron-696x390_it5alz.jpg ",
    favorite: ["64df31ec441ad17d08c1f7c7"],
    comments:[]
  },
  {
    name: "Fernando Vargas",
    email: "fernando@example.com",
    password: "Def34567",
    age: 29,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343394/restaurantes%20y%20usuarios/usuarios/24148_ye4m2k.webp ",
    favorite: ["64df31ec441ad17d08c1f7bd", "64df31ec441ad17d08c1f7bd"],
    comments:[]
  },
  {
    name: "Carmen Morales",
    email: "carmen@example.com",
    password: "Ghi34567",
    age: 27,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/actores-espanoles-social_ovlmgb.jpg",
    favorite: [ "64df31ec441ad17d08c1f7c9", "64df31ec441ad17d08c1f7cb", "64df31ec441ad17d08c1f7cc", "64df31ec441ad17d08c1f7ce",],
    comments:[]
  },
  {
    name: "Javier Cordero",
    email: "javier@example.com",
    password: "Jkl34567",
    age: 31,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343394/restaurantes%20y%20usuarios/usuarios/113928_rtua2g.webp ",
    favorite: ["64df31ec441ad17d08c1f7bd"],
    comments:[]
  },
  {
    name: "Jose Antonio García Arencón",
    email: "jose@example.com",
    password: "estapromociondealumnoseslamejor",
    age: 29,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343395/restaurantes%20y%20usuarios/usuarios/1659601185141_lbnsxw.jpg",
    favorite: ["64df31ec441ad17d08c1f7bf", "64df31ec441ad17d08c1f7c9"],
    comments:[]
  },
  {
    name: "Gabriel Mendoza",
    email: "gabriel@example.com",
    password: "Pqr34567",
    age: 33,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343394/restaurantes%20y%20usuarios/usuarios/164329_qi4fba.webp",
    favorite: ["64df31ec441ad17d08c1f7c0"],
    comments:[]
  },
  {
    name: "Valeria Medina",
    email: "valeria@example.com",
    password: "Stu34567",
    age: 25,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343394/restaurantes%20y%20usuarios/usuarios/5374711_kcpv2z.jpg ",
    favorite: ["64df31ec441ad17d08c1f7c1"],
    comments:[]
  },
  {
    name: "Emilio Robles",
    email: "emilio@example.com",
    password: "Vwx34567",
    age: 28,
    img: "https://res.cloudinary.com/dxnzcewsy/image/upload/v1692343394/restaurantes%20y%20usuarios/usuarios/16904462676155_taykg2.jpg ",
    favorite: ["64df31ec441ad17d08c1f7b8", "64df31ec441ad17d08c1f7ba"],
    comments:[]
  },
];

module.exports = usuarios;
