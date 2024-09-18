function GridItemComponent({children}){
    return (
        <div className="flex-grow-1">
            {children}
        </div>
    )
}

export default function GridHorizontalComponent({children}){

    return (
        <div className="d-flex flex-coloumn ">
            {children.map((item, index) => {return (<GridItemComponent key={index}> {item} </GridItemComponent>)})}
        </div>
    );
}