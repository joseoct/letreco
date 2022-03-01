import { useContext } from "react";
import { UserWordContext } from "../contexts/UserWordContext";

export function Keyboard () {
  const { setUserWord } = useContext(UserWordContext);

  return (
    <>
      <div className="keyboard">
        <div className="keyboard__row">
          <button onClick={() => setUserWord((state) => state + 'q')}>q</button>
          <button onClick={() => setUserWord((state) => state + 'w')}>w</button>
          <button onClick={() => setUserWord((state) => state + 'e')}>e</button>
          <button onClick={() => setUserWord((state) => state + 'r')}>r</button>
          <button onClick={() => setUserWord((state) => state + 't')}>t</button>
          <button onClick={() => setUserWord((state) => state + 'y')}>y</button>
          <button onClick={() => setUserWord((state) => state + 'u')}>u</button>
          <button onClick={() => setUserWord((state) => state + 'i')}>i</button>
          <button onClick={() => setUserWord((state) => state + 'o')}>o</button>
          <button onClick={() => setUserWord((state) => state + 'p')}>p</button>
        </div>

        <div className="keyboard__row">
          <button onClick={() => setUserWord((state) => state + 'a')}>a</button>
          <button onClick={() => setUserWord((state) => state + 's')}>s</button>
          <button onClick={() => setUserWord((state) => state + 'd')}>d</button>
          <button onClick={() => setUserWord((state) => state + 'f')}>f</button>
          <button onClick={() => setUserWord((state) => state + 'g')}>g</button>
          <button onClick={() => setUserWord((state) => state + 'h')}>h</button>
          <button onClick={() => setUserWord((state) => state + 'j')}>j</button>
          <button onClick={() => setUserWord((state) => state + 'k')}>k</button>
          <button onClick={() => setUserWord((state) => state + 'l')}>l</button>
        </div>

        <div className="keyboard__row">
          <button onClick={() => setUserWord((state) => state + 'z')}>z</button>
          <button onClick={() => setUserWord((state) => state + 'x')}>x</button>
          <button onClick={() => setUserWord((state) => state + 'c')}>c</button>
          <button onClick={() => setUserWord((state) => state + 'v')}>v</button>
          <button onClick={() => setUserWord((state) => state + 'b')}>b</button>
          <button onClick={() => setUserWord((state) => state + 'n')}>n</button>
          <button onClick={() => setUserWord((state) => state + 'm')}>m</button>
        </div>
      </div>
    </>
  );
}
