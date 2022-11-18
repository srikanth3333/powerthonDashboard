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
			{
				"zone" : "Danish Kunj",
				"division" : "O&M KOLAR"
			},
			{
				"zone" : "Misrod",
				"division" : "O&M KOLAR"
			},
			{
				"zone" : "Karond",
				"division" : "Bhopal City East"
			},
			{
				"zone" : "Chandbarh",
				"division" : "Bhopal City East"
			},
			{
				"zone" : "Ayodhya",
				"division" : "Bhopal City East"
			},
			{
				"zone" : "Bhanpur",
				"division" : "Bhopal City East"
			},
			{
				"zone" : "Anand Nagar",
				"division" : "Bhopal City East"
			},
			{
				"zone" : "Industrial Gate",
				"division" : "Bhopal City East"
			},
			{
				"zone" : "Bus Stand",
				"division" : "Bhopal City North"
			},
			{
				"zone" : "Chhola",
				"division" : "Bhopal City North"
			},
			{
				"zone" : "Indra Vihar",
				"division" : "Bhopal City North"
			},
			{
				"zone" : "Imamigate",
				"division" : "Bhopal City North"
			},
			{
				"zone" : "Bairagarh",
				"division" : "Bhopal City North"
			},
			{
				"zone" : "City Kotwali",
				"division" : "Bhopal City North"
			},
			{
				"zone" : "Sultaniya",
				"division" : "Bhopal City North"
			},
			{
				"zone" : "MP Nagar",
				"division" : "Bhopal City South"
			},
			{
				"zone" : "E-4 Arera Colony",
				"division" : "Bhopal City South"
			},
			{
				"zone" : "Jahangirabad",
				"division" : "Bhopal City South"
			},
			{
				"zone" : "Kotra",
				"division" : "Bhopal City South"
			},
			{
				"zone" : "Bhadbhada",
				"division" : "Bhopal City South"
			},
			{
				"zone" : "TT Nagar",
				"division" : "Bhopal City South"
			},
			{
				"zone" : "Shakti Nagar",
				"division" : "Bhopal City West"
			},
			{
				"zone" : "Vidhya Nagar",
				"division" : "Bhopal City West"
			},
			{
				"zone" : "Katara Hills",
				"division" : "Bhopal City West"
			},
			{
				"zone" : "Shahpura",
				"division" : "Bhopal City West"
			},
			{
				"zone" : "Vallabh Nagar",
				"division" : "Bhopal City West"
			}
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