import { useState } from 'react';
import { Output } from './Output';
export const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <>
      <h1>Hello World</h1>

      {!changedText && <Output text="만나서 반가움" />}
      {changedText && <Output text="바뀜!" />}

      {<button onClick={changeTextHandler}>Change Text</button>}
    </>
  );
};
