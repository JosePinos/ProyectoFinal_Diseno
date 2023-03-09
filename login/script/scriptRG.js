function redirectToPage()
{
    var selectBox = document.getElementById("users-register");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if(selectedValue !== ""){
        window.location.href = selectedValue;
    }
}