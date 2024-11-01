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
