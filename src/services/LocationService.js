import firebase from 'react-native-firebase';

export class LocationService {

	constructor() {
		this.ref = firebase.firestore().collection('locations');
	}

	getLocation(id) {
		var doc = this.ref.doc(id).get();
		return {
			lat: doc.data().lat,
			long: doc.data().long
		};
	}

}