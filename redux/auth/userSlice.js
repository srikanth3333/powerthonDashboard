import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
	name: 'users',
	initialState: {
		loading: true,
		error:'',
		dataUser: [],
		filterObject:null,
		bill_division:[
			"Bhopal City East",
			"Bhopal City North",
			"Bhopal City South",
			"Bhopal City West",
			"O&M KOLAR"
		],
		zone: [
			"Anand Nagar",
			"Ayodhya",
			"Bairagarh",
			"Bhadbhada",
			"Bhanpur",
			"Bus Stand",
			"Chandbarh",
			"Chhola",
			"City Kotwali",
			"Danish Kunj",
			"E-4 Arera Colony",
			"Imamigate",
			"Indra Vihar",
			"Industrial Gate",
			"Jahangirabad",
			"Karond",
			"Katara Hills",
			"Kotra",
			"MP Nagar",
			"Misrod",
			"Shahpura",
			"Shakti Nagar",
			"Sultaniya",
			"TT Nagar",
			"Vallabh Nagar",
			"Vidhya Nagar"
		],
	},
	reducers: {
		addFilters: (state,action) => {
			state.filterObject = action.payload.data
		},
	}
	
});


export const { addFilters,updateData } = userSlice.actions;

export default userSlice.reducer;