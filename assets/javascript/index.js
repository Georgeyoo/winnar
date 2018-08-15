$(".btn").on("click", function() {
    $.ajax({
        url: "https://api.spacexdata.com/v2/launches/latest"
    }).then(function(result) {
        console.log(result.links);
        console.log(result.links.mission_patch);
        let image = "https://m.media-amazon.com/images/M/MV5BZDNkYjQxNjgtMDU1Yy00YzhkLTg1OTktZTU5YjAzZTdkOGEwXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_CR0,45,480,270_AL_UX477_CR0,0,477,268_AL_.jpg";
        // return result.links.mission_patch;
        $("#results").html("<img src=" + image + "/>");
    })
})