import Devit from "@c/Devit"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])
  return (
    <>
      <div>
        <header>
          <h2>Inicio</h2>
        </header>
        <section>
          {timeline.map(({ id, username, avatar, message }) => (
            <Devit
              key={id}
              id={id}
              username={username}
              avatar={avatar}
              message={message}
            />
          ))}
        </section>
        <nav></nav>
      </div>

      <style jsx>{`
        header {
          width: 100%;
          height: 49px;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          border-top: 1px;
        }
        h2 {
          font-size: 21px;
          font-weight: 800;
        }
        section {
          padding-top: 56px;
        }

        nav {
          width: 100%;
          height: 49px;
          bottom: 0;
          position: sticky;
          border-top: 1px solid #ccc;
        }
      `}</style>
    </>
  )
}
