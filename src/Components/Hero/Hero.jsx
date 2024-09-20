import './Hero.css'  
import React, { useEffect, useRef } from 'react';
import Slider from '../Slider/Slider';


function Hero() {
   

  return (
    <div class="hero">
        <section class="hero-index">
            <div class="container">

                 <div class="projet"><a href="#projet2">
                    <li class="index-item">2023</li>
                    <li class="index-item">Geminii</li>
                    <li class="index-item type">Webdesign / Développement web</li>
                    </a>
                 </div>
                 <div class="projet"><a href="#projet3">
                    <li class="index-item">2024</li>
                    <li class="index-item">Höfn Studio</li>
                    <li class="index-item type">Webdesign / Développement web</li>
                    </a>
                 </div>
                 <div class="projet"><a href="#projet4">
                    <li class="index-item">2024</li>
                    <li class="index-item">Höfn Studio</li>
                    <li class="index-item type">Webdesign / Développement web</li>
                    </a>
                 </div>
             </div>
        </section>    

        <section class="hero-projets">


        <div id="projet1">
         
         <Slider/>
            <div class="projet">
               <a href="#">
                  <li class="index-item">2024</li>
                  <li class="index-item">Projet 1</li>
                  <li class="index-item type">Webdesign / Développement web</li>
               </a>
            </div>
        </div>

        <div id="projet2">
         <Slider/>
            <div class="projet">
               <a href="#">
                  <li class="index-item">2024</li>
                  <li class="index-item">Projet 2</li>
                 
               </a>
            </div>
        </div>

        <div id="projet3">
         <Slider/>
            <div class="projet">
               <a href="#">
                  <li class="index-item">2024</li>
                  <li class="index-item">Projet 3</li>
                  <li class="index-item type">Webdesign / Développement web</li>
               </a>
            </div>
        </div>

        
        <div id="projet4">
         <Slider/>
            <div class="projet">
               <a href="#">
                  <li class="index-item">2024</li>
                  <li class="index-item">projet 4</li>
                  <li class="index-item type">Webdesign / Développement web</li>
               </a>
            </div>
        </div>


        <div id="projet5">
         <Slider/>
            <div class="projet">
               <a href="#">
                  <li class="index-item">2024</li>
                  <li class="index-item">Höfn Studio</li>
                  <li class="index-item type">Webdesign / Développement web</li>
               </a>
            </div>
        </div>

        
        <div id="projet6">
         <Slider/>
            <div class="projet">
               <a href="#">
                  <li class="index-item">2024</li>
                  <li class="index-item">Höfn Studio</li>
                  <li class="index-item type">Webdesign / Développement web</li>
               </a>
            </div>
        </div>
        

        
        </section>


        

    </div>
  )
}

export default Hero