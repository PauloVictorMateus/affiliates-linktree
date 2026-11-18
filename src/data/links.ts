export type PromoLink = {
  id: string;
  title: string;
  description?: string;
  url: string;
  image?: string;
  highlight?: boolean;
};

export const profile = {
  name: "Promo Top",
  bio: "As melhores promoções em um só lugar!",
  avatarUrl: "/promo-top.jpg",
};

export const promoLinks: PromoLink[] = [
  {
    id: "promo-top",
    title: "PROMO TOP | 01",
    description: "Ofertas em destaque",
    url: "https://chat.whatsapp.com/FTI1hCWj5V9ATpj8OqIuJ9",
    image: "/promo-top.jpg",
    highlight: true,
  },
  {
    id: "coisa-de-vo",
    title: "Coisa de Vó | 01",
    url: "https://chat.whatsapp.com/EZd3hxhMI7V7pxno0JVdCk",
    image: "/coisa-de-vo.png",
  },
  {
    id: "coisa-de-varoa",
    title: "Coisa de Varoa | 01",
    url: "https://chat.whatsapp.com/Hz1GNn7uEBX5FktuKFUIh3",
    image: "/coisa-de-varoa.png",
  },
  {
    id: "coisa-de-vo-masc",
    title: "Coisa de Vô | 01",
    url: "https://chat.whatsapp.com/GbElN4Dgf0h6sq0EUK8KKe",
    image: "/coisa-de-vo-masc.png",
  },
  {
    id: "coisa-de-varao",
    title: "Coisa de Varão | 01",
    url: "https://chat.whatsapp.com/JIU9ow5cTfX53Ai2wfzURd",
    image: "/coisa-de-varao.png",
  },
];
