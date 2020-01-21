import { db } from './../index'

// 新規Userかを判定し、新規ならUniqueなidを発行するやつ

let lastid = null;

export default function IsNewRege(uid){
  try {
    const userRef = db.collection("users").orderBy("userId", "asc");
    userRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        lastid = doc.get('userId')
        if( uid === doc.id ){
          uid = 0;
        }
      })
      if ( uid !== 0 ) {
        try {
          const userRef = db.collection('users').doc(uid)
          userRef.set({
            userId: lastid + 1,
            skills: ['']
          })
        } catch(err) {
          console.log(`Error: ${JSON.stringify(err)}`)
        }
      }
    })
  } catch(err) {
    console.log(`Error: ${JSON.stringify(err)}`)
  }
}