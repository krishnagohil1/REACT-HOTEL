import Footer from "../components/Footer";
import Header from "../components/Header"
import "../assets/css/Home.css"
import night from "../assets/images/nightclub.jpg"
import spa from "../assets/spa.jpg"
import phool from "../assets/phool.jpg"
import gym from "../assets/gym.jpg"
import Food from "../assets/images/food.jpg"
import about from "../assets/images/about.png"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik";

function Home(){
  
  function changeServiceImage() {
    // Get a reference to the image element
    var imageElement = document.getElementById("serviceImage");
  
    // Array of image URLs for extra services
    var serviceImages = [
      spa,
      phool,
      gym
    ];
  
    // Randomly select an image URL from the array
    var randomIndex = Math.floor(Math.random() * serviceImages.length);
    var randomImageUrl = serviceImages[randomIndex];
  
    // Change the src attribute of the image element to the randomly selected image URL
    imageElement.src = randomImageUrl;
  }
//  our room section
const Room = [{
  image : "../images/singlerbadroom.jpg",
  type: 'SingleRoom',
  price: 100,
  href : "/Singalroom"
},
{
  image: "../images/Doublebadroom.jpg",
  type: 'DoubleRoom',
  price: 200,
  href : "/doubalroom"
}]
//our chef section
const chef= [
  {
    image : '../images/first_chef.jpg',
    name : 'John',
    href :"/firstChef",
  },
  {
    image :"../images/second_chef.jpg",
    name : 'Maria',
    href : "/secondChef"
  },
  {
    image : '../images/third_chef.jpg',
    name : 'Gordon',
    href : "/thirdChef"
  }
]
function speakText() {
  // Retrieve the text from the textarea
 var text = document.getElementById("textToSpeak").value;

  // Check if the browser supports speech synthesis
 if ('speechSynthesis' in window) {
    // Create a new SpeechSynthesisUtterance object
    var msg = new SpeechSynthesisUtterance();

    // Set the text to be spoken
     msg.text = text;

  // Call the speech synthesis API to speak the text
   window.speechSynthesis.speak(msg);
  } else {
  //   // Speech synthesis not supported, provide fallback or error message
     console.log('Speech synthesis not supported in this browser');
   }
}
 return(
   <>
      <Header />
      <div className="setOverFlow">
      {/* Hero Section */}
      <section className="hero-section">
         <div className="container">
            <div className="hero-content">
               <h1 className="Welcome">Welcome to Ocean</h1>
               <p className="lead mb-4">Experience luxury and comfort like never before.</p>
               
            </div>
         </div>
      </section>
      {/* FORM  */}
      {/* <div className="container "data-aos="zoom-in">
      <form id="reservationForm" className=" formdata  row  NEED g-3 needs-validation"  onSubmit={formik.handleSubmit}>
        <div className="col-xl-2 col-md-6 col-sm-12 ">
          <label for="checkInDate" className="label   fs-5">Check-In Date</label>
          <input type="date" className="form-control" id="checkInDate"value={formik.values.checkinDate} onChange={formik.handleChange} />
          <div className="invalid-feedback">Please select a valid check-in date.</div>
          {formik.errors.checkinDate && <p className="error1" >{formik.errors.checkinDate}</p>}
        </div>
        <div className="col-xl-2 col-md-6 col-sm-12">
          <label for="checkOutDate" className="label fs-5">Check-Out Date</label>
          <input type="date" className="form-control checkOutDate" required style={{width:"80px"}} value={formik.values.checkOutDate} onChange={formik.handleChange}/>
          <div className="invalid-feedback">Please select a valid check-in date.</div>
          {formik.errors.checkOutDate && <p className="errors">{formik.errors.checkOutDate}</p>}
        </div>
        <div className=" col-xl-2 col-md-6 col-sm-12">
          <label for="children" className="label fs-5">Children</label>
          <input type="number" className="form-control Children"  min="0" value={formik.values.children}  onChange={formik.handleChange}/>
          {formik.errors.children && <p className="errors" >{formik.errors.children}</p>}
        </div>
        <div className=" col-xl-2 col-md-6 col-sm-12">
          <label for="adults" className="label fs-5">Adults</label>
          <input type="number" className="form-control Adults"  min="1" value={formik.values.adults}   onChange={formik.handleChange} />
          <div className="invalid-feedback">Please specify the number of adults.</div>
          {formik.errors.adults && <p className="error" >{formik.errors.adults}</p>}
        </div>
        <div className="col-xl-2 col-md-6 col-sm-12">
          <label for="rooms" className="label fs-5">Rooms</label>
          <input type="number" className="form-control Rooms"  min="1" value={formik.values.room}   onChange={formik.handleChange}/>
          <div className="invalid-feedback">Please specify the number of rooms.</div>
          {formik.errors.room && <p className="error" >{formik.errors.room}</p>}
        </div>
        <div className="col-xl-2 col-md-6 col-sm-12 mt-xl-5 mt-sm-1">
          <button type="submit" className="homebutton"  >Check Now</button>
        </div>
      </form>
    </div>  */}
    {/* ============Extra Servives=============== */}
    <div className="container-fuild mt-5 d-flex  justify-content-evenly">
    <div className="container mt-5">
      <div className="row ">
        <div className="col-lg-6 col-md-12 col-sm-12 mt-3"data-aos="fade-right">
          <img id="serviceImage" src={night} alt="Extra Service Image" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 "data-aos="fade-left">
          <h1 className="mt-3">Extra Services</h1>
          <p className="setFont">Our Hotel Provide Best Services for You Like A nightclub is an entertainment venue typically open late into the night, offering music, dancing, and drinks for patrons to enjoy. A spa is a facility that offers a variety of health and wellness treatments, often including massages, facials, body scrubs, and other beauty and relaxation services.  A swimming pool is a man-made structure designed for swimming and other water-based activities. A gym for your fitness </p>
          <button id="changeImageButton" class="change" onClick={changeServiceImage}>Change Image</button>
        </div> 
      </div>
    </div>
  </div>
  {/* ==============ROOM============= */}
  <div className="container text-center" >
    <div className=" ">
      <h1 className="text-center mt-5" >OUR ROOM</h1>
      <div id="imagedata"  data-aos="fade-right" className="row">
          {
            Room.map((R)=>{
              return(
                <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="room-info  text-center">
                  <img src={R.image}  alt="room" className="img-fuild" />
                  <h5 className="fs-3 price">{R.type}</h5>
                  <p className="price">Price: ${R.price} per night</p>
                  <a href={R.href} className="mt-2 book-now-btn">View More</a>
                </div>
              </div>
              )
            })
          }
      </div>
    </div>
</div>
          {/* ============FOOD & HEalth========== */}
          <div className="container-fuild mt-5">
  <div className="container">
    <div className="row">
      <div className=" col-xl-6 col-md-12"data-aos="fade-right">
        
        <img src={Food} className="img-fluid" alt="Image" />
      </div>
      <div className=" col-xl-6 col-md-12"data-aos="fade-left">
        
          <h2 className="mt-4">Find The Right Hotel For Healthy Food</h2>
          <p  className="mt-4 setFont">We are Provide Many Services But Food Service Enjoy all of people Many people also enjoy delivery services Our Best food is Gujarati Dish is That Dish Only $80.
            We belive in Best Food Beacuse sometime people don't like eat at home that time our Hotel Provide FOOD for better test of food .
            We also Make memorable your special day like birthday celebration , Anniversary celebration and any other special day's.
            We are providing vegetarian food and eggless Food .
            When you enjoy our food that time our Ocean Hotel Provide Free cake For Customer.
            i think food is key of happyness .Ocean 
          </p>
     
      </div>
    </div>
  </div>
  </div>
  {/* ================OUR CHEF============== */}
  <section id="chef-section"  className="mt-5 dataSheet">
  <h2 className="text-center text-uppercase">OUR CHEF</h2>
  <div className="container mt-3">
      <div className="row" id="chefdata">
          {
            chef.map((c)=>{
              return(
                <div className="col-md-4 "data-aos="zoom-in">
                <div className="chef-image-container">
                    <img src={c.image} alt="Chef 1" className="mb-1 mb-md-4 mb-sm-5 assept" />
                    <div className="overlay">
                        <div className="text  fs-1">{c.name}</div>
                        <a href={c.href} className="BookData setColor">View More</a>
                        {/* <Link to="/chefDetail" className="BookData setColor">View More</Link> */}
                    </div>
                </div>
            </div>
              )
            })
          }
      </div>
  </div>
</section>
{/* ==================WHY US================== */}
<h3 className="text-center mt-2">Why US?</h3>
   <div className="container mt-4">
    <div className="row mt-4" id="whyUsData">
      <div className="col-xl-6 col-md-12 col-sm-12 mt-4"data-aos="fade-right">
        <img src={about} alt="" class="img-fluid" />
      </div>
      <div className="col-xl-6 col-md-12 col-sm-12"data-aos="fade-left">
        <p className="setFont mt-3">
          Ocean Hotel, where every moment is crafted to exceed your expectations. Nestled along the pristine coastline, our hotel offers a plethora of amenities and services designed to make your stay truly unforgettable.
          Our spacious and elegantly appointed rooms. Each room is meticulously designed to provide a serene oasis, complete with modern amenities and breathtaking views of the ocean.
          Booking your dream getaway has never been easier! With our user-friendly online booking platform, you can effortlessly reserve your preferred room and plan your stay in just a few clicks.
          Swimming pool, surrounded by lush greenery and panoramic ocean views. Whether you're seeking relaxation or a leisurely swim, our pool area offers the perfect escape.
          Maintain your fitness routine while traveling in our state-of-the-art gymnasium. 
          Dance the night away to the beats of live music or unwind with handcrafted cocktails in a lively atmosphere filled with energy and excitement.
          Your safety is our top priority.
          your stay with complimentary high-speed Wi-Fi access available in all areas of the hotel. 
          Strike a pose and capture Insta-worthy selfies at our designated selfie zones.
          At Ocean Hotel, we strive to provide an exceptional hospitality experience that exceeds your every expectation. Whether you're here for business or leisure, your journey begins with us. Welcome to a world of luxury, comfort, and unparalleled hospitality at Ocean Hotel.
        </p>
        
      </div>
    </div>
   </div> 
            {/* =======TEXT TO SPEECH========== */}
            <div className="container mt-5 setDisplay" >
    <div className="row d-block mx-auto" >
      <div className="col-xl-12 col-md-12 col-sm-12 offset-md-3"data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500">
        <textarea id="textToSpeak" rows="4" cols="90" placeholder="Text to Speak"></textarea>
        <button className="speak d-block " onClick={speakText}>Speak</button>
    </div>
  </div>
   </div>

          {/* =============IFREME============= */}
          <div className="container-fuild mt-5">
    <div className="row">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="iframe-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14877.469711075995!2d72.8869815!3d21.21727375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711797228981!5m2!1sen!2sin"  className="iFreme" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Responsive Iframe"></iframe>
        </div>
      </div>
    </div>
  </div>
  </div> 
      <Footer/>
   </>
 )
}
export default Home