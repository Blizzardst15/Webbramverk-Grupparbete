import React, { useContext, useEffect } from 'react';
import { Skola } from './SkolaPrivate';
import { GlobalContext } from './context/GlobalState';


export const SkolaList2 = () => {
  const { skolor, getSkolor } = useContext(GlobalContext);
  
    useEffect(() => {
    getSkolor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Skolor</h3>
      <ul className="list">
        {skolor.map(skola => (<Skola key={skola._id} skola={skola} />))}
      </ul>
    </>
  )
}
