import React, { FC } from "react";

const AnimatedLogo: FC<{
  clippingmask: string;
  src: string;
  width: number;
}> = ({ clippingmask, src, width }) => {
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current;
    // @ts-ignore
    const context = canvas.getContext("2d");
    const myImage = document.createElement("img");
    myImage.src = clippingmask;
    myImage.onload = () => {
      context.drawImage(myImage, 0, 0, width, width);
      context.globalCompositeOperation = "source-atop";
      const video = document.createElement("video");
      video.src = src;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.play();
      video.oncanplay = () => {
        const animate = () => {
          context.drawImage(video, 0, 0, width, width);
          requestAnimationFrame(animate);
        };
        animate();
      };
    };
  }, []);
  return (
    <div style={{ width, height: width }}>
      <canvas ref={canvasRef} className={`absolute`} />
    </div>
  );
};

export default AnimatedLogo;

// img={`http://localhost:7001/static/media/65a0c9ac92db6d98d4c41239.png`}
// title={"Ocean Soul"}
// videosrc={`http://localhost:7001/static/media/65a0ca1392db6d98d4c41299.mp4`}
