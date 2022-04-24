import React from 'react';
import './css/index.css'


const LazyComponent = React.lazy(() => import('./Components/MainComponents'))
function App() {
  return (
    <div className="App">
      <LazyComponent />
    </div>
  );
}

export default App;
