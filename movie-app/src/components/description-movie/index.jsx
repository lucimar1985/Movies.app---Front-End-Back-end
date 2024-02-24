import * as C from "./style";
import { GoPlay } from "react-icons/go";

// eslint-disable-next-line react/prop-types
export const DescriptionMovie = ({
  title,
  description,
  handleOpenPlayVideo,
}) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <C.Description>
        {description}
      </C.Description>
      <C.Button onClick={handleOpenPlayVideo}>
        <GoPlay size={24} />
        Ver Filme
      </C.Button>
    </C.Container>
  );
};
