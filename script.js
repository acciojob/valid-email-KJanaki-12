function validEmail(str) {
  //your JS code here.
	if(str.includes(".com") || str.includes(".con.in") || str.includes(".edu")){
		if(str.includes("@")){
			if(str.indexOf('@') === 0){
				return false;
			}
		}
		return true;
	}else{
		return false;
	}
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
