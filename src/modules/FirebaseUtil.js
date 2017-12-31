import Firebase from 'firebase'
import config from './Firebase.config'

Firebase.initializeApp(config)

const db = Firebase.database()

export default {
  sendMsg: (user, msg) => {
    db.ref('chat').push().set({ user, msg })
  },

  getMsg: (self, cb) => db.ref('chat').on('value', (snapshot) => {
    const data = []
    snapshot.forEach((childSnapshot) => {
      data.push(childSnapshot.val())
    })
    cb(self, data)
  })
}
