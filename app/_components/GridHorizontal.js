function GridItemComponent({children}){
    return (
        <div className="col">
            {children}
        </div>
    )
}

export default function GridHorizontalComponent({children, key}){

    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-5 align-items-stretch g-1 py-5" >
                {children.map((item) => {return (<GridItemComponent key={key}> {item} </GridItemComponent>)})}
            </div>
        </div>
    );
}