import { RemoveScroll } from "react-remove-scroll";
import { useRef } from "react";

const ModalWrapper = (props) => {
  const { children, isOpen, onCloseClick } = props;
  const backgroundDivRef = useRef();

  if (!isOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <div
        className="fixed top-0 left-0 flex justify-end items-start w-full h-full bg-black/30 backdrop-blur-sm font-lato z-20"
        ref={backgroundDivRef}
        onClick={(e) => {
          if (e.target === backgroundDivRef.current) {
            onCloseClick();
          }
        }}
      >
        <button className="absolute top-0 right-0 p-2" onClick={onCloseClick}>
          <i className="fa-solid fa-circle-xmark text-emerald-200 text-4xl"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};
export default ModalWrapper;
