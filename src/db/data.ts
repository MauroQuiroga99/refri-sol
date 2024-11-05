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

export type Product = {
  id: number;
  name: string;
  description: string;
  image1: string; // Cambiado de image a image1
  image2: string; // Añadido image2
  price: number;
  brand: string;
  categoryId: number;
};

type DataProduct = {
  products: Product[];
};

export const dataProducts: DataProduct = {
  products: [
    // Equipos de Aire Acondicionado (categoryId: 1)
    {
      id: 1,
      name: "Aire Acondicionado Split 12,000 BTU",
      description:
        "Aire acondicionado de pared con alta eficiencia y bajo consumo.",
      image1: "https://example.com/aire-split-12000.jpg",
      image2: "https://example.com/aire-split-12000-2.jpg", // Ejemplo de imagen adicional
      price: 599.99,
      brand: "CoolAir",
      categoryId: 1,
    },
    {
      id: 2,
      name: "Aire Acondicionado Portátil 10,000 BTU",
      description: "Equipo portátil para enfriar cualquier espacio de la casa.",
      image1: "https://example.com/aire-portatil-10000.jpg",
      image2: "https://example.com/aire-portatil-10000-2.jpg", // Ejemplo de imagen adicional
      price: 499.99,
      brand: "Breeze",
      categoryId: 1,
    },
    {
      id: 3,
      name: "Aire Acondicionado Ventana 8,000 BTU",
      description:
        "Aire acondicionado de ventana, ideal para habitaciones pequeñas.",
      image1: "https://example.com/aire-ventana-8000.jpg",
      image2: "https://example.com/aire-ventana-8000-2.jpg", // Ejemplo de imagen adicional
      price: 299.99,
      brand: "ChillZone",
      categoryId: 1,
    },
    {
      id: 4,
      name: "Aire Acondicionado Inverter 18,000 BTU",
      description:
        "Aire acondicionado con tecnología Inverter para ahorro energético.",
      image1: "https://example.com/aire-inverter-18000.jpg",
      image2: "https://example.com/aire-inverter-18000-2.jpg", // Ejemplo de imagen adicional
      price: 799.99,
      brand: "EcoCool",
      categoryId: 1,
    },
    {
      id: 5,
      name: "Aire Acondicionado Cassette 24,000 BTU",
      description: "Ideal para oficinas, con distribución uniforme del aire.",
      image1: "https://example.com/aire-cassette-24000.jpg",
      image2: "https://example.com/aire-cassette-24000-2.jpg", // Ejemplo de imagen adicional
      price: 999.99,
      brand: "AirMaster",
      categoryId: 1,
    },
    {
      id: 6,
      name: "Aire Acondicionado Split 9,000 BTU",
      description:
        "Aire acondicionado eficiente y silencioso para espacios pequeños.",
      image1: "https://example.com/aire-split-9000.jpg",
      image2: "https://example.com/aire-split-9000-2.jpg", // Ejemplo de imagen adicional
      price: 399.99,
      brand: "Breeze",
      categoryId: 1,
    },

    // Repuestos (categoryId: 2)
    {
      id: 7,
      name: "Compresor de Aire Acondicionado 12,000 BTU",
      description:
        "Compresor de repuesto compatible con modelos de 12,000 BTU.",
      image1: "https://example.com/compresor-aire-12000.jpg",
      image2: "https://example.com/compresor-aire-12000-2.jpg", // Ejemplo de imagen adicional
      price: 129.99,
      brand: "AirParts",
      categoryId: 2,
    },
    {
      id: 8,
      name: "Condensador de Aire Acondicionado",
      description:
        "Condensador de repuesto para mejorar el rendimiento del aire acondicionado.",
      image1: "https://example.com/condensador-aire.jpg",
      image2: "https://example.com/condensador-aire-2.jpg", // Ejemplo de imagen adicional
      price: 89.99,
      brand: "ChillTech",
      categoryId: 2,
    },
    {
      id: 9,
      name: "Ventilador de Aire",
      description:
        "Ventilador de repuesto para sistemas de aire acondicionado.",
      image1: "https://example.com/ventilador-aire.jpg",
      image2: "https://example.com/ventilador-aire-2.jpg", // Ejemplo de imagen adicional
      price: 49.99,
      brand: "CoolComponents",
      categoryId: 2,
    },
    {
      id: 10,
      name: "Sensor de Temperatura",
      description:
        "Sensor de repuesto para medición de temperatura en aires acondicionados.",
      image1: "https://example.com/sensor-temperatura.jpg",
      image2: "https://example.com/sensor-temperatura-2.jpg", // Ejemplo de imagen adicional
      price: 15.99,
      brand: "TechTemp",
      categoryId: 2,
    },
    {
      id: 11,
      name: "Control Remoto Universal",
      description:
        "Control remoto compatible con múltiples modelos de aire acondicionado.",
      image1: "https://example.com/control-remoto.jpg",
      image2: "https://example.com/control-remoto-2.jpg", // Ejemplo de imagen adicional
      price: 24.99,
      brand: "UniControl",
      categoryId: 2,
    },
    {
      id: 12,
      name: "Filtro de Carbón Activado",
      description: "Filtro de repuesto que mejora la calidad del aire.",
      image1: "https://example.com/filtro-carbon.jpg",
      image2: "https://example.com/filtro-carbon-2.jpg", // Ejemplo de imagen adicional
      price: 12.99,
      brand: "PureAir",
      categoryId: 2,
    },

    // Filtros y Accesorios (categoryId: 3)
    {
      id: 13,
      name: "Filtro de Aire Lavable",
      description: "Filtro reutilizable y lavable para aire acondicionado.",
      image1: "https://example.com/filtro-lavable.jpg",
      image2: "https://example.com/filtro-lavable-2.jpg", // Ejemplo de imagen adicional
      price: 19.99,
      brand: "FilterFresh",
      categoryId: 3,
    },
    {
      id: 14,
      name: "Kit de Limpiador de Bobina",
      description: "Kit de limpieza de bobinas para un mantenimiento eficaz.",
      image1: "https://example.com/limpiador-bobina.jpg",
      image2: "https://example.com/limpiador-bobina-2.jpg", // Ejemplo de imagen adicional
      price: 29.99,
      brand: "CleanPro",
      categoryId: 3,
    },
    {
      id: 15,
      name: "Filtro HEPA",
      description:
        "Filtro de alta eficiencia para capturar partículas en el aire.",
      image1: "https://example.com/filtro-hepa.jpg",
      image2: "https://example.com/filtro-hepa-2.jpg", // Ejemplo de imagen adicional
      price: 34.99,
      brand: "PureBreeze",
      categoryId: 3,
    },
    {
      id: 16,
      name: "Rejilla de Ventilación",
      description:
        "Rejilla de ventilación para distribución uniforme del aire.",
      image1: "https://example.com/rejilla-ventilacion.jpg",
      image2: "https://example.com/rejilla-ventilacion-2.jpg", // Ejemplo de imagen adicional
      price: 15.99,
      brand: "AirFlow",
      categoryId: 3,
    },
    {
      id: 17,
      name: "Filtro de Carbón",
      description: "Filtro para mejorar la calidad del aire eliminando olores.",
      image1: "https://example.com/filtro-carbon.jpg",
      image2: "https://example.com/filtro-carbon-2.jpg", // Ejemplo de imagen adicional
      price: 22.99,
      brand: "ClearAir",
      categoryId: 3,
    },
    {
      id: 18,
      name: "Aislante Acústico",
      description: "Material aislante para reducir el ruido del equipo.",
      image1: "https://example.com/aislante-acustico.jpg",
      image2: "https://example.com/aislante-acustico-2.jpg", // Ejemplo de imagen adicional
      price: 44.99,
      brand: "SilentCool",
      categoryId: 3,
    },

    // Otros (categoryId: 4)
    {
      id: 19,
      name: "Calefactor Eléctrico",
      description: "Calefactor portátil ideal para el invierno.",
      image1: "https://example.com/calefactor.jpg",
      image2: "https://example.com/calefactor-2.jpg", // Ejemplo de imagen adicional
      price: 79.99,
      brand: "HeatWave",
      categoryId: 4,
    },
    {
      id: 20,
      name: "Deshumidificador",
      description:
        "Deshumidificador compacto para mejorar la calidad del aire.",
      image1: "https://example.com/deshumidificador.jpg",
      image2: "https://example.com/deshumidificador-2.jpg", // Ejemplo de imagen adicional
      price: 149.99,
      brand: "DryAir",
      categoryId: 4,
    },
    {
      id: 21,
      name: "Ventilador de Pie",
      description:
        "Ventilador oscilante de pie para una mejor circulación del aire.",
      image1: "https://example.com/ventilador-pie.jpg",
      image2: "https://example.com/ventilador-pie-2.jpg", // Ejemplo de imagen adicional
      price: 39.99,
      brand: "Breeze",
      categoryId: 4,
    },
    {
      id: 22,
      name: "Purificador de Aire",
      description: "Purificador de aire con tecnología de filtración avanzada.",
      image1: "https://example.com/purificador.jpg",
      image2: "https://example.com/purificador-2.jpg", // Ejemplo de imagen adicional
      price: 199.99,
      brand: "FreshAir",
      categoryId: 4,
    },
    {
      id: 23,
      name: "Termómetro Digital",
      description:
        "Termómetro digital preciso para controlar la temperatura ambiente.",
      image1: "https://example.com/termometro-digital.jpg",
      image2: "https://example.com/termometro-digital-2.jpg", // Ejemplo de imagen adicional
      price: 9.99,
      brand: "TempTech",
      categoryId: 4,
    },
    {
      id: 24,
      name: "Manómetro Digital",
      description: "Manómetro digital para medir la presión de refrigerantes.",
      image1:
        "https://images-na.ssl-images-amazon.com/images/I/71m3njCQ2QL._AC_UL232_SR232,232_.jpg",
      image2: "https://m.media-amazon.com/images/I/71YfQuJDoXL._AC_SX569_.jpg", // Ejemplo de imagen adicional
      price: 39.99,
      brand: "PressureTech",
      categoryId: 4,
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
