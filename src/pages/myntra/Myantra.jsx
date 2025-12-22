import React from 'react'
import './Myantra.css'
import mintra from '../../../public/images/mintra.jpg'
import phom from '../../../public/images/phom.png'
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";

const Myantra = () => {
    return (
        <div className='container'>
            <header className='headres'>
                <div className='inner-headers'>
                    <img src={mintra} />
                    <nav className='nav'>
                        <ul>
                            <li> <a href='#'> <b>Men</b></a></li>
                            <li> <a href='#'> <b>Women</b> </a></li>
                            <li> <a href='#'> <b>Kids</b> </a></li>
                            <li> <a href='#'> <b>Home</b> </a></li>
                            <li> <a href='#'> <b>Beauty</b> </a></li>
                            <li> <a href='#'> <b>Genz</b> </a></li>
                        </ul>
                    </nav>


                    <div className='search'>

                        <CiSearch />
                        <input type='text' placeholder='Search for products, brands and more' />
                    </div>


                    <div className='settings'>
                        <div className='profile'>
                            <CgProfile size={20} />
                            <p>profile</p>
                        </div>
                        <div className='Wishlist
'>

                            <FaRegHeart size={20} />
                            <p> Wishlist
                            </p>
                        </div>
                        <div className='Bag'>

                            <HiOutlineShoppingBag size={20} />
                            <p>Bag</p>
                        </div>
                    </div>


                </div>



            </header>


















            <section className='section'>

                <div className='inner-section'>

                    <p className='categori'> Home/Footwear/<b>Shoes</b></p>
                    <p> <b>Shoes</b> - 209633 items</p>
                    <p> <b>Filters</b></p>
                </div>
            </section>
            <aside className='aside'>
                <div className='inner-aside'>
                    <div className='genderSection'>


                        <input type="radio" id="Men" name="fav_language" value="Men" />
                        <label htmlFor="Men">Men  </label>
                        <br />
                        <input type="radio" id="Women" name="fav_language" value="Women" />
                        <label htmlFor="Women">Women</label>
                        <br />
                        <input type="radio" id="Boys" name="fav_language" value="Boys" />
                        <label htmlFor="Boys">Boys</label>

                        <br />
                        <input type="radio" id="Girls" name="fav_language" value="Girls" />
                        <label htmlFor="Girls">Girls</label>

                    </div>
                    <div className='Categories'>
                        <div className='categories-serch'>
                            <p><b>Categories</b></p>
                            <CiSearch size={20} />
                        </div>

                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>
                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>
                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>
                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>
                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>


                    </div>
                    <div className='Brand'>

                        <div className='categories-serch'>
                            <p><b>Brand</b></p>
                            <CiSearch size={20} />
                        </div>

                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>
                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>
                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>
                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>
                        <div className='checkboxes'>
                            <input
                                type="checkbox"
                                id="vehicle1"
                                name="vehicle1"
                                value="Bike"
                            />
                            <label htmlFor="vehicle1" className='Casual'> Casual Shoes(57461)</label>
                        </div>
                    </div>

                    <div className='Price'>price</div>


                </div>







                <hr />

            </aside>
            <main className='main'>


<div className='inner-main'>

<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>
<div className='card'>
    <img src={phom}  />

<div className='pricing'>
<h6 className='heading-price'><b>Red Tape</b></h6>
<p className='discription'>Men Running 
    Shoes
</p>
<span><span class="product-discountedPrice"><b>Rs. 2699</b></span></span>
</div>
</div>

</div>

            </main>
            <footer className='footer'>footer</footer>

        </div>
    )
}

export default Myantra
