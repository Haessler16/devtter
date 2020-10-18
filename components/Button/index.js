import { colors } from "../../styles/theme";

export const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button{
            background: ${colors.black};
            border: 0;
            color: ${colors.white};
            border-radius: 9999px;
            font-weight: 800;
            padding: 8px 24px;
            display: flex;
            align-items: center;
            font-size: 16px;
            cursor: pointer;
            transition: opacity 0.3s ease;
            outline: none;
        }
        button > :global(svg){
          margin-right: 10px;
        }
        button:hover{
            opacity: .7;
        }
      `}</style>
    </>
  );
};
