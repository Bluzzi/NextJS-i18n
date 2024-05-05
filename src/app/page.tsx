import type { ReactElement } from "react";
import { getI18n } from "#/i18n/server";

export default async function Home(): Promise<ReactElement> {
  const t = await getI18n();

  return (
    <main className="h-screen flex items-center justify-center bg-black text-white">
      <p>{t("welcome", { name: "Camille" })}</p>
    </main>
  );
}