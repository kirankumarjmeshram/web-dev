import { useState } from 'react';
import Folder from './component/Folder';
import explorer from './data/folderData';

function App() {
  const [folderData, setFolderData] = useState(explorer);
  // console.log(folderData)
  return (
    <div className="App">
      <Folder explorer = {explorer} />
    </div>
  );
}

export default App;
