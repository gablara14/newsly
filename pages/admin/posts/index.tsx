import React from "react";
import AdminContainer from "../../../components/admin/AdminContainer";
import Post from "../../../components/Post";
import PostContainer from "../../../components/PostContainer";

const FAKE_DATA = {
  title:
    "As donas de casa indianas estão ganhando US$ 400.000 por ano vendendo produtos no Whatsapp",
  subTitle: "Notícias de Tecnologia para quem não tem tempo de ler notícias.",
  authorName: "TechnoKing",
  publishDate: "14 de março de 2021",
  readingTime: "4 minutos de leitura",
};

const posts: React.FC = () => {
  const { title, subTitle, authorName, publishDate, readingTime } = FAKE_DATA;
  return (
    <AdminContainer title="Minhas publicações">
      <PostContainer title="Essa semana">
        <Post
          title={title}
          subTitle={subTitle}
          authorName={authorName}
          publishDate={publishDate}
          readingTime={readingTime}
        />
        <Post
          title={title}
          subTitle={subTitle}
          authorName={authorName}
          publishDate={publishDate}
          readingTime={readingTime}
        />
        <Post
          title={title}
          subTitle={subTitle}
          authorName={authorName}
          publishDate={publishDate}
          readingTime={readingTime}
        />
      </PostContainer>
    </AdminContainer>
  );
};

export default posts;
