import { pisMask } from "../../utils/masks";

export const InputPis = ({ valor = '', onChange }) => {
  return (
    <>
      <label htmlFor='pis'>PIS: 000.00000.00-0</label>
      <input
        type='text'
        name='pis'
        id='pis'
        value={pisMask(valor)}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  )
}
