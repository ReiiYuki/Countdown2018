import Firebase from 'firebase'
import config from './Firebase.config'

Firebase.initializeApp(config)

const db = Firebase.database()

export default {
  sendMsg: (user, msg) => {
    db.ref('chat').push().set({ user, msg })
  },

  getMsg: () => new Promise(
    (resolve, reject) => (
      db.ref('chat').on('value', (snapshot) => {
        resolve(snapshot.val())
      })
    )
  ).then((data) => data)
}
