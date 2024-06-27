import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = React.ComponentProps<typeof Card>;

export function CardAfter({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader className="text-right">
        <CardTitle>ما بعد القبول</CardTitle>
        <CardDescription>هنا أسئلة ما بعد القبول في الجامعة</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">انتقل</Button>
      </CardFooter>
    </Card>
  );
}
