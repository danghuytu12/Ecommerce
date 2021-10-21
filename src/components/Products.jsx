import React, { useState, useEffect } from 'react'

const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
               
            }

            return () => {
                componentMounted = false;
            };
        };

        getProducts();
    }, []);

    

    const ShowProducts = () => {
        return (
            <>
                <div className="pb-5 mb-5 buttons d-flex justify-content-center">
                    <button className="btn btn-outline-dark me-2">All</button>
                    <button className="btn btn-outline-dark me-2">Men's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Women's Clothing</button>
                    <button className="btn btn-outline-dark me-2">Jewelery</button>
                    <button className="btn btn-outline-dark me-2">Electric Clothing</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="mb-4 col-md-3">
                                <div class="card h-100 text-center p-4" key={product.id}>
                                    <img src={product.image} class="card-img-top" alt={product.title} height="250px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p class="card-text lead fw-bold">
                                            ${product.price}
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </>
        )
    }
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="mb-5 col-12">
                        <h1 className="text-center display-6 fw-bolder">Latest Products</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <ShowProducts />
                </div>
            </div>
        </div>
    )
}

export default Products
