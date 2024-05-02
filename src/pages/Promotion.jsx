import React from "react";
import '../assets/css/login.css';
import useFetch from "../hooks/useFetch";
import BASE_URL from "../hooks/baseURL";

const Promotion = () => {
    const {data:promotions} = useFetch(BASE_URL + "/promotion");
    console.log(promotions);

    return (
        <>
            <div className="mt-5 pt-5 text-center mb-5">
                <h3 className="my-3 gradient-text">PROMOTION</h3>
                {
                    promotions && promotions.map((promo, index) => (
                        <div key={index}>
                            <img src={promo.img_url} alt="" className="w-100 rounded-lg my-2 px-sm-5 px-2" />
                        </div>
                    )
                )}
            </div>
        </>
    );
}

export default Promotion