import {
  FaRegCompass,
  FaRegSnowflake,
  FaRegStar,
  FaWifi,
} from "react-icons/fa6";
import { HiOutlineBuildingOffice2, HiOutlineSparkles, HiOutlineTruck } from "react-icons/hi2";
import type { Listing, TrendSection } from "@/types/listing";

export const listings: Listing[] = [
  {
    slug: "palermo-loft-luminoso",
    title: "Loft luminoso en Palermo Soho",
    city: "Buenos Aires",
    country: "Argentina",
    location: "Palermo Soho, Buenos Aires, Argentina",
    tag: "Favorito entre huéspedes",
    price: "$U 3,252",
    rating: 4.91,
    reviews: 327,
    capacity: 4,
    beds: 2,
    baths: 1,
    availability: "3-5 de jul",
    summary: "Espacio cómodo con balcón, luz natural y acceso rápido a cafés, parques y vida nocturna.",
    description:
      "Este loft combina una planta abierta muy funcional con zonas claras para descanso, trabajo y comidas. La propuesta está pensada para parejas o grupos pequeños que quieran recorrer Palermo caminando y volver a un espacio cálido, silencioso y bien equipado al final del día.",
    host: "Ana Clara",
    hostStatus: "Superanfitriona · 7 meses anfitrionando",
    amenities: ["Wifi rápido", "Check-in autónomo", "Cocina equipada", "Balcón privado", "Aire acondicionado", "Lavadora"],
    benefits: [
      "Check-in excepcional con instrucciones claras y llegada autónoma.",
      "Ubicación ideal para caminar a restaurantes, plazas y galerías.",
      "Diseño acogedor con luz natural y zonas cómodas para descansar.",
    ],
    coordinates: { x: 31, y: 38 },
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "recoleta-suite-diseno",
    title: "Suite de diseño en Recoleta",
    city: "Buenos Aires",
    country: "Argentina",
    location: "Recoleta, Buenos Aires, Argentina",
    tag: "Nuevo esta semana",
    price: "$U 4,297",
    rating: 4.87,
    reviews: 142,
    capacity: 2,
    beds: 1,
    baths: 1,
    availability: "10-14 de jul",
    summary: "Detalles premium, cocina integrada y una base perfecta para viajes cortos de trabajo o descanso.",
    description:
      "Una suite contemporánea con acabados sobrios, escritorio compacto y un living integrado que se adapta tanto a estadías laborales como escapadas de fin de semana. Está ubicada cerca de museos, avenidas principales y zonas gastronómicas consolidadas.",
    host: "Micaela",
    hostStatus: "Superanfitriona · 2 años anfitrionando",
    amenities: ["Smart TV", "Cafetera", "Ropa de cama premium", "Escritorio", "Portero 24 h", "Cocina completa"],
    benefits: [
      "Ambiente silencioso, ideal para trabajar o descansar.",
      "Acabados y textiles de perfil boutique.",
      "Muy buena conectividad con transporte y zonas turísticas.",
    ],
    coordinates: { x: 58, y: 48 },
    cover:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "apartamento-piscina-palermo",
    title: "Apartamento con piscina en Palermo",
    city: "Buenos Aires",
    country: "Argentina",
    location: "Palermo Hollywood, Buenos Aires, Argentina",
    tag: "Popular en verano",
    price: "$U 3,646",
    rating: 4.95,
    reviews: 281,
    capacity: 3,
    beds: 2,
    baths: 1,
    availability: "24-28 de jul",
    summary: "Edificio con amenities y vista despejada, ideal para viajes en pareja o con un amigo.",
    description:
      "Apartamento funcional con acceso a piscina y zonas comunes muy cuidadas. Su distribución prioriza el confort en estadías cortas y la cercanía con bares, productoras y restaurantes del corredor de Palermo Hollywood.",
    host: "Federico",
    hostStatus: "Anfitrión destacado · 14 meses anfitrionando",
    amenities: ["Piscina", "Laundry", "Recepción", "Aire frío/calor", "Wifi estable", "Terraza"],
    benefits: [
      "Acceso directo a piscina y solárium del edificio.",
      "Buena relación entre precio, ubicación y amenities.",
      "Entorno activo con propuestas gastronómicas variadas.",
    ],
    coordinates: { x: 69, y: 72 },
    cover:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "casa-artistica-san-telmo",
    title: "Casa artística en San Telmo",
    city: "Buenos Aires",
    country: "Argentina",
    location: "San Telmo, Buenos Aires, Argentina",
    tag: "Favorito por su estilo",
    price: "$U 3,880",
    rating: 4.82,
    reviews: 205,
    capacity: 5,
    beds: 3,
    baths: 2,
    availability: "6-9 de jul",
    summary: "Ambientes amplios, piezas de autor y una terraza que acompaña tardes largas en el casco histórico.",
    description:
      "La propiedad ofrece una experiencia más expresiva y barrial, con arte, libros y una terraza que funciona como extensión del living. Está pensada para grupos pequeños que quieran una base con personalidad en una zona muy caminable.",
    host: "Tomás",
    hostStatus: "Superanfitrión · 3 años anfitrionando",
    amenities: ["Terraza", "Parrilla", "Cocina completa", "2 baños", "Patio", "Zona de trabajo"],
    benefits: [
      "Carácter visual único y espacios amplios para convivir.",
      "Ubicación con cafés, ferias y arquitectura histórica.",
      "Muy buena opción para grupos de amigos o familia chica.",
    ],
    coordinates: { x: 41, y: 79 },
    cover:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "estudio-centro-panorama",
    title: "Estudio panorama en Microcentro",
    city: "Buenos Aires",
    country: "Argentina",
    location: "Microcentro, Buenos Aires, Argentina",
    tag: "Ideal para city break",
    price: "$U 3,272",
    rating: 4.78,
    reviews: 88,
    capacity: 2,
    beds: 1,
    baths: 1,
    availability: "18-21 de jul",
    summary: "Una base compacta y eficiente para moverse por el centro con vista abierta y llegada rápida.",
    description:
      "El estudio resuelve muy bien una estadía corta: buena cama, kitchenette completa y una ubicación que deja a minutos el subte, avenidas y puntos de interés del centro porteño. Es una opción práctica para quien prioriza movilidad y precio.",
    host: "Lucía",
    hostStatus: "Anfitriona verificada · 10 meses anfitrionando",
    amenities: ["Self check-in", "Ascensor", "Vista abierta", "Kitchenette", "Aire acondicionado", "Wifi"],
    benefits: [
      "Excelente opción para una escapada corta.",
      "Llegada simple desde transporte público.",
      "Distribución compacta y eficiente.",
    ],
    coordinates: { x: 28, y: 58 },
    cover:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    slug: "duplex-rio-nunez",
    title: "Dúplex sereno en Núñez",
    city: "Buenos Aires",
    country: "Argentina",
    location: "Núñez, Buenos Aires, Argentina",
    tag: "Perfecto para estadías largas",
    price: "$U 5,142",
    rating: 4.98,
    reviews: 196,
    capacity: 6,
    beds: 4,
    baths: 2,
    availability: "1-8 de ago",
    summary: "Dos niveles, espacios amplios y un ritmo más calmo para familias o trabajo remoto.",
    description:
      "Este dúplex está orientado a viajes con más permanencia: ofrece mejor separación entre áreas privadas y comunes, una cocina grande y un barrio residencial con servicios a distancia caminable. Encaja bien para familias o equipos pequeños en remoto.",
    host: "Santiago",
    hostStatus: "Superanfitrión · 5 años anfitrionando",
    amenities: ["Cocina grande", "2 baños", "Patio", "Escritorio doble", "Estacionamiento", "Lavasecarropas"],
    benefits: [
      "Ideal para estadías extensas y trabajo remoto.",
      "Distribución cómoda para varias personas.",
      "Barrio tranquilo con acceso rápido a avenidas principales.",
    ],
    coordinates: { x: 80, y: 34 },
    cover:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80",
    ],
  },
];

export const trendSections: TrendSection[] = [
  {
    slug: "populares",
    title: "Alojamientos populares en Buenos Aires",
    description: "Una selección de espacios con buenas reseñas, disponibilidad próxima y perfiles de viaje distintos.",
    listingSlugs: ["palermo-loft-luminoso", "apartamento-piscina-palermo", "estudio-centro-panorama"],
  },
  {
    slug: "novedades",
    title: "Novedades para tu próximo viaje",
    description: "Opciones de diseño más reciente y estancias pensadas para escapadas con foco en comodidad.",
    listingSlugs: ["recoleta-suite-diseno", "casa-artistica-san-telmo", "duplex-rio-nunez"],
  },
];

export const experienceHighlights = [
  {
    title: "Recorridos urbanos curados",
    description: "Planes de medio día con anfitriones locales para conocer barrios, gastronomía y cultura visual.",
    icon: FaRegCompass,
  },
  {
    title: "Eventos con acceso rápido",
    description: "Entradas y experiencias con reserva simple para completar la estadía sin salir de la plataforma.",
    icon: HiOutlineSparkles,
  },
  {
    title: "Recomendaciones con rating real",
    description: "Cada experiencia se muestra con valoraciones visibles para comparar mejor antes de decidir.",
    icon: FaRegStar,
  },
];

export const serviceHighlights = [
  {
    title: "Conectividad garantizada",
    description: "Filtra y compara espacios con wifi estable, escritorio y condiciones útiles para trabajo remoto.",
    icon: FaWifi,
  },
  {
    title: "Amenities visibles desde el inicio",
    description: "Aire acondicionado, estacionamiento, cocina y otras ventajas quedan claras en cada tarjeta.",
    icon: FaRegSnowflake,
  },
  {
    title: "Logística de viaje simplificada",
    description: "Desde check-in autónomo hasta asistencia del anfitrión, todo se resume en bloques cortos y directos.",
    icon: HiOutlineTruck,
  },
  {
    title: "Propiedades mejor organizadas",
    description: "La información crítica de cada espacio se presenta primero para reducir fricción al comparar.",
    icon: HiOutlineBuildingOffice2,
  },
];

export function getListingBySlug(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}
