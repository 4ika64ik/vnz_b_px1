import { PrimaryCard, SecondaryCard } from "./cardImage";

export default function CardImage({ primary }) {
  const primaryContainer = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delayChildren: 0.5, staggerChildren: 0.1 },
    },
    hidden: { y: 100 },
  };

  const miniModal = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hidden: {
      y: 100,
    },
  };

  const fakeProfiles = [
    {
      id: 0,
      avatar: "/profile-1.png",
      name: "Никита",
      phone: "(123) 555-6789",
    },
    {
      id: 1,
      avatar: "/profile-2.png",
      name: "Алексей",
      phone: "(123) 675-8829",
    },
    {
      id: 2,
      avatar: "/profile-3.png",
      name: "Даниил",
      phone: "(123) 325-0021",
    },
  ];

  if (primary)
    return (
      <PrimaryCard
        primaryContainer={primaryContainer}
        miniModal={miniModal}
        fakeProfiles={fakeProfiles}
      />
    );

  return <SecondaryCard />;
}
