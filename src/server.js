import { createServer } from 'miragejs'
import users from '@/users'

export function makeServer () {
  const server = createServer({
    routes () {
      this.namespace = 'api'

      this.get('/users', () => users)
    }
  })

  return server
}
