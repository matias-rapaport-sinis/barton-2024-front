export default function GridHorizontalItemComponent({children}, key){
    return (
        <div className="col" key={key}>
            {children}
        </div>
    )
}