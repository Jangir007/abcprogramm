$(document).ready(function () {
    let hiddenRow = $(".expandable");
    $(".expand-btn").click(function () {
        hiddenRow.toggleClass("hidden");
        if (hiddenRow.is(":visible")) {
            $(".expand-btn").html("Decrease");
        }
        else {
            $(".expand-btn").html("Expand");
        }
    });
});