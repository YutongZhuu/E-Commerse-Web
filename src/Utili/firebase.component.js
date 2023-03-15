import { initializeApp } from 'firebase/app'
import { getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged } from 'firebase/auth'
import { getFirestore, 
    doc, 
    getDoc, 
    setDoc,
    collection,
    writeBatch, 
    query,
    getDocs} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBcF3mFYaA4sTSJTpJCoG_DM6CXTCH-iZ0",
    authDomain: "e-commerse-3e6cb.firebaseapp.com",
    projectId: "e-commerse-3e6cb",
    storageBucket: "e-commerse-3e6cb.appspot.com",
    messagingSenderId: "1007446354007",
    appId: "1:1007446354007:web:c9edd52e5d369b78fc1b12"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const SignInWithGooglePopup = () => signInWithPopup(auth, provider)
export const signinWithRedirect = () => signInWithRedirect(auth, provider)

export const db = getFirestore()

export const addCollectionToDocuments=async(collectionkey, objectsToAdd)=>{
    const collectionRef=collection(db, collectionkey)
    const batch=writeBatch(db)

    objectsToAdd.forEach((object)=>{
        const docRef=doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit();
    console.log('done!')
}

export const getCategoriesAndDocuments=async()=>{
    const collectionRef=collection(db, 'categories')
    const q=query(collectionRef)
    const querySnapShot=await getDocs(q)

    const categoryMap=querySnapShot.docs.reduce((acc, docsSnapShot)=>{
        const {title, items}=docsSnapShot.data()
        acc[title.toLowerCase()]=items
        return acc;
    }, {})

    return categoryMap
}

export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    // console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    // console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef
}

export const CreateAuthUserWithPasswordAndEmail = async (email, password) => {
    if (!(password) || !(email)) return
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const SignInAuthUserWithPasswordAndEmail = async (email, password) => {
    if (!(password) || !(email)) return
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser= async()=>signOut(auth)

export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth, callback)
