$(function () {
    $(document).ready(function () {

        $.ajax({
            url: "http://localhost:3001/newgame/add/1"
        }).then(function (data) {
            var questionList = data;

            questionList.forEach(function (question, i) {
                for (var key in question) {
                    var questionStr = `#question${i}`;
                    console.log(i, key, question[key], questionStr);
                    $(questionStr).prepend(question[key]);
                }
            });
        });
        // $("#question0").prepend("1 + 0 =");
        // $("#question1").prepend("1 + 1 =");
        // $("#question2").prepend("1 + 2 =");
        // $("#question3").prepend("1 + 3 =");
        // $("#question4").prepend("1 + 4 =");
        // $("#question5").prepend("1 + 5 =");
        // $("#question6").prepend("1 + 6 =");
        // $("#question7").prepend("1 + 7 =");
        // $("#question8").prepend("1 + 8 =");
        // $("#question9").prepend("1 + 9 =");
        // $("#question10").prepend("1 + 10 =");
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
            $('#question2').append("  Incorrect");
        }

        // validate answer3
        if ($('#answer3').val() != 4) {
            errors = true;
            $('#question3').append("  Incorrect");
        }

        // validate answer4
        if ($('#answer4').val() != 5) {
            errors = true;
            $('#question4').append("  Incorrect");
        }

        // validate answer5
        if ($('#answer5').val() != 6) {
            errors = true;
            $('#question5').append("  Incorrect");
        }

        // validate answer6
        if ($('#answer6').val() != 7) {
            errors = true;
            $('#question6').append("  Incorrect");
        }

        // validate answer7
        if ($('#answer7').val() != 8) {
            errors = true;
            $('#question7').append("  Incorrect");
        }

        // validate answer8
        if ($('#answer8').val() != 9) {
            errors = true;
            $('#question8').append("  Incorrect");
        }

        // validate answer9
        if ($('#answer8').val() != 9) {
            errors = true;
            $('#question9').append("  Incorrect");
        }

        // validate answer10
        if ($('#answer10').val() != 11) {
            errors = true;
            $('#question10').append("  Incorrect");
        }



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