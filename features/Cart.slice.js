import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCartProduct = createAsyncThunk('products/fetchCartProduct',
    async () => {
        const response = await fetch('/data.json');
        const data = await response.json();
        const ids = await JSON.parse(localStorage.getItem("cart")).map(e => e.id)
        const product = await data.products.filter(e => ids.includes(e.id));
        return product.length ? product : null
    }
);

const CartSlice = createSlice({
    name: "Cart",
    initialState: {
        cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
        cartProducts: []
    },
    reducers: {
        setItem: (state, action) => {
            if (localStorage.getItem("login")) {
                const data = state;
                const [id, qty] = action.payload
                const prod = data.cart.find(e => +e.id == +id)
                if (prod)
                    if (qty == 0) data.cart = data.cart.filter(e => e.id != id)
                    else prod.qty = qty
                else data.cart.unshift({ id: id, qty: qty })

                localStorage.setItem("cart", JSON.stringify(data.cart))
                return data
            }
        },
        addItem: (state, action) => {
            if (localStorage.getItem("login")) {
                const data = state;
                const [id, qty] = action.payload
                const prod = data.cart.find(e => +e.id == +id)
                prod ? prod.qty += qty : data.cart.unshift({ id: id, qty: qty });
                localStorage.setItem("cart", JSON.stringify(data.cart))
                return data
            }
        },
        removeItem: (state, action) => {
            if (localStorage.getItem("login")) {
                const data = state
                data.cart = data.cart.filter(e => +e.id != +action.payload)
                data.cartProducts = data.cartProducts.filter(e => +e.id != +action.payload)
                localStorage.setItem("cart", JSON.stringify(data.cart))
                return data
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCartProduct.fulfilled, (state, action) => {
                let data = state;
                data.cartProducts = action.payload || null
                return data
            })
    }
})

export const getProdQty = (state, id) => state.cart.cart.find(el => el.id == id)

export const { addItem, removeItem, setItem } = CartSlice.actions
export default CartSlice.reducer

