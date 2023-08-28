import React, {ReactNode} from 'react';
import {StoreType} from './state';
import store from './store';

const StoreContext = React.createContext(store);

export type ProviderType = {
    store: StoreType
    children: ReactNode
}

// export const Provider = (props: ProviderType) => {
//     return (
//         <StoreContext.Provider value = {props.store}>
//             {props.children}
//         </StoreContext.Provider>)
// }

export default StoreContext