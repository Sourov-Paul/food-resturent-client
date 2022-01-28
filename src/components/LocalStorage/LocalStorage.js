const addToDb = id => {
    const exists = getStoreCart();
    let storeCart = {};
    if (!exists) {
      storeCart[id] = 1;
    }
    else {
      storeCart = JSON.parse(exists);
      if (storeCart[id]) {
        const newCount = storeCart[id] + 1;
        storeCart[id] = newCount;
      }
      else {
        storeCart[id] = 1;
      }
    }
    updateDb(storeCart);
  }
  
  const getStoreCart = () => localStorage.getItem('storeCart');
  
  const updateDb = cart => {
    localStorage.setItem('storeCart', JSON.stringify(cart));
  }
  
  const removeFromDb = id => {
    const exists = getStoreCart();
    if (!exists) {
  
    }
    else {
      const storeCart = JSON.parse(exists);
      delete storeCart[id];
      updateDb(storeCart);
    }
  }
  
  const getStoredCart = () => {
    const exists = getStoreCart();
    return exists ? JSON.parse(exists) : {};
  }
  
  const clearTheCart = () => {
    localStorage.removeItem('storeCart');
  }
  
  export { addToDb, removeFromDb, clearTheCart, getStoredCart }