import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Footerdev from '../Components/Footer/Footerdev'
import '../infos.css'
import React, { useEffect } from 'react';

export default function Infos() {

    useEffect(() => {
        const cursors = document.querySelectorAll(".follow-img");
    
        const handleMouseMove = (e) => {
          const x = e.clientX;
          const y = e.clientY;

          cursors.forEach(cursor => {
          cursor.style.left = `${x+50}px`;
          cursor.style.top = `${y-50}px`;
        });
        };
    
        document.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);

    return (
        <>
        <Navbar/>

        <div className="hero-infos">
                      
    
                   
        <section className="hero-index-infos">
            <div className="container-infos">
                
                 <div className="infos-left">
                 <p className="description-infos"><h1>[FR]</h1>
              Designer graphique multifonctions basé au Havre, je me spécialise dans le design numérique et imprimé :
                     éditions, identités visuelles, web design, supports print ou communication numérique. 
                     J’expérimente également autour de la vidéo et de la photographie. 
                     J’essaie d’aborder la création comme une science en plaçant la recherche et l’expérimentation 
                     au cœur de mon travail. Passionné par la technique, je croise souvent les pratiques afin 
                     de créer des images uniques et percutantes.</p>    

             
                  
    
                <p className="description-infos"><h1>[EN]</h1>
             Multifunctional graphic designer based in Le Havre, I specialize in both digital and print design: 
    publishing, visual identities, web design, print materials, and digital communication.
     I also experiment with video and photography. I approach creation like a science, 
     placing research and experimentation at the heart of my work. Passionate about technique,
      I often blend practices to create unique and impactful visuals.</p>
                            
      <p className="align-right"><a href=""> CV ↗</a> </p>
      
    

                            
      <p className="align-right">Si travailler ensemble vous intéresse, ou pour toute autre demande, contactez-moi <br></br>
      If you're interested in working together or have any other inquiries, contact me </p>
      
      <p className="adress">
        <a href="https://instagram.com/letage.lehavre">
      L'Etage ↗
      <br></br>
      30 Rue Bougainville
      <br></br>
      76600 Le Havre
      </a>
      </p>
        
      <p className="contact">
      <a href="mailto:contact@tomricouard.com">✉</a>
</p>
                 </div>
             </div>
            

      <Footer/>

      <div class="divider"></div>

        </section>    

        <section className="hero-projets-infos">

         
        <div className="container-infos">
                 <div className="infos-right">
            
                <p><h1>Expériences</h1> 
                    <br></br>
                    <li>2023 - Aujourd'hui<br></br><span className="infos-span">Co-fondateur et graphiste |    <a href="https://hofn-studio.com"><span>Höfn Studio ↗</span><img src="https://pm1.narvii.com/7097/fe43d172ed2d29601d660633982474e2626e5306r1-640-635v2_hq.jpg" alt="img-cover" className="follow-img" /></a></span></li><br></br>
                    <li>2022 - Aujourd'hui<br></br><span className="infos-span">Président, graphiste | <a href="https://instagram.com/letage.lehavre"><span>Association L'Etage ↗</span><img src="https://pm1.narvii.com/7097/fe43d172ed2d29601d660633982474e2626e5306r1-640-635v2_hq.jpg" alt="img-cover" className="follow-img" /></a></span></li><br></br>
                    <li>2020 - Aujourd'hui<br></br><span className="infos-span">Freelance | Lite, Studio Jaune, Geminii, JacksonMnr, Studio Carré, Kartoon, APIX, REC Rouen, L'Etage...</span></li> <br></br>
                    <li>2019<br></br><span className="infos-span">Graphiste Stagiaire | <a href="https://intro.cool"><span>Agence Intro ↗</span><img src="https://pm1.narvii.com/7097/fe43d172ed2d29601d660633982474e2626e5306r1-640-635v2_hq.jpg" alt="img-cover" className="follow-img" /></a></span></li><br></br>
                    <li>2018<br></br><span className="infos-span">Webdesigner |  <a href="https://2018.unesaisongraphique.fr"><span>Une Saison Graphique 2018 ↗</span><img src="https://pm1.narvii.com/7097/fe43d172ed2d29601d660633982474e2626e5306r1-640-635v2_hq.jpg" alt="img-cover" className="follow-img" /></a></span></li><br></br>
                    <li>2016 - 2020<br></br><span className="infos-span">Directeur artistique, graphiste, photographe, vidéaste | <a href="https://instagram.com/bientomberecords"><span>Bien Tombé Records ↗</span><img src="https://pm1.narvii.com/7097/fe43d172ed2d29601d660633982474e2626e5306r1-640-635v2_hq.jpg" alt="img-cover" className="follow-img" /></a></span></li>
                    <br></br>
<hr></hr>
<br></br>
                    <h1>Parcours</h1> 
            <br></br>
<li>2020<br></br><span className="infos-span">DNSEP Design Graphique Option Numérique et Intéractivité | ESADHaR, Le Havre</span></li>   <br></br>
<li>2018<br></br><span className="infos-span">DNA Design Graphique Option Numérique et Intéractivité | ESADHaR, Le Havre</span></li>
<br></br>
            </p>

                        
            <p>

<h1>Expositions</h1> 
<br></br>

<li><date>Mars 2021 / Septembre 2021</date><br></br><span className="infos-span"><a href="https://www.tendanceouest.com/actualite-379887-le-havre-ils-explorent-le-potentiel-graphique-de-la-cite-chicago"><span>"Chicago ↗"</span><img src="https://pm1.narvii.com/7097/fe43d172ed2d29601d660633982474e2626e5306r1-640-635v2_hq.jpg" alt="img-cover" className="follow-img" /></a> en trio avec Jedd et Trystan Hamon | Galerie 1x2+, Le Havre <br></br>puis La Fabrique des quartiers du sud, Le Havre</span></li>
<br></br>
<hr></hr>
<br></br>
<h1>Workshops</h1> 
            <br></br>
<li><date>Janvier 2021<br></br></date><span className="infos-span">Résidence artistique Art Matters | Collège Jacques-Monod, via Le Portique et La Fabrique des quartiers sud</span></li>   <br></br>

<li><date>Octobre 2021<br></br></date><span className="infos-span">REGARDS Art Discovery | Le Portique, Le Havre</span>
</li>
<br></br>
<li>
<date>Décembre 2021<br></br></date><span className="infos-span">Art Matters | Bâtiment CFA Caen via Le Portique</span></li>
<br></br>
<hr></hr>
<br></br>
<span className="services">
<h1>Services</h1>
<br></br>
Direction artistique, design graphique, design editorial, web design, photographie, effets visuels et expérimentations en tout genre 🞰
<br></br>
</span><br></br>


</p>

                 </div>

             </div>
             <Footerdev/>
    </section>


     

    </div>
        

       </> 
    )
}