interface ContentContainerProps {
    children?: React.ReactNode
}

const ContentContainer : React.FC<ContentContainerProps> = (props) => {
    return (
        <div className="w-1/2">
            {props.children}
        </div>
    )
}

export default ContentContainer;