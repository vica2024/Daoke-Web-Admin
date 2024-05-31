import Wsocket from "@/utils/Wsocket"
import tool from '@/utils/tool'

class Message {

  ws

  timer = null

  interval = 10 * 1000

  constructor() {
    this.ws = new Wsocket(
      import.meta.env.VITE_APP_WS_URL + '?token=' + tool.local.get(import.meta.env.VITE_APP_TOKEN_PREFIX), {
        onOpen:  _ => { console.log('Succeeded to connect to the message server...') },
        onError: _ => {
          this.ws = undefined
          console.log('Failed to connect to the message server...')
        },
        onClose: _ => {
          this.ws = undefined
          console.log('Disconnect from the message server...')
        },
      }
    )

    this.ws.heartbeat.openHeartbeat = false
  }

  getMessage() {
    this.timer = setInterval(() => {
      this.ws && this.ws.send({ event: 'get_unread_message' })
    }, this.interval)
  }

  connection() {
    this.ws.connection()
  }

}

export default Message
