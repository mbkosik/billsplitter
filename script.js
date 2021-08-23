const billsplitBtn = document.querySelector(".billsplitter__button");

billsplitBtn.addEventListener("click", () => {
    
    let amount = Number(document.getElementById("amount").value); 
    let people = Number(document.getElementById("people").value); 
    const tip = document.getElementById("tip");

    const tipValue = Number(tip.options[tip.selectedIndex].value);
    const result = (amount + (amount * tipValue)) / people;

    if (amount === 0 || people === 0 || tipValue === 0) {
        document.querySelector(".result").textContent = "Uzupełnij wszystkie pola";
    } else {
        document.querySelector(".result").textContent = `Powinniście sie złożyć po ${result.toFixed(2)}zł`;
    }
})