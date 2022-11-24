import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getHierarchyData = createAsyncThunk('HierarchyData/getHierarchyData', 
	async (payload, {getState}) => {
        let data = {
            "category": payload.category,
            "circle_name": payload.circle_name,
            "division_name": payload.division_name,
            "subdivision_name": payload.subdivision_name,
            "division_name": payload.division_name,
            "sub_category": payload.sub_category,
            "dc_name": payload.dc_name,
            "region": payload.region,
            "feeder_type": payload.feeder_type,
            db:payload.db
        }
        return await axios.post(`/api/hierarchy`,data)
        .then(res => {
            console.log(res)
            return{data:res.data}
        })
        .catch(err => {
            return{data:[],totalCount:0}
        })
	}
)

export const hierarchySlice = createSlice({
	name: 'HierarchyData',
	initialState: {
        loading: true,
        error: false,
        startDate: '',
        endDate: '',
        totalCount:0,
        data: [],
    },
	extraReducers: {
		[getHierarchyData.pending]: (state) => {
            state.loading = true
            state.error = false
		},
		[getHierarchyData.fulfilled]: (state, action) => {
            state.loading = false
            state.error = false
            state.data = action.payload.data
		},
        [getHierarchyData.rejected]: (state) => {
			state.loadingDownload = false
            state.errorDownload = true
		},
	}
	
});

export default hierarchySlice.reducer;