import Item from "./Item/Item";

const Items = (props) => {
    let itemsData = props.items.map(i => <Item name={i.name} src={i.src}/>);

    return (
        <div className="row mt-5">
            {itemsData}
        </div>
    );
}

export default Items;