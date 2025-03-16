import { toast } from "../types/toast.types";

interface ItoastPros extends toast {
  handleClose: (id: number) => void;
}

const Toast: React.FC<ItoastPros> = ({ id, message, type, handleClose }) => {
  return (
    <div className={`toast ${type}`} onClick={() => handleClose(id)}>
      {message}
      <span>X</span>
    </div>
  );
};

export default Toast;
