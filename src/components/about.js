import React from 'react';
import './about.css';
export default function about() {
    return (<>
        <div>
            <div className='content'>
                <h1 className='mt1'> We are building</h1>
                <h1 className='mt2' >you a home</h1>
                <h3 className='mt3'>  in the world of crypto</h3>
            </div>
            <div className='second'>
                <div>
                    <div className="mid">
                        
                    </div>
                    <div className="text-white text-base lg:text-2xl font-semibold px-2 my-16 flex justify-center w-[200%] md:w-full h-[45%] overflow-scroll">
                        <p className="text-center">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo qui
                            quia explicabo, facilis, ad sed ipsum mollitia quaerat, similique
                            dicta aliquam aspernatur enim hic velit! Reprehenderit
                        </p>
                    </div>
                    <div className="founder">
                        -Co-founders
                    </div>
                </div>
            </div>
        </div>
        <div className='last'>
            <div className='left'>
                <h1 className='partners'>Our Partners</h1>
                <p className='mission'>
                    On our mission to build the home for crypto natives, we have the best networks as our partners. Flint currently supports Ethereum, Solana, Tron, and Binance Smart Chain with additional networks on the way.
                </p>
            </div>
        </div>
    </>
    )
}

