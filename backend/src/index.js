import http from 'http'

import app from './app'
import redis from './db/redis'
import elasticsearch from './db/elasticsearch'
import { techLogger } from './util'

const PORT = process.env.PORT || 8000

elasticsearch.Client.search({
  index: elasticsearch.defaultIndex,
  q: 'version',
  size: '1'
}).then(() => {
  redis.getAsync()
    .then(() => {
      http.createServer(app).listen(PORT, '0.0.0.0')
      techLogger.info(`Server running at http://0.0.0.0:${PORT}/`)
    })
    .catch(error => {
      techLogger.error(`Server could not connect to redis, exiting`)
      techLogger.error(error)
    })
  })
  .catch(error => {
    techLogger.error(`Server could not connect to elasticsearch, exiting`)
    techLogger.error(error)
    exit
  })
