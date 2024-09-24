import { styled} from "styled-components";

export const Foudase = styled.div`

  display: flex;
  position: relative;
  width: 28vw; 
  height: 600px;

   input {
  width: 100%;
  height: 6vh;
  padding: 10px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius:  5px;
  background-color: #75B798;
  color: #fff;
  font-size: 18px;
  outline: none;
}
  button {
    width: 3vw;
    background-color: #0F5132;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: none;
  }
  .hammer-image {
    font-size: 35px;
    color: white;
    width: 3vw;
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