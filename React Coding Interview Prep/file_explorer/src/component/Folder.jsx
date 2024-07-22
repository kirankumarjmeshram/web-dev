import { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false)
  if (explorer.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
        </div>
        <div style={{display: expand?"block":"none"}} >
          {explorer.items.map((exp) => (
             <Folder explorer={exp}/>
          ))}
        </div>

      </div>
    )
  } else {
    return <span>🗄{explorer.name}</span>
  }
};

export default Folder;
