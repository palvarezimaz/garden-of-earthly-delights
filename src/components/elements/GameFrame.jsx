import styled from "styled-components"

export default function GameFrame(props) {
  return (
    <IframeContainer>
      <Iframe src={props.src} allow={props.allow} />
    </IframeContainer>
  )
}

export const IframeContainer = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  padding-top: 80%;
  padding-bottom: -10%;
  margin-bottom: -10%;
}
`;

export const Iframe = styled.iframe`{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 80%;
}
`;

