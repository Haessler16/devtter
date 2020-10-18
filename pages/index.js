import Head from "next/head";
import { colors } from "../styles/theme";
import { Button } from "../components/Button";

export default function Home() {
  return (
    <>
      <Head>
        <title>Devtter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <img src="/favicon.ico" alt="Logo" />
        <h1>Devtter</h1>
        <h2>Talk about development with developers</h2>
        <div>
          <Button>Login with Github</Button>
        </div>
      </section>

      <style jsx>{`

        section{
          display: grid;
          place-content: center;
          place-items: center;
          height: 100%;
        }
        div{
          margin-top: 16px;
        }
        h1 {
          font-weight: 800;
          margin-bottom: 5px;
          color: ${colors.primary};
        }
        h2 {
          font-size: 21px;
          margin: 0
          color: ${colors.secondary};
        }
      `}</style>
    </>
  );
}
