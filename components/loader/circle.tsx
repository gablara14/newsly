import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
`;
const color = "#ffffff";

export default function circle() {
  return (
    <>
      <ClipLoader loading={true} css={override} color={color} size={30} />
    </>
  );
}
