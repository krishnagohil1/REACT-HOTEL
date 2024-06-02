import Header from "../components/Header"
import '../assets/css/Book.css'
import '../components/Header.css'
import Footer from "../components/Footer"
import '../components/Footer.css'
import blog from '../assets/images/blog4.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog1 from '../assets/images/blog1.jpg'
import { useFormik } from "formik"
function Book() {
    const formik = useFormik({
        initialValues: {
            checkOutDate: "",
            checkinDate: '',
            children: '',
            adults: '',
        },
        validate: (values) => {
            const errors = {}
            if (!values.checkOutDate) {
                errors.checkOutDate = 'please Enter your  checkOutDate'
            }
            if (!values.checkinDate) {
                errors.checkinDate = 'please Enter your  checkinDate'
            }
            if (!values.children) {
                errors.children = 'please Enter your  children'
            }
            if (!values.adults) {
                errors.adults = 'please Enter your  adults'
            }
            return errors
        },
        onSubmit: (values,{resetForm}) => {
            console.log(values);
            resetForm()
        }
    })
    return (
        <>
            <Header />
            <div className="bg">
                <p style={{ textAlign: "center" }} className="text">Book Now</p>
                <p style={{ textAlign: "center" }} className="text1">HOME  &gt; Book Now</p>
            </div>

            <p className="booktext">THE LUXURY HOTEL</p>
            <h2 className="booktext1">Rooms & Suites</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3  blog">
                        <div  style={{ width: '350px', border: 'none' }} >
                            <img src={blog2} className="card-img-top blogimage" alt="..." />
                            <div className="card-body">
                                <pre className="btext2 card-title">December 20,2024   Comment (5)</pre>
                                <p className="btext3"> A Night in Norway</p>
                                <p className="btext4 card-title">Discover the art and science behind effective hotel management.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3  blog2">
                        <div  style={{ width: '350px', border: 'none' }}>
                            <img src={blog1} className="card-img-top blogimage" alt="..." />
                            <div className="card-body">
                                <pre className="btext2 card-title">December 20,2024   Comment (5)</pre>
                                <p className="btext3"> Coffee in Malmö</p>
                                <p className="btext4 card-title">Embark on a journey through the world of hospitality</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 blog3">
                        <div  style={{ width: '350px', border: 'none' }}>
                            <img src={blog} className="card-img-top blogimage" alt="..." />
                            <div className="card-body">
                                <pre className="btext2 card-title">December 20,2024   Comment (5)</pre>
                                <p className="btext3"> Hotel June’s Upcoming</p>
                                <p className="btext4 card-title">Quisque pretium fermentum quam, sit amet cursus ante sollicitudin</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 Bbg">
                        <div className="row">
                            <div className="col-3 Bbg1">
                                <div>
                                    <i className="bi bi-star-fill "></i>
                                    <i className="bi bi-star-fill "></i>
                                    <i className="bi bi-star-fill "></i>
                                    <i className="bi bi-star-fill "></i>
                                    <i className="bi bi-star-fill "></i>
                                </div>
                                <h1 className="ctext">Call us, it's toll-free.</h1>
                                <p className="ctext1">Each of our guest rooms feature a private bath, wi-fi, cable television and include full
                                    breakfast. And also have awesome swing system in the ponds.</p>
                                <i className="bi bi-telephone "></i>
                                <p className="atext13">880 987 654 765</p>
                                <p P className="book">For More Information</p>
                            </div>
                            <div className="col-4 Bbg2">
                                <p className="a">ROOMS & SUITES</p>
                                <h4 className="b">Hotel Booking Form</h4>
                                <form onSubmit={formik.handleSubmit}>

                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <label for="checkOutDate" className="form-label">Check-in Date</label>
                                        <label for="checkOutDate" className="form-label1">Check-out Date</label>
                                        <input type="date" className="form-control" id="checkOutDate" value={formik.values.checkOutDate} onChange={formik.handleChange}/>
                                        <input type="date" className="form-control" id="checkinDate" value={formik.values.checkinDate} onChange={formik.handleChange}/>
                                        {formik.errors.checkinDate && <p className="errors" >{formik.errors.checkinDate}</p>}
                                        {formik.errors.checkOutDate && <p className="error1" >{formik.errors.checkOutDate}</p>}
                                        
                                    </div>

                                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        <label for="children" className="form-label2">Children</label>
                                        <label for="adults" className="form-label3">Adults</label>
                                        <input type="number" className="form-control" id="children" min="0" value={formik.values.children} onChange={formik.handleChange} />
                                        <input type="number" className="form-control" id="adults" min="1" value={formik.values.adults} onChange={formik.handleChange}/>
                                        {formik.errors.children && <p className="errors" >{formik.errors.children}</p>}
                                        {formik.errors.adults && <p className="error3" >{formik.errors.adults}</p>}
                                    </div>
                                    <div className="col-2">
                                        <button type="submit" className="submit_button ">Check Availabilty</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- bg end --> */}
            <Footer />

        </>
    )
}
export default Book