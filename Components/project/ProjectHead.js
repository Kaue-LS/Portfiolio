import CoverImage from '../CoverImages'
import Avatar from './Avatar'
export default function PostHeader({ title, coverImage, date, author }){
    return(
        <div>
            <h1>{title}</h1>
        <div>
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div >
          <CoverImage title={title} src={coverImage} height={620} width={1240} />
        </div>
        <div >
          <div >
            <Avatar name={author.name} picture={author.picture} />
          </div>
          <div >
            <DateFormatter dateString={date} />
          </div>
        </div>
        </div>
    )
}