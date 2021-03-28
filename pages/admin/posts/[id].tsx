import React from "react";
import { useRouter } from "next/router";
import PostView from "../../../components/PostView";
import AdminContainer from "../../../components/admin/AdminContainer";

const newsletter: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AdminContainer title="">
      <div className="center">
        <PostView adminView />
      </div>
    </AdminContainer>
  );
};

export default newsletter;
