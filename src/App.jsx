import SlotMachine from './components/SlotMachine';

function App() {
  const symbolArrays = ['🎂', '💋', '❤'];
  // console.log(getRandomSymbol(symbolArrays, index));
  return (
    <>
      <div>
        <h1>Slot Machine</h1>
        <SlotMachine array={ symbolArrays } />
      </div>
    </>
  );
}

export default App;
