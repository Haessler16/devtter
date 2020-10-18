import { colors } from "../../styles/theme";

export const Button = ({ children, onClick }) => {
  return (
    <>
      <button>{children}</button>
      <style jsx>{`
        button{
            background: ${colors.black};
            border: 0;
            color: ${colors.white};
            border-radius: 9999px;
            font-weight: 800;
            padding: 8px 24px;
            font-size: 16px;
            cursor: pointer;
            transition: opacity 0.3s ease;
        }
        button:hover{
            opacity: .7;
        }
      `}</style>
    </>
  );
};
