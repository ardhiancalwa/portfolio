import type { RailSocialLink, SocialLink, SocialPlatform } from "@/types";

const SOCIAL_PLATFORM_ORDER: SocialPlatform[] = ["GitHub", "LinkedIn", "Instagram", "Email"];

const RAIL_SOCIAL_TOKENS: Record<SocialPlatform, { label: string; external: boolean }> = {
  GitHub: { label: "Git", external: true },
  LinkedIn: { label: "In", external: true },
  Instagram: { label: "Ig", external: true },
  Email: { label: "Mail", external: false },
};

export const getOrderedSocialLinks = (socials: SocialLink[]): SocialLink[] =>
  SOCIAL_PLATFORM_ORDER.map((platform) => socials.find((social) => social.platform === platform)).filter(
    (social): social is SocialLink => Boolean(social),
  );

export const getRailSocialLinks = (socials: SocialLink[]): RailSocialLink[] =>
  getOrderedSocialLinks(socials).map((social) => {
    const token = RAIL_SOCIAL_TOKENS[social.platform];
    return {
      label: token.label,
      ariaLabel: social.platform,
      url: social.url,
      external: token.external,
    };
  });
