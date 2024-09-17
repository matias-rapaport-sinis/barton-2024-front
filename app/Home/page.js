import Image from "next/image";

export default function HomePage() {

    return (
        <main className="container-fluid p-0 h-100">
          <div className="row-12 h-100">
                    <iframe  fill className="h-100 w-100" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
          </div>
          <div className="row" >
            <p className="fs-1 text-center font-barton p-3 text-color-barton-brand"> BARTON EN TU PROXIMA OBRA</p>
          </div>
            <div className=" d-flex flex-coloumn " style={{minHeight : "50vh"}}>
              <div className="flex-grow-1 mx-1 position-relative"  > 
              <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                    fill
                    object-fit="cover"
                  /> 
              </div>
              <div className="flex-grow-1 mx-1 position-relative">
              <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                                        fill
                    object-fit="cover"
                  />
              </div>       
              <div className="flex-grow-1 mx-1 position-relative">
                <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                    fill
                    object-fit="cover"
                  />
                </div>       
              <div className="flex-grow-1 mx-1 position-relative">
                <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                    fill
                    object-fit="cover"
                  />
                </div>       
              <div className="flex-grow-1 mx-1 position-relative">
                <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                    fill
                    object-fit="cover"
                  />
                </div>       

            </div>
        </main>
    );
}