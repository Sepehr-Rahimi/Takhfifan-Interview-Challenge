import { useEffect, useState } from "react"




const axios = require('axios').default


const useIssues = (page,inputFilter,setIsEnd) => {
    const [isLoading,setIsLoading] = useState(false)
    const [isError,setIsError] = useState(false)
    const [issues,setIssues] = useState([])
    const [filter,setFilter] = useState(inputFilter)

    useEffect(() => {
        setFilter(inputFilter)
    },[inputFilter])


    useEffect(() => {

        const getIssues = async () => {
            try {
                setIsError(false)
                setIsLoading(true)
                const data = await axios.get(`http://localhost:9000/issues?page=${page}&issuesFilter=${filter}`)
                setIsLoading(false)
                setIssues(data.data)
                if ( data.data.length === 0 ) {
                    setIsEnd(true)
                }
            } catch (error) {
                setIsLoading(false)
                setIsError(true)
            }
        }
        getIssues()


    },[filter,])





    return([
        isLoading,
        isError,
        issues,
    ])
}


export default useIssues