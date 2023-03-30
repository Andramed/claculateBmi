let nume1 = document.querySelector('.nume1'),
	birthDate = document.querySelector('#birthDate1'),
	heigth1 = document.querySelector('.height1'),
	weight1 = document.querySelector('.weight1'),
	btn =document.querySelector('.btn');



	function calculate_BMI(weight,height) {
		return weight / ( height ** 2 );
	}
btn.addEventListener('click', function() {
	let user1 = calculate_BMI(Number(weight1.value), Number(heigth1.value));
	console.log(user1);
})



