import { useFormik } from "formik"
import { Link } from "react-router-dom"

function Footer() {
    const formik = useFormik({
        initialValues:{
            email : ""
        },
        validate:(values)=>{
            const error={}
            if(!values.email){
                error.email = "please enter email"
            }
            return error
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm()
        }
    })
    return (
        <>
            <footer style={{ marginTop: '50px' }} className="container-fuild footer text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-12 col-sm-12">
                            <div className="single-box">
                                <h2>About Us</h2>
                                <p>
                                    Welcome to <span style={{ color: '#d19b54' }}>Ocean</span> , where luxury meets comfort.
                                    Nestled in the heart of our city , our hotel offers an unforgettable experience with its elegant
                                    accommodations, exceptional amenities.
                                </p>
                                <h3>We Accept</h3>
                                <div className="card-area">
                                    <i class="bi bi-envelope-slash-fill"></i>
                                    <i class="bi bi-stripe"></i>
                                    <i class="bi bi-credit-card-2-back-fill"></i>
                                    <i class="bi bi-paypal"></i>

                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4  col-sm-12">
                            <div className="single-box ">
                                <h2>Hosting</h2>
                                <ul>
                                    <li><a href="#">Web hosting</a></li>
                                    <li><a href="#">Cloud hosting</a></li>

                                    <li><a href="#">WordPress hosting</a></li>
                                    <li><a href="#">Email hosting</a></li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-3  col-sm-12" style={{color:"white"}}>
                            <div className="single-box ">
                                <h2>Section</h2>
                                <ul >
                                  <Link to={"/"} style={{color:"white", textDecoration: 'none'}}><li>Home</li> </Link>  
                                   <Link to={"/Singalroom"} style={{color:"white", textDecoration: 'none'}}> <li>Rooms</li>   </Link>
                                   <Link to={"/servicies"} style={{color:"white", textDecoration: 'none'}}> <li>Services</li> </Link>
                                   <Link to={"/contact"} style={{color:"white", textDecoration: 'none'}}> <li>Contact</li> </Link>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-5  col-sm-12">
                            <div className="single-box">
                                <h2>NewsLetter</h2>
                                <p>Our hotel offers an unforgettable experience with its elegant
                                    accommodations, exceptional amenities.</p>
                                <div className="input-group mb-3">
                                   
                                    <input type="text" id="emailInput" name="email" onSubmit={formik.handleSubmit}  value={formik.values.email} onChange={formik.handleChange} className="forminput" placeholder="Enter your email" />
                                    {formik.errors.email && <p>{formik.errors.email}</p>}
                                    <button className="submit">Submit</button>
                                   
                                </div>
                                <h2>Follow Us On</h2>
                                <p className="socials">
                                    <i class="bi bi-facebook"></i>
                                    <i class="bi bi-instagram"></i>
                                    <i class="bi bi-pinterest"></i>
                                    <i class="bi bi-twitter"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}
export default Footer