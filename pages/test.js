import React from 'react'
import '../styles/Test.module.css';
import Image from 'next/image'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import about from '../public/about-1.jpg';
import about1 from '../public/about-2.jpg';
import about2 from '../public/blog-3.jpg';
import ImageContainer from '../components/TextOnImage';
export default function test() {
    const images=[
        {name:about,id:1},{name:about1,id:2},{name:about2,id:3}
     
    ]
  
    return (
    <div className="test">
       
         <Carousel autoPlay={true} axis='horizontal' autoFocus={true} centerMode={true} infiniteLoop={true} transitionTime={5000}>
                {images.map((em)=>(
 <div className="tes" key={em.id}>
     <ImageContainer em={em.name}/>
 
</div>
                ))}
               
              
            </Carousel>
            </div>
        
    )
}
