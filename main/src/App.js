import './App.css';
import { useMemo, useRef } from "react";
import { GroupedVirtuoso } from 'react-virtuoso'

function App() {
  const groupCounts = useMemo(() => {
    return Array(1000).fill(10)
  }, [])

  const virtuoso = useRef(null)

  return (
    <div className="App">
      <button onClick={e => {
        e.preventDefault()
        virtuoso.current.scrollToIndex({
          index: 22,
        })
      }}>
        Jump to 22.
      </button>
      <GroupedVirtuoso
        ref={virtuoso}
        style={{ height: '100vh' }}
        groupCounts={groupCounts}
        groupContent={index => {
          return (
            <div style={{ backgroundColor: 'white' }}>Group {index * 10} &ndash; {index * 10 + 10}</div>
          )
        }}
        itemContent={(index, groupIndex) => {
          return (
            <div>{index} (group {groupIndex})</div>
          )
        }}
      />
    </div>
  );
}

export default App;
