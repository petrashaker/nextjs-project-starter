import React from 'react'
import loadingGif from './74H8.gif';
import Image from 'next/image';


const Loading: React.FC = () => {
  return (
    <>
    {/* <div style="padding-top:100.000%;position:relative;"><iframe src="https://gifer.com/embed/74H8" width="100%" height="100%" style='position:absolute;top:0;left:0;' frameBorder="0" allowFullScreen></iframe></div><p><a href="https://gifer.com">via GIFER</a></p> */}
    <Image src={loadingGif} alt="Loading" />
    </>
  )
}

export default Loading;
