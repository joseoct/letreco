import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'; 

type UserWordData = {
  userWord: string;
  setUserWord: Dispatch<SetStateAction<string>>;
};

type UserWordProps = {
  children: ReactNode;
};

export const UserWordContext = createContext({} as UserWordData);

export function UserWordProvider({ children }: UserWordProps) {
  const [userWord, setUserWord] = useState<string>('');

  return (
    <UserWordContext.Provider value={{ userWord, setUserWord }}>
      {children}
    </UserWordContext.Provider>
  );
}
