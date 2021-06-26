import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home-image"/>
            
                <div className="home_row">
                     <Product 
                     id='12321341'
                     title='The Lean startup: How Constant innovation Creates Radically Successful Businesses paperback' 
                     price={615.99} 
                     image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                      rating={5} />
                      <Product 
                     id='49538094'
                     title='Kenwood kMix Stand Mixer for Baking, Stylish L Kitchen Mixewr with k-beater, Dough Hook and Whisk, 5 litre glass Bowl' 
                     price={7459.99} 
                     image='https://m.media-amazon.com/images/I/31MzrqbcfjL._AC_UY218_.jpg'
                      rating={4} />
                     
                </div>
                <div className="home_row">
                    <Product 
                     id='4903850'
                     title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"  
                     price={3929.99} 
                     image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
                      rating={3} />
                      <Product 
                     id='23445930'
                     title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
                     price={9748.99} 
                     image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex25'
                      rating={5} />
                      <Product 
                     id='3254354345'
                     title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)' 
                     price={29959.99} 
                     image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                      rating={4} />
                </div>
                <div className="home_row">
                    <Product 
                        id='90829332'
                        title="Samsung LC49RG90SSUXEN 49' curved LED GAming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" 
                        price={84208.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                        rating={5} />
                </div>
            </div>
        </div>
    )
}

export default Home
