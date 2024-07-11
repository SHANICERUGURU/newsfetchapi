import React, { useState, useEffect } from "react";
import News from "./news";
const NewsContainer = () => {
    const [newsdata, setNewsData] = useState([])

    useEffect(() => {
        fetch("https://newsdata.io/api/1/latest?apikey=pub_45351933a2e4773cdbf068cafdd24880cfa3c&language=en").then((response) => {
            response.json()
                .then((resp) => {
                    console.log(resp);
                    setNewsData(resp.results)
                })
        }).catch((err) => {
            console.error(err)
        })
    }, [])
    return (
        <>
            <h1>OUR NEWS PAGE!!</h1>
            <div className="container">
                <div className="row justify-content-around">
                    {
                        newsdata.map((news, index) => {     
                            return (
                                <div className="col-md-4 mb-4" key={index}>
                                    <News product={news} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default NewsContainer