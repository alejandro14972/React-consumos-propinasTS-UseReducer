import { useState } from "react";
import type { MenuItem, OrderItem } from '../types'


export default function userorden() {

    const [orden, setOrden] = useState<OrderItem[]>([]);
    const [propina, setPropina] = useState(0)

    const addItem = (item: MenuItem) => {

        const itemExiste = orden.findIndex(o => o.id === item.id);
        if (itemExiste >= 0) {
            const actualizarOrden = [...orden];
            actualizarOrden[itemExiste].cantidad += 1;
            setOrden(actualizarOrden);
            
        } else {
            const nuevoItem: OrderItem = { ...item, cantidad: 1 }
            setOrden([...orden, nuevoItem]);
        }
    }

    const eliminarItem=(item: MenuItem) =>{
        const nuevaOrden = orden.filter(o=> o.id !== item.id);
        setOrden(nuevaOrden);
    }

    const guardarOrden= () =>{
        setOrden([]);
        setPropina(0);
        
    }

    return {
        orden,
        propina,
        setPropina,
        addItem,
        eliminarItem,
        guardarOrden
    }


}