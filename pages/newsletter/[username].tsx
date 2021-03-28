import React from "react";
import { useRouter } from "next/router";
import NewsletterForm from "../../components/newsletter/NewsletterForm";

const newsletter: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div className="view">
      <NewsletterForm
        imageSrc=""
        username={username}
        description="Notícias de Tecnologia para quem não tem tempo de ler notícias."
      />
      {/* ÚLTIMAS PUBLICAÇÕES ETC.. */}
    </div>
  );
};

export default newsletter;
