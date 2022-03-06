
export default function MoreProjects({ posts }) {
  return (
    <section>
      <h2>
        More Stories
      </h2>
      <div>
        {posts.map((post,index) => (
             <div key={index}>
             <h1>{post.title}</h1>
    
       </div>
        ))}
      </div>
    </section>
  )
}
