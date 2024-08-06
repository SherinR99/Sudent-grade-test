const result = () =>{
    const mark = Number(document.getElementById("fname").value)
    const passfail = document.createElement("h3");
    const grade = document.createElement("h3");
    const main = document.getElementById("main");

    main.innerHTML = '';

    if(mark<=100 && mark>=90){
        passfail.textContent = "Result : Passed"
        grade.textContent = "Grade : A+"
        main.appendChild(passfail)
    main.appendChild(grade)
    }

    else if(mark<=89 && mark>=80){
        passfail.textContent = "Result : Passed"
        grade.textContent = "Grade : A"
        main.appendChild(passfail)
        main.appendChild(grade)
    }
    
    else if(mark<=79 && mark>=70){
        passfail.textContent = "Result : Passed"
        grade.textContent = "Grade : B+"
        main.appendChild(passfail)
        main.appendChild(grade)
    }

    else if(mark<=69 && mark>=60){
        passfail.textContent = "Result : Passed"
        grade.textContent = "Grade : B"
        main.appendChild(passfail)
        main.appendChild(grade)
    }

    else if(mark<=59 && mark>=50){
        passfail.textContent = "Result : Passed"
        grade.textContent = "Grade : C+"
        main.appendChild(passfail)
        main.appendChild(grade)
    }

    else if(mark<=49 && mark>=40){
        passfail.textContent = "Result : Passed"
        grade.textContent = "Grade : C"
       main.appendChild(passfail)
        main.appendChild(grade)
    }

    else if(mark<=39 && mark>=30){
        passfail.textContent = "Result : Passed"
        grade.textContent = "Grade : D+"
        main.appendChild(passfail)
        main.appendChild(grade)
    }

    else if(mark<=29 && mark>=20){
        passfail.textContent = "Result : Failed"
        grade.textContent = "Grade : D"
        main.appendChild(passfail)
        main.appendChild(grade)
    }

    else if(mark<20){
        passfail.textContent = "Result : Failed"
        grade.textContent = "Grade : E"
        main.appendChild(passfail)
        main.appendChild(grade)
    }

    else{
        const wrong = document.createElement("h2")
        wrong.textContent = "Mark Cannot be greater than 100"
        main.appendChild(wrong)
    }

}

const submitbtn = document.getElementById("submit-btn")
submitbtn.addEventListener("click" , result)