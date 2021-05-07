// Adotando querySelector por ser uma boa prática de programação. 
/* Document.querySelector() ===> Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores. Fonte:  https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics e cursoemvideo - Gustavo Guanabara */

const input = document.querySelector('#todoInput'); // nó do input
const botao = document.querySelector('#todoSubmit'); //nó da botao
const listaTarefas = document.querySelector('#todoLista'); //nó da ul
const formulario = document.querySelector('#todoForm'); //nó do formulário
const botaoLimpar = document.querySelector('#todoRemoverTodos'); //nó do botão limpar 
const botaoMarcarTodas = document.querySelector('#todoMarcarTodos'); // nó do botão marcar todos

// criar evento botão para adicionar elemento
botao.addEventListener('click', (event) => {
    event.preventDefault(); /*previne que o formulário seja enviado ao clicar, espera processar o que precisa da função */
    const elementoLista = document.createElement('li');
    const textoElemento = document.createElement('p');
    textoElemento.classList.add("elementoLista");
    const deletaElemento = document.createElement('span');

    // atribuímos o valor do input ao <p> criado a partir do clique no botão
    textoElemento.innerText = input.value;
    deletaElemento.innerText = '🗑️';
    // para excluir itens da lista, precisamos criar um elemento que represente isso, e colocar evento para remover o nó do dom

    //verificação: input inserido é vazio ou composto apenas por espaços:
    if (textoElemento.innerText.trim() === '') {
        document.querySelector('#alertaErro').innerHTML = 'Não foi possível atualizar: Por favor, digite  sua tarefa!'
    } else {
        //pegamos o nó mãe , e acrescentamos o elemento filho com o append
        listaTarefas.appendChild(elementoLista);
        elementoLista.appendChild(textoElemento);
        elementoLista.appendChild(deletaElemento);
        document.querySelector('#alertaErro').innerHTML = '';
        // pegamos o nó do formulário e utilizamos um método para limpar o input
        formulario.reset();
    }

    ////função que checa que adiciona uma classe a cada p de cada li e, a partir disso, altera o estilo do p
    textoElemento.addEventListener("click", () => {
        textoElemento.classList.add("checked");
    });

    //função de deletar elemento a li desejada
    deletaElemento.addEventListener("click", () => {
        listaTarefas.removeChild(elementoLista);
        // outra de forma de resolver >>> elementoLista.remove();
    });


    // Função de marcar todo p 
    botaoMarcarTodas.addEventListener('click', () => {
        if (botaoMarcarTodas.innerText === 'Marcar todos') {
            const todosParagrafos = document.querySelectorAll('.elementoLista');
            /*    console.log(todosParagrafos, "vai retornar todos os <p> encontrados"); */

            todosParagrafos.forEach(item => {
                item.classList.add("checked");
            });
            botaoMarcarTodas.innerText = 'Desmarcar todos';
        } else {
            const todosParagrafos = document.querySelectorAll('.elementoLista');
            todosParagrafos.forEach(item => {
                item.classList.remove("checked");
            });
            botaoMarcarTodas.innerText = 'Marcar todos';
        }

    });

    // função de limpar TUDO
    botaoLimpar.addEventListener('click', () => {
        //listaTarefas é <ul>
        listaTarefas.innerHTML = '';
    });

 // Desafio extra
 /* No html linhas 24 à 26 
/* No javaScript >  linhas 26 e 32 */

});