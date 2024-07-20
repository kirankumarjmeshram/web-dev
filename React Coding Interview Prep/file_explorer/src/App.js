import { useState } from 'react';
import { Folder } from './component/Folder';
import explorer from './data/folderData';

function App() {
  const [folderData, setFolderData] = useState([...explorer]);
  return (
    <div className="App">
      <Folder folderDat /div>
      );
}

      export default App;
