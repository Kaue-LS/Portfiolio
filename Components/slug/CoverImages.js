import Image from "next/image"
export default function CoverImage({src,alt,slug,height,width}){
    return(
        <div>
            {slug?(
        <Image src={src}
            alt={`Cover Image for ${alt}`}
            height={height}
            width ={width}/>
            ):(

                <Image src={src}
                alt={`Cover Image for ${alt}`}
                height={height}
                width ={width}/>

            )
}
        </div>
    )
}