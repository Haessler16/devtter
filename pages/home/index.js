import Devit from "@c/Devit"
import { fetchLatestDevits } from "firebase/client"
import useUser from "hooks/useUser"
import { useState, useEffect } from "react"
import Link from "next/link"
import Head from "next/head"
import Create from "components/icons/Create"
import Search from "components/icons/Search"
import Home from "components/icons/Home"
import { colors } from "styles/theme"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline)
  }, [user])

  return (
    <>
      <Head>
        <title>Inicio | Devtter</title>
      </Head>
      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        {timeline.map(
          ({ id, userName, userId, avatar, contend, createdAt }) => (
            <Devit
              key={id}
              id={id}
              createdAt={createdAt}
              userName={userName}
              avatar={avatar}
              contend={contend}
              userId={userId}
            />
          )
        )}
      </section>
      <nav>
        <Link href="home">
          <a>
            <Home width={32} height={32} fill="#09f" />
          </a>
        </Link>
        <Link href="search">
          <a>
            <Search width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="compose/tweet">
          <a>
            <Create width={32} height={32} stroke="#09f" />
          </a>
        </Link>
      </nav>

      <style jsx>{`
        header {
          width: 100%;
          height: 49px;
          display: flex;
          align-items: center;
          position: sticky;
          top: 0;
          border-bottom: 1px solid #eee;
          background: #ffffffaa;
          backdrop-filter: blur(5px);
        }
        h2 {
          font-size: 21px;
          font-weight: 800;
          padding-left: 15px;
        }

        section {
          flex: 1;
        }

        nav {
          background: "#fff";
          width: 100%;
          height: 49px;
          display: flex;
          bottom: 0;
          position: sticky;
          border-top: 1px solid #eee;
        }

        nav a {
          display: flex;
          flex: 1 1 auto;
          justify-content: center;
          align-items: center;
          height: 100%;
        }
        nav a:hover {
          background: radial-gradient(#0099ff22 15%, transparent 16%);
          background-size: 180px 180px;
          background-position: center;
        }
        nav a:hover > :global(svg) {
          stroke: ${colors.primary};
        }
      `}</style>
    </>
  )
}
