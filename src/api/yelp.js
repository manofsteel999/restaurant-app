import axios from 'axios' ;

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
		"Bearer T445_iEPw3e4oMrI_uZgRrb_D7K3jKa_dcnMU-d9_dMCBs3QFd-QQlGnbgiM3ZZGVeaqPqXaRMEQWazh5E94f-VUPPTHgmCQZYnHIddIsdcsw40OF4a0DL5ctJKFYHYx"
	}
});