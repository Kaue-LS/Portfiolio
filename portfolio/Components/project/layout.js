import Link from "next/link";
import {  PegarPostsPorData } from "../../Lib/Projects"
import Date from "./date"
export default function Project({dadosDosPost}){
    console.log({dadosDosPost})

    return(
        <div>
            {!dadosDosPost?(
                <div>
                        Nenhum projeto cadastrado
                </div>
            ):(
                <div>
             {
               
            dadosDosPost.map(({id,date,title,image})=>(
                
                <div key={id}>
                    <Link href={`/posts/about/${id}`}>
                        <div>
                            <img src={image}/>
                        </div>
                        <p>{title}</p>
                        <small>
                            <Date dateString={date}/>
                        </small>
                    </Link>
                    

                </div>
            ))
            }
            </div>

            )
        }
        </div>
    )
}

export async function getStaticProps(){
    const dadosDosPost= await PegarPostsPorData();
    return{
        props:{
            dadosDosPost
        }
    }
}