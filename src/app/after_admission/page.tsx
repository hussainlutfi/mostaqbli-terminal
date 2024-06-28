import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { QAAfter } from "../../../data/after";
import { QuestionAnswer } from "../../../interfaces/question";

export default function AfterAdmission() {
  return (
    <div className="flex-col justify-center items-center min-h-screen min-w-full bg-zinc-950 p-10">
      <div dir="rtl">
        <h2
          className="text-3xl md:text-5xl flex items-center max-sm:justify-center gap-3 font-extrabold
                md:leading-normal leading-loose tracking-tight mb-4"
          data-aos="fade-up"
        >
          أسئلة ما
          <span className="bg-gradient-to-b from-[#bfa260]/60 to-[#CFAA54] text-transparent bg-clip-text">
            بعد
          </span>
          القبول في الجامعة
        </h2>

        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {QAAfter.map(({ question, answer, value }: QuestionAnswer) => (
            <AccordionItem
              className="hover:bg-[#f1f1f1] dark:hover:bg-[#262525]"
              key={value}
              value={value}
              data-aos="fade-up"
            >
              <AccordionTrigger className="text-right max-sm:text-sm text-xl">
                {question}
              </AccordionTrigger>

              <AccordionContent className="md:text-lg text-sm text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
