HTMLFormElement.prototype.save = function (config) {

    let form = this;

    form.addEventListener('submit', e => {

      e.preventDefault(); //Cancelar o envio padrao de atualiar a pagina e mandar o post
      let formData = new FormData(form);

      //envio da solicitaçao via ajax para o servidor
      fetch(form.action, { 
        method: form.method,
        body: formData
      })
      .then(response => response.json())
      .then(json => {

        if ( json.error){

          if (typeof config.failure === 'function') config.failure(json.error);

        } else {
         
          if (typeof config.success === 'function') config.success(json);
        }
                
      }).catch(err => {

    });

  });  
 
}