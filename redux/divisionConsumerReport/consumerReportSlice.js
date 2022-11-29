import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getConsumerReport = createAsyncThunk('consumer/getConsumerReport', 
	async (payload, {getState}) => {
        let data = {
            startDate:payload.startDate,
            endDate:payload.endDate,
            "division": payload.division,
            "month":payload.month
        }
        return await axios.post(`/api/divisionConsumerReport`,data)
        .then(res => {
            console.log('res')
            console.log(res)
            return{data:res.data.data}
        })
        .catch(err => {
            return{data:[],totalCount:0}
        })
	}
)

export const consumerReportSlice = createSlice({
	name: 'getConsumerReport',
	initialState: {
        loading: true,
        error: false,
        startDate: '',
        endDate: '',
        totalCount:0,
        data: [],
        downloadData:[],
    },
	extraReducers: {
		[getConsumerReport.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getConsumerReport.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.data = action.payload.data
		},
		[getConsumerReport.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
        
	}
	
});

export default consumerReportSlice.reducer;