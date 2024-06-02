import Footer from "../components/Footer";
import Header from "../components/Header";
import '../assets/css/contact.css'
import '../components/Header.css'
import '../components/Footer.css'
import { useFormik } from "formik";
let contactData = [{
    email: 'Feel free to write on ocean123@gmail.com',
    description: 'Ready to take the next step in your hospitality journey? Were here to help! Whether you have questions about our services.',
    phone: 'Call us +31 555 777 83',
    phoneDes: 'Our dedicated team is committed to providing prompt and personalized assistance to meet your needs.',
    visit: 'Visit us on Via Venti Settembre, Canada',
    visitdes: 'Contact us today to start a conversation about how we can collaborate to elevate your hotels performance.'
}]

function Contact() {
    const formik = useFormik({

        initialValues: {
            name: "",
            Email: '',
            Subject: '',
            comment: '',
        },
        validate: (values) => {
            let nameRegex = /^[A-Za-z ]+$/
            const errors = {}
            if (!values.name) {
                errors.name = 'please Enter your  name'
            }
            else if (!nameRegex.test(values.name)) {
                errors.name = 'please Enter valid  name'
            }
            if (!values.Email) {
                errors.Email = 'please Enter your  Email'
            }
            if (!values.Subject) {
                errors.Subject = 'please Enter your  Subject'
            }
            if (!values.comment) {
                errors.comment = 'please Enter your  comment'
            }
            return errors
        },
        onSubmit: (values, { resetForm }) => {

            console.log(values);
            resetForm()
        }
    })
    return (
        <>
            <Header />
            <div className="bg">
                <p className="text">Contact</p>
                <p className="text1">HOME  &gt; CONTACT</p>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4  contactbg">
                        {contactData.map((p) => {
                            return (
                                <>
                                    <h3 className="contacttext">{p.email}</h3>
                                    <p style={{ fontFamily: 'sans-serif' }} class="contacttext1">{p.description}</p>

                                    <h3 class="contacttext">{p.phone}</h3>
                                    <p class="contacttext1">{p.phoneDes}</p>

                                    <h3 class="contacttext">{p.visit}</h3>
                                    <p class="contacttext1">{p.visitdes}</p>

                                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14877.469711075995!2d72.8869815!3d21.21727375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1711797228981!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </>
                            )
                        })}
                    </div>
                    <div className="col-4  contactbg1">
                        <h4 className="ctext2">Get In Touch </h4>
                        <p className="ctext3">Encourage feedback from guests by providing a dedicated section for comments, suggestions, or
                            testimonials. This shows that you value guest input and are committed to continuous improvement.</p>
                        <form onSubmit={formik.handleSubmit}>
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} />
                            {formik.errors.name && <p className="contacterror">{formik.errors.name}</p>}
                            <label for="email">Email:</label>
                            <input type="email" id="email" name="Email" value={formik.values.Email} onChange={formik.handleChange} />
                            {formik.errors.Email && <p className="contacterror">{formik.errors.Email}</p>}
                            <label for="name">Subject:</label>
                            <input type="text" id="subjectName" name="Subject" value={formik.values.Subject} onChange={formik.handleChange} />
                            {formik.errors.Subject && <p className="contacterror">{formik.errors.Subject}</p>}
                            <label for="comment">Your Comment:</label>
                            <textarea id="comment" name="comment" onChange={formik.handleChange} value={formik.values.comment} rows="4" cols="50"></textarea>
                            {formik.errors.comment && <p className="contacterror">{formik.errors.comment}</p>}
                            <input type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>
            </div >

            <Footer />

        </>


    )
}
export default Contact