$("#btn").click(function() {
let username = $("#username").val();
let githubUrl = "https://api.github.com/users/"+username;

$.ajax ({
    url: githubUrl,
    type:"GET",
    dataType: "json",
    success: function(response) {

        $("#account-data").append("<br>" + "<i>" + response.name + "</i>");
        $("#account-data").append("<br>" + "<i>" + response.company + "</i>");
    },
    error:function(jqxhr, textstatus, error) {
        console.log("Error" + textstatus);
        $("#account-data").append("<br>" + "<i>" + response.company + "</i>");

    }



})



}