// @jsxRuntime classic
// @jsx jsx
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px red;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "brown"
  });

  return (
    <div css={containerStyle}>
      <p css={titleStyle}>Emotion</p>
      <Sbutton>ボタン</Sbutton>
    </div>
  );
};

const Sbutton = styled.button`
  background-color: gray;
  border: none;
  padding: 8px;
`;
