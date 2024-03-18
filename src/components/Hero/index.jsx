import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import MainButton from "../Atoms/button";
import {Link} from "react-router-dom";

export default function Hero() {
  const priceRef = useRef(null);
  const isInView = useInView(priceRef);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.2,
      onUpdate(value) {
        priceRef.current.textContent = `${value.toFixed()}`;
      },
    });

    return () => controls.stop();
  }, [isInView]);

  const containerImage = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.1 },
    },
    hidden: { opacity: 0, x: 200 },
  };

  const containerContent = {
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
    hidden: { x: -100, opacity: 0 }
  };

  const chairContainer = {
    visible: {
      scale: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8 },
    },
    hidden: { scale: 0.65, y: -70, x: -35 },
  };

  const chartContainer = {
    visible: {
      x: 0,
      transition: { duration: 0.5 },
    },
    hidden: {
      x: -100,
    },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="flex flex-col gap-[44px] p-5 py-6  min-h-screen h-auto justify-center md:p-0 lg:px-10 lg:pt-10 lg:pb-20 lg:min-h-fit lg:items-center lg:flex-row lg:justify-between lg:gap-5 overflow-hidden">
        <motion.div initial="hidden" animate="visible" variants={containerContent} className="flex flex-col items-center lg:items-start gap-8 lg:w-full lg:gap-[34px]">
          <section className="flex flex-col gap-5 sm:items-center text-center lg:text-left lg:gap-6 lg:items-start">
            <h1 className="text-[42px] leading-[52px] sm:w-4/5 md:text-5xl md:w-4/5 font-bold font-head text-primary-100 lg:text-6xl lg:leading-[70px]">
              Получите ВНЖ в одну из стран Европы от 4 недель
            </h1>
            <p className="text-lg font-body text-black-300 sm:w-4/5">
            Хотите жить и работать в Европе? Мы предлагаем вам быстрое и надежное получение ВНЖ в одной из прекрасных стран Европы всего за 4 недели! Наслаждайтесь безвизовым въездом в зону Шенгена, получайте доступ к высококачественной медицинской помощи и образованию, развивайте свой бизнес и наслаждайтесь комфортным образом жизни в Европе. Наши эксперты окажут вам полную поддержку на всех этапах процесса и гарантируют ваш успех.
            </p>
          </section>
          <div className="w-full flex flex-col sm:w-4/5 md:flex-row justify-center gap-[18px] md:gap-[30px] lg:justify-start lg:w-4/5">
            <Link to="/form" className="w-full lg:w-auto">
              <MainButton primary={true}>Наши контакты</MainButton>
            </Link>
            <Link to="/form" className="w-full lg:w-auto">
              <MainButton primary={false}>связаться</MainButton>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerImage}
          className="flex items-center justify-center lg:w-full"
        >
          <div className="relative w-fit">
            {/* main card */}
            <img
              className="w-[355px] h-auto object-cover relative sm:w-[550px] md:w-[723px]"
              src="hero.png"
              alt="hero"
            />

            {/* chair card */}
            <motion.div
              variants={chairContainer}
              className="absolute top-[43%] right-7 flex flex-col items-center gap-1.5 p-2 rounded chair-card bg-white text-[5.48px] font-body text-black-400 w-[98px] sm:w-[150px] sm:text-[10px] sm:gap-2.5 sm:right-11 md:w-[200px] md:gap-3 md:text-xs md:p-4 md:rounded-md md:right-14 lg:w-[180px] lg:gap-2"
            >
              <p>Получение ВНЖ</p>
              <div className="flex w-full items-center justify-between">
                <p>ВНЖ за 4 недели</p>
              </div>
              <Link to="/form" className="text-[#064A4A] bg-[#C7EBE8] hover:bg-primary-200 transition-all duration-200 ease-in rounded-full py-1 w-full sm:py-1.5 md:py-2">
                Связаться
              </Link>
            </motion.div>

            {/* total sales */}
            <motion.div
              variants={chartContainer}
              className="absolute top-[28%] left-1 border-[0.5px] border-[#E2E2E2] rounded sales-card bg-white flex flex-col gap-2 font-body p-2 w-[96px] sm:w-[148px] sm:gap-3 sm:p-2.5 md:w-[196px] md:gap-4 md:border md:p-3.5"
            >
              <div className="flex flex-col gap-0.5">
                <h5 className="text-[#515151] text-[5.48px] font-medium sm:text-[8px] md:text-xs">
                  Лояльность
                </h5>
                <div className="w-full flex items-end justify-between">
                  <h4
                    ref={priceRef}
                    className="text-xs text-[#064A4A] font-bold sm:text-lg md:text-2xl"
                  >
                    100
                  </h4>
                  <img
                    className="w-8 h-auto object-cover sm:w-[52px] md:w-[65px]"
                    src="/chart.svg"
                    alt="chart"
                  />
                </div>
              </div>
              <div className="pt-1 border-t-[0.5px] border-[#C9C9C9] w-full flex items-center justify-between text-[#818181] text-[4.38px] sm:pt-1.5 sm:text-[6.5px] md:pt-2 md:text-[9px]">
                <p>Лояльность клиентов</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
