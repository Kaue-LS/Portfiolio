import Meta from './Meta'
export default function Layout({ post, children }) {
  return (
    <div>
      <Meta post={post} />
        <main>{children}</main>
    </div>
  )
}
