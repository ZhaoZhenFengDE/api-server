import { configs } from '../config/config'
import { multiRequest, getNewArray} from '../utils'

export const getMapLocation = async () => {
  const newList = getNewArray(configs, 10)
  const result = await multiRequest(newList, 20)
  return result
}