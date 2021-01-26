import React from "react";
import { useMyAlertContext } from "../context/Alert/alertContextProvider";

export default function AlertBox() {
  const alertComp = useMyAlertContext();

  if (!alertComp.visible) return null;

  return <div className="alertComp">{alertComp.text}</div>;
}
