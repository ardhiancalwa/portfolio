export interface SeoMeta {
  title: string;
  description: string;
}

export const defaultSeo: SeoMeta = {
  title: "Portfolio",
  description: "Personal portfolio website.",
};

export const createTitle = (pageTitle: string): string => `${pageTitle} | Portfolio`;
