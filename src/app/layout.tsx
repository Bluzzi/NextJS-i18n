import type { PropsWithChildren, ReactElement } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { I18nProviderClient } from "#/i18n/client";
import { cookies, headers } from "next/headers";
import "#/styles/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "i18n Example",
  description: "A cookie-based internationalization example with NextJS, suitable for apps that don't need SSG or SEO optimization."
};

const Layout = ({ children }: PropsWithChildren): ReactElement => {
  const cookieLanguage = cookies().get("lang")?.value;
  const headerLanguages = headers().get("Accept-Language");

  const lang = cookieLanguage || headerLanguages?.substring(0, 2) || "en";

  return (
    <html>
      <body className={inter.className}>
        <I18nProviderClient locale={lang}>
          {children}
        </I18nProviderClient>
      </body>
    </html>
  );
};

export default Layout;