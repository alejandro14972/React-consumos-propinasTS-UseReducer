import { Dispatch } from "react"
import { formatoMoneda } from "../helpers"
import { OrderItem } from "../types"
import { OrdenesAcciones } from "../reducers/order-reducers"

type OrdenContenProps = {
  orden: OrderItem[],
  dispatch: Dispatch<OrdenesAcciones>
}

export default function OrderContents({ orden, dispatch }: OrdenContenProps) {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>

      <div className="space-y-3 mt-5">
        
          {(orden.map(item => (

            <div key={item.id}
              className="flex justify-between items-center border-t border-t-gray-200 py-5 last-of-type:border-b">
              <div>
                <p className="text-lg">{item.name} - {formatoMoneda(item.price)}</p>
                <p className="font-black">
                  Cantidad: {item.cantidad}
                </p>
              </div>
              <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                      onClick={()=>dispatch({type: 'eliminarItem', payload:{item}})}
              >
                X
              </button>
            </div>

          )))}
          

      </div>


    </div>
  )
}
