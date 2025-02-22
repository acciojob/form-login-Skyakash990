function getFormvalue() {
    //Write your code here
	let form=document.querySelector("#form1");

	let formVal={
		fname:form["fname"].value,
		lname:form["lname"].value,
	}
	let val1=formVal.fname.trim('');
	let val2=formVal.lname.trim('');
	isValidName(val1,val2);
	
	if(formVal.fname=="" || formVal.lname ==""){
		alert("please enter appropriate names in both fields ");
	}
	
	
	alert(`${val1} ${val2}`);

}
function isValidName(fname,lname) {
  return /^[A-Za-z'-]+(?:\s[A-Za-z'-]+)*$/.test(fname,lname);
}
