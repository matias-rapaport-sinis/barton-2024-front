import Image from "next/image";
import GridHorizontalComponent from "./_components/GridHorizontal";
import GridHorizontalItemComponent from "./_components/GridHorizontalItemComponent";
import DividerTextComponent from "./_components/DividerTextComponent";
import DividerImageComponent from "./_components/DividerImageComponent";
import VideoComponent from "./_components/VideoComponent";

export default function Home() {


  return (
    <main className="p-0">
      
      <VideoComponent url="Video-introduccion.mp4" />
      
      <DividerTextComponent text="barton en tu proxima obra" />

      <GridHorizontalComponent>
          {[
            { url: "/caracteristicas/1.png", alt: "Hombre que construlle", title: "4 veces mas liviano" },
            { url: "/caracteristicas/2.png", alt: "Red", title: "3 veces mas resistente" },
            { url: "/caracteristicas/3.png", alt: "Anillo cargado por un hombre", title: "Flexible" },
            { url: "/caracteristicas/4.png", alt: "Tubos de ensayo con acido", title: "No corresivo" },
            { url: "/caracteristicas/5.png", alt: "Pared", title: "No conductivo" },

          ].map((item, index) => {
            return (
              <GridHorizontalItemComponent key={`caracter-${index}`}>
                <div style={{aspectRatio: "10/16"}} className="position-relative">
                  <Image src={item.url} alt={item.alt} title={item.title}  fill/>
                </div>
                  <p style={{fontSize : "1.2rem"}} className="bg-color-barton text-center text-uppercase p-2 font-barton m-0 text-white"> {item.title}</p>
              </GridHorizontalItemComponent>
          )
          })}
     
      </GridHorizontalComponent>


      <GridHorizontalComponent>
              {[
              { url: "/caracteristicas-iconos/1.png", alt: "Hombre que construlle", title: "4 veces mas liviano" },
              { url: "/caracteristicas-iconos/2.png", alt: "Anillo cargado por un hombre", title: "Flexible" },
              { url: "/caracteristicas-iconos/3.png", alt: "Tubos de ensayo con acido", title: "No corresivo" },
              { url: "/caracteristicas-iconos/4.png", alt: "Pared", title: "No conductivo" },
              { url: "/caracteristicas-iconos/5.png", alt: "Red", title: "3 veces mas resistente" },

            ].map((item, index) => {
              return <GridHorizontalItemComponent key={`caracter-${index}`}> 
                        <div style={{aspectRatio: "1/1", maxWidth : 150}} className="position-relative mx-auto">
                           <Image src={item.url} alt={item.alt} title={item.title}  fill/>
                        </div>
                     </GridHorizontalItemComponent>              
            })}
      </GridHorizontalComponent>

      <DividerTextComponent text="productos barton" />

      <GridHorizontalComponent>
        {[
          { url: "/Productos/1.png", alt: "Hombre que construlle", title: "Barras" },
          { url: "/Productos/2.png", alt: "Anillo cargado por un hombre", title: "Malla" },
          { url: "/Productos/3.png", alt: "Tubos de ensayo con acido", title: "Rollo" },
          { url: "/Productos/4.png", alt: "Pared", title: "Estaca" },
          { url: "/Productos/5.png", alt: "Red", title: "Especiales" },
        ].map((item, index) => {
          return <GridHorizontalItemComponent key={`productos-${index}`}>
              <div style={{aspectRatio: "10/16"}} className="position-relative">
                <Image
                  alt={item.alt}
                  src={item.url}
                  fill />
              </div>
              <p className="text-center bg-color-barton font-barton w-50 mx-auto text-white rounded text-uppercase" style={{ fontSize: 20, fontWeight: 1000 }}>{item.title}</p>
          </GridHorizontalItemComponent>

        })}
      </GridHorizontalComponent>

      <DividerImageComponent alt="Grilla de barras de fibra de vidrio" url="/barras.png" />

      <DividerTextComponent text="aplicaciones" />  

      <GridHorizontalComponent>
        {[
          { url: "/aplicaciones/1.png", alt: "Hombre que construlle", title: "Pisos", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
          { url: "/aplicaciones/2.png", alt: "Anillo cargado por un hombre", title: "Pileta", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
          { url: "/aplicaciones/3.png", alt: "Tubos de ensayo con acido", title: "Plateas", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
          { url: "/aplicaciones/4.png", alt: "Pared", title: "Premoldes", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
          { url: "/aplicaciones/5.png", alt: "Red", title: "Infraestructura", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
        ].map((item, index) => {
          return <GridHorizontalItemComponent key={`productos-${index}`}>
            <div style={{aspectRatio: "10/16"}} className="position-relative">
                <Image
                  alt={item.alt}
                  src={item.url}
                  fill />
              </div>
            <div className="border rounded text-center" >
              <p className="font-barton w-100 text-color-barton-brand text-uppercase my-3" style={{ fontSize: 24, fontWeight: 1000 }}>{item.title}</p>
              <p className="font-barton" style={{ fontSize: 14, fontWeight: 300 }} >{item.detail}</p>
              <p><a className="link-opacity-75 font-barton text-color-barton-brand" style={{ fontSize: 16, fontWeight: 400 }} href="#">Ver mas</a></p>
            </div>
          </GridHorizontalItemComponent>

        })}
      </GridHorizontalComponent>


    </main>
  );
}
