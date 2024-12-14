import { Dispatch } from "react"
import { OrdenesAcciones } from "../reducers/order-reducers"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

  type PropinaContenProps = {
    dispatch: Dispatch<OrdenesAcciones>
    propina:number
  }

export default function PropinaPorcentaje({dispatch, propina}: PropinaContenProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina </h3>
        <form>
            {tipOptions.map(tip=>(
                <div className="flex gap-2" key={tip.id}>
                    <label htmlFor={tip.id}>{tip.label}</label>
                    <input 
                        id={tip.id}
                        type="radio"
                        name="tip"
                        value={tip.value}
                        onChange={e => dispatch({type:'addPropina', payload: {value: +e.target.value}})} //tenemos que castearlo 
                        checked={tip.value === propina}
                    />
                </div>
            ))}
        </form>
    </div>
  )
}
