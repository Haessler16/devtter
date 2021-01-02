import { useState, useEffect } from "react"
import Head from "next/head"

import Github from "components/Icons/Github"
import Avatar from "components/Avatar"
import Button from "components/Button"

import { colors } from "styles/theme"

import { loginWithGithub, onAuthStateChange } from "firebase/client"

export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChange(setUser)
  }, [])

  const handleClick = () => {
    return loginWithGithub()
      .then(setUser)
      .catch((error) => console.log(error))
  }

  return (
    <>
      <Head>
        <title>Devtter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <img src="/favicon.ico" alt="Logo" width="60" />
        <h1>Devtter</h1>
        <h2>Talk about development with developers</h2>
        <div>
          {user === null && (
            <Button onClick={handleClick}>
              <Github fill="white" width="24px" height="24px" />
              Login with Github
            </Button>
          )}
          {user && user.avatar && (
            <>
              <Avatar
                src={user.avatar}
                alt={user.username}
                text={user.username}
              />
            </>
          )}
        </div>
      </section>

      <style jsx>{`
        section {
          display: grid;
          place-content: center;
          place-items: center;
          height: 100%;
        }
        div {
          margin-top: 16px;
        }
        h1 {
          font-weight: 800;
          margin-bottom: 5px;
          color: ${colors.primary};
        }
        h2 {
          font-size: 21px;
          margin: 0;
          color: ${colors.secondary};
        }
      `}</style>
    </>
  )
}
