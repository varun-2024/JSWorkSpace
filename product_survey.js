const submitButton = document.getElementById("submitBtn");
submitButton.onclick = submitFeedback;

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    submitFeedback(event);
  }
});

function submitFeedback(event) {
  const username = document.getElementById("name").value;
  console.log(username);
  const age = document.getElementById("age").value;
  console.log(age);
  const email = document.getElementById("email").value;
  console.log(email);
  const job = document.getElementById("job").value;
  console.log(job);
  const designation = document.getElementById("designation").value;
  console.log(designation);
  const productType = document.getElementById("productType").value;
  console.log(productType);
  const feedback = document.getElementById("feedbackText").value;
  console.log(feedback);
  //alert("Thank you for your valuable feedback");
  document.getElementById("userName").innerHTML = username;
  document.getElementById("userAge").innerHTML = age;
  document.getElementById("userEmail").innerHTML = email;
  document.getElementById("userJob").innerHTML = job;
  document.getElementById("userDesignation").innerHTML = designation;
  document.getElementById("userProductChoice").innerHTML = productType;
  document.getElementById("userFeedback").innerHTML = feedback;
  document.getElementById("userInfo").style.display = "block";
}
