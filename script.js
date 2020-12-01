$("button").click(function(){
  let name = $(".name").val();
  let year = $(".year").val();
  let age = 2020 - year;
  year = Number(year);
  age = Number(age);
  $(".message").append(`<p> ${name} is ${age} years old </p>`)
});
