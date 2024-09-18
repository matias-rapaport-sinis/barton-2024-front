import GridHorizontalComponent from "./_components/GridHorizontal";
import CardImageWithTitle from "./_components/CardImageWithTitle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container-fluid p-0 h-100">
     {/*  <div className="row-12 h-100">
        <iframe fill className="h-100 w-100" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
      </div>
      */} 

      <section className="row">
        <p className=" text-center font-barton p-3 text-color-barton-brand-second text-uppercase" style={{fontSize : 48, fontWeight : 1000}}> barton en tu proxima obra</p> 
      </section>


      <GridHorizontalComponent>
        {[
          {url : "/caracteristicas/1.png", alt : "Hombre que construlle", title : "4 veces mas liviano"},
          {url : "/caracteristicas/3.png", alt : "Anillo cargado por un hombre", title : "Flexible"},
          {url : "/caracteristicas/4.png", alt : "Tubos de ensayo con acido", title : "No corresivo"},
          {url : "/caracteristicas/5.png", alt : "Pared", title : "No conductivo"},
          {url : "/caracteristicas/2.png", alt : "Red", title : "3 veces mas resistente"},
          
        ].map((item, index) => {
          return <CardImageWithTitle key={`pros-${index}`} {...item} />  
        })}  
      </GridHorizontalComponent>
      
      <section className="d-flex flex-coloumn position-relative my-5" >
        {[
          {url : "/caracteristicas-iconos/1.png", alt : "Hombre que construlle", title : "4 veces mas liviano"},
          {url : "/caracteristicas-iconos/2.png", alt : "Anillo cargado por un hombre", title : "Flexible"},
          {url : "/caracteristicas-iconos/3.png", alt : "Tubos de ensayo con acido", title : "No corresivo"},
          {url : "/caracteristicas-iconos/4.png", alt : "Pared", title : "No conductivo"},
          {url : "/caracteristicas-iconos/5.png", alt : "Red", title : "3 veces mas resistente"},
          
        ].map((item, index) => {
          return <Image 
            key={`proscarac-${index}`}
            alt={item.alt} 
            src={item.url} 
            height={150}
            width={150}
            className=" mx-auto"/>  
        })} 
      </section>
    
      <section className="row">
        <p className=" text-center font-barton p-3 text-color-barton-brand-second text-uppercase" style={{fontSize : 48, fontWeight : 1000}}> Productos barton</p> 
      </section>

        <section className="d-flex flex-coloumn my-5" >
          {[
            {url : "/Productos/1.png", alt : "Hombre que construlle", title : "Barras"},
            {url : "/Productos/2.png", alt : "Anillo cargado por un hombre", title : "Malla"},
            {url : "/Productos/3.png", alt : "Tubos de ensayo con acido", title : "Rollo"},
            {url : "/Productos/4.png", alt : "Pared", title : "Estaca"},
            {url : "/Productos/5.png", alt : "Red", title : "Especiales"},
          ].map((item, index) => {
            return <div key={`proscarac-${index}`} className="flex-grow-1 text-center">
                <Image 
                  alt={item.alt} 
                  src={item.url} 
                  height={350}
                  width={348}
                  className=" mx-auto"/>
              <p className=" bg-color-barton font-barton w-50 mx-auto text-white rounded text-uppercase" style={{fontSize : 20, fontWeight : 1000}}>{item.title}</p>
            </div>
              
          })} 
        </section>  

        <section className="row-12 position-relative" style={{height: 200}}>
          <Image 
            alt="Hombre que construlle" 
            src="/barras.png" 
            fill/>
        </section>  


        <section className="row my-5 Productos barton Productos barton Productos barton Productos barton">
          <p className=" text-center font-barton p-3 text-color-barton-brand-second text-uppercase" style={{fontSize : 48, fontWeight : 1000}}>Aplicaciones</p> 
        </section>

        <section className="d-flex flex-coloumn my-5 mx-2" >
          {[
            {url : "/aplicaciones/1.png", alt : "Hombre que construlle", title : "Pisos", detail : "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. "},
            {url : "/aplicaciones/2.png", alt : "Anillo cargado por un hombre", title : "Pileta", detail : "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. "},
            {url : "/aplicaciones/3.png", alt : "Tubos de ensayo con acido", title : "Plateas", detail : "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. "},
            {url : "/aplicaciones/4.png", alt : "Pared", title : "Premoldes", detail : "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. "},
            {url : "/aplicaciones/5.png", alt : "Red", title : "Infraestructura", detail : "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. "},
          ].map((item, index) => {
            return <div key={`proscarac-${index}`} className="flex-grow-1 my-3">
                <Image 
                  alt={item.alt} 
                  src={item.url} 
                  height={350}
                  width={348}
                  className=" mx-auto"/>
              <div className="border rounded text-center" style={{width : 348}}>
                <p className="font-barton w-100 text-color-barton-brand text-uppercase my-3" style={{fontSize : 32, fontWeight : 1000}}>{item.title}</p>
                <p className="font-barton" style={{fontSize: 14, fontWeight: 300}} >{item.detail}</p>
                <p><a className="link-opacity-75 font-barton text-color-barton-brand" style={{fontSize : 16, fontWeight : 400}} href="#">Ver mas</a></p>
              </div>
            </div>
              
          })} 
        </section>

      </main>
  );
}
