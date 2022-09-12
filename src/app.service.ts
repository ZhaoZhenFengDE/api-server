import { Injectable } from '@nestjs/common';
import { getMapLocation } from './api/getMapLocation';
import { getCourseList } from './api/course'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getPositionList(): Promise<Array<any>> {
    const result = await getMapLocation()
    let location = []
    result.forEach((item) => {
      location = [...location, ...item.geocodes.map(geo => geo.location)]
    })

    return location.map(item => {
      const data = item.split(',')
      return {
        latitude: Number(data[1]),
        longitude: Number(data[0])
      }
    })
  }

  async getCourseList(): Promise<Array<any>> {
    return await getCourseList()
  }
}
