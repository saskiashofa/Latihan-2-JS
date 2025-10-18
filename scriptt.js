const form = document.getElementById("itemForm");
const input = document.getElementById("itemInput");
const errorMessage = document.getElementById("errorMessage");
const list = document.getElementById("daftar");

form.addEventListener("submit", function(event){
    event.preventDefault();
    const nilaiInput = input.value.trim();
    console.log("Isi disini", nilaiInput);

if (input.value.trim() === ""){
    errorMessage.textContent = "Field tidak boleh kosong";
    input.classList.add("invalid");
} else {
    errorMessage.textContent = "";
    input.classList.remove("invalid");
    input.classList.add("valid");
}

const itemBaru = document.createElement("li");
itemBaru.textContent = nilaiInput;

list.append(itemBaru);

input.value = "";
});