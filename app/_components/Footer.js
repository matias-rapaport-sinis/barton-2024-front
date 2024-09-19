import Image from "next/image";

export default function Footer(){
    return (

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

    );
}