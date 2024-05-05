import { getI18n } from "#/lang/server";
import type { ReactElement } from "react";

export default async function Home(): Promise<ReactElement> {
  const t = await getI18n();

  return (
    <main className="h-screen flex items-center justify-center bg-black text-white">
      <p>{t("welcome", { name: "Camille" })}</p>
    </main>
  );
}