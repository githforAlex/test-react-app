import React, { useEffect, useState } from "react";
import Header from "./Header";
import StartPage from "./StartPage";
import Content from "./Content";
import NotFound from "./notFound";

function MainComp() {

    const [username, setUsername] = useState("")
    const [data, setData] = useState(Object)
    const [repositories, setRepositories] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const onChange = e => {
        setUsername(e.target.value)
    }

    const getInfo = async e => {

        e.preventDefault()
        const profile = await fetch(`https://api.github.com/users/${username}`)
        const profileJson = await profile.json()
        console.log(profileJson)
  
        const сurl = `https://api.github.com/users/${profileJson.login}/repos?per_page=4&page=1`
        const repositories = await fetch(сurl)
        const reposJson = await repositories.json()
        console.log(reposJson)

        setData(profileJson)
        setRepositories(reposJson)
        console.log(data.login)
    }

    useEffect(() =>{
        const getRepos = async () => {
            const repositories = await fetch(`https://api.github.com/users/${data.login}/repos?per_page=4&page=${currentPage}`)
            const reposJson = await repositories.json()
            console.log(reposJson)
            setRepositories(reposJson)
        }
        getRepos()
    }, [currentPage])

    const lastItemIndex = currentPage * 4
    const firstItemIndex = lastItemIndex - 3

    
    const paginate = pageNumber => setCurrentPage(pageNumber)

    if (data.login === undefined && data.message === undefined) {
        return (
            <div className="wrapper">          
                    <Header getInfo={getInfo}
                    onChange={onChange}
                    username={username}
                    />
                    <div className="content">
                    <StartPage />                        
                    </div>
            </div>
        )

    } else if (data.message === "Not Found"){
        return (
        <div className="wrapper">                
                <Header getInfo={getInfo}
                onChange={onChange}
                username={username}
                />
                <div className="content">
                <NotFound  />
                </div>
        </div>
        )
    } else {
    return (
        <div className="wrapper">
                <Header getInfo={getInfo}
                onChange={onChange}
                username={username}
                />
                <Content
                data={data} 
                paginate={paginate}
                repositories={repositories}
                lastItemIndex={lastItemIndex}
                firstItemIndex={firstItemIndex}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
        </div> 
    )
}

}
  
export default MainComp;