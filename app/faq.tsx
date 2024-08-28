import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const FAQS = () => {
    return ( 
        <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-3xl md:text-7xl font-bold text-black">
              Have questions ?
            </div>
            <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What services does Preetify Go Global offer?</AccordionTrigger>
      <AccordionContent>
      Preetify Go Global provides comprehensive PR services, including public relations strategy, social media management, event management, reputation management, and content creation.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How can Preetify Go Global help my brand grow</AccordionTrigger>
      <AccordionContent>
      We develop tailored PR strategies that resonate with your target audience, enhance your brand's visibility, and build lasting relationships
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
      What makes Preetify Go Global different from other PR agencies?
      </AccordionTrigger>
      <AccordionContent>
      Our dynamic and strategic approach sets us apart. We focus on understanding your brand's unique needs and crafting personalized PR strategies that deliver measurable results
        
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
      Do you offer customized PR packages?
        </AccordionTrigger>
      <AccordionContent>
      Yes, we offer customized PR packages tailored to your specific needs and budget. Whether you're a startup or an established brand, we work with you to create a plan that aligns with your goals and drives success.


      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div> );
}
 
export default FAQS;