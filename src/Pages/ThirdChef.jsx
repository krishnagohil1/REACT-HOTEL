import Footer from "../components/Footer";
import Header from "../components/Header"
import "../assets/css/ThirdChef.css"
function ThirdChef(){
    const Details = {
        image : '../images/third_chef.jpg',
        name : 'Gordon',
        Time : ' 9:00 AM to 5:00 PM',
        Sat : ' 10:00 AM to 4:00 PM',
        Sun : ' Off',
        Salary : 90000,
        experience : 20,
        phone : '+91 1241241241',
        email : 'gordon@gmail.com'
    }
    return(
        <>
        <Header/>
        <div className="container-fuild setbac smoke">
        <div className="container mt-3 mb-3">
    <div data-aos="zoom-in" className="transition">

          <div className="row">
              <div className="col-xl-6 col-md-6 mt-xl-5 mt-sm-2" id="ChefimgGordon">
              <img src={Details.image} alt="" class="imageThird img-fluid "/>
              </div>
              <div className="col-xl-6 col-md-6  text-start " id="informationChef">
              <h1 >
                  <span className="setColor">{Details.name}</span> </h1>
                <h4 className="setColor" >Work Time</h4>
                <p>Monday to Friday: {Details.Time}</p>
                <p>Saturday: {Details.Sat}</p>
                <p>Sunday: {Details.Sun}</p>
                <h4 className="setColor" >Salary</h4>
                <p>${Details.Salary} per year</p>
                <h4 className="setColor">Experience</h4>
                <p>{Details.experience} years of experience in culinary arts</p>
                <p>Worked in several renowned restaurants and hotels</p>
                <p>Specializes in Italian and French cuisine</p>
                <h4 className="setColor">Contact</h4>
                <p> <i class="fa-solid fa fa-phone"></i>{Details.phone}</p>
                <p> <i class="fa-solid fa fa-envelope"></i>{Details.email}</p>
              </div>
          </div>
        </div>
      </div>
      </div>
        <Footer/>
        </>
    )
}
export default ThirdChef