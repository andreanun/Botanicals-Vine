import { RemoveScroll } from "react-remove-scroll";

const ModalWrapper = (props) => {
  const { children, isOpen, onCloseClick } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <RemoveScroll>
      <div className="fixed top-0 left-0 flex justify-end w-full h-full bg-black/30 backdrop-blur-sm font-lato">
        <button className="absolute top-0 right-0 p-2" onClick={onCloseClick}>
          <i className="fa-solid fa-circle-xmark text-emerald-200 text-4xl"></i>
        </button>
        {children}
      </div>
    </RemoveScroll>
  );
};
export default ModalWrapper;
