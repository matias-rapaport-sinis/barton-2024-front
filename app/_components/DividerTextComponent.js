export default function DividerTextComponent({ text }) {

    return (
        <section className="row my-5 Productos barton Productos barton Productos barton Productos barton">
            <p 
                className=" text-center font-barton p-3 text-color-barton-brand-second text-uppercase" 
                style={{ fontSize: 48, fontWeight: 1000 }}>
                    {text}
            </p>
        </section>
    );
}