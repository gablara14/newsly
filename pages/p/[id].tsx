import React from "react";
import { useRouter } from "next/router";
import PostView from "../../components/PostView";

const newsletter: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="center">
      <PostView />
    </div>
  );
};

export default newsletter;
