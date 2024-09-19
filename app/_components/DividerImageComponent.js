import Image from "next/image";

export default function DividerImageComponent({alt, url}){
    return(
        <section className="container-fluid position-relative" style={{aspectRatio : "10/1" }}>
            <Image
                alt={alt}
                src={url}
                fill />
        </section>    
    );
}