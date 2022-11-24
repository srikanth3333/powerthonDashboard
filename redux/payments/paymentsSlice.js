import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPaymentsData = createAsyncThunk('payment/payments', 
	async (payload, {getState}) => {
        let data = {
            startDate:payload.startDate,
            endDate:payload.endDate,
            consumerNo:parseInt(payload.consumerNo),
        }

        return await axios.post(`/api/payments?page=${payload.page}`,data)
        .then(res => {
            return{data:res.data.data,totalCount:res.data.totalCount}
        })
        .catch(err => {
            return{data:[],totalCount:0}
        })
	}
)

export const focDataSlice = createSlice({
	name: 'payments',
	initialState: {
        loading: true,
        error: false,
        startDate: '',
        endDate: '',
        totalCount:0,
        data: [],
    },
	extraReducers: {
		[getPaymentsData.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getPaymentsData.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.data = action.payload.data
            state.totalCount = action.payload.totalCount
		},
        [getPaymentsData.rejected]: (state) => {
			state.loadingDownload = false
            state.errorDownload = true
		},
	}
	
});

export default focDataSlice.reducer;