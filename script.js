//available hours to schedule
const hour8 = $("#8");
const hour9 = $("#9");
const hour10 = $("#10");
const hour11 = $("#11");
const hour12 = $("#12");
const hour13 = $("#13");
const hour14 = $("#14");
const hour15 = $("#15");
const hour16 = $("#16");
const hour17 = $("#17");
const hour18 = $("#18");
const time = moment();

//date set up and schedule set in local storage
function setPlanner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        const id = $(this).attr("id");
        const schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".schedule").val(schedule);
        }
    });
}

//save button set up and with local storage
setPlanner();
const saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    const time = $(this).parent().attr("id");
    const schedule = $(this).siblings(".schedule").val();

    localStorage.setItem(time, schedule);
});

//past, present, future 
function pastPresentFuture() {
    hour = time.hours();
    $(".time-block").each(function () {
        const thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

pastPresentFuture();



    