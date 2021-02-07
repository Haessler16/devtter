import Avatar from "@c/Avatar"
import { useTimeAgo } from "hooks/useTimeAgo"

export default function Devit({ avatar, userName, contend, id, createdAt }) {
  const timeAgo = useTimeAgo(createdAt)
  return (
    <>
      <article>
        <div>
          <Avatar alt={userName} src={avatar} />
        </div>
        <section>
          <header>
            <strong>{userName}</strong>
            <span> - </span>
            <span>{timeAgo}</span>
          </header>
          <p>{contend}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 1px solid #eee;
        }
        div {
          padding-right: 12px;
        }
        p {
          margin: 0;
          line-height: 1.3125;
        }
        span {
          color: #555;
          font-size: 14px;
        }
      `}</style>
    </>
  )
}
