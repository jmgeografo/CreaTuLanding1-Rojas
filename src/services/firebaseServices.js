import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore'
import { db } from '../config/firebaseConfig'
import Swal from 'sweetalert2'

export const getProducts = async () => {
    const prodCollection = collection(db, 'Productos')
    const productos = await getDocs(prodCollection)
    return productos.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const getProductById = async (id) => {
    const prodDoc = doc(db, 'Productos', id)
    const producto = await getDoc(prodDoc)
    return { id: producto.id, ...producto.data() }
}

export const getByCategory = async category => {
    const prodCollection = collection(db, 'Productos')
    const q = query(prodCollection, where('category', '==', category))
    const productos = await getDocs(q)
    return productos.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}

export const createOrder = async newOrder => {
    try {
        const orderCollection = collection(db, 'Ordenes')
        const orderDoc = await addDoc(orderCollection, newOrder)
        return orderDoc
        } catch (err) {
        throw new Error(err)
        }
}

