Name_of_the_student_array = [];
function submit()
{
var name_1 = document.getElementById("Name_of_the_student_1").Value;
var name_2 = document.getElementById("Name_of_the_student_2").Value;
var name_3 = document.getElementById("Name_of_the_student_3").Value;
var name_4 = document.getElementById("Name_of_the_student_4").Value;
var name_5 = document.getElementById("Name_of_the_student_5").Value;
Name_of_the_student_array.push(name_1);
Name_of_the_student_array.push(name_2);
Name_of_the_student_array.push(name_3);
Name_of_the_student_array.push(name_4);
Name_of_the_student_array.push(name_4);
console.log(Name_of_the_student_array);
document.getElementById("display_name").innerHTML=Name_of_the_student_array;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline_block";

}
function sorting(){
    Name_of_the_student_array.sort();
    console.log(Name_of_the_student_array);
    document.getElementById("display_name").innerHTML=Name_of_the_student_array;




}