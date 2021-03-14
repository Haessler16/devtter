import { useState, useEffect } from "react"
import Button from "components/Button"
import useUser from "hooks/useUser"
import { addDevit, uploadImage } from "firebase/client"
import { useRouter } from "next/router"
import Head from "next/head"
import Avatar from "@c/Avatar"

const COMPOSE_STATES = {
  USER_NOT_KNOW: 0,
  LOADING: 1,
  SUCCESS: 2,
  ERROR: -1,
}

const DRAG_IMAGE_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
}

export default function ComposeTweet() {
  const user = useUser()
  const router = useRouter()

  const [status, setStatus] = useState(COMPOSE_STATES.USER_NOT_KNOW)
  const [message, setMessage] = useState("")

  const [drag, setDrag] = useState(DRAG_IMAGE_STATES.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
        console.log("onComplete")
        task.snapshot.ref.getDownloadURL().then(setImgURL)
      }
      task.on("state_changed", onProgress, onError, onComplete)
    }
  }, [task])

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
      img: imgURL,
    })
      .then(() => {
        router.push("/home")
      })
      .catch((error) => {
        console.log(error.message)
        setStatus(COMPOSE_STATES.ERROR)
      })
  }

  const handleOnDragEnter = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.DRAG_OVER)
  }
  const handleOnDragLeave = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
  }
  const handleDrop = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATES.NONE)
    const file = e.dataTransfer.files[0]
    const task = uploadImage(file)
    setTask(task)
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATES.LOADING

  return (
    <>
      <Head>
        <title>Crear un Devit | Devtter</title>
      </Head>
      <section className="container">
        {user && (
          <figure className="avatar-container">
            <Avatar src={user.avatar} alt={user.name} />
          </figure>
        )}

        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            onDragEnter={handleOnDragEnter}
            onDragLeave={handleOnDragLeave}
            onDrop={handleDrop}
            placeholder="¿Que esta pasando?"
            value={message}
          ></textarea>

          {imgURL && (
            <figure className="remove-img">
              <button onClick={() => setImgURL(null)}>x</button>
              <img src={imgURL} alt="droped" />
            </figure>
          )}

          <div>
            <Button disabled={isButtonDisabled}>Devitear</Button>
          </div>
        </form>
      </section>

      <style jsx>
        {`
          .container {
            display: flex;
            align-items: flex-start;
          }
          .avatar-container {
            margin-top: 10px;
            margin-left: 10px;
          }

          form {
            padding: 10px;
          }

          textarea {
            width: 100%;
            border: ${drag === DRAG_IMAGE_STATES.DRAG_OVER
              ? "3px dashed #09f"
              : "3px solid transparent"};
            font-size: 21px;
            padding: 15px;
            resize: none;
            outline: none;
            min-height: 200px;
            border-radius: 10px;
          }

          .remove-img {
            position: relative;
          }

          button {
            background: rgba(0, 0, 0, 0.3);
            position: absolute;
            top: 15px;
            right: 15px;
            border-radius: 919px;
            width: 30px;
            height: 30px;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
            text-align: center;
            border: 0;
          }

          img {
            border-radius: 10px;
            height: auto;
            width: 100%;
          }

          div {
            padding: 15px;
          }
        `}
      </style>
    </>
  )
}
