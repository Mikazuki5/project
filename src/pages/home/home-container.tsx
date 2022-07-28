import React from "react";
import './home.scss'

const HomeContainer = () => {
  return (
    <React.Fragment>
      <section className="banner">
        <img alt='' src={require('../../shared/image/upi2.jpeg')} className="fitBg" />
        <div className="content">
          <h2>Selamat Datang</h2>
          <p>Di Responsif web design. Website interaktif dengan kontent yang anti-mainstream pada mata pelajaran geografi. Pada Materi atmosfir dan cuaca iklim</p>
          <a href="#about" className="btn">Pelajari Lebih</a>
        </div>
      </section>
      <section className="about" id="about">
        <div className="contentBx">
          <h2 className="titleText">Rasakanlah Keindahan Dunia!</h2>
          <p className="text">Jelajahilah dunia ini saat kamu menginginkan sebuah ketenangan dan kedamian. Buatlah dunia kamu lebih indah dengan datang ke berbagai tempat di belahan dunia ini <br /><br />Setelah itu ceritakanlah kepada orang lain bahwa anda menikmati perjanan ini dan ini melakukan perjalan kembali!</p>
          <a href="#destination" className="btn">Popular Place and Destination</a>
        </div>
        <div className="imgBx">
          <img alt='' src={require('../../shared/image/web2.jpg')} className="fitBg" />
        </div>
      </section>
      <section className="banner2">
        <img alt='' src="web7.jpg" className="fitBg" />
      </section>
      <section className="destination" id="destination">
        <div className="conetnt">
          <h2 className="titleText">Most Polular Travel Destionation in The World</h2>
          <p className="text">Di dunia sangat banyak sekali tempat wisata yang sangat bagus dan unik. Mulai dari makanannya, tempat, budaya, dll</p>
        </div>
        <div className="destinationList">
          <div className="box">
            <div className="imgBx">
              <img alt='' src="web1.jpg" className="fitBg" />
            </div>
            <div className="content">
              <h2>Borobudur Temple<br /><span>Indonesia</span></h2>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img alt='' src="web9.jpg" className="fitBg" />
            </div>
            <div className="content">
              <h2>Papandaian's Montain<br /><span>Indonesia</span></h2>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img alt='' src="web8.jpg" className="fitBg" />
            </div>
            <div className="content">
              <h2>Raja Ampat<br /><span>Indonesia</span></h2>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img alt='' src="web10.jpg" className="fitBg" />
            </div>
            <div className="content">
              <h2>Bali's Island<br /><span>Indonesia</span></h2>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img alt='' src="web7.jpg" className="fitBg" />
            </div>
            <div className="content">
              <h2>Bromo<br /><span>Indonesia</span></h2>
            </div>
          </div>
        </div>
        <a href="/" className="btn">View More</a>
      </section>
      <section className="banner3">
        <img alt='' src="banner3.jpg" className="fitBg" />
      </section>

      <section className="footer">
        <ul className="sci">
          <li><a href="/"><img alt='' src={require('../../shared/resIcon/facebook.png')} /></a></li>
          <li><a href="/"><img alt='' src={require('../../shared/resIcon/twitter.png')} /></a></li>
          <li><a href="/"><img alt='' src={require('../../shared/resIcon/instagram.png')} /></a></li>
        </ul>
        <h4 className="copyrightText">Copyright 2022 <a href="/">Mikazuki Nisshoku</a></h4>
      </section>
    </React.Fragment>
  )
}

export default HomeContainer;