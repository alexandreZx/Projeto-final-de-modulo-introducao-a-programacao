let email=document.querySelector("#email")
let senha=document.querySelector("#senha")
let senhaConfirma=document.querySelector("#senhaVerificacao")
document.querySelector("button").addEventListener("click",(e)=>{
e.preventDefault()
salvarConta(email, senha, senhaConfirma)
})

function salvarConta(email, senha, senhaConfirma){
    if(email.value==="" ||senha.value==="" ||senhaConfirma.value==="" ){
        alert("Preencha os campos vazios!!!")
        return
    }
    if(senha.value!=senhaConfirma.value){
        alert("As senhas não conferem!!!")
    }   else{
        
    let db=JSON.parse(localStorage.getItem("usuarios") || "[]");
    let validacao=true;

    if(db.length !==0){
        for(let i=0;i<db.length;i++){
            if(db[i].email === email.value){
                validacao=false;
                break;
            }
        }
   
    }
    if(validacao===true){
        let usuario={
            id:db.length + 1,
            email:email.value,
            senha:senha.value,
        
        };
    
        db.push(usuario)
        localStorage.setItem("usuarios", JSON.stringify(db))
        window.open("index.html", "_self");
    }else{
        alert("Esse email já esta sendo utilizado!")
    }

    
    
    
}}


