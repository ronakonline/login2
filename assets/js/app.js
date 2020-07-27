$(document).ready(function() {
    document.getElementById("registerform").reset();
})

$("#email").on('change', function() {
    var email = $(this).val()
    $.ajax({
        url: '/emailtaken',
        type: 'post',
        data: { email },
        success: function(response) {
            $("#email").val(" ")
            alert(response)
        }
    })
})