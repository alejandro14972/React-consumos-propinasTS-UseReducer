import { Dispatch, useMemo } from "react";
import { OrderItem } from "../types";
import { formatoMoneda } from "../helpers";
import { OrdenesAcciones } from "../reducers/order-reducers";

type OrdenTotalProps = {
  orden: OrderItem[];
  propina: number;
  dispatch: Dispatch<OrdenesAcciones>
};

export default function OrdenTotal({ orden, propina, dispatch }: OrdenTotalProps) {
  // Cálculo del subtotal
  const precioTotal = useMemo(
    () => orden.reduce((total, item) => total + item.price * item.cantidad, 0),
    [orden]
  );

  // Cálculo de la propina
  const calculoPropina = useMemo(() => precioTotal * propina, [precioTotal, propina]);

  // Cálculo del total a pagar
  const totalPagar = useMemo(() => precioTotal + calculoPropina, [precioTotal, calculoPropina]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina</h2>
        <p>
          Subtotal a pagar:{" "}
          <span className="font-bold">{formatoMoneda(precioTotal)}</span>
        </p>
        <p>
          Propina:{" "}
          <span className="font-bold">{formatoMoneda(calculoPropina)}</span>
        </p>
        <p>
          Total a pagar:{" "}
          <span className="font-bold">{formatoMoneda(totalPagar)}</span>
        </p>
      </div>

      <button 
      className="bg-black w-full text-white font-bold mt-10 p-3 disabled:opacity-10"
      disabled={precioTotal ===0}
      onClick={()=>dispatch({type:'guardarOrden'})}
      >
        Confirmar Pago
      </button>
    </>
  );
}
