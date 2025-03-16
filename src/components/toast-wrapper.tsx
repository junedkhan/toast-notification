import Toast from "./toast";
import { toast } from "../types/toast.types";

interface IToastWrapperProps {
  data: toast[];
  handleClose: (id: number) => void;
}

const ToastWrapper: React.FC<IToastWrapperProps> = ({ data, handleClose }) => {
  return (
    <div className="toast-wrapper">
      {data.map((toast) => {
        return <Toast key={toast.id} {...toast} handleClose={handleClose} />;
      })}
    </div>
  );
};

export default ToastWrapper;
