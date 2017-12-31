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
        const data = []
        snapshot.forEach((childSnapshot) => {
          data.push(childSnapshot.val())
        })
        resolve(data)
      })
    )
  ).then((data) => console.log(data))
}
