import Footer from "../components/Footer";
import Header from "../components/Header";
import '../assets/css/Pricing.css'
import '../components/Header.css'
import '../components/Footer.css'
function Pricing() {
    let data = [{
        image: `https://i.pinimg.com/564x/a4/1e/87/a41e87a191ed4a28312173a54cf0e9ac.jpg`,
        title: 'Online payments',
        price: '$29.00',
        day: '/ per day',
        des: 'Accept online payments directly into your account (the money does not pass through us)',

    },
    {
        image: `https://i.pinimg.com/564x/58/e3/e9/58e3e9d56ae78f114dec0848b9ae6720.jpg`,
        title: 'Parking',
        price: '$20.00',
        day: '/ per day',
        des: 'Full-service hotel parking management. Provide perfect parking services .',


    },
    {
        image: `https://i.pinimg.com/564x/46/33/0d/46330dac36d9f48bcdbed420d6f1501d.jpg`,
        title: 'Rent A Bike',
        price: '$9.99',
        day: '/ per day',
        des: 'Professional bike rental welcome to the innovative world of Turisbike,complete .',

    }
    ]

    let data1 = [
        {
            image: `https://i.pinimg.com/564x/1d/26/f8/1d26f8287e3a392c9fd76f87b2fdc538.jpg`,
            title: 'Room cleaning',
            price: '$50',
            day: '/ per day',
            des: 'Hotel ut nisan the duru',
          
          },
        {
        image: `https://www.thecorinthianspune.com/new_img/drinks_img.jpg`,
        title: 'Drinks included',
        price: '$30',
        day: '/ per day',
        des: 'Hotel ut nisan the duru',

    },
    {
        image: `https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/3.jpg`,
        title: 'Room Breakfast',
        price: '$30',
        day: '/ per day',
        des: 'Hotel ut nisan the duru',

    },
    ]
    return (
        <>
            <Header />
            <div className="background-image">
                <p className="text">Pricing</p>
                <p className="text1">Extra  Pricing</p>
            </div>
            <div className="container-fluid d-block mx-auto" data-aos="zoom-in">
                <div className="row" style={{ marginTop: '70px' }}>
                 
                    <div>
                        {data.map((p) => {
                            return (
                                <>
                                     
                                    <div className="card  col-lg-3  col-md-4  " style={{ border: 'none', marginLeft:"50px" }}>
                                        <img src={p.image} className="card-img-top" height={200} alt="..." />
                                        <div className="card-body" style={{ backgroundColor: '#fff9f1' }}>
                                            <h5 className="Pricingtext">{p.title}</h5>
                                            <h1 className="first">{p.price}<span style={{ fontSize: '15px' }}>${p.day}</span></h1>
                                            <p className="Pricingtext1"> {p.des}</p>
                                        </div>

                                    </div>
                                </>
                            )
                        })}
                    </div>

                </div>
            </div>

         
                {/* <div class="container-fluid pricingbackground" data-aos="zoom-in">
                    <div class="row"> */}

                        {/* {data1.map((p) => {
                            return (
                                <>

                                    <div class="card col-lg-3 col-md-4 d-block mx-auto" style={{ marginTop: '50px', border: 'none',boxShadow:'none' }}>
                                        <img src={p.image} height={200} class="card-img-top" alt="..." />
                                        <div class="card-body d-block mx-auto" style={{ backgroundColor: ' #fff9f1' }}>
                                            <h5 class="Pricingtext">{p.title}</h5>
                                            <h1 class="first">{p.price}<span style={{ fontSize: '15px' }}>{p.day}</span></h1>
                                            <p class="Pricingtext1"><i class="bi bi-check2"  style={{ color: ' #aa8453' }}></i> {p.des}
                                            </p>
                                            <p class="Pricingtext1"><i class="bi bi-check2"  style={{ color: ' #aa8453' }}></i> {p.des}
                                            </p>
                                            <p class="Pricingtext1"><i class="bi bi-check2"  style={{ color: ' #aa8453' }}> </i> {p.des}
                                            </p>

                                        </div>

                                    </div>
                                </>
                            )
                        })} */}
                    {/* </div> */}
                    {/* <div class="col-lg-4 col-md-3 col-sm-5" id="pricingData4"></div>
                        <div class="col-lg-4 col-md-3 col-sm-5" id="pricingData5"></div> */}
                {/* // </div> */}


   

            <section class="testmonials">
    <div class="background bg-img bg-fixed section-padding pb-0">
      <div class="container">
        <div class="row">
          {/* <!-- Reservation --> */}
          <div class="col-md-5" style={{marginTop: '100px'}}>
            <p><i class="bi bi-star-fill" style={{color:' #ffb300'}}></i>
            <i class="bi bi-star-fill" style={{color:' #ffb300'}}></i>
            <i class="bi bi-star-fill" style={{color:' #ffb300'}}></i>
            <i class="bi bi-star-fill" style={{color:' #ffb300'}}></i>
            <i class="bi bi-star-fill" style={{color:' #ffb300'}}></i>
            </p>
            <h5  style={{color: 'white',fontSize: '25px',fontFamily:  'Times New Roman',marginTop: '25px'}}>Each of our guest rooms
              feature a private bath, wi-fi, cable television and include full breakfast.</h5>
            
                <p class="color-1"
                  style={{color: 'white',fontSize: '30px',fontFamily:  'Times New Roman',marginTop:'0px'}}>
               <i class="bi bi-telephone-x-fill"></i>
                   Reservation
                </p> <a class="color-1" style={{color: 'white',fontSize: '25px',border: 'none'}}>+31 555 777 83</a>
              </div>
            </div>
            <p style={{color: 'white',marginTop: '30px'}}><i class="bi bi-check2"></i><small>Call us, it's
                toll-free.</small></p>
        
</div>
</div>
  </section>
            <Footer />
        </>
    )
}
export default Pricing