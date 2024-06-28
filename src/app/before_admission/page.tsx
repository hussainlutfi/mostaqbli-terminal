import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: 'هل لازم اسجل في "مُستثمر بلس" عشان اشوف الفرص؟',
    answer:
      "لا، ما يحتاج! تقدر تلقى نظرة على كل الفرص بدون تسجيل. بس ترى هاا، إذا بغيت تحفظ فرص معينة أو تضيف استثماراتك، يبغالك تسجل معنا.",
    value: "faq-1",
  },
  {
    question: "كيف أقدر أضيف استثماري على الموقع؟",
    answer:
      "موضوعك سهل! بس تسجل وتعبي تفاصيل استثمارك وخلاص انبسط، استثمارك صار متاح لكل الناس يشوفونه.",
    value: "faq-2",
  },
];

export default function BeforeAdmission() {
  return (
    <div className="flex-col justify-center items-center min-h-screen min-w-full bg-zinc-950 p-10">
      <div dir="rtl">
        <h2
          className="text-3xl md:text-5xl flex items-center max-sm:justify-center gap-3 font-extrabold
                md:leading-normal leading-loose tracking-tight mb-4"
          data-aos="fade-up"
        >
          الأسئلة
          <span className="bg-gradient-to-b from-[#bfa260]/60 to-[#CFAA54] text-transparent bg-clip-text">
            الشائعة
          </span>
        </h2>

        <Accordion type="single" collapsible className="w-full AccordionRoot">
          {FAQList.map(({ question, answer, value }: FAQProps) => (
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
