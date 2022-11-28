import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getArrearsReport = createAsyncThunk('arrears/getArrearsReport', 
	async (payload, {getState}) => {
        let data = {
            startDate:payload.startDate,
            endDate:payload.endDate,
            "division": payload.division,
            "month":payload.month
        }
        return await axios.post(`/api/arrearsReport`,data)
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

export const arrearsReportSlice = createSlice({
	name: 'getArrearsReport',
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
		[getArrearsReport.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getArrearsReport.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.data = action.payload.data
		},
		[getArrearsReport.rejected]: (state) => {
			state.loading = false
            state.error = true
		},
        
	}
	
});

export default arrearsReportSlice.reducer;