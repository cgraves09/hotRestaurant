

function reservations() {
    $.get({url: "/api/reservations", method: "GET"})
    .then(function(data) {

        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var table = $("#");
            var list = $("<li class='list-group-item'>");
            list.append(
                $("<h1>").text("Table # " + (i + 1)),
                $("<hr>"),
                $("<h2>").text("Name: " + data[i].name),
                $("<h2>").text("Email: " + data[i].email),
                $("<h2>").text("Phone number: " + data[i].phone)
            )
            table.append(list);
        }
    })
};

function waitList() {
    $.get({url: "/api/waitingList", method: "GET"})
    .then(function(data) {

        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var table = $("#");
            var list = $("<li class='list-group-item'>");
            list.append(
                $("<h1>").text("Table # " + (i + 1)),
                $("<hr>"),
                $("<h2>").text("Name: " + data[i].name),
                $("<h2>").text("Email: " + data[i].email),
                $("<h2>").text("Phone number: " + data[i].phone)
            )
            table.append(list);
        }
    })
};



$("#submit").on("click", function(event) {
    event.preventDefault();
    var newReservation = {
        name: $("#name").val().trim(),
        phoneNumber: $("phoneNumber").val().trim(),
        email: $("#email").val().trim(),
        uniqueId: $("#id").val().trim()
    };


    $.post("/api/reservations", newReservation)
        .then(function(data) {
            console.log("reserve.html", data);
    })
})