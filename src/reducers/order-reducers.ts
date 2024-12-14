import { MenuItem, OrderItem } from "../types";


export type OrdenesAcciones =
    { type: 'addItem', payload: { item: MenuItem } } |
    { type: 'eliminarItem', payload: { item: MenuItem } } |
    { type: 'guardarOrden' } |
    { type: 'addPropina', payload: { value: number } }


export type OrdenState = {
    orden: OrderItem[],
    propina: number
}

export const initialState = {
    orden: [],
    propina: 0
}

export const ordenReducer = (
    state: OrdenState = initialState,
    action: OrdenesAcciones
) => {

    if (action.type === 'addItem') {

        const itemExiste = state.orden.find(o => o.id === action.payload.item.id);
        let actualizarOrden : OrderItem[]=[]
        if (itemExiste) {
            actualizarOrden = state.orden.map(
                ord => ord.id === action.payload.item.id ?
                {...ord, cantidad: ord.cantidad +1}:
                ord
            )
            
        } else {
            const nuevoItem: OrderItem = { ...action.payload.item, cantidad: 1 }
            actualizarOrden = [...state.orden, nuevoItem]
        }


        return {
            ...state,
            orden: actualizarOrden
        }
    }

    if (action.type === 'eliminarItem') {

        const nuevaOrden = state.orden.filter(o=> o.id !== action.payload.item.id);
        
        return {
            ...state,
            orden: nuevaOrden
        }
    }

    if (action.type === 'guardarOrden') {

        const NuevaOrden:[] = []
        const LimpiarPropina=0; 

        return {
            ...state,
            orden: NuevaOrden,
            propina: LimpiarPropina
        }
    }

    if (action.type === 'addPropina') {
        const propina = action.payload.value
        return {
            ...state,
            propina: propina
        }
    }


    return state


}