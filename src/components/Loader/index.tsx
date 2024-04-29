import { FC } from "react";
import { PacmanLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Loader: FC = () => {
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <PacmanLoader
        color={"rgba(172, 21, 104, 0.7)"}
        cssOverride={override}
        size={50}
      />
    </div>
  );
};
