window.onload = function() {

    document.getElementById('btnReset').addEventListener("click", btnResetFun);

    document.getElementById('btnRegisterPatient').addEventListener("click", btnSubmitFun);

    if(document.getElementById('chkElderlyPatients').checked){
        chkElderlyPatientsFun();
    }
    document.getElementById('btnRegisterPatient').addEventListener("click", btnSubmitFun);
}

function btnResetFun(){
    document.getElementById("patientForm").reset();
}

function btnSubmitFun(){
    const tableBody = document.getElementById("tbodyPatientsList");
    const patientIdNumberText = document.getElementById("patientIdNumber").value;
    const firstNameText = document.getElementById("firstName").value;
    const middleInitialsText = document.getElementById("middleInitials").value;
    const lastNameText = document.getElementById("lastName").value;
    const dateOfBirthText = document.getElementById("dateOfBirth").value;
    const ddlDepartmentText = document.getElementById("ddlDepartment").value;
    const radioIsOutPatientRadioYes = document.getElementById("radioIsOutPatientYes").checked;
    const radioIsOutPatientRadioNo = document.getElementById("radioIsOutPatientNo").checked;

    if(patientIdNumberText == "" || firstNameText == "" || middleInitialsText == "" || lastNameText == "" ||
    dateOfBirthText == "" || ddlDepartmentText == "" || (radioIsOutPatientRadioYes == "" && radioIsOutPatientRadioNo == "")){
        alert("Please fill out all the required fields");
        return;
    }
    
    
    const row = document.createElement("tr");
    let c1 = document.createElement("td")
    let c2 = document.createElement("td")
    let c3 = document.createElement("td")
    let c4 = document.createElement("td")
    let c5 = document.createElement("td")
    let c6 = document.createElement("td")
    let c7 = document.createElement("td")

    c1.innerHTML = patientIdNumberText;
    c2.innerHTML = firstNameText;
    c3.innerHTML = middleInitialsText;
    c4.innerHTML = lastNameText;
    c5.innerHTML = dateOfBirthText;
    c6.innerHTML = ddlDepartmentText;
    if(radioIsOutPatientRadioYes){
        c7.innerHTML = "YES";
    }
    if(radioIsOutPatientRadioNo){
        c7.innerHTML = "NO";
    }
    

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    row.appendChild(c6);
    row.appendChild(c7);

    tableBody.appendChild(row);

    event.preventDefault();
}

function chkElderlyPatientsFun(){
    console.log(new Date(dateOfBirthText) < new Date("1958-04-21"));

}



