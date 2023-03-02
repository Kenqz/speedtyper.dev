import { Overlay } from "../Overlay";

interface GithubLoginOverlayProps {
  closeModal: () => void;
  initializeAuthentication: () => void;
}

export const GithubLoginOverlay: React.FC<GithubLoginOverlayProps> = ({
  closeModal,
  initializeAuthentication,
}: GithubLoginOverlayProps) => {
  return (
    <>
      <Overlay onOverlayClick={closeModal}>
        <div className="max-w-[800px] border-0 lg:rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <div className="flex justify-center items-center p-5 rounded-t">
            {/* Button Here */}
          </div>
          <h3 className="text-dark-ocean flex-grow text-5xl tracking-wider font-thin flex justify-center">
            Welcome
          </h3>
          <p className="text-dark-ocean text-lg flex-grow tracking-widest font-thin flex justify-center p-10">
            Signup to SpeedTyper with your Github account to save your results
            and get on the toplist.
          </p>
          <div className="flex justify-center mb-6 flex-auto">
            <button
              className={`font-thin flex bg-black justify-center py-4 px-10 text-off-white trailing-widest rounded-full text-lg outline-none border-none`}
              style={{
                outline: "none",
              }}
              onClick={initializeAuthentication}
            >
              Continue with Github
            </button>
          </div>
        </div>
      </Overlay>
    </>
  );
};
