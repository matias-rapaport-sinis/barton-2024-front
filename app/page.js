import Image from "next/image";

export default function Home() {
  return (
    <main className=" p-0">
      <div className="">
        <iframe fill className="h-100 w-100" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowFullScreen></iframe>
      </div>


      <section className="">
        <p className=" text-center font-barton p-3 text-color-barton-brand-second text-uppercase" style={{ fontSize: 48, fontWeight: 1000 }}> barton en tu proxima obra</p>
      </section>


      <section className="container">
          <div className="row row-cols-1 row-cols-lg-5 align-items-stretch g-1 py-5">
          {[
            { url: "/caracteristicas/1.png", alt: "Hombre que construlle", title: "4 veces mas liviano" },
            { url: "/caracteristicas/2.png", alt: "Red", title: "3 veces mas resistente" },
            { url: "/caracteristicas/3.png", alt: "Anillo cargado por un hombre", title: "Flexible" },
            { url: "/caracteristicas/4.png", alt: "Tubos de ensayo con acido", title: "No corresivo" },
            { url: "/caracteristicas/5.png", alt: "Pared", title: "No conductivo" },

          ].map((item, index) => {
            return (
              <div key={`caracteristicas-${index}`} className="col">
                <div style={{aspectRatio: "10/16"}} className="position-relative">
                  <Image src={item.url} alt={item.alt} title={item.title}  fill/>
                </div>
                  <p style={{fontSize : "1.2rem"}} className="bg-color-barton text-center text-uppercase p-2 font-barton m-0 text-white"> {item.title}</p>
              </div>
          )
          })}
          </div>
      </section>

      {/* ACA ACA ACA */}
      <section className="container">
          <div className="row row-cols-1 row-cols-lg-5 align-items-stretch g-1 py-5">
              {[
              { url: "/caracteristicas-iconos/1.png", alt: "Hombre que construlle", title: "4 veces mas liviano" },
              { url: "/caracteristicas-iconos/2.png", alt: "Anillo cargado por un hombre", title: "Flexible" },
              { url: "/caracteristicas-iconos/3.png", alt: "Tubos de ensayo con acido", title: "No corresivo" },
              { url: "/caracteristicas-iconos/4.png", alt: "Pared", title: "No conductivo" },
              { url: "/caracteristicas-iconos/5.png", alt: "Red", title: "3 veces mas resistente" },

            ].map((item, index) => {
              return <div key={`caracteristicas-${index}`} className="col">
                 <div style={{aspectRatio: "1/1"}} className="position-relative">
                    <Image src={item.url} alt={item.alt} title={item.title}  fill/>
                </div>
            </div>
              
            })}

          </div>
      </section>
      
      <section className="row">
        <p className=" text-center font-barton p-3 text-color-barton-brand-second text-uppercase" style={{ fontSize: 48, fontWeight: 1000 }}> Productos barton</p>
      </section>

      <section className="d-flex flex-coloumn my-5" >
        {[
          { url: "/Productos/1.png", alt: "Hombre que construlle", title: "Barras" },
          { url: "/Productos/2.png", alt: "Anillo cargado por un hombre", title: "Malla" },
          { url: "/Productos/3.png", alt: "Tubos de ensayo con acido", title: "Rollo" },
          { url: "/Productos/4.png", alt: "Pared", title: "Estaca" },
          { url: "/Productos/5.png", alt: "Red", title: "Especiales" },
        ].map((item, index) => {
          return <div key={`proscarac-${index}`} className="flex-grow-1 text-center">
            <Image
              alt={item.alt}
              src={item.url}
              height={350}
              width={348}
              className=" mx-auto" />
            <p className=" bg-color-barton font-barton w-50 mx-auto text-white rounded text-uppercase" style={{ fontSize: 20, fontWeight: 1000 }}>{item.title}</p>
          </div>

        })}
      </section>

      <section className="row-12 position-relative" style={{ height: 200 }}>
        <Image
          alt="Hombre que construlle"
          src="/barras.png"
          fill />
      </section>


      <section className="row my-5 Productos barton Productos barton Productos barton Productos barton">
        <p className=" text-center font-barton p-3 text-color-barton-brand-second text-uppercase" style={{ fontSize: 48, fontWeight: 1000 }}>Aplicaciones</p>
      </section>

      <section className="d-flex flex-coloumn my-5 mx-2" >
        {[
          { url: "/aplicaciones/1.png", alt: "Hombre que construlle", title: "Pisos", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
          { url: "/aplicaciones/2.png", alt: "Anillo cargado por un hombre", title: "Pileta", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
          { url: "/aplicaciones/3.png", alt: "Tubos de ensayo con acido", title: "Plateas", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
          { url: "/aplicaciones/4.png", alt: "Pared", title: "Premoldes", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
          { url: "/aplicaciones/5.png", alt: "Red", title: "Infraestructura", detail: "Las barras de fibra de vidrio son considerablemente más ligeras que el hierro. Esto facilita el manejo, transporte e instalación de los pisos industriales durante el proceso de construcción. " },
        ].map((item, index) => {
          return <div key={`proscarac-${index}`} className="flex-grow-1 my-3">
            <Image
              alt={item.alt}
              src={item.url}
              height={350}
              width={348}
              className=" mx-auto" />
            <div className="border rounded text-center" style={{ width: 348 }}>
              <p className="font-barton w-100 text-color-barton-brand text-uppercase my-3" style={{ fontSize: 32, fontWeight: 1000 }}>{item.title}</p>
              <p className="font-barton" style={{ fontSize: 14, fontWeight: 300 }} >{item.detail}</p>
              <p><a className="link-opacity-75 font-barton text-color-barton-brand" style={{ fontSize: 16, fontWeight: 400 }} href="#">Ver mas</a></p>
            </div>
          </div>

        })}
      </section>

      <section className="row" style={{ height: 777 }}>
        <div className="col-6 position-relative h-100">
          <Image src="/fondo.png" fill alt="fondo" />
        </div>
        <div className="col-6 bg-color-barton h-100" style={{ padding: "4rem" }}>
          <p className="text-white font-barton text-uppercase" style={{ fontSize: 28, fontWeight: 1000 }}> Comuniquese con BARTON</p>
          <div className="d-flex flex-column flex-wrap h-100 w-100">
            {[
              { sede: "Buenos aires", adrres: "3 de febrero - Caseros - Buenos Aires", contact: "+54 9 11 52638899 / +54 9 11 52638899" },
              { sede: "Tucuman", adrres: "Av. Adolfo de la Vega 470 - San Miguel de Tucuman - Tucuman", contact: "+54 9 381 4237038 / +54 9 381 5875337" },
              { sede: "Rosario", adrres: "Av.Pres Peron 7973 - Rosario - Santa Fe", contact: "+54 9 341 2082000/ +54 9 341 2818218" },
              { sede: "Santa Fe", adrres: "Av. Galicia 2360 - Santa Fe - Santa Fe", contact: "+54 9 362 4691294/ +54 9 362 5763225" },
              { sede: "Corriente", adrres: "Medrano 1864 - Corrientes - Corrientes", contact: "+54 9 379 5790290/ +54 9 362 4115024" },
              { sede: "Cordoba", adrres: "Av.Circunvalacion Agutin TOsco 3974 - Cordoba - Cordoba", contact: "+54 9 351 7003000 / +54 9 351 5636491" },
              { sede: "Mendoza", adrres: "Sobremonte 261 - Guatmallen - Mendoza", contact: "+54 9 11 52638899 / +54 9 351 5636457" },
              { sede: "Nequen", adrres: "Lules 2520 - Neququen Capital - Neuquen", contact: "+54 9 299 5137015 / +54 9 299 5137015" }

            ].map((item, index) => {
              return (
                <div key={`sedes-${index}`} className="w-50">
                  <p className="font-barton w-100 text-white my-3" style={{ fontSize: 16, fontWeight: 500 }}>{item.sede}</p>
                  <p className="font-barton text-white" style={{ fontSize: 14, fontWeight: 300 }} >{item.adrres}</p>
                  <p><a className="link-opacity-75 font-barton text-white" style={{ fontSize: 16, fontWeight: 400 }} href={`tel:${item.contact.replace(/\s/g, '')}`}>{item.contact}</a></p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
