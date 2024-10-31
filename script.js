  
  const lista = document.querySelector('#lista ul');
  console.log(`Quantidade de itens na lista: ${lista.children.length}`);

  let modificarSegundoItem = () => {
    let modificar = ('Item modificado');
    list.children[1].innerHTML = modificar;
    }



  
  function adicionarItem() {
      const novoItem = document.createElement('li');
      novoItem.innerText = 'Item Criado Dinamicamente';
      lista.appendChild(novoItem);
  }



  function verSenha() {
    const input = document.querySelector('input')
    
    if(input.type === 'password') {
    input.setAttribute('type','texst')
    }else{
    input.setAttribute('type','password')
    }
    }

  
  lista.children[2].style.color = 'blue';
  lista.children[3].style.fontWeight = 'bold';

 


