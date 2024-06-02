import Header from "../components/Header"
import '../assets/css/Blog.css'
import '../components/Header.css'
import Footer from "../components/Footer"
import '../components/Footer.css'

const CardData = [
    {
        image: `https://html.ditsolution.net/luxury/assets/images/blog2.jpg`,
        date: 'December 20,2024 Comment (5)',
        title: 'A Night in Norway',
        descrption: 'Embark on a journey through the world of hospitality.'
    },
    {
        image: `https://html.ditsolution.net/luxury/assets/images/blog4.jpg`,
        date: 'December 20,2024 Comment (5)',
        title: 'Standard Room',
        descrption: 'Discover the art and science behind effective hotel management.'
    },
    {
        image:`https://html.ditsolution.net/luxury/assets/images/blog1.jpg` ,
        date: 'December 20,2024 Comment (5)',
        title: 'A Night in Norway',
        descrption: 'Embark on a journey through the world of hospitality.'
    },
    {
        image:`https://themes.getmotopress.com/luviana/wp-content/uploads/sites/27/2019/07/about-rooms-2-1024x692.jpg`,
        date: 'December 20,2024 Comment (5)',
        title: 'A Night in Norway',
        descrption: 'Embark on a journey through the world of hospitality.'
    },
    {
        image:`https://i.pinimg.com/236x/36/ef/77/36ef77835e28f74e3c2b652156d291ae.jpg` ,
        date: 'December 20,2024 Comment (5)',
        title: 'Standard Room',
        descrption: 'Discover the art and science behind effective hotel management.'
    },
    {
        image:`https://i.pinimg.com/236x/9a/70/84/9a708474f765748b92acd385a0e2dc68.jpg` ,
        date: 'December 20,2024 Comment (5)',
        title: 'A Night in Norway',
        descrption: 'Embark on a journey through the world of hospitality.'
    },
]
function Blog() {
    return (
        <>
            <Header />
            {/* start */}
            <div className="bg">
                <p className="text">Blog Grid</p>
                <p className="text1">HOME  &gt; BLOG GRID</p>
            </div>
            {/* end */}
            {/* <!-- start --> */}
            <div className="container-fluid">
             
                    <div  className="blogData row">
                        {CardData?.map((p)=>{
                            return(
                                <div  className="col-3  blogcard">
                                <img style={{marginTop:50,height:'200px'}} src={p.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                 <pre className="blogtext2 card-title">{p.date}</pre>
                                 <p className="btext3">{p.title}</p>
                                  <p className="blogtext">{p.descrption}</p>
                                </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
  

            {/* <!-- end --> */}
            <Footer />
        </>
    )
}
export default Blog