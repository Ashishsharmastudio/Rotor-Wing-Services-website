import React, { Suspense } from 'react';

import TopCharteredCities from './TopCharteredCities';

interface Widgets_30Percent_SectionProps {
  widgetTitle: string,
  widgetContent: {
    name: string,
    link: string;
  }[],
  widgetButtonLink: string,
  showCostCalculator?: boolean;
}

const Widgets_30Percent_Section: React.FC<Widgets_30Percent_SectionProps> = ({ widgetTitle, widgetContent, widgetButtonLink, showCostCalculator = true }) => {
  return (
    <div className="min-w-[24%] sm:flex sm:flex-wrap justify-between lg:flex-col lg:justify-start lg:h-fit  gap-5 sticky top-[90px]  ">
      <div className="w-full sm:w-[300px] md:flex-grow lg:w-full">
        {
          showCostCalculator ?
            <Suspense fallback={<div className="search-form__loader"></div>}>
              {/* <LeadForm widget={true} /> */}
            </Suspense>
            : ""
        }

      </div>
      <div className="w-full sm:w-[300px] md:flex-grow lg:w-full ">
        <TopCharteredCities
          //   title="Top USA Chartered Cities"
          title={widgetTitle}
          
          cities={widgetContent}
          buttonLink={widgetButtonLink}
        />
      </div>
    </div>
  );
};

export default Widgets_30Percent_Section;
