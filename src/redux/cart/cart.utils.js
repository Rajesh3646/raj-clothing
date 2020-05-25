export const addItemToCart = (cartList, newItem) => {
    const existingItem = cartList.find(item => item.id === newItem.id);

    console.log('existingItemIndex' + existingItem);
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