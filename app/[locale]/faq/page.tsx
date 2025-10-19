import { getFaqs } from "@/lib/fetches/general.fetches";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

async function FAQPage() {
  const faqs = await getFaqs({ pageNumber: 1, pageSize: 999, keyword: "", orderBy: [""] });

  return (
    <>
      <div className="container mt-6">
        <div className="h-96 glassy-card rounded-2xl"></div>
      </div>

      <div className="container mt-40">
        {/* <h1 className="heading">خرید ویرالرن</h1> */}
        <Accordion
          type="single"
          collapsible
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3"
          defaultValue="item-1">
          {faqs.result?.data.map((item => (
            <AccordionItem
              key={item.id}
              className="w-full"
              value={`item-${item.id}`}>
              <AccordionTrigger className="w-full">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {item.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          )))}
        </Accordion>
      </div>
    </>
  );
}

export default FAQPage;
