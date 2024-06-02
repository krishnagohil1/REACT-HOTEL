import Header from "../components/Header"
import '../assets/css/About.css'
import '../components/Header.css'
import Footer from "../components/Footer"
import '../components/Footer.css'
import icon1 from "../assets/images/icon-6.png"

import icon2 from "../assets/images/icon-2.png"
import icon3 from "../assets/images/icon-4.png"
import icon4 from "../assets/images/icon-1.png"
import icon5 from "../assets/images/icon-5.png"
import icon6 from "../assets/images/icon-3.png"
import client from "../assets/images/testi-1.jpg"
import client1 from "../assets/images/testi-02.jpg"
import client2 from "../assets/images/ThirdImage.jpeg"
import brand from "../assets/images/brand1.png"
import brand1 from "../assets/images/brand4.png"
import brand2 from "../assets/images/brand6.png"
import brand3 from "../assets/images/brand7.png"
const data = [{
  text: "BEST PRICES",
  Extra: 'Extra Services',
  desc: 'The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.',
  textdes: ' Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast',
  call: '880 987 654 765',
  infor: 'For More Information'
}]
function About() {
  return (
    <>
      <Header />
      <div style={{textAlign:"center"}} className="bg">
        <p  className="text">About Us</p>
        <p className="text1">HOME  &gt; About Us</p>
      </div>
      <p className="atext">ABOUT US</p>
      <h1 className="atext1">Since 8+ Years</h1>
      <p className="atext2">At ocean we believe in creating an unforgettable experience for our guests. Nestled in the heart of our city our hotel combines modern luxury with timeless elegance, offering an oasis of comfort and tranquility.</p>
      <div className="aimage " data-aos="fade-left">
        <div className="button"><a href="https://cdn.pixabay.com/video/2022/10/16/135141-761273478_large.mp4">
          <i className="bi bi-play-fill icon2"></i></a></div>
      </div>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-3 box"> 
          <i style={{fontSize:"20px"}} className="bi bi-wifi icon1"></i>
            <h6 className="atext3">Fibre Internet</h6>
            <p className="atext4">Wifi tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
            <div className="overlay"></div>
          </div>
          <div className="col-3 box1"><i className="bi bi-star icon1"></i>
            <h6 className="atext3">Breakfast</h6>
            <p className="atext4">Eat tincidunt nisa ace park norttito sit amet space, mus nellentesque habitant</p>
            <div className="overlay"></div>
          </div>
          <div className="col-3 box2"><i className="bi bi-clock icon1"></i>
            <h6 className="atext3">Swimming Pool</h6>
            <p className="atext4">Swimming pool tincidunt nise ace park norttito sit space, mus nellentesque habitant.</p>
            <div className="overlay"></div>
          </div>
          <div className="col-3 box3"> <i className="bi bi-p-square icon1"></i>
            <h6 className="atext3">Parking Space</h6>
            <p className="atext4">Fusce tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
            <div className="overlay"></div>
          </div >
          <div className="col-3 box4"><i className="bi bi-gift icon1"></i>
            <h6 className="atext3">Room Service</h6>
            <p className="atext4">Room tincidunt nis ace park norttito sit amet space, mus nellentesque habitant.</p>
            <div className="overlay"></div>
          </div >
          <div className="col-3 box5"><i className="bi bi-globe icon1"></i>
            <h6 className="atext3">Pick Up & Drop</h6>
            <p className="atext4">We’ll pick up from airport while you comfy on your ride, mus nellentesque habitant.</p>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
      {/* end */}
      {/* <!-- Extra Services starrt --> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 service">
            <div className="row">

              <div className="col-3 service1">
                {data?.map((p) => (
                  
                  <>
                    <p className="atext9">{p.text}</p>
                    <h1 className="atext10">{p.Extra}</h1>
                    <p className="atext11">{p.desc}</p>
                    <p className="atext12">
                      {p.textdes}.</p>
                    <i className="bi bi-telephone "></i><p className="atext13">{p.call}</p>  <p className="information">{p.infor}</p>
                  </>
                ))}
              </div>
              <div className="col-2 service2" data-aos="zoom-out">
                <div className="aimage1">
                  <div className="abs">
                    <h4 className="atext15">Safe & Secure</h4>
                  </div>
                </div>
                <div className="ms-2 mt-3">
                  <i className="bi bi-check-lg icon11"><span className="atext16"> Clearly marked emergency exits </span></i>
                </div>
                <div className="ms-3 mt-1 ">
                  <i className="bi bi-check-lg icon11"><span className="atext16"> Orci miss natoque vasa ince</span></i>
                </div>
                <div className="ms-4  mt-1">
                  <i className="bi bi-check-lg icon11"><span className="atext16"> Always  Clean our rooms</span></i>
                </div>
                <div style={{ backgroundColor: '#DBA765', height: '3px', marginTop: '20px' }}></div>
              </div>
              <div className="col-2 service3" data-aos="zoom-out">
                <div className="aimage2">
                  <div className="abs">
                    <h4 className="atext15">Breakfast In Morning</h4>
                  </div>
                </div>
                <div className="ms-2 mt-3">
                  <i className="bi bi-check-lg icon11"><span className="atext16"> Clearly marked emergency exits</span></i>
                </div>
                <div className="ms-3 mt-1 ">
                  <i className="bi bi-check-lg icon11"><span className="atext16"> Orci miss natoque vasa ince</span></i>
                </div>
                <div className="ms-4  mt-1">
                  <i className="bi bi-check-lg icon11"><span className="atext16">  Always  Clean our rooms</span></i>
                </div>
                <div style={{ backgroundColor: '#DBA765', height: '3px', marginTop: '20px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end --> */}
      {/* <!-- icon start --> */}
  <p className="atext5">HOTEL FACILITIES.</p>
  <h1 className="atext6">Finest And Luxurious Hotel In The Town</h1>
  <p className="atext7">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
    which I enjoy with my whole heart.</p>
  <div className="clarfix">
    <div className="ic"><img className="icon3" src={icon1}/>
      <p className="atext8">Parking</p>
    </div>
    <div className="ic1"><img className="icon3" src={icon2}/>
      <p className="atext8">Alarm</p>
    </div>
    <div className="ic2"><img className="icon3" src={icon3}/>
      <p className="atext8">Fast Wifi</p>
    </div>
    <div className="ic3"><img className="icon3" src={icon4}/>
      <p className="atext8">Coffee</p>
    </div>
    <div className="ic4"><img className="icon3" src={icon5}/>
      <p className="atext8">Safe</p>
    </div>
    <div className="ic5"><img className="icon3" src={icon6}/>
      <p className="atext8">Bath</p>
    </div>
  </div>
  {/* <!-- end --> */}
  {/* <!-- start --> */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 bgimage">
        <div className="row">
          <div className="col-12">
            <p className="atext17">TESTIMONIALS</p>
          </div>
          <div className="col-12">
            <h1 className="atext18">What Says Our Clients ?</h1>
          </div>
          <div className="col-2 client" data-aos="fade-right">
            <img className="imag" src={client}/>
            <p className="image1">"Our clients' experiences are at the heart of our hotel management philosophy. Here’s what some of our valued guests have to say about their stay with us"</p>
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
              className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            <h5 className="image2">Olivia Martin</h5>
            <p className="image3">Service Providers</p>

          </div>
          <div className="col-2 client1" data-aos="fade-down"><img className="imag" src={client1} />
            <p className="image1">"Perfect for a family vacation. We loved the pool and the kids' play area. The restaurant served delicious food, and the staff was always ready to help. We will definitely come back!"</p>
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
              className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            <h5 className="image2">Emily Brown</h5>
            <p className="image3">Guest Relations</p>
          </div>
          <div className="col-2 client2" data-aos="fade-left"><img className="imag" src={client2} />
            <p className="image1">"luxury tristique usto duision vitae on diamen neque nivamus aesta atene artines arinianu
              ateli finibus viverra nec lacus. Nedana dinoz setlie and suscipe none misster."</p>
            <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
              className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            <h5 className="image2">Jessica UK</h5>
            <p className="image3">Staff Management</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- start --> */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div className="col-2 icon8"><img src={brand}/></div>
          <div className="col-2 icon10"><img src={brand1}/></div>
          <div className="col-2 icon9"><img src={brand2}/></div>
          <div className="col-2 icon9"><img src={brand3}/></div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- end --> */}
      <Footer />
    </>
  )
}
export default About