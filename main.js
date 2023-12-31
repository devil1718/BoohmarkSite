var websiteName = document.getElementById("websiteName");
var websiteUrl = document.getElementById("websiteUrl");
var websiteContainer = [];
if (localStorage.getItem("websites") != null) {
  websiteContainer = JSON.parse(localStorage.getItem("websites"));
  displayWebsite(websiteContainer);
}

function addWebsite() {
  var element = {
    name: websiteName.value,
    url: websiteUrl.value,
  };
  if (validNameWebsite() == true&&validUrlWebsite() == true) {
    websiteContainer.push(element);
    console.log(websiteContainer);
    localStorage.setItem("websites", JSON.stringify(websiteContainer));
    displayWebsite(websiteContainer);
    clearData();
  } 
  else {
    alert(`Site Name or Url is not valid, Please follow the rules below :

    1-Site name must contain at least 4 characters

    2-Site URL must be a valid one .....must start with "https://" `);
  }
}

function displayWebsite(array) {
  var cartona = ``;
  for (i = 0; i < array.length; i++) {
    cartona += `<tr>
      <th >${i}</th>
      <td>${array[i].name}</td>
      <td>${array[i].url}</td>
      <td><a href="${websiteContainer[i].url}" target="_blank""><button type="button" class="btn btn1"><i class="fa-regular fa-eye pe-2" style="color: #ffffff;"></i> Visit</button></a></td>
      <td><button type="button" action onclick="deleteWebsite(${i})" class="btn btn2"><i class="fa-solid fa-trash-can pe-2" style="color: #ffffff;"></i> Delete</button></td>
    </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartona;
}

function deleteWebsite(index) {
  websiteContainer.splice(index, 1);
  localStorage.setItem("websites", JSON.stringify(websiteContainer));
  displayWebsite(websiteContainer);
}

function clearData() {
  websiteName.value = "";
  websiteUrl.value = "";
}

// function validateWebsite() {
//   var regex1 = /^[a-zA-Z]{4,10}/;
//   var regex2 = /(https:\/\/)(?:www\.)?[a-z A-Z ]{0,}(.com)?/gm;
//   if (
//     regex1.test(websiteName.value) == true &&
//     regex2.test(websiteUrl.value) == true
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
websiteName.addEventListener("blur",validNameWebsite)
function validNameWebsite() {
  var regex1 = /^[a-zA-Z]{4,10}/;
  if (regex1.test(websiteName.value) == true) {
    websiteName.classList.add("is-valid");
    websiteName.classList.remove("is-invalid");
    return true;
  } else {
    websiteName.classList.add("is-invalid");
    websiteName.classList.remove("is-valid");
    return false;
  }
}
websiteUrl.addEventListener("blur",validUrlWebsite)
function validUrlWebsite() {
  var regex2 = /(https:\/\/)(?:www\.)?[a-z A-Z ]{0,}(.com)?/gm;
  if (regex2.test(websiteUrl.value) == true) {
    websiteUrl.classList.add("is-valid");
    websiteUrl.classList.remove("is-invalid");
    return true;
  } else {
    websiteUrl.classList.add("is-invalid");
    websiteUrl.classList.remove("is-valid");
    return false;
  }
}
