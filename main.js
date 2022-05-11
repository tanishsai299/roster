name_of_the_student_array = [];

function submit(){
var name_1 = document.getElementById("name_of_the_student_1").value;//tanish
var name_2 = document.getElementById("name_of_the_student_2").value;//sweytha
var name_3 = document.getElementById("name_of_the_student_3").value;//harish
var name_4 = document.getElementById("name_of_the_student_4").value;//suhas

name_of_the_student_array.push(name_1);
name_of_the_student_array.push(name_2);
name_of_the_student_array.push(name_3);
name_of_the_student_array.push(name_4);

console.log(name_of_the_student_array);

//displaying the array output on the div tag with id display_name

document.getElementById("display_name").innerHTML = name_of_the_student_array;
//make submit button vanish
document.getElementById("submit_button").style.display="none";
//replace submit with sort button
document.getElementById("sort_button").style.display="inline-block";



}

function sorting(){
    //sort the array
    name_of_the_student_array.sort();

    console.log(name_of_the_student_array);
    //display on div tag with id sort_name
    document.getElementById("sort_name").innerHTML = name_of_the_student_array;

}