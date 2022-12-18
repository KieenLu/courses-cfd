import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Select = ({ placeholder, options, onChange }) => {
  const [openSelect, setOpenSelect] = useState(false);

  const [label, setLabel] = useState("");
  useEffect(() => {
    const onCloseSelect = () => setOpenSelect(false);
    window.addEventListener("click", onCloseSelect);
    return () => {
      window.removeEventListener("click", onCloseSelect);
    };
  }, []);
  const _openSelect = (ev) => {
    ev.stopPropagation();
    setOpenSelect(true);
  };
  const _onChange = (index) => (ev) => {
    ev.preventDefault();
    setLabel(options[index].label);
    onChange?.({ target: { value: options[index].value } });
  };
  return (
    <div className="select">
      <div className="head" onClick={_openSelect}>
        {label || placeholder}
      </div>
      <div className="sub" style={{ display: openSelect ? "block" : "none" }}>
        {options.map((e, i) => (
          <a onClick={_onChange(i)} key={e.value} href="#">
            {e.label}
          </a>
        ))}
      </div>
    </div>
  );
};
