import SubHead from "../Atoms/subhead";
import Subtitle from "../Atoms/subtitle";
import Paragraph from "../Atoms/paragraph";
import FeatureItem from "./featureItem";
import { motion } from "framer-motion";

export default function Features() {
  const dataFeatures = [
    {
      id: 1,
      title: "Плюсы получения ВНЖ в Европе",
      logo: "/feature-1.svg",
      content:
        "Безвизовый въезд в зону Шенгена переезд на ПМЖ в Европу высокий уровень медицины возможность ведения международного бизнеса доступ к банковской сфере лучшие университеты мира",
    },
    {
      id: 2,
      title: "Выгоды работы с нами",
      logo: "/feature-2.svg",
      content:
        "- Персональный эксперт сопровождает на всех этапах получения ВНЖ сбор необходимых документов без вашего участия экономия вашего времени опытные русскоязычные специалисты работаем с 2017 года гарантии прописаны в договоре",
    },
    {
      id: 3,
      title: "Индивидуальный подход и конфиденциальность",
      logo: "/feature-3.svg",
      content:
        "Мы ценим каждого клиента и предоставляем индивидуальный подход к вашим потребностям и желаниям. Ваши данные и личная информация обрабатываются с максимальной конфиденциальностью и безопасностью. Наши гарантированные услуги прописаны в договоре, чтобы вы могли быть уверены в нашей ответственности и надежности.",
    },
    {
      id: 4,
      title: "Экономия вашего времени и усилий",
      logo: "/feature-4.svg",
      content: "Не тратьте свое драгоценное время на оформление документов и бесконечные ожидания. Мы возьмем на себя все необходимые процедуры и сделаем все за вас. Воспользуйтесь нашими услугами и наслаждайтесь результатом, экономя свое время и усилия для важных вещей в вашей жизни.",
    },
    {
      id: 5,
      title: "Доступ к широкому спектру преимуществ",
      logo: "/feature-5.svg",
      content:
        "Получив ВНЖ в Европе, вы получите доступ к разнообразным преимуществам, включая социальную защиту, возможность приобретения недвижимости, культурные возможности и многое другое. Наши услуги позволят вам осуществить эту мечту без лишних хлопот и стресса.",
    },
    {
      id: 6,
      title: "Свяжитесь с нами сегодня",
      logo: "/feature-6.svg",
      content:
        "Не упустите свой шанс начать новую жизнь в Европе! Свяжитесь с нами сегодня для получения дополнительной информации о наших услугах и начните процесс получения ВНЖ уже сейчас. Наши специалисты ждут вас, чтобы помочь вам осуществить вашу мечту о жизни в Европе!",
    },
  ];

  const content = {
    visible: { y: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { y: -100, opacity: 0 },
  };

  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="px-5 py-16 flex flex-col gap-10 sm:pb-28 sm:px-10 md:pb-36">
        {/* Head Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={content}
          className="text-center flex flex-col items-center"
        >
          <Subtitle style="mb-2">ВНЖ Европы</Subtitle>
          <SubHead style="mb-[18px] sm:w-8/12 md:w-9/12 lg:w-7/12">
          7 миграционных программ в 8 стран Европы:
          </SubHead>
          <Paragraph
            fontSize="text-sm"
            color="text-black-400"
            style="sm:w-3/5 md:w-7/12 lg:w-1/3"
          >
            
          </Paragraph>
        </motion.div>

        {/* Feature Items */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 overflow-hidden">
          {dataFeatures?.map((feature, index) => (
            <FeatureItem key={feature.id} feature={feature} i={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
