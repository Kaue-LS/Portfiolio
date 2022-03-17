import Image from "next/image"
import Link from 'next/link'
export default function CoverImage({src,alt,slug,height,width}){
    return(
        <div>
            {slug?(
                <Link as={`/posts/${slug}`} href={`/posts/[slug]`}>
        <a>
        <Image src={src}
            alt={`Cover Image for ${alt}`}
            height={height}
            width ={width}/>
        </a>
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