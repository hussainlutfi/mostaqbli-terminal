import Image from "next/image";
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
import { CardBefore } from "@/components/card_before";
import { CardAfter } from "@/components/card_after";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;
export default function Home() {
  return (
    <div className=" min-h-screen min-w-full bg-gradient-to-br from-[#ff472B]  to-[#061f40] content-center">
      <div className="flex justify-center ">
        <CardBefore className="m-3" />
        <CardAfter className="m-3" />
      </div>
    </div>
  );
}
