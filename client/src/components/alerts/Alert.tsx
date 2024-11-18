import { useEffect, useState } from "react";

interface Props {
  message: string | null;
}

export default function Alert({ message }: Props) {
  const [visible, setVisible] = useState(true);
  const [alert, setAlertMessage] = useState<string | null>();

  useEffect(() => {
    setAlertMessage(message);
    setTimeout(() => {
      setVisible(false);
    }, 3000);
  }, [alert]);

  return visible ? (
    <div className="alert alert-success" role="alert">
      {alert}
    </div>
  ) : null;
}
