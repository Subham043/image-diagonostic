function toggleMobileNav() {
    $("#mobileNavOptions").toggle("fast", "swing");
}

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}

function sendEmail() {

    var isValid = true;

    var name = $("#name").val();
    var phone_number = $("#phone_number").val();
    var email_id = $("#email_id").val();
    var message = $("#message").val();

    if (name == '') {
        isValid = false;
    }
    if (phone_number == '') {
        isValid = false;
    }
    if (email_id == '') {
        isValid = false;
    }
    if (message == '') {
        isValid = false;
    }
    if (isValid == false) {
        alert("Enter Valid Data");
    }
    else {
        if (!validateEmail(email_id)) {
            alert("Enter Valid Data");
        }
        else {
            var intRegex = /[0-9 -()+]+$/;
            if ((phone_number.length < 10) || (!intRegex.test(phone_number))) {
                alert("Enter Valid Data");
            }
            else {
                var data = {
                    type: "post",
                    name: name,
                    phone_number: phone_number,
                    email_id: email_id,
                    message: message
                };

                console.log(data);

                /*$.ajax({
                    url: "http://www.thespacearts.com/sendmail.php",
                    type: "post",
                    dataType: 'json',
                    data: data,
                    success: function (result) {
                        console.log(result);
                    }
                });*/
            }
        }
    }

    /**/
}