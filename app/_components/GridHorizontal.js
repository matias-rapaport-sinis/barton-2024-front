

export default function GridHorizontalComponent({children}){

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-5 align-items-stretch g-1 py-5" >
                {children}
            </div>
        </div>
    );
}