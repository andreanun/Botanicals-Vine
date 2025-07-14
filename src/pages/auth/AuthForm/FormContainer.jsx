const FormContainer = (props) => {
  const { children } = props;

  return (
    <div className="flex">
      <div className="relative hidden md:flex">
        <img
          className="object-cover h-screen"
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-800/30"></div>
      </div>
      <div className="flex flex-col items-center justify-center flex-1 h-screen bg-green-50">
        <div className="flex flex-col items-center mx-2 my-8">
          <img
            className="w-16 mb-2"
            src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
          />
          <div className="font-playfair text-3xl text-emerald-700">
            Botanicals & Vine
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
