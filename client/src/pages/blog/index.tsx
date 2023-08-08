import React from "react";

import EmptyState from "../../components/atoms/empty_state/empty_state";
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";

const BlogPage = () => {

  return (
    <PageLayout>
      <div className="mt-20">
        <EmptyState 
          heading="Coming Soon"
          showLink={false}
        />
      </div>
    </PageLayout>
  );
};

export default BlogPage;
