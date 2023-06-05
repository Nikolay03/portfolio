import toNumber from './toNumber'
import {round} from './round'

export default (value, suffix, precision) => {
  const formatter = new Intl.NumberFormat('ru-RU')
  const numberValue = toNumber(value)
  const roundedValue = precision === 'disabled' ? numberValue : round(numberValue, precision)
  if ((value || value === 0) && suffix) return `${formatter.format(roundedValue)}\u00A0${suffix}`
  else if (value) return formatter.format(roundedValue)
  return 0
}
