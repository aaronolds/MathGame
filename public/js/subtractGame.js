$(function () {
    var questionList;
    $(document).ready(function () {
        $.ajax({
            url: "/newgame/subtract/1"
        }).then(function (data) {
            var questionList = data;
            Object.entries(questionList).forEach(
                ([key, value]) => {
                    var questionStr = `#question${key}`;
                    $(questionStr).text(value.q);
                }
            );
        });
        $("#answer0").focus();
    });

    $("form").submit(function (e) {
        var errors = false;
        e.preventDefault();

        if ($('#answer0').val() != 1) {
            errors = true;
            $("#result0").text("  Incorrect");
        }

        // if ($('#answer1').val() != 2) {
        //     errors = true;
        //     $("#question1").append("  Incorrect");
        // }

        // if ($('#answer2').val() != 3) {
        //     errors = true;
        //     $('#question2').append("  Incorrect");
        // }

        // // validate answer3
        // if ($('#answer3').val() != 4) {
        //     errors = true;
        //     $('#question3').append("  Incorrect");
        // }

        // // validate answer4
        // if ($('#answer4').val() != 5) {
        //     errors = true;
        //     $('#question4').append("  Incorrect");
        // }

        // // validate answer5
        // if ($('#answer5').val() != 6) {
        //     errors = true;
        //     $('#question5').append("  Incorrect");
        // }

        // // validate answer6
        // if ($('#answer6').val() != 7) {
        //     errors = true;
        //     $('#question6').append("  Incorrect");
        // }

        // // validate answer7
        // if ($('#answer7').val() != 8) {
        //     errors = true;
        //     $('#question7').append("  Incorrect");
        // }

        // // validate answer8
        // if ($('#answer8').val() != 9) {
        //     errors = true;
        //     $('#question8').append("  Incorrect");
        // }

        // // validate answer9
        // if ($('#answer8').val() != 9) {
        //     errors = true;
        //     $('#question9').append("  Incorrect");
        // }

        // // validate answer10
        // if ($('#answer10').val() != 11) {
        //     errors = true;
        //     $('#question10').append("  Incorrect");
        // }



        /* validate the answers 3 through 10 */
        if (errors) {
            return false;
        }
        alert("All answers are correct.")
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