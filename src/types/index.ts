export enum ModeValue {
  TEXT_TO_IMAGE = "text-to-image",
  TEXT_TO_SPEECH = "text-to-speech",
}

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  origin: string;
  og: string;
  keywords: string[];
  creator: {
    name: string;
    url: string;
  };
  contributors: Array<{
    name: string;
    github: string;
    url: string;
  }>;
  socials: {
    github: string;
  };
};

export type AIResponse = {
  mode: ModeValue;
  text?: string;
  data: string | undefined;
  delta: number;
  error?: string;
}