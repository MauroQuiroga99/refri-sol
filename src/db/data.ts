export type Category = {
  id: number;
  name: string;
  description: string;
  image: string;
};

type Datacategory = {
  categories: Category[];
};

export const dataBase: Datacategory = {
  categories: [
    {
      id: 1,
      name: "Equipos de Aire Acondicionado",
      description:
        "Unidades de aire acondicionado completas para instalación y uso.",
      image:
        "https://www.aireyclimas.mx/wp-content/uploads/2021/04/Tienda-Aire-y-Climas.jpg",
    },
    {
      id: 2,
      name: "Repuestos",
      description:
        "Partes y componentes de repuesto para aires acondicionados.",
      image:
        "https://www.lacuracaonline.com/media/amasty/blog/cache/P/o/1280/400/Portada1498805051.jpg",
    },
    {
      id: 3,
      name: "Filtros y Accesorios",
      description: "Filtros y accesorios adicionales para mantenimiento.",
      image:
        "https://i.pinimg.com/564x/59/c4/ef/59c4ef9fd1e1a57d463c88363fc834a2.jpg",
    },
    {
      id: 4,
      name: "Herramientas de Instalación",
      description:
        "Herramientas necesarias para la instalación y mantenimiento.",
      image:
        "https://stackheating.com/wp-content/uploads/2022/11/Stack-Importanc...-electrical-services-header-scaled.jpeg",
    },
  ],
};

export type Services = {
  id: number;
  name: string;
  description: string;
  image: string;
};

export type Dataservices = {
  services: Services[];
};

export const dataServices: Dataservices = {
  services: [
    {
      id: 1,
      name: "Venta y distribución",
      description:
        "Ofrecemos soluciones completas en venta y distribución de equipos de climatización de las principales marcas del mercado, asegurando calidad y rendimiento.",
      image: "img/distri.jpg",
    },
    {
      id: 2,
      name: "Diseño en obras industriales.",
      description:
        "Diseñamos sistemas de climatización eficientes y personalizados para proyectos industriales y comerciales, adaptados a las necesidades de cada espacio.",
      image: "img/indus.jpg",
    },
    {
      id: 3,
      name: "Instalación",
      description:
        "Servicios profesionales de instalación de sistemas de climatización, realizados por técnicos certificados y cumpliendo con las normativas vigentes.",
      image: "img/insta.jpg",
    },
    {
      id: 4,
      name: "Mantenimiento",
      description:
        "Mantenimiento preventivo y correctivo de sistemas de climatización para garantizar su eficiencia y prolongar su vida útil.",
      image: "img/mante.jpg",
    },
  ],
};
