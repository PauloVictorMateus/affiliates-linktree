export type PromoLink = {
  id: string;
  title: string;
  description?: string;
  url: string;
  highlight?: boolean;
};

export const profile = {
  name: "Nossos Grupos De Ofertas",
  bio: "Entre nos grupos do WhatsApp e receba as melhores ofertas em primeira mão.",
  avatarUrl: "",
};

export const promoLinks: PromoLink[] = [
  {
    id: "geral",
    title: "Coisa de Varão",
    description: "Ofertas variadas todos os dias",
    url: "https://chat.whatsapp.com/SEU_LINK_AQUI",
    highlight: true,
  },
  {
    id: "eletronicos",
    title: "Eletrônicos",
    description: "Celulares, notebooks e acessórios",
    url: "https://chat.whatsapp.com/SEU_LINK_AQUI",
  },
  {
    id: "moda",
    title: "Moda e Beleza",
    description: "Roupas, calçados e cosméticos",
    url: "https://chat.whatsapp.com/SEU_LINK_AQUI",
  },
  {
    id: "casa",
    title: "Casa e Utilidades",
    description: "Mercado, decoração e mais",
    url: "https://chat.whatsapp.com/SEU_LINK_AQUI",
  },
];
