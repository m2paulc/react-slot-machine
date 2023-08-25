import PropTypes from 'prop-types';
import { useState } from 'react';

function SlotMachine({ array }) {
  const getRandomSymbol = (array) => {
    const index = Math.floor(Math.random() * 3);
    return array[index];
  };

  let slot1 = getRandomSymbol(array);
  let slot2 = getRandomSymbol(array);
  let slot3 = getRandomSymbol(array);

  const [slots, setSlots] = useState([slot1, slot2, slot3]);

  const spin = () => {
    slot1 = getRandomSymbol(array);
    slot2 = getRandomSymbol(array);
    slot3 = getRandomSymbol(array);
    // console.log(slots);
    setSlots([slot1, slot2, slot3]);
  };

  const win = (slots[0] === slots[1]) && (slots[1] === slots[2]);

  return (
    <>
      <div className='container'>
        {/* <span>{ slots[0] }</span>
        <span>{ slots[1] }</span>
        <span>{ slots[2] }</span> */}
        { slots.map((slot, index) => <span key={ index }>{ slot }</span>) }

        <button onClick={ spin }>SPIN</button>

      </div >
      <p>{ win ? 'You Win!' : '' }</p>
    </>
  );
}

SlotMachine.propTypes = {
  array: PropTypes.array
};

export default SlotMachine;