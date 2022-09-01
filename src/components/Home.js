import React from 'react'
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import left from "../assets/left.png";
import './home.css';
export default function Home() {
    return (
        <>
        <div className='img'>
            <div className='left-top '>
                <img className='wd1' src={img1} alt="loading"/>
            </div>
            <div className='right-top '>
            <img className='wd1' src={img3} alt="loading"/>
            </div>
            <div className='left-bottom '>
            <img className='wd' src={img2} alt="loading"/>
            </div>
            <div className='right-bottom '>
            <img className='wd' src={img4} alt="loading"/>
            </div>
        </div >
            <div className='home'>
                <h2 className='head'>10% returns.</h2>
                <h2 className='head'>Now Yours.</h2>
                <h2  className='h' >Invest and grow your stablecoins.</h2>
                <p className='btns'>Invest now</p>
            </div>
            <div className='second'>
                <div className='left'>
                    <img src={left} alt="devices" />
                </div>
                <div className='right'>
                    <div className='rmain'>
                        <h1 className='heading'>They grow so fast</h1>
                        <p className='para'>Your USDTs and USDCs feel so at home here, that they will grow by
                            10% by the end of the year. Allow your stable coins to generate
                            stable returns for you.</p>
                    </div>
                    <div className='rmain'>
                        <h1  className='heading'>No secrets, no fine print</h1>
                        <p className='para'>There are no hidden fees on Flint. Whatever charges you will incur
                            will be shared with you upfront. We take transparency seriously.</p>
                    </div>
                    <div className='rmain ramin2'>
                        <h1  className='heading'> Unconditionally unclocked</h1>

                        <p className='para'>There are no lock-in periods on Flint. You can withdraw anytime
                            and have the funds in your wallet instantly. We keep your
                            investment liquid, even when its growing.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
