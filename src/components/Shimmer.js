import React from 'react'
import { ShimmerText } from "react-shimmer-effects";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import { ShimmerPostList } from "react-shimmer-effects";



export default function Shimmer() {
  return (
    <div>
       {/* <ShimmerText line={5} gap={10} />  */}
       {/* <ShimmerSimpleGallery imageType="circular" imageHeight={200} caption /> */}
       {/* <ShimmerSimpleGallery card imageHeight={180} /> */}
       {/* <ShimmerSimpleGallery card imageHeight={300} caption /> */}
       <ShimmerPostList postStyle="STYLE_FOUR" col={4} row={2} gap={10} />
    </div>
  )
}
