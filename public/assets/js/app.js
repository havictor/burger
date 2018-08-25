$(".wrapper").on("click", ".eatButton", function() {
    console.log($(this).attr("data-id"))
})

$("#orderButton").on("click", function() {
    var order = $("#orderRequest").val()
    $.post("/api/order", {
        name: order
    })
    $("#orderRequest").val("")
})