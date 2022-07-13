import { PrismicProvider } from "@prismicio/react";
import Link from "next/link";

import { linkResolver } from "../../prismic";
import { Layout } from "../components/Layout";

import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PrismicProvider>
  );
}
