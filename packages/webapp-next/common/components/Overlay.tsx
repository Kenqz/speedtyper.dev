import { Keys, useKeyMap } from "../../hooks/useKeyMap";

interface OverlayProps {
  onOverlayClick: () => void;
  children: React.ReactNode;
}

export const Overlay: React.FC<OverlayProps> = (props) => {
  useKeyMap(true, Keys.Escape, props.onOverlayClick);
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={props.onOverlayClick}
      >
        <div
          className="relative w-auto my-6 mx-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {props.children}
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
