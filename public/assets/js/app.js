$(".wrapper").on("click", ".eatButton", function() {
    var eat = $(this).attr("data-id")
    $.ajax({
        method: "put",
        url: `/api/eat/${eat}`
    })
    .done(window.location.assign('/'))
})

$("#orderButton").on("click", function() {
    var order = $("#orderRequest").val()
    $.post("/api/order", {
        name: order
    })
    .done(window.location.assign('/'))
    $("#orderRequest").val("")
})