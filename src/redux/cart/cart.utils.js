export const addItemToCart = (cartList, newItem) => {
    const existingItem = cartList.find(item => item.id === newItem.id);
    if(existingItem) {
        return cartList.map(item => {
            if (existingItem.id === item.id) {
                return {...item, quantity : item.quantity + 1 };
            } else {
                return {...item};
            }
        });
        
    } else {
        return [...cartList, {...newItem, quantity: 1}]
    }
}

export const removeItem = (cartItems, item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== item.id);
    }
    
    return cartItems.map(cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 }: cartItem);
}