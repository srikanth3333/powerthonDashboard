import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFocData = createAsyncThunk('foc/focData', 
	async (payload, {getState}) => {
        let data = {
            startDate:payload.startDate,
            endDate:payload.endDate,
            category:payload.category,
            circle_name:payload.circle_name,
            division_name:payload.division_name,
            subdivision_name:payload.subdivision_name,
            minutes:payload.minutes,
        }
        return await axios.post(`/api/focComplaint?page=${payload.page}`,data)
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

export const getFocGraphData = createAsyncThunk('focGraph/focGraphData', 
	async (payload, {getState}) => {
        let data = {
            startDate:payload.startDate,
            endDate:payload.endDate,
            category:payload.category,
            circle_name:payload.circle_name,
            division_name:payload.division_name,
            subdivision_name:payload.subdivision_name
        }
        return await axios.post(`/api/focComplaint/graphList`,data)
        .then(res => {
            console.log('res')
            console.log(res)
            return{barGraphData:res.data,pieGraphData:res.data}
        })
        .catch(err => {
            return{barGraphData:[],pieGraphData:[]}
        })
	}
)

export const getDownloadFoc = createAsyncThunk('focDownload/focGetDownload',
	async (payload, {getState}) => {
        let data = {
            startDate:payload.startDate,
            endDate:payload.endDate,
            category:payload.category,
            circle_name:payload.circle_name,
            division_name:payload.division_name,
            subdivision_name:payload.subdivision_name,
            minutes:payload.minutes,
        }
        return await axios.post(`/api/customerComplaint/dataDownload?page=${payload.page}`,data)
        .then(res => {
            return{downloadData:res.data.data}
        })
        .catch(err => {
            return{data:[],totalCount:0}
        })
	}
)

export const focDataSlice = createSlice({
	name: 'focData',
	initialState: {
        loading: true,
        error: false,
        loadingGraph: true,
        errorGraph: false,
        startDate: '',
        endDate: '',
        totalCount:0,
        data: [],
        barGraphData:[],
        pieGraphData:[],
        downloadData:[],
        loadingDownload: true,
        errorDownload: false,
    },
	extraReducers: {
		[getFocData.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getFocData.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.data = action.payload.data
            state.totalCount = action.payload.totalCount
		},
        [getFocData.rejected]: (state) => {
			state.loadingDownload = false
            state.errorDownload = true
		},
	}
	
});

export default focDataSlice.reducer;