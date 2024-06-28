
import { CardBefore } from "@/components/card_before";
import { CardAfter } from "@/components/card_after";

export default function Home() {
  return (
    <div className=" min-h-screen min-w-full bg-gradient-to-br from-[#ff472B]  to-[#061f40] content-center">
      <div className="flex justify-around max-md:flex-col">
        <CardBefore />
        <CardAfter />
      </div>
    </div>
  );
}
