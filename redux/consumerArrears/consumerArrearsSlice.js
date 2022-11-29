import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getConsumerArrears = createAsyncThunk('consumerArrear/getConsumerArrears', 
	async (payload, {getState}) => {
        let data = {
            startDate:payload.startDate,
            endDate:payload.endDate,
            consumer_no: payload.consumerNo != '' ? parseInt(payload.consumerNo) : payload.consumerNo,
            division_name:payload.division_name,
            region:payload.region,
            divisionId:payload.divisionId,
            circle_name:payload.circle_name,
            location_code:payload.location_code
        }
        
        return await axios.post(`/api/consumerArrears?page=${payload.page}`,data)
        .then(res => {
            console.log('res')
            console.log(res)
            return{data:res.data.data,totalCount:res.data.totalCount}
        })
        .catch(err => {
            return{data:[],totalCount:0}
        })
	}
)

export const consumerArrearsSlice = createSlice({
	name: 'getConsumerArrears',
	initialState: {
        loading: true,
        error: false,
        startDate: '',
        endDate: '',
        totalCount:0,
        data: [],
    },
	extraReducers: {
		[getConsumerArrears.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getConsumerArrears.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.data = action.payload.data
            state.totalCount = action.payload.totalCount
		},
		[getConsumerArrears.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
        
	}
	
});

export default consumerArrearsSlice.reducer;