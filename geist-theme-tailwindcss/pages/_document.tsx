import Document, { Html, Head, Main, NextScript, Script } from 'next/document';
//import { useTranslation } from 'components/useTranslation';

class MyDocument extends Document {
  render(): React.ReactElement {
//    const { t } = useTranslation(['ns1', 'ns2']);
    return (
      <Html>
        <Head />
        <body className="bg-black bg-black-500 text-white">
          <Main class="min-h-full" />
          <NextScript />
          {/*<Script
            src="https://cdn.jsdelivr.net/npm/chart.js"
            strategy="beforeInteractive"
          ></Script>*/}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
