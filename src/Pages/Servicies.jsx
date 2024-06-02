import Header from "../components/Header"
import '../assets/css/Servicies.css'
import '../components/Header.css'
import Footer from "../components/Footer"
import '../components/Footer.css'
import brand from '../assets/images/brand1.png'
import brand1 from '../assets/images/brand4.png'
import brand2 from '../assets/images/brand6.png'
import brand3 from '../assets/images/brand7.png'
const imagesData = [
    {
        image: `https://duruthemes.com/demo/html/cappa/demo1-light/img/restaurant/1.jpg`,
        type: 'DISCOVER',
        title: 'The Restaurant',
        descrpiton: 'At Ocean Restaurant, we believe in more than just serving great food; we believe in creating memorable experiences. Our attentive staff is dedicated to providing impeccable service.',
        time: 'Daily: 7.00 am to 9.00 pm'


    },


]
const imagesData1 = [
    {
        image: `https://duruthemes.com/demo/html/cappa/demo1-light/img/spa/3.jpg`,
        type: 'EXPERIENCES',
        title: 'Spa Center',
        descrpiton: 'Indulge in the lap of luxury with our exclusive amenities designed to enhance your spa experience.Relax and unwind in our serene lounge area, complete with plush seating and refreshments.',
        time: 'Daily: 7.00 am to 9.00 pm'



    },
]
const imagesData2 = [
    {
        image: `https://duruthemes.com/demo/html/cappa/demo1-light/img/spa/2.jpg`,
        type: 'MODERN',
        title: 'Fitness Center',
        descrpiton: 'Reach your fitness goals faster with the help of our team of certified fitness professionals dedicated to helping you succeed. Whether youre a seasoned athlete or new to exercise.',
        time: 'Daily: 6.00 am to 8.00 pm'



    },
]
const imagesData3 = [
    {
        image: `https://duruthemes.com/demo/html/cappa/demo1-light/img/spa/1.jpg`,
        type:'EXPERIENCES',
        title:'The Health Club & Pool',
        descrpiton:'Dive into serenity in our sparkling swimming pool, a serene oasis nestled amidst lush greenery and panoramic views. Whether youre seeking a refreshing morning swim .',
        time:'Daily: 10.00 am to 7.00 pm'



    },
]
function Servicies() {
    return (
        <>
            <Header />
            <div class="bg">
                <p class="btext1">DISCOVER</p>
                <p class="btext"> Our Services</p>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div style={{marginTop:'100px'}} class="col-4 s"  data-aos="fade-right">
                                {imagesData?.map((p) => {
                                    return (
                                        <img class="image" src={p.image} data-aos="fade-right" />
                                    )
                                })}
                            </div>
                            <div style={{marginTop:'100px'}} class="col-4 s1" id="stext" data-aos="fade-left">
                                {imagesData?.map((p) => (
                                    <>
                                        <p class="stext">{p.type}</p>
                                        <h1 class="stext1">{p.title}</h1>
                                        <p class="stext2">{p.descrpiton}</p>
                                        <i class="bi bi-stopwatch "></i><p class="t"> {p.time}</p>
                                    </>
                                ))}
                            </div>
                            <div class="col-4 s3" data-aos="fade-right">
                                {imagesData1?.map((p) => (
                                    <>
                                        <p class="stext">{p.type}</p>
                                        <h1 class="stext1">{p.title}</h1>
                                        <p class="stext2">{p.descrpiton}</p>
                                        <i class="bi bi-stopwatch "></i><p class="t"> {p.time}</p>
                                    </>
                                ))}
                            </div>
                            <div class="col-4 s8" data-aos="fade-left">
                                {imagesData1?.map((p) => {
                                    return (
                                        <img class="image" src={p.image} data-aos="fade-right" />
                                    )
                                })}
                            </div>
                            <div class="col-4 s"  data-aos="fade-right">
                                {imagesData2?.map((p) => {
                                    return (
                                        <img class="image" src={p.image} data-aos="fade-right" />
                                    )
                                })}
                            </div>
                            <div class="col-4 s1" data-aos="fade-right">
                                {imagesData2?.map((p) => (
                                    <>
                                        <p class="stext">{p.type}</p>
                                        <h1 class="stext1">{p.title}</h1>
                                        <p class="stext2">{p.descrpiton}</p>
                                        <i class="bi bi-stopwatch "></i><p class="t"> {p.time}</p>
                                    </>
                                ))}
                            </div>
                            <div class="col-4 s3" data-aos="fade-right">
                                {imagesData3?.map((p) => (
                                    <>
                                        <p class="stext">{p.type}</p>
                                        <h1 class="stext1">{p.title}</h1>
                                        <p class="stext2">{p.descrpiton}</p>
                                        <i class="bi bi-stopwatch "></i><p class="t"> {p.time}</p>
                                    </>
                                ))}
                            </div>
                            <div class="col-4 s8" data-aos="fade-left">
                                {imagesData3?.map((p) => {
                                    return (
                                        <img class="image" src={p.image} data-aos="fade-right" />
                                    )
                                })}
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="row">
                            <div class="col-2 icon8"><img src={brand} /></div>
                            <div class="col-2 icon10"><img src={brand1} /></div>
                            <div class="col-2 icon9"><img src={brand2} /></div>
                            <div class="col-2 icon9"><img src={brand3} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Servicies