import Image from "next/image"
import Link from 'next/link'
export default function CoverImage(src,alt,slug,height,width){
  
    return(
        <div>
            {slug?(
                <Link as={`/post/${alt}`} href={`/posts/${alt}`}>
        <Image src={src}
            alt={`Cover Image for ${alt}`}
            height={height}
            width ={width}/>
        </Link>
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