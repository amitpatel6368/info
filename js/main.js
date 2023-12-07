// =============================================================================
// TOOLTIP START
// =============================================================================
$(document).ready(function(){
  	$('[data-toggle="tooltip"]').tooltip();
});
// =============================================================================
// TOOLTIP CLOSE
// =============================================================================



// =============================================================================
// CONTACT FORM VALIDATION START
// =============================================================================
function validateName() {
    var name = document.getElementById("contact-name").value;

    if (name.length == 0) {
        producePrompt("✘", "name-error", "#f44336");
        return false;
    }

    if (!name.match(/^[A-Za-z\-[' ']*\s*$/)) {
        producePrompt("✘", "name-error", "#f44336");
        return false;
    }

    producePrompt("✔", "name-error", "#00c853");
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;

    if (email.length == 0) {
        producePrompt("✘", "email-error", "#f44336");
        return false;
    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
        producePrompt("✘", "email-error", "#f44336");
        return false;
    }

    producePrompt("✔", "email-error", "#00c853");
    return true;
}

function validateSubject() {
    var subject = document.getElementById("contact-subject").value;

    if (subject.length == 0) {
        producePrompt("✘", "subject-error", "#f44336");
        return false;
    }

    

    producePrompt("✔", "subject-error", "#00c853");
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;

    if (message.length == 0) {
        producePrompt("✘", "message-error", "#f44336");
        return false;
    }

    producePrompt("✔", "message-error", "#00c853");
    return true;
}

function validateForm() {
    if (!validateName() || !validateSubject() || !validateEmail() || !validateMessage()) {
        jsShow("submit-error");
        producePrompt("Please fix errors to submit.", "submit-error", "#f44336");
        setTimeout(function () {
            jsHide("submit-error");
        }, 8000);
    } else {
    }
}

function jsShow(id) {
    document.getElementById(id).style.display = "block";
}

function jsHide(id) {
    document.getElementById(id).style.display = "none";
}

function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}
// =============================================================================
// CONTACT FORM VALIDATION CLOSE
// =============================================================================



// =============================================================================
// SWAL FUNCTION POPUP START
// =============================================================================
$("#submit").click(function() {
	var name = $("#contact-name").val();
	var email = $("#contact-email").val();
	var subject = $("#contact-subject").val();
	var message = $("#contact-message").val();

	if (name == '' || email == '' || subject == '' || message == '') {
		swal({
			title: "Error!",
			text: "Please fill out all fields with valid details.",
			icon: "error",
			button: "Okay",
		});
	} else {
		swal({
			title: "Thank You!",
			text: "Your form is submitted successfully.",
			icon: "success",
			buttons: "Okay",
		})
		.then((willDelete) => {
		  	if (willDelete) {
		    	location.reload(true);
		  	}
		});
	}
})
// =============================================================================
// SWAL FUNCTION POPUP CLOSE
// =============================================================================




/* JQuery Code from:
 http://www.findsourcecode.com/jquery/how-to-count-number-of-characters-in-textarea-jquery/ */

$(document).ready(function () {
    var maxChars = 500;
    var textLength = 0;
    var comment = "";
    var outOfChars = "You have reached the limit of " + maxChars + " characters";

    /* initalize for when no data is in localStorage */
    var count = maxChars;
    $("#characterLeft").text(count + " characters left");

    /* fix val so it counts carriage returns */
    $.valHooks.textarea = {
        get: function (e) {
            return e.value.replace(/\r?\n/g, "\r\n");
        },
    };

    function checkCount() {
        textLength = $("#contact-message").val().length;
        if (textLength >= maxChars) {
            $("#characterLeft").text(outOfChars);
        } else {
            count = maxChars - textLength;
            $("#characterLeft").text(count + " characters left");
        }
    }

    /* on keyUp: update #characterLeft as well as count & comment in localStorage */
    $("#contact-message").keyup(function () {
        checkCount();
        comment = $(this).val();
        localStorage.setItem("comment", comment);
    });
});


$('.swal-button--confirm').click(function() {
    location.reload();
});
