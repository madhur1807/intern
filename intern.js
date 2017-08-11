$("document").ready(function(){
	$('.sbutton').click(function(){
    validateForm();
    });
    $('.help_email').click(function(){
    	help();
    });
    $("#show").text(function(){
    	showemail();
    });

    $('.pbutton').click(function(){
    	checkpass();
    });

    function validateForm(){

    	var email=$(".itype").val();
    	var vemail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    	if(email==""){
    		alert("Email field must be filled");
    	}
    	else if(!vemail.test(email)){
    		alert("Please enter a valid email id");
    	}
    	else{
    		window.location.href = "intern1.html";
    		localStorage.setItem("email", email);
		   		
    	}

    }

    function help(){
    	alert("Sorry for the inconvience! Our team will get back to you shortly.");
    }
    
    function checkpass(){
    	var pass=$(".ptype").val();
    	if(pass==""){
    		$("#show_error").text("Please enter your password");
        	}
    }
    function showemail(){
    	
 		var res = localStorage.getItem("email");
 	    $("#show").text(res);
 	}

});