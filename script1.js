class Produto{


    constructor(){
    this.id=1;
    this.arrayProdutos = []
    }

    salvar(){
       let produto = this.lerDados();

       if(this.validaCampos(produto)); {
          this.adiciona(produto);

          this.listaTabela();
          this.cancelar();
       }

      
    }

    lerDados(){
      let produto ={}
      produto.id=this.id;
      produto.nomeProduto=document.getElementById('produto').value;
      produto.valor=document.getElementById('valor').value;
       
      return produto;
    }

    adiciona(produto){
     this.arrayProdutos.push(produto);
     this.id++;

    }

validaCampos(produto){
   let msg = '';

   if(produto.nomeProduto == ''){
     msg += 'Uepa informe o nome do produto\n'
   }


   if(produto.valor == ''){
    msg += 'Uepa informe o valor do produto\n'
  }

   if (msg != ''){
       alert(msg)
       return false
   }
    return true
}

  listaTabela(){
      let tbody = document.getElementById('tbody');
      tbody.innerText = '';
      for(let i=0; i < this.arrayProdutos.length; i++){
      let tr = tbody.insertRow();

       let td_id = tr.insertCell();
       let td_nome = tr.insertCell();
       let td_valor = tr.insertCell();
       let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayProdutos[i].id;
      td_nome.innerText = this.arrayProdutos[i].nomeProduto;
      td_valor.innerText = this.arrayProdutos[i].valor;
    
     let imgEdit = document.createElement('img');
     imgEdit.src = 'img/editar.png';

     let imgDelete =  document.createElement('img');
     imgDelete.src = 'img/botao-excluir.png';

     td_acoes.appendChild(imgEdit);
     td_acoes.appendChild(imgDelete);


      }
  }


    cancelar(){
       document.getElementById('produto').value = '';
       document.getElementById('valor').value = '';
       
    }
}

var produto = new Produto();
var excluir = new Produto();