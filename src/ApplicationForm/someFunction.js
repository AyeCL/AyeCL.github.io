function someFunction(phone) {
    // var name = document.getElementsById('Name').value;
    // var email = document.getElementsById('Student Email').value;
    // var phone = document.getElementById('student-phone').value;
    // var stream = document.getElementsById('Stream').value;

    console.log("someFunction samma pugyo")

    let form = document.getElementById('registrationForm');

    var url= "https://api.smsdreamits.com/?username=ccrc&password=ccrc1234&from=CCRC&to=" + phone + "&text=" + encodeURI('Hello, this is a test message \n-CCRC') + "&type=1";

    console.log(url);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send();

    xhr.onreadystatechange = (e) => {
        console.log("SMS API Response: " + xhr.responseText);
    }

    form.action = "https://api.sheetmonkey.io/form/8LXkZmgCssqSPFq2mbvCjG"
    form.method = "POST"

    form.submit();

    return true;
}
export default someFunction