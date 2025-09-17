export interface SEOAnalysis {
  url: string;
  title: string;
  metaDescription: string;
  metaKeywords: string;
  canonicalUrl: string;
  openGraph: OpenGraphData;
  twitterCard: TwitterCardData;
  structuredData: StructuredDataAnalysis;
  headings: {
    h1: string[];
    h2: string[];
    h3: string[];
    h4: string[];
    h5: string[];
    h6: string[];
  };
  images: {
    total: number;
    withAlt: number;
    withoutAlt: number;
    missingAlt: string[];
    oversized: string[];
    totalSize: number;
  };
  links: {
    internal: number;
    external: number;
    broken: number;
    nofollow: number;
    dofollow: number;
  };
  performance: {
    loadTime: number;
    pageSize: number;
    requests: number;
  };
  mobile: {
    responsive: boolean;
    viewportMeta: boolean;
    touchFriendly: boolean;
  };
  security: {
    https: boolean;
    mixedContent: boolean;
  };
  accessibility: {
    altImages: number;
    headingStructure: boolean;
    colorContrast: boolean;
  };
  keywords: {
    density: { [key: string]: number };
    suggestions: string[];
    primary: string[];
    secondary: string[];
  };
  content: {
    wordCount: number;
    readabilityScore: number;
    duplicateContent: boolean;
    languageDetected: string;
  };
  technicalIssues: {
    missingTitle: boolean;
    missingMetaDescription: boolean;
    duplicateH1: boolean;
    imagesMissingAlt: boolean;
    titleTooLong: boolean;
    metaDescriptionTooLong: boolean;
    missingCanonical: boolean;
    noIndex: boolean;
    noFollow: boolean;
  };
  socialMedia: {
    hasOpenGraph: boolean;
    hasTwitterCard: boolean;
    hasFacebookPixel: boolean;
    hasGoogleAnalytics: boolean;
  };
  score: number;
  scores: {
    technical: number;
    content: number;
    performance: number;
    accessibility: number;
    social: number;
  };
  recommendations: string[];
  competitorAnalysis?: CompetitorData[];
}

export interface OpenGraphData {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
  siteName: string;
}

export interface TwitterCardData {
  card: string;
  title: string;
  description: string;
  image: string;
  site: string;
}

export interface StructuredDataAnalysis {
  hasSchema: boolean;
  types: string[];
  errors: string[];
}

export interface CompetitorData {
  url: string;
  score: number;
  title: string;
  metaDescription: string;
}

export interface KeywordAnalysis {
  keyword: string;
  density: number;
  count: number;
  recommended: boolean;
  competition: 'low' | 'medium' | 'high';
  searchVolume: number;
}

export interface SEOScore {
  overall: number;
  technical: number;
  content: number;
  keywords: number;
  performance: number;
  accessibility: number;
  social: number;
}

export interface SEOHistory {
  date: string;
  url: string;
  score: number;
  issues: string[];
}