interface CenteredSectionProps {
    title?: string,
    subtitle?: string,
    children?: React.ReactNode
}

const CenteredSection : React.FC<CenteredSectionProps> = (props) => {
    return (
        <section className="flex flex-col items-center py-1.5rem px-1.5rem text-justify">
            <h1 className="text-2vw <md:text-20px font-bold">{props.title}</h1>
            <h2 className="<md:text-18px font-normal italic">{props.subtitle}</h2>
            {props.children}
        </section>
    )
}

export default CenteredSection;