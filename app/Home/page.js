import Image from "next/image";

export default function HomePage() {

    return (
        <main className="container-fluid p-0 h-100">
          <div className="row-12">
                    <iframe className="h-100 w-100" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
          </div>
          <div className="row">
            <p className="fs-1 text-center font-barton p-3 text-color-barton-brand"> BARTON EN TU PROXIMA OBRA</p>
          </div>
            <div className=" d-flex flex-coloumn " style={{minHeight : "50vh"}}>
              <div className="flex-grow-1 mx-1" style={{height : 300, widht : 200}} > 
              <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                    fill
                    objetjFit="contain"
                  /> 
              </div>
              <div className="flex-grow-1 mx-1">
              <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                    width={200}
                    height={200}
                  />
              </div>       
              <div className="flex-grow-1 mx-1">
                <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                    width={200}
                    height={200}
                  />
                </div>       
              <div className="flex-grow-1 mx-1">
                <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                    width={200}
                    height={200}
                  />
                </div>       
              <div className="flex-grow-1 mx-1">
                <Image
                    src={"/constructor.png"}
                    alt="Logo de Barton"
                    width={200}
                    height={200}
                  />
                </div>       

            </div>

        </main>
    );
}