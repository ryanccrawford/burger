$(document).ready(function () {
    var id = $('.eat-burger').attr('data-burgerid')
    if (id) {
        $('#pick').show()
        $('#eaten').show()
    }
    $("#createburger").on("submit", function (event) {
        event.preventDefault();

        var name = $('#createburger [name=name]').val().trim()
        var newBurger = {
            burger_name: name
        }

        $.ajax("/api/addburger", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger")
                location.reload()
            }
        )
    })

    $(".eat-burger").click(function (event) {
        event.preventDefault()
        var id = $(event.target).attr('data-burgerid')
        var url = "/api/eatburger/" + id
        $.ajax(url, {
            type: "PUT"
        }).then(
            function () {
                location.reload()
            }
        )
    })
})