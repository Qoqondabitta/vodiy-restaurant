import React from "react";
import { Blur, Main, Videos } from "./style";
import video from "../../assets/images/video/video.mp4";

const Video = () => {
  return (
    <Main>
      <Blur />
      <Videos src={video} loop muted autoPlay />
    </Main>
  );
};

export default Video;
