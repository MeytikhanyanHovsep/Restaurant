import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  search: [],
  product: null,
};

export const fetchProductsCategory = createAsyncThunk('products/fetchProductsCategory',
  async (category) => {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data.products.filter(e => e.category == category);
  }
  );

export const fetchProduct = createAsyncThunk('products/fetchProduct',
  async (id) => {
    const response = await fetch('/data.json');
    const data = await response.json();
    return data.products.find(e => e.id == +id);
  }
  );

export const fetchSearchProducts = createAsyncThunk("products/fetchSearchProducts",
  async (value) => {
    const response = await fetch("/data.json");
    const data = await response.json()
    console.log(value.split(" "));
    const filtered = await data.products.filter((e) => {
      let prodName = e.name.toLowerCase()
      if (prodName.startsWith(value) || prodName.split(" ").some(el => value.split(" ").some(elm => el.startsWith(elm)))) return true
    })
    return filtered.length ? filtered : false
  })

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        let data = state;
        data.product = action.payload
        return data
      })
      .addCase(fetchProductsCategory.fulfilled, (state, action) => {
        let data = state;
        data.status = 'succeeded';
        data.products = action.payload;
        return data
      })
      .addCase(fetchSearchProducts.fulfilled, (state, action) => {
        let data = state;
        action.payload.length ? data.search = action.payload : data.search = false
        return data
      })
  },
});

export default productsSlice.reducer;