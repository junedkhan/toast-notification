import React from "react";
import ToastWrapper from "./components/toast-wrapper";

import { toast, toastType } from "./types/toast.types";
import "./styles.css";

/*

1) buttons - success, ifo, err, warning
2) show the toast on button click
3) stack toast if mutiple button clicks
4) Slide Animation
5) auto hide after 5s
6) We should able to close explicitly

*/

interface IToastConainerProps {
  delay: number;
}

const ToastContaier: React.FC<IToastConainerProps> = ({ delay }) => {
  const [toastsData, setToastData] = React.useState<toast[]>([]);
  const toastTimerRef = React.useRef<
    Record<number, ReturnType<typeof setTimeout>>
  >({});

  const handleClose = (id: number) => {
    clearTimeout(toastTimerRef.current[id]);
    setToastData((prev) => {
      const filteresToast = prev.filter((toast) => toast.id !== id);
      return filteresToast;
    });
  };

  const handleAddtoast = (message: string, type: toastType) => {
    const id = Date.now();
    const newToast = {
      id,
      message,
      type,
    };

    setToastData((prev) => {
      return [...prev, newToast];
    });

    toastTimerRef.current[id] = setTimeout(() => {
      handleClose(id);
    }, delay);
  };

  return (
    <div>
      <ToastWrapper data={toastsData} handleClose={handleClose} />
      <button onClick={() => handleAddtoast("succes", toastType.success)}>
        Success
      </button>
      <button onClick={() => handleAddtoast("error", toastType.error)}>
        Error
      </button>
      <button onClick={() => handleAddtoast("info", toastType.info)}>
        Info
      </button>
      <button onClick={() => handleAddtoast("warning", toastType.warning)}>
        Warning
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <ToastContaier delay={5000} />
    </div>
  );
}
