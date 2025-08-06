import { Helmet, HelmetProvider } from "react-helmet-async";

export default function MetaComponent({ meta }) {
  return (
    <HelmetProvider>
        <Helmet>
            <title>{meta?.title}</title>
            <meta name="description" content={meta?.description}/>
            <meta name="keywords" content={meta?.keywords}/>
            <meta property="og:title" content={meta?.title}/>
            <meta property="og:description" content={meta?.description}/>
            <meta property="og:image" content="https://www.empasy.com/favicon.png"/>
        </Helmet>
    </HelmetProvider>
  );
}
