import styled from "styled-components";

const CARD = styled.div`
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
`;

const Image = styled.div`
  width: 40%;
  height: 40%;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
`;

const TEXT = styled.h4`
  padding: 0 calc(1rem + 1vw);
  color: grey;
  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled.h3`
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`;

const Card = ({ name, text, image }) => {
  return (
    <CARD>
      <Image img={image} width="400" height="400" />
      <NAME>{name}</NAME>
      <TEXT>{text}</TEXT>
    </CARD>
  );
};

export default Card;
