import Header from "../components/Header"
import '../assets/css/Spa.css'
import  "../components/Header.css";
import Footer from "../components/Footer";
import  "../components/Footer.css";
const imagesData = [
    {
        image: `https://html.ditsolution.net/luxury/assets/images/hotel.jpg`,
        type: 'THE BEST LUXURY HOTEL',
        title: 'Relaxing Moments at Our Spa Center.',
        descrpiton: 'Take a refreshing dip in our indoor swimming pool, perfect for lap swimming, water aerobics, or leisurely relaxation. Our pool area is designed to provide a comfortable and invigorating aquatic experience.',
        time: ' Daily: 10.00 am to 7.00 pm'
    },

]
const imagesData1 = [
    {
        image:`https://html.ditsolution.net/luxury/assets/images/hotel-1.jpg`,
        type: 'EXPERIENCED',
        title: 'The Health Club & Pool',
        descrpiton: 'Our health club is equipped with the latest fitness machines, including treadmills, ellipticals, stationary bikes, and strength training equipment. Each machine is designed to provide an effective and enjoyable workout.',
        time: ' Daily: 10.00 am to 7.00 pm'
    }

]
function Spa() {
    return (
        <>
            <Header />
            <div className="bg">
                <p className="text">Spa</p>
                <p className="text1">HOME  &gt; Spa</p>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <h1 className="col-12  pt-5 spatext">Spa & Wellness</h1>
                            <p className="col-12 spatext1">Combine our services for a full day of pampering with our specially curated spa packages. Enjoy a mix of massages, facials, and body treatments that will leave you feeling completely refreshed and renewed.Enhance your spa experience with access to our wellness amenities, including a steam room, sauna, and tranquil relaxation lounge. Let the soothing atmosphere envelop you as you unwind and rejuvenate. </p>
                            <p className="col-12 spatext2">Escape the stresses of everyday life and treat yourself to a rejuvenating spa experience
                                at ocean Spa Retreat.</p>
                          
                            {/* <i className="bi bi-arrow-right "></i>
                            
                            <p className="d"> No parties or events</p>
                           
                            <i className="bi bi-arrow-righ"></i>
                            <p className="d">Check-in: 3:00 PM - 9:00 PM</p>
                      
                            <i className="bi bi-arrow-right"></i>
                            <p className="d"> Checkout: 11:00 AM</p>
                            <i className="bi bi-arrow-right"></i>
                            <p className="d">No smoking</p> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end --> */}
            {/* <!-- bg start --> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-4 spa" data-aos="fade-right">
                                {imagesData?.map((p) => {
                                    return (
                                        <>
                                            <img  className="spaimages"  src={p.image} data-aos="fade-right" />
                                        </>
                                    )
                                })}
                            </div>
                            <div className="col-4 spa1" data-aos="fade-left">
                                {imagesData?.map((p) => {
                                    return (
                                        <>
                                            <p className="stext">{p.type}</p>
                                            <h1 className="stext1">{p.title}</h1>
                                            <p className="stext2">{p.descrpiton}</p>
                                            <i className="bi bi-clock e"></i><p className="stext3"> {p.time}</p>
                                        </>
                                    )
                                })}
                            </div>
                            <div className="col-4 spa3" id="stext1" data-aos="fade-left">
                                {imagesData1?.map((p) => {
                                    return (
                                        <>
                                            <p className="stext">{p.type}</p>
                                            <h1 className="stext1">{p.title}</h1>
                                            <p className="stext2">{p.descrpiton}</p>
                                            <i className="bi bi-clock e"></i><p className="stext3"> {p.time}</p>
                                        </>
                                    )
                                })}
                            </div>
                            <div className="col-4 spa2" data-aos="fade-right">
                            {imagesData1?.map((p) => {
                                    return (
                                        <>
                                            <img  className="spaimages"  src={p.image} data-aos="fade-right" />
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
export default Spa