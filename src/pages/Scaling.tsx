import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import FiveLevers from "@/components/FiveLevers";
import Process from "@/components/Process";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Scaling = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Масштабирование продуктов — Метод пяти рычагов | FiveLevers</title>
        <meta name="description" content="Запускаем и масштабируем продукты за 12 недель: диагностика, проектирование, запуск MVP, масштабирование. Методология пяти рычагов роста — продукт, каналы, данные, экономика, команда." />
        <meta name="keywords" content="масштабирование продукта, пять рычагов роста, рост метрик, продуктовый консалтинг, 12 недель, MVP, A/B тесты" />
        <link rel="canonical" href="https://5levers.pro/scaling" />
      </Helmet>
      <Header />
      <Hero />
      <Problem />
      <FiveLevers />
      <Process />
      <Results />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Scaling;
