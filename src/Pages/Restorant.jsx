import Footer from "../components/Footer"
import Header from "../components/Header"
import '../components/Header.css'
import '../components/Footer.css'
import "../assets/css/Restorant.css"

function Restorant() {
   
    const about = [{
        image: '../images/FOODR.jpg',
        text: ` Get ready to treat yourself to yummy food at Ocaen! We have different places to eat, like fancy restaurants, cozy cafes, and chill bars. Our chefs make tasty dishes with fresh ingredients from nearby places and flavors from around the world.
        These are perfect for special dinners! Each one has its own style and serves amazing food, from modern dishes to local favorites and dishes from other countries.
        Want to stay in your room? No problem! You can order tasty food any time of day or night with our room service. Just pick what you want from our menu, and we'll bring it to you.
        we want you to love it too! Whether you're a big foodie or just want something tasty to eat, we've got you covered with lots of yummy options.`
    }]

    const Menu = [{
        image: '../images/Gujarati_food.jpg',
        name: 'Gujarati',
        price: 80
    }, {
        image: '../images/chinise_food.jpg',
        name: 'Chinise',
        price: 60
    }, {
        image: '../images/punjabi_food.jpg',
        name: 'Punjabi',
        price: 90
    }
    ]
    return (
        <>
            <Header />
            <div className="bg">
                <p className="text">Restorent</p>
                <p className="text1">HOME  &gt;   RESTORENT</p>
            </div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <h2 className="mt-5">About Us</h2>
                        <p className="mt-3">
                            {about?.map((p) => {
                                return (
                                    <p>{p.text}</p>
                                )
                            })}
                        </p>
                    </div>
                    <div className="col-xl-6 col-md-12" id="aboutImage">
                            {
                                about?.map((p)=>{
                                    return(
                                        <img src={p.image} className="img-fuild img-thumbnail"/>
                                    )
                                })
                            }
                    </div>
                </div>
            </div>
            {/* <!-- Menu Section --> */}
            <div className="container-fluid bg-light py-2 text-center">
           
                    <h1 className="text-center mb-4">Our Menu</h1>    
                     <div className="container mt-4">
                    <div className="row">
                        {Menu?.map((m) => {
                            return (
                              
                                    <div className="cardShift   col-md-3  mx-auto d-block">
                                        <img src={m.image} className="card-img-top img-fluid" alt="..."/>
                                            <div className="card-body">
                                                <h5 className="card-title">{m.name}</h5>
                                                <p className="card-text">Price : ${m.price}</p>
                                            </div>
                                    </div>
                    

                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Restorant