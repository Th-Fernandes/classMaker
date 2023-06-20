import React from "react";

export function useLogoSize() {
  const windowSize = React.useRef([window.innerWidth, window.innerHeight]);

  const logoWidth = windowSize.current[0] < 600 ? 139 : 269;
  const logoHeight = windowSize.current[1] < 600 ? 20 : 40;

  return {
    logoWidth,
    logoHeight
  };
}

/* 
  const [userScreenWidth,  setUserScreenWidth] = React.useState<number>(0);

  React.useEffect(() => {
    const userScreenWidth = window.innerWidth;
    setUserScreenWidth(userScreenWidth);
  }, []);

  const logoWidth = userScreenWidth < 600 ? 139 : 269;
  const logoHeight = userScreenWidth < 600 ? 20 : 40;

  return {
    logoWidth,
    logoHeight
  };
*/