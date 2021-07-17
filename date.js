//jshint esversion:6

exports.getDate=function(){
	const today = new Date();

	const options={
		weekday: "long",
		day: "numeric",
		month:"long"
	};
	return today.toLocaleDateString("en-US",options);//allows you to format your javascript using whichever format you want

};
exports.getDay=function(){
	const today = new Date();

	const options={
		weekday: "long",
	};
	return today.toLocaleDateString("en-US",options);
};