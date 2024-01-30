import addressAPI from './api/address'
import adminNewsAPI from './api/adminNews'
import culinaryAPI from './api/culinary'
import newsAPI from './api/news'
import roomInfoAPI from './api/roomInfo'
import usersAPI from './api/users'
import verifyAPI from './api/verify'

export default function () {
  return {
    ...adminNewsAPI,
    ...culinaryAPI,
    ...newsAPI,
    ...usersAPI,
    ...addressAPI,
    ...roomInfoAPI,
    ...verifyAPI
  }
}
