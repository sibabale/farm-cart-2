import React from "react";

import EmptyState from "../../components/atoms/empty_state/empty_state";
import { PageLayout } from "../../components/organisms/layouts/page_layout/page_layout";

const SellPage = () => {

  return (
    <PageLayout>
      <div className="mt-20">
        <EmptyState 
          heading="Do you wish to sell with us?"
          subHeading="Please contact us."
        />
      </div>
    </PageLayout>
  );
};

export default SellPage;
