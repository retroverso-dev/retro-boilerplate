import { type Context, createContext, useContext, useState } from "react";
import { useNuiEvent } from "@/hooks/useNuiEvent";
import { debugData } from "@/utils/debugData";

debugData<Locale>([
  {
    action: "setLocale",
    data: {
      language: "English",
      ui: {
        demo: {
          title: "UI Demo",
          paragraphs: [
            "This is a sample paragraph to demonstrate user interface internationalization. You can replace this text with any content you like.",
            "Internationalization allows your application to be accessible to users of different languages and regions, improving the user experience and expanding the reach of your product.",
          ],
          button: "Close",
        },
      },
    },
  },
]);

interface Locale {
  language: string;
  ui: {
    demo: {
      title: string;
      paragraphs: string[];
      button: string;
    };
  };
}

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const LocaleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>({
    language: "",
    ui: {
      demo: {
        title: "",
        paragraphs: [],
        button: "",
      },
    },
  });

  useNuiEvent("setLocale", async (data: Locale) => setLocale(data));
  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;

export const useLocales = () =>
  useContext<LocaleContextValue>(LocaleContext as Context<LocaleContextValue>);
