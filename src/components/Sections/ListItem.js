import React from "react";

import { nanoid } from "nanoid";
import { Li, CardTitle, ImageURL } from "../Atoms/Atoms";

const ListItem = ({ element, className }) => {
  if (!element) {
    return null;
  }

  return (
    <React.Fragment>
      <Li key={nanoid()} element={element} className={className}>
        {element.url ? (
          <ImageURL
            key={nanoid()}
            {...element}
            className={className + "-item-image"}
          />
        ) : (
          <CardTitle key={nanoid()} title={element.title}></CardTitle>
        )}
      </Li>
    </React.Fragment>
  );
};

export default ListItem;
