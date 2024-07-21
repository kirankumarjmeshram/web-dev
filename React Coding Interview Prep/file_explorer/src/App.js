import { useState } from 'react';
import Folder from './component/Folder';
import explorer from './data/folderData';

function App() {
  const [folderData, setFolderData] = useState(explorer);
  console.log(folderData)
  return (
    </div >
    <div className="App">
    </div>
  );
}

export default App;
