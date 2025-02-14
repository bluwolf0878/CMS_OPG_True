import { Navstyled } from "../layout/nav.styled-components";

export const Navigation = ({ setCategory }) => { // 🔹 Modtager setCategory som prop
  return (
    <Navstyled>
      {["ALLE", "INDLAND", "UDLAND", "TEKNOLOGI"].map((category) => (
        <button key={category} onClick={() => setCategory(category)}>
          {category}
        </button>
      ))}
    </Navstyled>
  );
};
