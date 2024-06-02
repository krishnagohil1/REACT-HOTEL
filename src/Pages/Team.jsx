import Header from "../components/Header"
import '../assets/css/Team.css'
import  "../components/Header.css";
import Footer from "../components/Footer";
import  "../components/Footer.css";
const first_rowdata = [{
    image: `https://duruthemes.com/demo/html/cappa/demo1-light/img/team/4.jpg`,
    name: 'Valentina Karla',
    departmant: 'General Manager',
},
{
    image: `https://duruthemes.com/demo/html/cappa/demo1-light/img/team/1.jpg`,
    name: 'Micheal White',
    departmant: 'Guest Service Department'
},
{
    image: `https://duruthemes.com/demo/html/cappa/demo1-light/img/team/2.jpg`,
    name: 'Olivia Martin',
    departmant: 'Reservations Manager'
},

]
const second_rowdata = [{
    image:  `https://duruthemes.com/demo/html/cappa/demo1-light/img/team/5.jpg`,
    name: 'Mariana Dana',
    departmant: 'F&B Manager',
},
{
    image:`https://duruthemes.com/demo/html/cappa/demo1-light/img/team/3.jpg`,
    name: 'Enrico Brown',
    departmant: 'Head Chef'
},
{
    image: `https://duruthemes.com/demo/html/cappa/demo1-light/img/team/6.jpg`,
    name: 'Victoria Dan',
    departmant: 'Meetings and Events Manager'
}
]
function Team() {
    return (
        <>
            <Header />
            <div className="bg">
                <p className="btext1">PROFESSIONALS</p>
                <p className="btext">Meet The Team</p>
            </div>

            <div className="container">
                <div style={{ marginTop: '50px', border:'none' }} className="row text-center  d-flex justify-content-around border border-0" >
                    {first_rowdata?.map((p) => {
                        return (
                            <>
                                <div className="col-xl-3 col-md-3 col-sm-12">
                                    <img src={p.image}  alt="..." className="img-thumbnail"/>
                                        <div>
                                            <h6 className="Teamtext">{p.name}</h6>
                                            <p className="Teamtext1">{p.departmant}</p>
                                        </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <div className="container">
                <div style={{ marginTop: '50px', border:'none' }} className="row text-center  d-flex justify-content-around border border-0" >
                    {second_rowdata?.map((p) => {
                        return (
                            <>
                                <div className="col-xl-3 col-md-3 col-sm-12">
                                    <img src={p.image}  alt="..." className="img-thumbnail"/>
                                        <div>
                                            <h6 className="Teamtext">{p.name}</h6>
                                            <p className="Teamtext1">{p.departmant}</p>
                                        </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Team