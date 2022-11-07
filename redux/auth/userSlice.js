import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const userSlice = createSlice({
	name: 'users',
	initialState: {
		loading: true,
		error:'',
		dataUser: [],
		filterObject:null,
		category:[
			{
				_id:'',
				"list":[
					"DOMESTIC",
					"AGRICULTURE",
					"INDUSTRIAL",
					"MIX"
				]
			}
		],
		circleData: [
			{
				"_id" : "MIX",
				"list" : [ 
					"O&M Circle Morena"
				]
			},
			{
				"_id" : "INDUSTRIAL",
				"list" : [ 
					"City circle Bhopal", 
					"O&M Circle Sehore"
				]
			},
			{
				"_id" : "DOMESTIC",
				"list" : [ 
					"O&M Circle Rajgarh", 
					"O&M Circle Datia", 
					"O&M Circle Shivpuri", 
					"O&M Circle Vidisha", 
					"Narmadapuram", 
					"O&M Circle Sheopur", 
					"O&M Circle Ashoknagar", 
					"O&M Circle Sehore", 
					"O&M Circle Betul", 
					"O&M Circle Morena", 
					"O&M Circle Harda", 
					"City circle Bhopal", 
					"O&M Circle Bhind", 
					"O&M Circle Raisen", 
					"City Circle Gwalior", 
					"O&M Circle Guna", 
					"O&M Circle Bhopal"
				]
			},
			{
				"_id" : "AGRICULTURE",
				"list" : [ 
					"O&M Circle Bhopal", 
					"City circle Bhopal"
				]
			}
		],
		divisionData: [
			{
				"_id" : "O&M Circle Morena",
				"list" : [ 
					"O&M Division Morena-I"
				]
			},
			{
				"_id" : "O&M Circle Harda",
				"list" : [ 
					"O&M Division Harda North"
				]
			},
			{
				"_id" : "City Circle Gwalior",
				"list" : [ 
					"City Division (South) Gwalior", 
					"City Division (North) Gwalior", 
					"City Division (Central) Gwalior", 
					"City Division (East) Gwalior"
				]
			},
			{
				"_id" : "O&M Circle Guna",
				"list" : [ 
					"O&M Division Guna"
				]
			},
			{
				"_id" : "O&M Circle Bhopal",
				"list" : [ 
					"O&M Division Bhopal"
				]
			},
			{
				"_id" : "O&M Circle Rajgarh",
				"list" : [ 
					"O&M Division Rajgarh"
				]
			},
			{
				"_id" : "City circle Bhopal",
				"list" : [ 
					"East DIvision Bhopal", 
					"O&M Division Kolar", 
					"South Division Bhopal", 
					"West Division Bhopal", 
					"North Division Bhopal"
				]
			},
			{
				"_id" : "O&M Circle Datia",
				"list" : [ 
					"O&M Division Datia", 
					"O&M Division Seondha"
				]
			},
			{
				"_id" : "O&M Circle Bhind",
				"list" : [ 
					"O&M Division Bhind"
				]
			},
			{
				"_id" : "O&M Circle Raisen",
				"list" : [ 
					"O&M Division Raisen"
				]
			},
			{
				"_id" : "O&M Circle Sheopur",
				"list" : [ 
					"O&M Division Sheopur South"
				]
			},
			{
				"_id" : "O&M Circle Ashoknagar",
				"list" : [ 
					"O&M Division Ashoknagar"
				]
			},
			{
				"_id" : "O&M Circle Sehore",
				"list" : [ 
					"O&M Division Sehore"
				]
			},
			{
				"_id" : "O&M Circle Shivpuri",
				"list" : [ 
					"O&M Division Shivpuri 1"
				]
			},
			{
				"_id" : "O&M Circle Vidisha",
				"list" : [ 
					"O&M Division Vidisha"
				]
			},
			{
				"_id" : "Narmadapuram",
				"list" : [ 
					"Narmadapuram"
				]
			},
			{
				"_id" : "O&M Circle Betul",
				"list" : [ 
					"O&M Division Betul (South)"
				]
			}
		],
		subdivisionData : [
			{
				"_id" : "O&M Division Bhopal",
				"list" : [ 
					"Ratibad Subdivision"
				]
			},
			{
				"_id" : "O&M Division Rajgarh",
				"list" : [ 
					"Rajgarh Subdivision"
				]
			},
			{
				"_id" : "West Division Bhopal",
				"list" : [ 
					"Vallabh Nagar", 
					"Shakti Nagar", 
					"Shahpura", 
					"Katara Hills", 
					"Vidhya Nagar"
				]
			},
			{
				"_id" : "South Division Bhopal",
				"list" : [ 
					"Bhadbada Zone", 
					"Jahangirabad Zone", 
					"T.T. Nagar Zone", 
					"Kotra", 
					"Arera Colony", 
					"M.P. Nagar Zone"
				]
			},
			{
				"_id" : "O&M Division Sehore",
				"list" : [ 
					"Sehore CIty Zone I", 
					"Sehore City Zone II"
				]
			},
			{
				"_id" : "City Division (Central) Gwalior",
				"list" : [ 
					"CSS ZONE", 
					"CPSS Zone", 
					"Baraghata Zone", 
					"SKC Zone", 
					"LAXMI GANJ ZONE"
				]
			},
			{
				"_id" : "O&M Division Datia",
				"list" : [ 
					"Datia U"
				]
			},
			{
				"_id" : "O&M Division Seondha",
				"list" : [ 
					"Seondha"
				]
			},
			{
				"_id" : "O&M Division Betul (South)",
				"list" : [ 
					"Betul (T) 2 Zone", 
					"Betul Town 1 Zone"
				]
			},
			{
				"_id" : "City Division (South) Gwalior",
				"list" : [ 
					"Kampoo Zone", 
					"Sikinder Kampoo Zone", 
					"Golpahadia Zone"
				]
			},
			{
				"_id" : "O&M Division Ashoknagar",
				"list" : [ 
					"Ashoknagar SubDivision"
				]
			},
			{
				"_id" : "O&M Division Raisen",
				"list" : [ 
					"Raisen City Zone"
				]
			},
			{
				"_id" : "O&M Division Morena-I",
				"list" : [ 
					"Duttpura Zone", 
					"Ganeshpura zone", 
					"Morena Urban Zone"
				]
			},
			{
				"_id" : "City Division (East) Gwalior",
				"list" : [ 
					"Baradari Zone", 
					"City centre Zone", 
					"Morar Zone", 
					"DD Nagar Zone", 
					"Maharajpura Zone", 
					"Thatipur Zone"
				]
			},
			{
				"_id" : "East DIvision Bhopal",
				"list" : [ 
					"Chandbad Zone", 
					"Karond", 
					"Anand Nagar", 
					"Ayodhya Zone", 
					"Industrial Gate", 
					"Bhanpur Zone"
				]
			},
			{
				"_id" : "O&M Division Kolar",
				"list" : [ 
					"Misrod Town Zone", 
					"Danishkunj City Zone"
				]
			},
			{
				"_id" : "O&M Division Harda North",
				"list" : [ 
					"HARDA Town Zone"
				]
			},
			{
				"_id" : "Narmadapuram",
				"list" : [ 
					"Narmadapuram Town-I", 
					"Narmadapuram Town-II"
				]
			},
			{
				"_id" : "City Division (North) Gwalior",
				"list" : [ 
					"Transport Nagar Zone", 
					"Vinay Nagar Zone", 
					"Tansen Zone", 
					"Ladheri Zone", 
					"Phool Bag Zone", 
					"Birla Nagar"
				]
			},
			{
				"_id" : "O&M Division Vidisha",
				"list" : [ 
					"Vidisha Urban Subdivision-II", 
					"Vidisha Urban Subdivision-I", 
					"Vidisha Rural Sub division"
				]
			},
			{
				"_id" : "O&M Division Sheopur South",
				"list" : [ 
					"Sheopur urban subdivision"
				]
			},
			{
				"_id" : "North Division Bhopal",
				"list" : [ 
					"Imamigate Zone", 
					"Bus Stand Zone", 
					"Sultaniya Zone", 
					"Chhola Zone", 
					"City Kotwali", 
					"Bairagarh", 
					"Indravihar"
				]
			},
			{
				"_id" : "O&M Division Bhind",
				"list" : [ 
					"Bhind Water Work City Zone", 
					"Bhind ITI City Zone"
				]
			},
			{
				"_id" : "O&M Division Guna",
				"list" : [ 
					"Guna Cantt.", 
					"Guna City Zone"
				]
			},
			{
				"_id" : "O&M Division Shivpuri 1",
				"list" : [ 
					"Shivpuri Town-East", 
					"Shivpuri Town-West"
				]
			}
		],
		zone:[
			{
				"list" : ["Anand Nagar"]
			},
			{
				"list" : ["Ayodhya"]
			},
			{
				"list" : ["Bairagarh"]
			},
			{
				"list" : ["Bhadbhada"]
			},
			{
				"list" : ["Bhanpur"]
			},
			{
				"list" : ["Bus Stand"]
			},
			{
				"list" : ["Chandbarh"]
			},
			{
				"list" : ["Chhola"]
			},
			{
				"list" : ["City Kotwali"]
			},
			{
				"list" : ["Danish Kunj"]
			},
			{
				"list" : ["E-4 Arera Colony"]
			},
			{
				"list" : ["Imamigate"]
			},
			{
				"list" : ["Indra Vihar"]
			},
			{
				"list" : ["Industrial Gate"]
			},
			{
				"list" : ["Jahangirabad"]
			},
			{
				"list" : ["Karond"]
			},
			{
				"list" : ["Katara Hills"]
			},
			{
				"list" : ["Kotra"]
			},
			{
				"list" : ["MP Nagar"]
			},
			{
				"list" : ["Misrod"]
			},
			{
				"list" : ["Shahpura"]
			},
			{
				"list" : ["Shakti Nagar"]
			},
			{
				"list" : ["Sultaniya"]
			},
			{
				"list" : ["TT Nagar"]
			},
			{
				"list" : ["Vallabh Nagar"]
			},
			{
				"list" : ["Vidhya Nagar"]
			}
		],
		billingDivision: [
			{
				"list":["Bhopal City East"]
			},
			{
				"list":["Bhopal City North"]
			},
			{
				"list":["Bhopal City South"]
			},
			{
				"list":["Bhopal City West"]
			},
			{
				"list":["O&M KOLAR"]
			},
		]
	},
	reducers: {
		addFilters: (state,action) => {
			state.filterObject = action.payload.data
		},
	}
	
});


export const { addFilters,updateData } = userSlice.actions;

export default userSlice.reducer;