import {useState, useEffect} from 'react';

export const ItemListContainer = () => {
    const [productos, setProductos] = useState ([])
    useEffect(() => {
        fetch('./json/productos.json')
        .then(response => response.json)
        .then(products => console.log(products))

    }, [])
    return (
        <div>
            
        </div>
    );
}

export default ItemListContainer;
