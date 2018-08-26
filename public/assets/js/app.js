$(".wrapper").on("click", ".eatButton", function() {
    var eat = $(this).attr("data-id")
    $.ajax({
        method: "put",
        url: `/api/eat/${eat}`
    })
})

$("#orderButton").on("click", function() {
    var order = $("#orderRequest").val()
    $.post("/api/order", {
        name: order
    })
    $("#orderRequest").val("")
})