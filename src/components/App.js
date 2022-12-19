import OpenIssueIcon from './OpenIssueIcon';
import CloseIssueIcon from './CloseIssueIcon';
import IssueList from './IssueList';
import { useState } from 'react';

function App() {
  const [filter,setFilter] = useState(0)

  const handleOpenIssues = () => {
    setFilter(1)
  }
  const handleCloseIssues = () => {
    setFilter(2)
  }

  
  return (
    <div className="container">
      <div className="box">
        <div className="box-header">
          <div onClick={handleOpenIssues} data-testid="open-issues" className="open-issues">
            <OpenIssueIcon /> Open
          </div>
          <div onClick={handleCloseIssues} data-testid="close-issues" className="close-issues">
            <CloseIssueIcon /> Closed
          </div>
        </div>
        <IssueList page={1} filter={filter}  />        
      </div>
    </div>
  );
}

export default App;
