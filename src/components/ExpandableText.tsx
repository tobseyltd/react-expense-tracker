import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [clicked, setClicked] = useState(false);

  const text = clicked ? children : children.slice(0, maxChars) + "...";

  const toggleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      {children.length <= maxChars ? (
        <p>{children}</p>
      ) : (
        <>
          <p>{text}</p>
          <button onClick={toggleClick}>{clicked ? "less" : "more"}</button>
        </>
      )}
    </>
  );
};

export default ExpandableText;
