import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'; 

type UserAttempData = {
  userWord: string[];
  setUserWord: Dispatch<SetStateAction<string[]>>;
  attemp: number;
  setAttemp: Dispatch<SetStateAction<number>>;
};

type UserAttempProps = {
  children: ReactNode;
};

export const UserAttempContext = createContext({} as UserAttempData);

export function UserAttempProvider({ children }: UserAttempProps) {
  const [userWord, setUserWord] = useState<string[]>([
    '',
    '',
    '',
    '',
    '',
  ]);
  const [attemp, setAttemp] = useState<number>(0);

  return (
    <UserAttempContext.Provider
      value={{ userWord, setUserWord, attemp, setAttemp }}
    >
      {children}
    </UserAttempContext.Provider>
  );
}
