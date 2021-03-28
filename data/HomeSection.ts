interface SectionDataType {
  id: number;
  title: string;
  text: string;
  image: any;
  imageSide: "left" | "right";
}

const HomeSectionData: SectionDataType[] = [
  {
    id: 1,
    title: "Um lugar para escritores independentes",
    text:
      "Comece uma newsletter e construa uma comunidade. Você também pode vender seus emails.",
    image: "second",
    imageSide: "left",
  },
  {
    id: 2,
    title: "A nossa plataforma é sua casa.",
    text: "Importe a sua lista de Leads ou crie ela do zero. Você que decide.",
    image: "third",
    imageSide: "right",
  },
  {
    id: 3,
    title: "Ganhe dinheiro fazendo o que ama.",
    text: "Quando estiver pronto, você pode criar inscrições pagas.",
    image: "fourth",
    imageSide: "left",
  },
  {
    id: 4,
    title: "SEO? Pode deixar que a gente resolve.",
    text:
      "Trabalhamos 24/7 para fazer a sua newsletter aparecer no google. Por isso, seja criativo no título e descrição.",
    image: "fifth",
    imageSide: "right",
  },
];

export default HomeSectionData;
