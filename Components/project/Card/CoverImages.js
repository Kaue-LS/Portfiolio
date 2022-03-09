import Image from "next/image"
import Link from 'next/link'
export default function CoverImage({src,alt,slug,height,width}){
  console.log(slug)
    return(
        <div>
            {slug?(
                <Link as={`/posts/${slug}`} href={`/posts/[slug]`}>
        <Image src={src}
            alt={`Cover Image for ${alt}`}
            height={height}
            width ={width}/>
        </Link>
            ):(
                <Link as={`/posts/${slug}`} href={`/posts/[slug]`}>

                <Image src={src}
                alt={`Cover Image for ${alt}`}
                height={height}
                width ={width}/>
                </Link>

            )
}
        </div>
    )
}