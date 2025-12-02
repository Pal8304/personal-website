import Script from "next/script";

export const GoogleAnalyticsTracking = () => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HBF0JY5Q2Q" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HBF0JY5Q2Q');
        `}
      </Script>
    </>
 );
}
