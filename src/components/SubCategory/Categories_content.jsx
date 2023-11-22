
import CategoriesPagination from "./Categories_pagination";
import { useState } from "react";
import LargeScreenCategorySelection from "./LargeScreenCategorySelection";
import SmallScreenCategorySelection from "./SmallScreenCategorySelection";

export default function CategoriesContent({ title, id }) {
  const [showSelection, setshowSelection] = useState(false);
  const displaySelection1 = () => setshowSelection(!showSelection);
  return (
    <div className={`flex py-8 relative`}>
      <div>
        {showSelection === true ? (
          <SmallScreenCategorySelection
            title={title}
            id={id}
          />
        ) : null}

        <LargeScreenCategorySelection
          title={title}
          id={id}
          showSelection={showSelection}
          displaySelection1={displaySelection1}
        />
      </div>
      <div>
        <CategoriesPagination
          title={title}
          id={id}
          displaySelection1={displaySelection1}
        />
      </div>
    </div>
  );
}
