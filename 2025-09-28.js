/* Practice Exercise applying concepts from previous coding challenge 

Problem:
You are planning a movie marathon with your friends. You want to write a function marathonTime(totalMinutes) that:

Takes a number of minutes (totalMinutes).
If the number is 0 or negative, return "00:00".

Otherwise:

Convert the minutes into hours and minutes.
Make sure both hours and minutes are always two digits (use .toString().padStart(2, "0")).
Return the result as a string in "HH:MM" format. 

marathonTime(0)     ➞ "00:00"
marathonTime(-15)   ➞ "00:00"
marathonTime(59)    ➞ "00:59"
marathonTime(60)    ➞ "01:00"
marathonTime(135)   ➞ "02:15"
marathonTime(745)   ➞ "12:25"
*/ 

function marathonTime(totalMinutes) {

const hr = Math.floor(totalMinutes/60);
const min = totalMinutes % 60;

if (totalMinutes < 1) {
    return `00:00`;
} else {
    
}


}
