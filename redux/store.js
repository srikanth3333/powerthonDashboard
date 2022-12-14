import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./auth/userSlice";
import focReducer from "./focComplaint/focComplaintSlice";
import billComplaintsReducer from "./cutomerComplaints/customerComplaintsSlice";
import billingReducer from "./billingInformation/billingInformationSlice";
import analysisReducer from "./cutomerComplaints/customerAnalysisReport";
import paymentsReducer from "./payments/paymentsSlice";
import hierarchyReducer from "./hierarchy/hierarchySlice";
import arrearsReportReducer from "./arrearsReport/arrearsReportSlice";
import consumerReportReducer from "./divisionConsumerReport/consumerReportSlice";
import consumerArrearReducer from "./consumerArrears/consumerArrearsSlice";

export default configureStore({
	reducer: {
		auth:authReducer,
		focData:focReducer,
		billComplaints:billComplaintsReducer,
		billing:billingReducer,
		complaintsAnalysis:analysisReducer,
		payments:paymentsReducer,
		hierarchy:hierarchyReducer,
		arrears:arrearsReportReducer,
		consumerReport:consumerReportReducer,
		consumerArrears:consumerArrearReducer
	},
});