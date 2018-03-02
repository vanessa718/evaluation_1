
console.log('hello');
(function main() { 
	var full="";

/* for add the class expenses*/
	$('#btn1').click(function(){
		var exp=0;

			$(".a").each(function(){
				exp+=($(this).val())*1;
			console.log(exp);
			});
			$("#add").val(exp);	

// /* for add class saving */
// 			$(".b").each(function(){
// 				exp+=($(this).val())*1;
// 			});
// 			$("#add").val(exp);
 		});


	


// 	if('.o'===full){
// 		return false;
// 		alert('Veuillez remplir le champ');
	// }
})();





