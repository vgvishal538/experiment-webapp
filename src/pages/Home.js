import React, { useEffect, useState } from 'react';
import CardItems from '../components/CardItems';
import Loader from '../components/Loader';


const Home = () => {

    const [resData, setresData] = useState([]);
    const [loader, setLoader] = useState(false);
    useEffect(() => {

        apiCall();
    }, []);

    const apiCall = async () => {
        try {
            const url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=e15c2d84266c4664a44b0b9d510ec594&pageSize=50";
            setLoader(true);
            const responseData = await fetch(url, { method: "GET" });
            const res = await responseData.json();

            setresData(res.articles);
            setLoader(false);
        } catch (error) {
            console.log(error);
            setLoader(false);
        }
    }

    return (

        <div className="content">
            {loader ? (
                <Loader />
            ) : (
                resData && resData.length > 0 ? (
                    resData.map((item, index) => (
                        <div key={index}>
                            <CardItems
                                image={item.urlToImage}
                                title={item.title}
                                description={item.description}
                                sourceName={item.source.name}
                                sourceLink={item.url}
                            />
                        </div>
                    ))
                ) : (
                    <p>No data available.</p>
                )
            )}
        </div>
    );
};

export default Home;
