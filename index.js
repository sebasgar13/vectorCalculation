function dot(array1, array2){
	let sizeArray = array1.length;
	let result = 0;
	for(let i =0; i < sizeArray; i++)
		{
			result += (array1[i]*array2[i]);
		}
	return result;
}

module.exports = dot;
