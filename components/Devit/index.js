import Avatar from "@c/Avatar"

export default function Devit({ avatar, username, message, id }) {
  return (
    <>
      <article>
        <div>
          <Avatar alt={username} src={avatar} />
        </div>
        <section>
          <strong>{username}</strong>
          <p>{message}</p>
        </section>
      </article>

      <style jsx>{`
        article {
          display: flex;
          padding: 10px 15px;
          border-bottom: 2px solid #09f5;
        }
        div {
          padding-right: 12px;
        }
        p {
          margin: 0;
          line-height: 1.3125;
        }
      `}</style>
    </>
  )
}
