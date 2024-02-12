$("#navbarTogglerDemo01").mouseover(function () {
    mouseover();

})

$("#navbarTogglerDemo01").mouseout(function () {
    mouseout();

})




function mouseover() {
    $("#navbarTogglerDemo01").addClass("");
}

function mouseout() {
    $("#navbarTogglerDemo01").removeClass("");
}