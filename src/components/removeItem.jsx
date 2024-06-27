// removeItem.js
import { doc, deleteDoc } from 'firebase/firestore';
import { fireDb } from '../firebase';

const removeItem = async (itemId) => {
    
  try {
    const itemRef = doc(fireDb, 'coupons', itemId);
    await deleteDoc(itemRef);
    console.log('Item removed successfully');
    alert("REMOVED SUCCESSFULLY")
  } catch (error) {
    console.error('Error removing item:', error);
  }
};

export default removeItem;
