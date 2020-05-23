import React from 'react';
import SHOP_DATA from './shoppage.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import './shoppage.styles.scss'
class ShopPage extends React.Component{
constructor() {
    super();
    this.state = { collections: SHOP_DATA };
}
render() {
    return <div>
        {this.state.collections.map(item => (<CollectionPreview key={item.id} {...item}> </CollectionPreview>))}
    </div>
}
}

 export default ShopPage; 