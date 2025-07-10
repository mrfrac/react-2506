import type { Menu } from './menu.ts';
import type { Review } from './review.ts';

export type Restaurant = {
  id: string;
  name: string;
  menu: Menu[];
  reviews: Review[];
};
