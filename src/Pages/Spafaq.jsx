import Footer from "../components/Footer";
import Header from "../components/Header";
import "../assets/css/Spafaq.css"
function Spafaq(){
   const  faqdata = {
        text :`Discover a sanctuary of relaxation and wellness at Ocean's
         luxurious spa. Immerse yourself in an oasis of tranquility where expert 
         therapists and serene surroundings blend seamlessly to rejuvenate your mind, body, and spirit. 
         Whether you seek a revitalizing massage, a refreshing facial, or a calming soak in our hydrotherapy pool,
          our extensive range of treatments is designed to elevate your senses and restore balance. Experience ultimate 
          relaxation with our signature spa rituals and personalized care, all set within an elegant and peaceful ambiance.
         Escape the everyday and indulge in pure bliss at Ocean's spa.`,
      
    }
    const Wrapperdata =[{
        data : 'Smoking',
        content : `Smoking is the act of inhaling and exhaling the fumes of burning plant material. While tobacco is the most commonly smoked substance Tobacco smoke contains thousands of chemicals, many of which are harmful. `
        }
    ]
    const parenttab = [{
        data :'Safety',
        content :`Hotel security is the management of the safety of guests and property in hotels, lodgings and entertainment facilities Keep the garden area, pool, backyard, all the entry points, and parking lot well-lit all the time.`
    }]
     const Health = [{
        data :'Health Metters',
        content :`Health is the key to a happy life.  Nowadays everyone is busy in their life and work.so Ocen provide Healthy FOOD.`
     }]
     const Arraving = [{
        data :'Arriving at The Spa',
        content :`A hotel spa is a wellness center located inside a hotel, that offers a variety of health and wellness treatments, such as massages, facial treatments, and even nail and hairdressing services.`
     }]
     const Childrendata = [{
        data :'Childrean',
         content : `At Ocean, the safety and comfort of our youngest guests are of utmost importance. We have implemented a range of child-friendly safety measures to provide peace of mind to families staying with us`
    }] 
    return(
        <>
        <Header/>
        {/* Hero section */}
        <div class="bg">
                <p class="text">Spa FAQ</p>
                <p class="text1">HOME    &gt;   SPA FAQ </p>
            </div>
    
        {/* =====between==== */}
  <div className="container"data-aos="zoom-in-right" id="faqdata">
                 <div>
                    <h4 className="DATAa">F A Q</h4>
                    <h1 className="DATAb">Spa Etiquette</h1>
                    <p className="DATAc">
                            {faqdata.text}
                    </p>
                    <p className="DATAd">
                            {faqdata.secondtext}
                    </p>
                </div>
          
  </div>

  <div className="setDisplay">
<div className="wrapper d-block mx-auto"data-aos="zoom-in">
<div className="parent-tab"  id="Wrapperdata">
        {
            Wrapperdata.map((w)=>{
                return(
                    <>
                <input type="radio" name="tab" id="tab-1" />
                <label for="tab-1">
                <span>{w.data}</span>
                <div className="icon" style={{fontSize:"18px"}}>+</div>
                </label>
                <div className="content">
                <p>{w.content}</p>
                </div>
                </>
                )
            })
        }
</div>

<div className="parent-tab" id="parent">
        {
            parenttab.map((p)=>{
                return(
                    <>
                    <input type="radio" name="tab" id="tab-2" />
                    <label for="tab-2">
                    <span>{p.data}</span>
                    <div className="icon" style={{fontSize:"18px"}}>+</div>
                    </label>
                    <div className="content">
                    <p>{p.content}</p>
                    </div>
                    </>
                )
            })
        }
</div>

<div className="parent-tab" id="matter">
        {
            Health.map((h)=>{
                return(
                    <>
                    <input type="radio" name="tab" id="tab-3"/>
                    <label for="tab-3">
                    <span>{h.data}</span>
                    <div className="icon" style={{fontSize:"18px"}}>+</div>
                    </label>
                    <div className="content">
                    <p>{h.content}</p>
                    </div>
                    </>
                )
            })
        }
</div>

<div className="parent-tab" id="TheSpa">
        {
            Arraving.map((a)=>{
                return(
                    <>
                        <input type="radio" name="tab" id="tab-4"/>
                        <label for="tab-4">
                        <span>{a.data}</span>
                        <div className="icon" style={{fontSize:"18px"}}>+</div>
                        </label>
                        <div className="content">
                        <p>{a.content}</p>
                        </div>
                    </>
                )
            })
        }
</div>

<div className="parent-tab" id="Childreandata">
     {
        Childrendata.map((c)=>{
            return(
                <>
                 <input type="radio" name="tab" id="tab-5"/>
                <label for="tab-5">
                <span>{c.data}</span>
                <div className="icon" style={{fontSize:"18px"}}>+</div>
                </label>
                <div className="content">
                <p>{c.content}</p>
                </div>
                </>
            )
        })
     }
</div>

</div>
</div>
<Footer/>
</>
    )
}
export default Spafaq