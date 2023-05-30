import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import reactLogo from './assets/react.svg';
import { useMergedata } from './hooks/useMergeData';

function App() {
  const [count, setCount] = useState(0);
  const { mergeData } = useMergedata();

  return <></>;
}

export default App;
