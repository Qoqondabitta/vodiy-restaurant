import React from "react";
import {
  Blur,
  Container,
  Main,
  VideoBox,
  Videos,
  VideoWrapper,
  Wrapper,
  ZesTitle,
} from "./style";
import { Title } from "../history/style";
// import { Title as ZesTitle } from "../zestav/style";
import video from "../../assets/images/video/video.mp4";
import service from "../../assets/images/video/service.mp4";
import uzbekmeal from "../../assets/images/video/uzbekmeal.mp4";
import spoon from "../../assets/images/objects/spoon.png";
import { Spoon } from "../reservation/style";
import { Title as Text } from "../about/style";
import { useSelector } from "react-redux";
import { o, videoconstants, w } from "../../constants/componentconstants/video";

const Video = () => {
  const l = useSelector((store) => store.language.value);
  return (
    <Main className="align-start">
      <Container className="column-center">
        <Text style={{ textAlign: "center" }}>
          {l == "eng" ? w[0] : l == "pol" ? w[1] : w[2]}
        </Text>
        <Spoon src={spoon} />
        <Title> {l == "eng" ? o[0] : l == "pol" ? o[1] : o[2]}</Title>
        <Wrapper>
          {videoconstants.map((v, i) => (
            <VideoWrapper key={i} className="col-center">
              <VideoBox className="center">
                <Videos src={v.vidurl} loop muted autoPlay />
              </VideoBox>
              <ZesTitle>
                {l == "eng"
                  ? v.phrase[0]
                  : l == "pol"
                  ? v.phrase[1]
                  : v.phrase[2]}
              </ZesTitle>
            </VideoWrapper>
          ))}
        </Wrapper>
      </Container>
    </Main>
  );
};

export default Video;
