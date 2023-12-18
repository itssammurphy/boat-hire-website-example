interface TwoColSectionProps {
    title?: string,
    subtitle?: string,
    children?: React.ReactNode,
    image?: string
}

const TwoColSection : React.FC<TwoColSectionProps> = (props) => {
    return (
        <section className="w-11/12 flex flex-row gap-1.5rem items-center justify-between text-justify py-1.5rem <lg:flex-col-reverse">
            <div className="w-1/2 flex-1 flex items-center justify-start <lg:w-full">
                <div className="w-11/12 text-left">
                    <h1 className="text-2vw <md:text-20px font-bold">{props.title}</h1>
                    <h2 className="<md:text-18px font-normal italic">{props.subtitle}</h2>
                    {props.children}
                </div>
            </div>
            <div className="w-1/2 flex-1 flex items-center justify-center <lg:w-full">
                <img className="rounded-3xl w-full" src={props.image} />
            </div>
        </section>
    )
}

export default TwoColSection;