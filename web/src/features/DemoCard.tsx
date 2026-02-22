import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useNuiEvent } from "@/hooks/useNuiEvent";
import { useLocales } from "@/providers/LocaleProvider";
import { fetchNui } from "@/utils/fetchNui";
import { useState } from "react";

const DemoCard: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { locale } = useLocales();

  useNuiEvent("demo-card:toggle", () => {
    setVisible((prev) => !prev);
  });

  const closeCard = () => {
    setVisible(false);
    fetchNui("demo-card:close");
  };

  return (
    <Card
      className={`xax-w-200 m-auto bg-card/70 ${visible ? "block" : "hidden"}`}
    >
      <CardHeader>
        <h1 className="text-2xl text-center font-bold">
          {locale.ui.demo.title}
        </h1>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {locale.ui.demo.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-center">
            {paragraph}
          </p>
        ))}
      </CardContent>
      <CardFooter className="m-auto">
        <Button onClick={closeCard}>{locale.ui.demo.button}</Button>
      </CardFooter>
    </Card>
  );
};

export default DemoCard;
