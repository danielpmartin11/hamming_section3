exports.compute = function(first, second){

	var differences = 0;

	if(first.length != second.length){
		throw new Error("DNA strands must be of equal length.");
	}

	for(var i = 0; i < first.length; i++){
		if (first[i] != second[i])
			differences = differences + 1;
	}

	return differences;

};