let toastBox = document.getElementById("toastBox");
let successMsg =
  '<i class="fa fa-times .fa-arrow-right:before" aria-hidden="true" style="color:green"></i> Successfully Submitted';
let errorMsg =
  '<i class="fa fa-times " aria-hidden="true" style="color:red"></i>Please fix the error';
let invalidMsg =
  '<i class="fa fa-times" aria-hidden="true" style="color:orange"></i>Invalid input, check again';

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);
}
