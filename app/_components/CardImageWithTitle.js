import Image from "next/image";

function CardImageWithTitle({title, url, alt}){

    return (       
        <div className="d-flex flex-column" style={{marginLeft : 1, marginRight : 1}} >
            <div className="flex-grow-1 position-relative" style={{height: "450px", aspectRatio: "10/16"}}>               
                <Image
                    src={url}
                    alt={alt}
                    fill
                    />
            </div>
            <p className="bg-color-barton text-center fs-4 text-uppercase font-barton m-0 text-white" >{title}</p>    
                
        </div>
    );
}

export default  CardImageWithTitle;