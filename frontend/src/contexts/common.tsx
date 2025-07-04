import { createContext, useState } from "react";

type CommonContextType = {
  sideBarOpen: boolean;
  handleSideBarOpen: () => void;
  canvasMode: boolean;
  handleCanvasMode: () => void;
};

const CommonContext = createContext<CommonContextType | undefined>(undefined);

export function CommonProvider({ children }: { children: React.ReactNode }) {
  const [canvasMode, setCanvasMode] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const handleSideBarOpen = () => {
    setSideBarOpen(!sideBarOpen);
  };

  const handleCanvasMode = () => {
    setCanvasMode(!canvasMode);
  };

  return (
    <CommonContext.Provider
      value={{ sideBarOpen, handleSideBarOpen, canvasMode, handleCanvasMode }}
    >
      {children}
    </CommonContext.Provider>
  );
}

// Context를 export하여 별도 훅 파일에서 사용할 수 있도록 함
export { CommonContext };
