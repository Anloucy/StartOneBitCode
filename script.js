function calculateTip(event){
    event.preventDefault();
    let bill = document.getElementById('bill').value;
    let service = document.getElementById('serviceQual').value;
    let peopleeach = document.getElementById('pessoasConta').value;

    if(bill == '' | service == 0){
        alert("Preencha os dados!")
        return;
    }
    if(peopleeach == "" | peopleeach <=1) {
        peopleeach = 1;
        document.getElementById('each').style.display = "none";
    }
    else{
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * service)/peopleeach;
    total = total.toFixed(2);

    document.getElementById('tip').innerHTML = total;
    
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";

document.getElementById('each').style.display = "none";

document.getElementById('tipsForm').addEventListener('submit', calculateTip);