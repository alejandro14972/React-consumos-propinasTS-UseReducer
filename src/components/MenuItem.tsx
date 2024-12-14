import { Dispatch } from 'react'
import { formatoMoneda } from '../helpers'
import type {MenuItem} from '../types'
import { OrdenesAcciones } from '../reducers/order-reducers'


type MenuItemProps = {
    item: MenuItem,
    dispatch: Dispatch<OrdenesAcciones>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
    className='border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between'
    onClick={()=>dispatch({type: 'addItem', payload:{item}})}
    >
        <p>{item.name}</p>
        <p className='font-black'>{formatoMoneda(item.price)}</p>

    </button>
  )
}
