// import first from './photo/1.jpg';

import { Fragment } from "react"

const ExampleCarouselImage=({text})=>{
    return (
        <Fragment>
        <div><img src="/photes/1.jpg"/></div> 

         {/* <div><img src="/photes/3.jpg"/></div> */}
    </Fragment>
)
}
export default ExampleCarouselImage

export const Second = ()=>{
    return (<div><img src="/photes/2.jpg"/></div>)
}

export const Third = ()=>{
    return (<div><img src="/photes/3.jpg"/></div>)
}

