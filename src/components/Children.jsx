export function Children({children, activated}) {
    // Component enfant à appeler dans le component Parent, deux props:
    // - children
    // - comme vous souhaitez, libre
    return <>
        <span>{activated ? `${children} => Found` : `${children} => Not Found`}</span>
    </>
}