import HeaderShop from '../HeaderShop/HeaderShop'
import './MainShop.css'

function MainShop() {
    return (
        <>
            <HeaderShop />
            <div className='overlayShop'>
                <section className='sectionShop'>
                    <div className='leftSec1'>
                        <h3>Good4Me</h3>
                        <h1>MULTI-VITAMIN (3 MONTH SUPPLY)</h1>
                        <p>Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. </p>
                        <button>Shop Now</button>
                    </div>
                    <img src="../public/img/pos.png" alt="" />
                </section>
            </div>
            <section className='sectionShop2'>
                <div className='newColection'>
                    <h3>
                        New Collection For GOOD4ME Care Products
                    </h3>
                    <div className='butBlock'>
                        <button>Shop Now</button>
                    </div>
                </div>
                <div className='twoPicture'>
                    <img src="../public/img/righttt.png" alt="" />
                    <img src="../public/img/tsyts.png" alt="" />
                </div>
            </section>
            <section className='sectionShop3'>
                <img src="../public/img/teta.png" alt="" />
                <div className='takeControl'>
                    <div className='righttt'>
                        <h1>TAKE CONTROL OF YOUR HEALTH</h1>
                        <p>The Good4Me range has been formulated based on scientific & traditional evidence.</p>
                        <p>Our vitamins are here and ready to boost your mood, immunity and overall well-being!</p>
                        <p>Made in New Zealand from local and imported ingredients.</p>
                        <button>BROWSE OUR RANGE</button>
                    </div>
                    <img src="../public/img/Liness.png" alt="" />
                </div>
            </section >
            <section className='sectionShop4'>
                <h3>Our Best Selling Products</h3>
                <div className='underHplock'>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                    <div className='arrowBox'>
                        <span>VIEW ALL PRODUCTS</span>
                        <img src="../public/img/arrow.svg" alt="" />
                    </div>
                </div>
                <div className='imageFlex'>
                <img src="../public/img/Group40.png" alt="" />
                <img src="../public/img/Group38.png" alt="" />
                <img src="../public/img/Group37.png" alt="" />
                </div>
            </section>
        </>
    )
}

export default MainShop