import Footer from "../components/Footer";
import Header from "../components/Header";
import '../assets/css/Bloglist.css'
import '../components/Header.css'
import '../components/Footer.css'
import blog from '../assets/images/blog1.jpg'
import blog1 from '../assets/images/blog4.jpg'
import blog3 from '../assets/images/blog2.jpg'
import blog2 from '../assets/images/blog1.jpg'
import { useFormik } from "formik";
function Bloglist() {
    const formik = useFormik({
        initialValues:{
              name:"",
              email:'',
              comment:'',
          },
          validate : (values) =>{
          
            let nameRegex = /^[A-Za-z ]+$/
             const errors={}
             if(!values.name){
              errors.name = 'please Enter your  name'
             } 
             else if(!nameRegex.test(values.name)){
                errors.name = 'please Enter valid  name'
             }
             if(!values.email){
              errors.email = 'please Enter your  Email'
             }  
            
             if(!values.comment){
              errors.comment = 'please Enter your  comment'
             }  
             return errors
          },
          onSubmit : (values,{resetForm }) =>{
               console.log(values);
               resetForm()
          }
      })
    return (
        <>
            <Header />
            <div className="bg">
                <p className="text">Blog Lists</p>
                <p className="text1">HOME  &gt; BLOG LIST</p>
            </div>

            <div className="container-fluid">
                <div className="row">

                    <div className="col-5  bg1">
                        <div className="row">


                            <div className="col-12">
                                <div className="Bloglistcard" style={{ width: '680px', border: 'none' }} >
                                    <img  src={blog} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <pre className="bloglisttext card-title">December 20,2024   Comment (5)</pre>
                                        <p className="btext3"> A Night in Norway</p>
                                        <p className="blist">Welcome to the heart of our hospitality hub! Dive into a treasure trove of industry
                                            insights, expert advice, and captivating stories through our meticulously curated blog list. At Ocean,
                                            we believe that knowledge is the key to unlocking limitless potential in hotel management.From
                                            front-of-house finesse to behind-the-scenes strategies, our blog list covers a spectrum of topics
                                            designed to inspire, educate, and empower hospitality enthusiasts at every level. Whether you're a
                                            seasoned hotelier, an aspiring professional, or an avid traveler with an eye for detail, there's
                                            something for everyone within our collection of articles.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="clarfix">
                                <div className="hotal"></div>
                                <div className="hotal1"></div>
                            </div>
                            <p className="hotal2">Delve into the latest trends shaping the hospitality landscape, glean valuable tips for
                                enhancing guest satisfaction, and discover innovative approaches to revenue management and operational
                                efficiency. Our blog list is your gateway to staying informed, staying inspired, and staying ahead in the
                                dynamic world of hotel management.</p>
                          
                                <div>
                                <span><i style={{marginTop:20,fontSize:'20px',marginLeft:10}} class="bi bi-facebook fa-brands"></i></span>  
                                <span><i  style={{marginTop:20,fontSize:'20px',marginLeft:10}} class="bi bi-twitter fa-brands"></i></span>
                                <span><i style={{marginTop:20,fontSize:'20px',marginLeft:10}} class="bi bi-instagram fa-brands"></i></span>
                                <span><i  style={{marginTop:20,fontSize:'20px',marginLeft:10}} class="bi bi-dribbble fa-brands"></i></span>
                                <span><i style={{marginTop:20,fontSize:'20px',marginLeft:10}} class="bi bi-whatsapp fa-brands"></i></span>
                                </div>
                              <form onSubmit={formik.handleSubmit}>
                                <label for="name">Name:</label>
                                <input style={{backgroundColor:'#f8f2f2'}} type="text" className="name" name="name" value={formik.values.name}  onChange={formik.handleChange}/>
                                {formik.errors.name &&  <p className="error">{formik.errors.name}</p>} 
                                <label for="email">Email:</label>
                                <input style={{backgroundColor:'#f8f2f2'}} type="email" className="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                                {formik.errors.email &&  <p className="error">{formik.errors.email}</p>} 
                                <label for="comment">Your Comment:</label>
                                <textarea style={{backgroundColor:'#f8f2f2'}} className="comment" name="comment" rows="4" cols="50" value={formik.values.comment} onChange={formik.handleChange}></textarea>
                                {formik.errors.comment &&  <p className="error">{formik.errors.comment}</p>} 
                                <input type="submit" value="Post Comment" />
                            </form>
                        </div>
                    </div>



                    <div className="col-3  bg2">
                        <div className="row">
                            <div className="col-11 side">
                                <form className="row row-cols-lg-auto g-3 align-items-center">
                                    <div className="col-12">

                                        <input type="tel" className="form-control" id="inlineFormInputGroupUsername" placeholder="Search Here" />

                                    </div>
                                </form>
                            </div>

                            <div className="col-11 side1">
                                <div className="silde2 ">
                                    <h3 className="btext5">Categories</h3>
                                    <div style={{ width: '100px', backgroundColor: 'hsl(34, 65%, 75%)', marginLeft: '20px', height: '3px', marginTop: -'5px' }}>
                                    </div>
                                    <pre className="btext6">City Guide (1)</pre>
                                    <div style={{ width: '230px', backgroundColor: 'hsla(30, 5%, 76%,0.2)', marginLeft: '20px', height: '2px', marginTop: -'2px' }}>
                                    </div>
                                    <pre className="btext7">Hotel Design  (1)</pre>
                                    <div
                                        style={{ width: '230px', backgroundColor: 'hsla(30, 5%, 76%,0.2)', marginLeft: '20px', height: '2px', marginTop: '-2px', }}>
                                    </div>
                                    <pre className="btext7">New Places (1)</pre>
                                    <div
                                        style={{ width: '230px', backgroundColor: ' hsla(30, 5%, 76%,0.2)', marginLeft: '20px', height: '2px', marginTop: '-2px' }}>
                                    </div>
                                    <pre className="btext7">Uncategorized (1)</pre>
                                    <div className="line"
                                        style={{ width: '230px', backgroundColor: ' hsla(30, 5%, 76%,0.2)', marginLeft: '20px', height: '2px', marginTop: '-2px' }}>
                                    </div>

                                </div>
                                <img className="bimg" src={blog2} />
                                <h4 className="btext9">Coffee in Malmö</h4>
                                <p className="btext10">August 25, 2024</p>
                                <div
                                    style={{ width: '250px', backgroundColor: ' hsla(30, 5%, 76%,0.2)', marginLeft: '30px', height: '2px', marginTop: '30px' }}>
                                </div>
                                <img className="bimg" src={blog3} />
                                <h4 className="btext9">Camping in Italy</h4>
                                <p className="btext10">August 30, 2024</p>
                                <div
                                    style={{ width: '250px', backgroundColor: ' hsla(30, 5%, 76%,0.2)', marginLeft: '30px', height: '2px', marginTop: '30px' }}>
                                </div>
                                <img className="bimg" src={blog1} />
                                <h4 className="btext9">Coffee in Malmö</h4>
                                <p className="btext10">August 28, 2024</p>
                                <div
                                    style={{ width: '250px', backgroundColor: ' hsla(30, 5%, 76%,0.2)', marginLeft: '30px', height: '2px', marginTop: '30px' }}>
                                </div>
                                <img className="bimg" src={blog}/>
                                <h4 className="btext9">A Night in Norway</h4>
                                <p className="btext10">August 20, 2024</p>
                                <div
                                    style={{ width: '250px', backgroundColor: ' hsla(30, 5%, 76%,0.2)', marginLeft: '30px', height: '2px', marginTop: '30px' }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </>
    )
}
export default Bloglist