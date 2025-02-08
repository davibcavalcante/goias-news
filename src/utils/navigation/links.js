import { Coins, Goal, Vote, Zap } from "lucide-react";

export const getNavLinks = () => {
  return [
    { label: 'Últimas notícias', Icon: Zap, path: '/' },
    { label: 'Esportes', Icon: Goal, path: '/noticias/esportes' },
    { label: 'Política', Icon: Vote, path: '/noticias/politica' },
    { label: 'Economia', Icon: Coins, path: '/noticias/economia' },
  ];
};
