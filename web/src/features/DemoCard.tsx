import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

  if (!locale) return null;

  return (
    <Card
      className={`max-w-200 m-auto bg-card-70 ${visible ? "block" : "hidden"}`}
    >
      <CardHeader className="pb-4">
        <h1 className="text-2xl text-center font-bold">
          {locale.ui.demo.title}
        </h1>
      </CardHeader>
      <Separator />
      <CardContent className="flex flex-col gap-4 py-8">
        {locale.ui.demo.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-center">
            {paragraph}
          </p>
        ))}
      </CardContent>
      <Separator />
      <CardFooter className="m-auto pt-4">
        <Button onClick={closeCard} className="m-auto">
          {locale.ui.demo.button}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DemoCard;
