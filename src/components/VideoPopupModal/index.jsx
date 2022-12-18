import classNames from "classnames";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { ModalStyle } from "./style";

export const VideoPopupModal = ({
  children,
  visible,
  onCancel,
  maskClosable = true,
}) => {
  useEffect(() => {
    document.documentElement.style.overflow = visible ? "hidden" : "";
  }, [visible]);

  const onClickOverlay = () => {
    if (maskClosable) onCancel?.();
  };
  if (!visible) return null;
  return createPortal(
    <ModalStyle onClick={onClickOverlay} className={classNames({ visible })}>
      <div className="wrap popup-video" onClick={(ev) => ev.preventDefault()}>
        {children}
        <div className="close" onClick={onCancel}></div>
      </div>
    </ModalStyle>,
    document.body
  );
};
