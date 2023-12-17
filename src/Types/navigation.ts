type FeaturedItem = {
  name  : string;
  href  : string;
  imageSrc: string;
  imageAlt: string;
}

type Category = {
  name    : string;
  featured: FeaturedItem[];
}

type Page = {
  name  : string;
  href  : string;
}

export type Navigation = {
  categories: Category[];
  pages     : Page[];
}