import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Loading from './Loading';
import IssueItem from './IssueItem';
import { useEffect, useState } from 'react';
import useIssues from '../hooks/useIssues';

function IssueList({page,filter}) {
  const [isFetching, setIsFetching] = useInfiniteScroll();
  const [isEnd,setIsEnd] = useState(false)
  const [isLoading,isError,issues] = useIssues(page,filter,setIsEnd)




  if (!isLoading && !isError) {
    return (
      <>
        <div className="issues" data-testid="issues">
          {issues.map((issue) => {
            return(
              <IssueItem key={Math.random()} issue={issue} />
            )
          })}
        </div>
        {isFetching && !isEnd ? <IssueList page={page + 1} filter={filter} /> : null }
      </>
    );
  }
  else if (isLoading) {
    return(
      <Loading/>
    )
  }
  else if (isError) {
    const error = {
      'title' : 'Not found',
      'status' : 'open'
    }
    return(
      <IssueItem issue={error} />
    )
  }

}

export default IssueList;
