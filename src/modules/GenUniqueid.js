import firebase from 'firebase/app';
import { db } from './../index'


export default function GenUniqueid(uid){
  const allid = isnewreg();
  if (allid == -1){
    const lastuid = allid[allid.length];
    console.log(lastuid)
  }
}

function isnewreg(){
  let ref = null;
  try {
    const userRef = db.collection('users');
    userRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        return doc.id;
      })
    })
  } catch(err) {
    console.log(`Error: ${JSON.stringify(err)}`)
  }
}
