import Footer from "../components/Footer";
import Header from "../components/Header";
import '../assets/css/OurGallery.css'
import  "../components/Header.css";
import  "../components/Footer.css";
const data = [
    {
        image: `https://html.ditsolution.net/luxury/assets/images/hotel.jpg`,
        images: `https://duruthemes.com/demo/html/cappa/demo1-light/img/rooms/8.jpg`
    },
    
]
function OurGallery() {
    return (
        <>
            <Header />
            <div className="bg">
                <p className="text">Our Gallery</p>
                <p className="text1">HOME    &gt;   Our Gallery</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            {/* <!-- <div className="col-3 Gallery"></div> --> */}
                            <div  className="col-3  Gallery">
                                {data?.map((p) => {
                                    return (
                                        <img className="galleryimage" src={p.image} />
                                    )
                                })}
                            </div>
                            <div  className="col-3  Gallery1">
                                {data?.map((p) => {
                                    return (
                                        <img className="galleryimage" src={p.images} />
                                    )
                                })}
                            </div>

                            <div className="col-3 Gallery2">
                                <div className="Gallery3"></div>
                                <p className="Gtext">DISCOVER THE CHARM OF THE LUVIANA</p>
                                <h2 className="Gtext1">Welcome to our Hotel</h2>

                            </div>
                            <div className="col-3 Gallery4">
                                <p className="Gtext2">The rooms are arranged on the first, second and third floors. On the top floor, there is
                                    also a charming terrace or solarium available for the use of guests, from where you can enjoy the
                                    wonderful view. A cup of tee or coffee, favorite book on the table and breath-taking view in front – this
                                    is all you need to relax and to feel delightful emotions of your vacation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end --> */}
            {/* <!-- start --> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="g">
                            <div className=" position-relative g1">
                                <span className="position-absolute start-100 translate-middle p-2 g2"></span>
                            </div>
                            <div className="g3"></div>
                            <div className="g4">
                                <div className="Gallery3"></div>
                                <p className="Gtext">
                                    RAISING COMFORT TO THE HIGHEST LEVEL</p>
                                <h2 className="Gtext1">Rooms & Luxury Suites</h2>
                                <p className="Gtext3">It is a small comfortable hotel. Our staff offers an attentive high-quality service and is
                                    always ready to offer any help to guests.</p>
                                <p className="Gtext4">The hotel is arranged on three floors. On the ground floor, apart from the reception,
                                    there is a comfortable lounge where you can sit and drink tea or just read. There is also a splendid
                                    terrace, where you can relax and immerse yourself into upcoming morning of a new wonderful day in the
                                    atmosphere of Venetian daily life, watch the city fuss & people who are gathering together and whose
                                    conversations fill all the streets and alleys. There is an amazing fusion of calm and tranquility at hotel
                                    with hectic outside.The rooms are arranged on the first, second and third floors. On the top floor, there
                                    is also a charming terrace or solarium available for the use of guests, from where you can enjoy the
                                    wonderful view. A cup of tee or coffee, favorite book on the table and breath-taking view in front – this
                                    is all you need to relax and to feel delightful emotions of your vacation.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default OurGallery