import { Hero } from "@/components/sections/hero";
import { PickYourProject } from "@/components/sections/pick-your-project";
import { HottestProducts } from "@/components/sections/hottest-products";
import { RequestSamples } from "@/components/sections/request-samples";
import { BuyingExperience } from "@/components/sections/buying-experience";
import { WhyChoose } from "@/components/sections/why-choose";
import { WhatYoureGetting } from "@/components/sections/what-youre-getting";
import { Logistics } from "@/components/sections/logistics";
import { ContactForm } from "@/components/sections/contact-form";
import { ProductsInAction } from "@/components/sections/products-in-action";
import { AppDownload } from "@/components/sections/app-download";

export default function Home() {
  return (
    <div>
      <Hero />
      <PickYourProject />
      <HottestProducts />
      <RequestSamples />
      <BuyingExperience />
      <WhyChoose />
      <WhatYoureGetting />
      <Logistics />
      <ContactForm />
      <ProductsInAction />
      <AppDownload />
    </div>
  );
}