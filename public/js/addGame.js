$(function () {
    $(document).ready(function () {
        $("#question0").prepend("1 + 0 =");
        $("#question1").prepend("1 + 1 =");
        $("#question2").prepend("1 + 2 =");
        $("#question3").prepend("1 + 3 =");
        $("#question4").prepend("1 + 4 =");
        $("#question5").prepend("1 + 5 =");
        $("#question6").prepend("1 + 6 =");
        $("#question7").prepend("1 + 7 =");
        $("#question8").prepend("1 + 8 =");
        $("#question9").prepend("1 + 9 =");
        $("#question10").prepend("1 + 10 =");
        $("#answer0").focus();
    });

    $("form").submit(function (e) {
        var errors = false;
        e.preventDefault();

        if ($('#answer0').val() != 1) {
            errors = true;
            $("#question0").append("  Incorrect");
        }

        if ($('#answer1').val() != 2) {
            errors = true;
            $("#question1").append("  Incorrect");
        }

        if ($('#answer2').val() != 3) {
            errors = true;
            $("#question2").append("  Incorrect");
        }        

        if (errors) {
            return false;
        }
        $(this).unbind('submit').submit()
    });

    // $("form").submit(function () {
    //     var errors = [];
    //     if ($('#answer1').val() != 1) {
    //         errors.push({
    //             error: 'Invalid answer for 1 + 0'
    //         });
    //     }

    //     if(errors.length>0){
    //         $('#errors').text = errors;

    //         return;
    //     }
    // });
});