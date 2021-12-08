function sending() {

    var name, email, phone_number, contract_terms;

    name = document.getElementById("name").value
    email = document.getElementById("mail").value
    phone_number = document.getElementById("phone_number").value
    contract_terms = document.getElementById("check")


    verify()
}

function verify() {
    var name, contract_terms;
    
    name = document.getElementById("name").value
    contract_terms = document.getElementById("check")

    if (document.getElementById("name").value == "") {
        alert('Por favor, preencha o campo nome');
        document.getElementById("nome").focus();
        return false
    }

    if (document.getElementById("phone_number").value == "") {
        alert('Por favor, preencha o campo Telefone');
        document.getElementById("phone_number").focus();
        return false
    }

    if (document.getElementById("mail").value == "") {
        alert('Por favor, preencha o campo E-Mail');
        document.getElementById("mail").focus();
        return false
    }

    if (contract_terms.checked) {
        alert("Olá " + name + " ! seus dados foram enviados com sucesso!")
        alert("O seu dowload será iniciado!")
        sendMail()
        clean()
        ebookDownload()
    }
    else {
          alert('Por favor, selecione a caixinha, concordando com os TERMOS!');
          document.getElementById("check").focus();
          return false
    }    
}

function clean() {
    document.getElementById("name").value = '';
    document.getElementById("mail").value = '';
    document.getElementById("phone_number").value = '';
    document.getElementById("check").checked = false;
}

function sendMail() {
    var name, email, phone_number;

    name = document.getElementById("name").value
    email = document.getElementById("mail").value
    phone_number = document.getElementById("phone_number").value

    Email.send({
       //https://www.smtpjs.com/
       // Host : "smtp.yourisp.com",
       // Username : "username",
       // Password : "password",
       SecureToken : "25c85dd3-0717-4ab2-8a71-0680b7e64e90",
       To : 'pluslandingpage@gmail.com',
       From : email,
       To: "pluslandingpage@gmail.com",
       Subject: name+" - Cliente Landing Page",
       Body: 'Olá Plus Negócios Imobiliários!<br>Me nome é '+name+
       ' e gostaria de mais informações sobre o: <br><b>E-Book: <i>Como Comprar O Apartamento Dos Sonhos.</b></i><br> '
       +'Meu telefone para contato: '+phone_number+'<br><br>Att '+name
    })
} 

function ebookDownload(){
    open('https://docs.google.com/uc?export=download&id=1DFVGcE2VDnsMy_OG4lOtP1eWF4Va7ff7');
}

