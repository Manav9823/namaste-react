import { IMAGE_URL } from "../config"
const AccordianBody = ({items}) => {
    console.log('items', items)
    return (
        <div class="">
            {
                items.map((item) => ( 
                <div key={item.card.info.id} class="m-2 p-2 border-2 border-b-black flex justify-between">
                    <div class="w-9/12">
                        <div><span>{item.card.info.name}</span></div>
                        <div>{(item.card.info.price)/100}</div>
                        <div>{item.card.info.description}</div>
                    </div>
                    <div class="w-3/12">
                        <img src={IMAGE_URL + item.card.info.imageId}/>
                    </div>
                </div>
                // <div>{console.log(item.card.info.name)}</div>
                ))
            }
        </div>
    )
}

export default AccordianBody