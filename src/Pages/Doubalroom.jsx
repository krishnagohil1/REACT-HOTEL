import Footer from "../components/Footer";
import Header from "../components/Header"
import '../assets/css/Doubalroom.css'
import  "../components/Header.css";
import  "../components/Footer.css";
import { Link } from "react-router-dom"
const data = [
    {
        image: 'https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/4.jpg',
        title: 'Laxury Family Delux',
        descrpition: 'Drift into a restful slumber on our sumptuous king-sized bed outfitted with premium linens and fluffy pillows, ensuring a night of unparalleled comfort.Step out onto your private balcony and savor the .',
        price: '$200 per night',
        href: "/booknow"
    },

]

const data1 = [
    {
        image: 'https://duruthemes.com/demo/html/cappa/demo1-light/img/slider/5.jpg',
        title: 'Simple Family Delux',
        descrpition: 'Drift  Indulge in a spa-like experience in the ensuite bathroom equipped with a deep soaking tub, rainfall shower, and deluxe amenities, offering the perfect sanctuary to unwind and rejuvenate .',
        price: '$150 per night',
        href: "/booknow"
    },

]
function Doubalroom() {
    return (
        <>
            <Header />
            <div className="bg">
                <p className="rtext">Rooms & Suites</p>
                <p className="rtext1">HOME &gt; Rooms & Suites</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-5">
                                {data?.map((p) => {
                                    return (
                                        <>
                                            <img className="doubalroom" src={p.image} />

                                        </>
                                    )
                                })}
                            </div>
                            <div className="col-4 room1">
                                {data.map((p) => {
                                    return (
                                        <>
                                        <div>
                                            <i className="bi bi-star-fill myicon"></i>
                                            <i className="bi bi-star-fill myicon"></i>
                                            <i className="bi bi-star-fill myicon"></i>
                                            <i className="bi bi-star-fill myicon"></i>
                                            <i className="bi bi-star-fill myicon"></i>
                                            </div>
                                            <h2 style={{fontFamily: 'Times New Roman'}}>{p.title}</h2>
                                            <p className="t1">{p.descrpition}</p>
                                            <p className="t2">{p.price}</p>
                                            <button  className="roombutton" >
                                                <a href={p.href}>
                                                BOOK NOW
                                                </a>     
                                                </button>
                                        </>
                                    )
                                })}
                            </div>

                            <div className="col-4 doubalroom2">
                                {data1.map((p) => {
                                    return (
                                        <>
                                        <div>
                                            <i className="bi bi-star-fill myicon"></i>
                                            <i className="bi bi-star-fill myicon"></i>
                                            <i className="bi bi-star-fill myicon"></i>
                                            <i className="bi bi-star-fill myicon"></i>
                                            <i className="bi bi-star-fill myicon"></i>
                                            </div>
                                            <h2 style={{fontFamily: 'Times New Roman'}}>{p.title}</h2>
                                            <p className="t1">{p.descrpition}</p>
                                            <p className="t2">{p.price}</p>
                                            <button  className="roombutton" >
                                                <a href={p.href}>
                                                BOOK NOW
                                                </a>     
                                                </button>
                                        </>
                                    )
                                })}
                            </div>
                            <div className="col-5">
                                {data1?.map((p) => {
                                    return (
                                        <>
                                            <img className="col-5 room3" src={p.image} />

                                        </>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Doubalroom