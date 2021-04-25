// Card Component
<div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
  {/* Main Col */}
  <div
    id="profile"
    className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
  >
    <div className="p-4 md:p-12 text-center lg:text-left">
      {/* Image for mobile view */}
      <div
        className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
        style={{
          backgroundImage: `url('./Images/Ray.png')`,
        }}
      ></div>

      <h1 className="text-3xl font-bold pt-8 lg:pt-0">Raymond Nwambuonwo</h1>
      <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
      <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
        {" "}
        What you do
      </p>
      <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
        {" "}
        Your Location - 25.0000° N, 71.0000° W
      </p>
      <p className="pt-8 text-sm">
        Totally optional short description about yourself, what you do and so
        on.
      </p>

      <div className="pt-12 pb-8">
        <p className="bg-green-700 text-center hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
          Get In Touch
        </p>
      </div>

      <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between"></div>
    </div>
  </div>

  {/* Img Col */}
  <div className="w-full lg:w-2/5">
    {/* Big profile image for side bar (desktop)  */}
    <img
      src={Ray}
      className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
      alt="pic"
    />
  </div>
</div>;
