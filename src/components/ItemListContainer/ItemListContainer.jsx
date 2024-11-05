
export default function ItemListContainer({ greeting, color }) {
    return (
        <>
            {<h2 style={{ color: color, margin: '50px', textAlign:'center' }}>{greeting}</h2>}
        </>
    )
}
