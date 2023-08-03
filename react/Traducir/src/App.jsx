import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  function handleLanguage() {
    i18n.language === "es"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("es");
  }

  function Change (language)
  {
    i18n.Change(language)
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p
          dangerouslySetInnerHTML={{ __html: t("title", { name: "Nacho" }) }}
        />
        <Trans
          components={[
            <span key={0} className="badge bg-primary"></span>,
            <span key={1} className="badge bg-success"></span>,
          ]}
        >
          <p>
            {t("message", {
              somethingInsideBadge: t("badge", { name: "Nacho" }),
              somethingElseInsideBadge: t("badge2"),
            })}
          </p>
        </Trans>
      </div>
      <p>Idioma actual: {i18n.language}</p>
      <button onClick={handleLanguage}>Cambiar idioma</button>
    </>
  );
}

export default App;
