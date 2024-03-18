import CardItem from "./cardItem";

export default function Card() {
  return (
    <div className="container mx-auto max-w-[1344px]">
      <div className="flex flex-col px-5 py-20 gap-20 sm:px-10 overflow-hidden lg:gap-40">
        <CardItem
          subtitle="Быстрое ВНЖ"
          subhead="Профессиональные консультации:"
          paragraph="Наши эксперты помогут вам выбрать наиболее подходящую программу получения ВНЖ, учитывая ваши потребности и цели."
          img="/card-1.png"
          primary={true}
        />
        <CardItem
          subtitle="Быстрое ВНЖ"
          subhead="Экономия времени и усилий"
          paragraph="Не тратьте время на изучение сложных миграционных процедур и бесконечные походы по инстанциям. Мы возьмем на себя все необходимые формальности."
          img="/card-2.png"
          primary={false}
        />
      </div>
    </div>
  );
}
