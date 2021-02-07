import { useState } from "react"
import Button from "components/Button"
import useUser from "hooks/useUser"
import { addDevit } from "firebase/client"
import { useRouter } from "next/router"
import Head from "next/head"

const COMPOSE_STATES = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

export default function ComposeTweet() {
  const user = useUser()
  const router = useRouter()
  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
  const [message, setMessage] = useState("")

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATES.LOADING)
    addDevit({
      avatar: user.avatar,
      contend: message,
      userId: user.uid,
      userName: user.username,
    })
      .then(() => {
        router.push("/home")
      })
      .catch((error) => {
        console.log(error.message)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <Head>
        <title>Crear un Devit | Devtter</title>
      </Head>
      <form onSubmit={handleSubmit}>
        <textarea
          onChange={handleChange}
          placeholder="¿Que esta pasando?"
          value={message}
        ></textarea>
        <div>
          <Button disabled={isButtonDisabled}>Devitear</Button>
        </div>
      </form>

      <style jsx>
        {`
          div {
            padding: 15px;
          }
          textarea {
            width: 100%;
            border: 0;
            font-size: 21px;
            padding: 15px;
            resize: none;
            outline: none;
            min-height: 200px;
          }
        `}
      </style>
    </>
  )
}
