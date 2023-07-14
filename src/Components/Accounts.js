import React, { useRef, useEffect } from 'react'
import { AccountList } from '../Helpers/AccountList'
import plus2 from '../Assets/plus2.png'

const Accounts = ( {format} ) => {
    const useHorizontalScroll = () => {
        const points = useRef();
            useEffect(() => {
                const p = points.current;
                if (p) {
                    const wheel = (e) => {
                    if (e.deltaY == 0) return;
                    e.preventDefault();
                    p.scrollTo({
                        left: p.scrollLeft + e.deltaY,
                        behavior: "smooth"
                    })};
                p.addEventListener("wheel", wheel);
                return () => p.removeEventListener("wheel", wheel);
            }
            }, []);
            return points;
        }

  return (
    <div className="accounts">
        <h1 className="account-header">Accounts</h1>
        <div className="account-carousel" ref={useHorizontalScroll()}>
            {AccountList.map(((acc, key) => {
                return (
                    <a className="account-card" href="#" key={key}>
                        <img src={acc.img} />
                        <div className="account-text">
                            <h2>{acc.symbol} {format(parseFloat(acc.amountAvail))}</h2>
                            <p>{acc.currency}</p>
                        </div>
                    </a>
                )
            }))}
            <a className="account-card" href="#">
                <img src={plus2}/>
                <div className="account-text">
                    <h2>Open Account</h2>
                    <p>50+ Currencies</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default Accounts