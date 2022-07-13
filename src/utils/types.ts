export interface DropType {
  id: number;
  bg: string;
  title: string;
  subtitle: string;
  description: string;
  link: string;
}

export interface nftStepType {
  stepNumber: number;
  icon: string;
  stepTitle: string;
  desc: string;
}

export interface Slide {
  id: number;
  title: string;
  mainDesc: string;
  shortDesc: string;
  register?: boolean;
  preview?: boolean;
  buy: boolean;
  link: string;
}
export interface NFTType {
  ASSET_TYPES: string;
  DESCRIPTION: string;
  DTS_CREATED: string;
  EDITION_ID: string;
  EDITION_NUM: number;
  EDITION_OF: number;
  FILES: string[];
  FILES_PREVIEW: string[];
  PREVIEW_IMAGE: string;
  PREVIEW_VIDEO: string;
  SUBTITLE: string;
  TITLE: string;
  TOKEN_ID: string;
  seller_email: string;
  price: number;
  expire_date: number;
}
export interface videoItemType {
  id: string;
  original: string;
  video: string;
  thumbnail: string;
  alt: string;
  title: string,
  description: string;
}

export enum marketType {
  karenOpen = "Karen Open Edition",
  karenLimited = "Karen Limited Edition",
  buddha = "Super Buddha Open Edition",
  tory = "Tory Lanez Resale Market",
}

export enum payment {
  crypto = "crypto",
  cc = "creditCard",
  wireTransfer = "wireTransfer",
}
