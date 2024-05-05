import type { ReactElement } from "react";
import { getI18n } from "#/i18n/server";

const Home = async(): Promise<ReactElement> => {
  const t = await getI18n();

  return (
    <main className="h-screen flex items-center justify-center bg-black text-white">
      <p>{t("welcome", { name: "John" })}</p>
    </main>
  );
};

export default Home;