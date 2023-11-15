// I PUT THIS FILE GLOBALLY IN /app BECAUSE I WANT THE SAME LOADER TO BE USED ACROSS THE ENTIRE SITE

import { MoonLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex justify-center animate-spin">
      <MoonLoader color="#3CB879" />
    </div>
  );
}

export default Loading;
