let usuarios = [
    {
        nome: "du",
        senha: "123456"
    },
    {
        nome: "edu",
        senha: "123456"
    },
    {
        nome: "dudu",
        senha: "123456"
    },
    {
        nome: "joao",
        senha: "123456"
    },
    {
        nome: "pablo",
        senha: "123456"
    },
    {
        nome: "adriano",
        senha: "123456"
    },
    {
        nome: "rafael",
        senha: "123456"
    },
    {
        nome: "victor",
        senha: "123456"
    },
    {
        nome: "luis",
        senha: "123456"
    },
    {
        nome: "romario",
        senha: "123456"
    },
    {
        nome: "robert",
        senha: "123456"
    },
    {
        nome: "zeze",
        senha: "123456"
    },
    {
        nome: "ana",
        senha: "123456"
    },
    {
        nome: "luiza",
        senha: "123456"
    },
    {
        nome: "luis",
        senha: "123456"
    },
]


const usuarionavegador = localStorage.getItem("usuariologado")


if (usuarionavegador != undefined) { // tudo relacionado a pg2

    const ola = document.querySelector(".ola")
    ola.innerHTML += ` ${usuarionavegador}`

    window.addEventListener("beforeunload", function () {
        localStorage.removeItem("usuariologado")
    })


    ///////////////////////////////////////////////listar usuário//////////////////////////////////////////////////////////////////

    let mostrar = document.querySelector("#mostrar") // pegar todas características do botão mostrar
    mostrar.addEventListener("click", mostrarnome)




    function mostrarnome() {
        const divvazia = document.querySelector('#resposta')
        divvazia.innerHTML = ""
        for (let index = 0; index < usuarios.length; index++) {

            divvazia.innerHTML += `<p>Usuários: ${usuarios[index].nome} </p>`

        }
    }




    ///////////////////////////////////////////////função limpar tela//////////////////////////////////////////////////////////////////


    let apagar = document.querySelector("#apagar") // pegar todas características do botão 
    apagar.addEventListener("click", apagartela)


    function apagartela() {

        const resposta = document.querySelector("#resposta")
        resposta.innerHTML = ``


    }




    // funçao sair

    let sair = document.querySelector("#sair") // pegar todas características do botão 
    sair.addEventListener("click", sairpag)


    function sairpag() {

        window.history.back();  //ou --> location.assign('./login2.html')
    }





    //função criar

    let criar = document.querySelector("#criar") // pegar todas características do botão 
    criar.addEventListener("click", criaruser)



    function criaruser() {
        const resposta = document.querySelector('#resposta')
        resposta.innerHTML = "";
        resposta.innerHTML += `<form>
    <label> Novo usuário: </label><br>
    <input type="text" class="inputuser"><br>
    <label> Nova senha : </label><br>
    <input type="password" class="inputsenha"><br>
    <label> Confirmar senha : </label><br>
    <input type="password" class="inputsenha1"><br>
    <input type="button" value="criar" class="botao" id="adduser">
    </form>`
        const adduser = document.querySelector("#adduser");
        adduser.addEventListener("click", adicionar)
    }



    function adicionar() {

        let repetida = 0
        let novouser = {
            nome: document.querySelector('.inputuser').value,
            senha: document.querySelector('input.inputsenha').value
        }
        let confirmasenha = document.querySelector('input.inputsenha1').value

        if (novouser.senha == confirmasenha) {




            for (let index = 0; index < usuarios.length; index++) {
                if (novouser.nome == usuarios[index].nome) {
                    repetida = 1
                    index = usuarios.length
                }
            }

            if (repetida == 0) {
                usuarios.push(novouser)
                mostrarnome()


            } else {

                alert('Usuário já cadastrado')
                criaruser()
            }

        } else {
            alert('senha não está igual')
            criaruser()

        }






    }//fechmento da função



    let deletar = document.querySelector("#deletar") // pegar todas características do botão deletar
    deletar.addEventListener("click", deletaruser)

    function deletaruser() {
        const resposta = document.querySelector('#resposta')
        resposta.innerHTML = "";
        resposta.innerHTML += "Deletar Usuário"
        for (let index = 0; index < usuarios.length; index++) {
            resposta.innerHTML += `<div>

    <input type="checkbox" id="${index}"><label>${usuarios[index].nome} </label>

</div>`


        }
        resposta.innerHTML += `<input type="button" value="deletar" id="deletaruser2">`

        const deletaruser2 = document.querySelector("#deletaruser2");
        deletaruser2.addEventListener("click", deletar2)

    }



    function deletar2() {
        let userdeletado = [""]

        for (let index = 0; index < usuarios.length; index++) {
            let checkbox = document.getElementById(`${index}`)
            if (checkbox.checked == true) {

                userdeletado[index] = 1
            } else {
                userdeletado[index] = 0
            }
        }

        for (let index = userdeletado.length - 1; index >= 0; index--) {
            if (userdeletado[index] == 1) {
                usuarios.splice(index, 1)
            }
        }
        mostrarnome()

    }//cabou






    let atualizar = document.querySelector("#atualizar") // pegar todas características do botão deletar
    atualizar.addEventListener("click", atualizaruser1)

    function atualizaruser1() {

        let resposta = document.querySelector(`#resposta`);
        resposta.innerHTML = "";
        resposta.innerHTML += "Trocar Usuário <br><br>"
        resposta.innerHTML += `<form>
    <label> Nome usuário: </label><br>
    <input type="text" class="inputuser"><br>
    <label> Senha atual: </label><br>
    <input type="password" class="inputsenha"><br>
    <label> Novo usuário: </label><br>
    <input type="text" class="inputuser1"><br>
    <label> Nova senha: </label><br>
    <input type="password" class="inputsenha1"><br>
    <label> Confirma senha: </label><br>
    <input type="text" class="inputsenha2"><br>
    <input type="button" value="trocar" class="botao" id="trocarsenha"
    </form>`
        const inputtrocarsenha1 = document.querySelector("#trocarsenha");
        inputtrocarsenha1.addEventListener("click", atualizarusuarios2)
    }
    function atualizarusuarios2() {

        let repetida = 0
        let errosenha = 1
        let indice = 0
        let usuarioantigo = {
            nome: document.querySelector('.inputuser').value,
            senha: document.querySelector('input.inputsenha').value
        }
        let novouser = {
            nome: document.querySelector('.inputuser1').value,
            senha: document.querySelector('input.inputsenha1').value
        }
        let confirmasenha = document.querySelector('input.inputsenha2').value

        if (novouser.senha == confirmasenha) {




            for (let index = 0; index < usuarios.length; index++) {
                if (novouser.nome == usuarios[index].nome) {
                    if (usuarioantigo.nome != usuarios[index].nome) {
                        repetida = 1
                        index = usuarios.length
                    }
                }


            }

            if (repetida == 0) {
                for (let index = 0; index < usuarios.length; index++) {
                    if (usuarios[index].nome == usuarioantigo.nome) {
                        if (usuarios[index].senha == usuarioantigo.senha) {

                            errosenha = 0
                            indice = index
                            index = usuarios.length
                        }

                    }

                }

                if (errosenha == 0) {
                    let resposta = document.querySelector(`#resposta`);
                    usuarios[indice] = novouser
                    alert("Dados atualizados")
                    mostrarnome()
                } else {
                    alert("Login incorreto, senhas incorretas")
                    atualizaruser1()
                }

            } else {

                alert('Login incorreto favor verificar os dados, usuário incorreto')
                atualizaruser1()
            }

        } else {
            alert('senha não está igual')
            atualizaruser1()

        }



    }


    const testar = document.querySelector("#testar");
    testar.addEventListener("click", testaruser)

    function testaruser(){
        const resposta = document.querySelector('#resposta')
        resposta.innerHTML = "";
        resposta.innerHTML += `<form>
    <label> Digite usuário: </label><br>
    <input type="text" class="inputuser"><br>
    <label> Digite senha : </label><br>
    <input type="password" class="inputsenha"><br>
    <input type="button" value="testar" class="botao" id="testeuser">
    </form>`
        const testeuser1 = document.querySelector("#testeuser");
        testeuser1.addEventListener("click", testaruser1)

    }
    function testaruser1(){
        let user = document.querySelector(".inputuser").value
        let senha = document.querySelector(".inputsenha").value

        let cont = 0



        for (let a = 0; a < usuarios.length; a++) {

            if (user == usuarios[a].nome && senha == usuarios[a].senha) {
                
               alert("Validação ok")
                a = usuarios.length
                cont = 1
            }
        }
        if (cont == 0) {
            alert("acesso negado")

        }


    }






} else { // tudo relacionado a pag1
    const login1 = document.querySelector("input#loginbotao")
    login1.addEventListener("click", login)

    function login() {

        let nome = document.querySelector("input#usuario").value
        let pass = document.querySelector("input#senha").value

        let cont = 0



        for (let a = 0; a < usuarios.length; a++) {

            if (nome == usuarios[a].nome && pass == usuarios[a].senha) {
                localStorage.setItem("usuariologado", usuarios[a].nome)
                location.assign('./login2.html')
                a = usuarios.length
                cont = 1
            }
        }
        if (cont == 0) {
            alert("acesso negado")

        }
    }
}


