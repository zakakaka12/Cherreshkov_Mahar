import Header from '../Header/Header'
import './Main.css'

function Main() {

    return (
        <>
            <Header />
            <div className='overlay'>
                <section className='block_overlay'>
                    <div className='in_block'>
                        <h3>Good4Me</h3>
                        <h1>Apple Cider Vinegar</h1>
                        <p>Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. </p>
                        <button>SHOP NOW</button>
                    </div>
                </section>
            </div>
            <section className='vitamins_block'>
                <div className='title'>
                    <div className='hr_box'>
                        <h1>GOOD4ME DEAL</h1>
                        <hr />
                    </div>
                    <p>Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy products today!</p>
                </div>
                <div className='vitamins'>
                    <img src="../public/img/Group23.png" alt="" />
                    <img src="../public/img/Group24.png" alt="" />
                    <img src="../public/img/Group25.png" alt="" />
                    <img src="../public/img/Group26.png" alt="" />
                </div>
            </section>
            <div className='about_sale'>
                <div className='avia_box'>
                    <img src="../public/img/Group_18.svg" alt="" />
                    <h3>WORLDWIDE SHIPPING</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean</p>
                </div>
                <div className='avia_box'>
                    <img src="../public/img/Group19.svg" alt="" />
                    <h3>30 DAYS GUARANTEE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean</p>
                </div>
                <div className='avia_box'>
                    <img className='gr' src="../public/img/Group20.svg" alt="" />
                    <h3>SECURED PAYMENTS</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit. Aenean</p>
                </div>
            </div>
            <section className='take_control'>
                <div className='takeebox'>
                    <h1>TAKE CONTROL OF
                        YOUR HEALTH</h1>
                    <p>The Good4Me range has been formulated based on scientific & traditional evidence.</p>
                    <p>Our vitamins are here and ready to boost your mood, immunity and overall well-being!</p>
                    <p>Made in New Zealand from local and imported ingredients.</p>
                    <button className='ButtonTAKE'>BROWSE OUR RANGE</button>
                </div>
                <div className='flex'>
                    <div className='left_flex'>
                        <img src="../public/img/Rectangle18.png" alt="" />
                        <img src="../public/img/Rectangle17.png" alt="" />
                    </div>
                    <img className='ioi' src="../public/img/Rectangle16.png" alt="" />
                </div>
            </section>
            <section className='products'>
                <h1>OUR PRODUCTS ARE</h1>
                <div className='product_img'>
                    <img src="../public/img/Group35.png" alt="" />
                    <img src="../public/img/Group36.png" alt="" />
                    <img src="../public/img/Group37.png" alt="" />
                    <img src="../public/img/Group38.png" alt="" />
                </div>
                <button>VIEW ALL PRODUCTS</button>
            </section>
            <section className='goodme'>
                <div className='ins_goodmix'>
                    <div className='left_good'>
                        <h3>REAL REVIEWS</h3>
                        <h2>REAL RESULTS</h2>
                        <img src="../public/img/Grouper.svg" alt="" />
                        <p>“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”</p>
                        <span>_Chloe H.</span>
                        <div className='arrow'>
                            <img src="../public/img/left.svg" alt="" />
                            <img src="../public/img/left2.svg" alt="" />
                        </div>
                    </div>
                    <img className='ope' src="../public/img/nogti.png" alt="" />
                </div>
            </section>
            <section className='shop'>
                <h1>SHOP ALL</h1>
                <div className='shop_img'>
                    <img src="../public/img/Group40.png" alt="" />
                    <img src="../public/img/Group41.png" alt="" />
                    <img src="../public/img/Group42.png" alt="" />
                    <img src="../public/img/Group43.png" alt="" />
                </div>
                <button>VIEW ALL PRODUCTS</button>
            </section>
        </>
    )
}

export default Main
