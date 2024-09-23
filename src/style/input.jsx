import { styled} from "styled-components";

export const Foudase = styled.div`

    display: flex;
  position: relative;
  width: 300px; /* Ajuste a largura conforme necessário */

   input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #75B798;
  color: #fff;
  font-size: 16px;
}

    .input-container input::placeholder {
  color: #fff;
}

    .input-container .icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 20px;
  color: #fff;
}

    .input-container .icon-container {
  background-color: #2e583e;
  padding: 10px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

`