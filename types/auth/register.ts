export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  deviceName: string | null;
  tabibitoName?: string;
  companyName?: string;
  companyIndustry?: string;
  localeName?: string;
  localeType?: string;
  localeAddress?: string;
  localeZipcode?: string;
  localeCountry?: string;
  localeState?: string;
  localeCity?: string;
  localePhone?: string;
  localeImageUrl1?: string;
  localeImageUrl2?: string;
  localeWebsiteUrl?: string;
  localeDescription?: string;
}
