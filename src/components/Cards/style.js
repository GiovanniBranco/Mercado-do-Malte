import styled from "styled-components";

export const Card = styled.div`
  width: 280px;
  height: 450px;
  border-radius: 1px;
  box-shadow: 0 0 2px black;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  align-self: center;

  :hover {
    box-shadow: 0 0 8px black;
  }
`;

export const ImagemCard = styled.img`
  height: 50%;
  margin: 2rem auto 1rem auto;
`;

export const ContainerMain = styled.div`
  a {
    text-decoration: none !important;
  }
  padding: 50px 0;
  width: 1300px;
  margin: auto;
  display: grid;
  justify-content: space-around;
  grid-template-columns: auto auto auto auto;
  grid-gap: 30px 30px;
  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    width: 100%;
    grid-template-columns: auto auto;
  }
  @media (max-width: 600px) {
    width: 100%;
    grid-template-columns: auto;
  }
`;

export const Conteudo = styled.div`
  border-top: 1px solid var(--gray-200);
  padding: 20px;
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h5 {
    color: var(--gray-800);
  }

  h6 {
    color: var(--gray-500);
  }

  h3 {
    color: var(--dark);
  }
`;
