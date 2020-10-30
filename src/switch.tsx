import React from "react";
import { FlagContext } from "./context";

interface FlagSwitchComposition {
  On: React.FC;
  Off: React.FC;
}
interface FlagSwitchProps {
  flag: string;
  children: React.ReactNode;
}
const FlagSwitchContext = React.createContext();

const FlagSwitch: React.FC & FlagSwitchComposition = ({
  flag,
  children,
}: FlagSwitchProps) => {
  const context = React.useContext(FlagContext);
  if (context === undefined) {
    throw new Error("FlagSwitch needs to be used within a FlagProvider");
  }
  const { checkFlag, user } = context;
  const checkedFlag = React.useMemo(() => checkFlag(flag, user), [
    flag,
    user,
    checkFlag,
  ]);
  return (
    <FlagSwitchContext.Provider value={{ flag, on: checkedFlag }}>
      {children}
    </FlagSwitchContext.Provider>
  );
};

const On: React.FC = ({ children }) => {
  const context = React.useContext(FlagSwitchContext);
  if (context === undefined) {
    throw new Error("FlagSwitch.On needs to be used within a FlagProvider");
  }
  const { on } = context;
  return on ? children : null;
};
const Off: React.FC = ({ children }) => {
  const context = React.useContext(FlagSwitchContext);
  if (context === undefined) {
    throw new Error("FlagSwitch.Off needs to be used within a FlagProvider");
  }
  const { on } = context;
  return on ? null : children;
};

FlagSwitch.On = On;
FlagSwitch.Off = Off;
export default FlagSwitch;