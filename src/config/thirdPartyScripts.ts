export type ThirdPartyScriptPlacement = 'head' | 'body';

export type ThirdPartyScriptSnippet = {
  id: string;
  html: string;
  placement?: ThirdPartyScriptPlacement;
};

const adsSnippets: ThirdPartyScriptSnippet[] = [
  // Add ad network snippets here (AdSense, Media.net, etc.)
  {
    id: 'adsense-google',
    placement: 'head',
    html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7512590957470103" crossorigin="anonymous"></script>`
  }
];

const analyticsSnippets: ThirdPartyScriptSnippet[] = [
  // Add analytics snippets here (GA4, Ahrefs, Plausible, etc.)
  {
    id: 'analytics-ga4',
    placement: 'head',
    html: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-YYKPVE3M28"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YYKPVE3M28');
</script>`
  },
  {
    id: 'analytics-ahrefs',
    placement: 'head',
    html: `<script src="https://analytics.ahrefs.com/analytics.js" data-key="k5rG4u7vY/lNAst6qXL1Yw" async></script>`
  }
];

export const thirdPartyScriptsConfig: {
  enabledInDev: boolean;
  snippets: ThirdPartyScriptSnippet[];
} = {
  // Keep false so analytics scripts only run in production.
  enabledInDev: false,
  snippets: [...adsSnippets, ...analyticsSnippets]
};
