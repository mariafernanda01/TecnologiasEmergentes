
const urlbase = 'http://localhost:5000/'
const qP = urlbase + 'api/qP';
const q2 = urlbase + 'api/q2';
const qautores = urlbase + 'api/autores';
const qresumen = urlbase + 'api/conteo';
const qlenguajes = urlbase + 'api/lenguages';


$(document).ready(function(){
	tabla_publicaciones = document.getElementById("tabla_publicaciones");
	tabla_conteo = document.getElementById("tabla_conteo");
	tabla_autores = document.getElementById("tabla_autores");
	tabla_resumen= document.getElementById("tabla_resumen");
	tabla_lenguajes= document.getElementById("tabla_lenguajes");
	
	
	
});


function q_P(){
	fetch(qP)
    .then(res => res.json())
    .then((datos) => {
       console.log(datos);
       cont =0;
       tabla_publicaciones.innerHTML='';
       var tipo = document.getElementById('tipo').value;
		for(let valor of datos){
			if(valor.tipo == tipo){
				cont = cont+1;
				tabla_publicaciones.innerHTML += `
		            <tr>
		                <th scope="row">`+ cont +` </th>
		                  <td>${valor.titulo}</td> 
		           
		                <td>${valor.tipo}</td>
		                     <td>${valor.recurso}</td>
		               
		            </tr>
		            `
			}
		}
    }).catch(err => console.error(err));
}

function q_2(){
	fetch(q2)
    .then(res => res.json())
    .then((datos) => {
       console.log(datos);
       cont =0;
       tabla_conteo.innerHTML='';
		for(let valor of datos){
	
				cont = cont+1;
				tabla_conteo.innerHTML += `
		            <tr>
		                <th scope="row">`+ cont +` </th>
		                <td>${valor.tipo}</td>
		                <td>${valor.cantidad}</td>  
		            </tr>
		            `

		}
    }).catch(err => console.error(err));
}


function autores(){
	fetch(qautores)
    .then(res => res.json())
    .then((datos) => {
       console.log(datos);
       cont =0;
       cadena_autores='';
       cont_autores=0;
       tabla_autores.innerHTML='';
       
		for(let valor of datos){
			autores=[];
				cadena_autores='';
				cont_autores=0;
	
				cont = cont+1;
				
				
				if(valor.autor1!=null){
					cadena_autores= cadena_autores+valor.autor1;
					cont_autores=cont_autores+1;
					autores.push(valor.autor1);
					
					
				}
				if(valor.autor2!=null){
					cadena_autores= cadena_autores+";"+valor.autor2;
					cont_autores=cont_autores+1;
					autores.push(valor.autor2);
									
				}
				if(valor.autor3!=null){
					cadena_autores= cadena_autores+";"+valor.autor3;
					cont_autores=cont_autores+1;
					autores.push(valor.autor3);
			
				}
				if(valor.autor4!=null){
					cadena_autores= cadena_autores+";"+valor.autor4;
					cont_autores=cont_autores+1;
					autores.push(valor.autor4);
				}
				if(valor.autor5!=null){
					cadena_autores= cadena_autores+";"+valor.autor5;
					cont_autores=cont_autores+1;
					autores.push(valor.autor5);
				}
				if(valor.autor6!=null){
					cadena_autores= cadena_autores+";"+valor.autor6;
					cont_autores=cont_autores+1;
					autores.push(valor.autor6);
				}
				if(valor.autor7!=null){
					cadena_autores= cadena_autores+";"+valor.autor7;
					cont_autores=cont_autores+1;
					autores.push(valor.autor7);
				}
				if(valor.autor8!=null){
					cadena_autores= cadena_autores+";"+valor.autor8;
					cont_autores=cont_autores+1;
					autores.push(valor.autor8);
				}
				if(valor.autor9!=null){
					cadena_autores= cadena_autores+";"+valor.autor9;
					cont_autores=cont_autores+1;
					autores.push(valor.autor9);
				}
				if(valor.autor10!=null){
					cadena_autores= cadena_autores+";"+valor.autor10;
					cont_autores=cont_autores+1;
					autores.push(valor.autor10);
				}
				if(valor.autor11!=null){
					cadena_autores= cadena_autores+";"+valor.autor11;
					cont_autores=cont_autores+1;
					autores.push(valor.autor11);
				}
				if(valor.autor12!=null){
					cadena_autores= cadena_autores+";"+valor.autor12;
					cont_autores=cont_autores+1;
					autores.push(valor.autor12);
				}
				if(valor.autor13!=null){
					cadena_autores= cadena_autores+";"+valor.autor13;
					cont_autores=cont_autores+1;
					autores.push(valor.autor13);
				}
				if(valor.autor14!=null){
					cadena_autores= cadena_autores+";"+valor.autor14;
					cont_autores=cont_autores+1;
					autores.push(valor.autor14);
				}
				if(valor.autor15!=null){
					cadena_autores= cadena_autores+";"+valor.autor15;
					cont_autores=cont_autores+1;
					autores.push(valor.autor15);
				}
				if(valor.autor16!=null){
					cadena_autores= cadena_autores+";"+valor.autor16;
					cont_autores=cont_autores+1;
					autores.push(valor.autor16);
				}
				if(valor.autor17!=null){
					cadena_autores= cadena_autores+";"+valor.autor17;
					cont_autores=cont_autores+1;
					autores.push(valor.autor17);
				}
				if(valor.autor18!=null){
					cadena_autores= cadena_autores+";"+valor.autor18;
					cont_autores=cont_autores+1;
					autores.push(valor.autor18);
				}
				if(valor.autor19!=null){
					cadena_autores= cadena_autores+";"+valor.autor19;
					cont_autores=cont_autores+1;
					autores.push(valor.autor19);
				}
				if(valor.autor20!=null){
					cadena_autores= cadena_autores+";"+valor.autor20;
					cont_autores=cont_autores+1;
					autores.push(valor.autor20);
				}
				if(valor.autor21!=null){
					cadena_autores= cadena_autores+";"+valor.autor21;
					cont_autores=cont_autores+1;
					autores.push(valor.autor21);
				}
				if(valor.autor22!=null){
					cadena_autores= cadena_autores+";"+valor.autor22;
					cont_autores=cont_autores+1;
					autores.push(valor.autor22);
				}
				if(valor.autor23!=null){
					cadena_autores= cadena_autores+";"+valor.autor23;
					cont_autores=cont_autores+1;
					autores.push(valor.autor23);
									}
				if(valor.autor24!=null){
					cadena_autores= cadena_autores+";"+valor.autor24;
					cont_autores=cont_autores+1;
					autores.push(valor.autor24);
				}
				if(valor.autor25!=null){
					cadena_autores= cadena_autores+";"+valor.autor25;
					cont_autores=cont_autores+1;
					autores.push(valor.autor25);
				}
				if(valor.autor26!=null){
					cadena_autores= cadena_autores+";"+valor.autor26;
					cont_autores=cont_autores+1;
					autores.push(valor.autor26);
				}
				if(valor.autor27!=null){
					cadena_autores= cadena_autores+";"+valor.autor27;
					cont_autores=cont_autores+1;
					autores.push(valor.autor27);
				}
				if(valor.autor28!=null){
					cadena_autores= cadena_autores+";"+valor.autor28;
					cont_autores=cont_autores+1;
					autores.push(valor.autor28);
				}
				if(valor.autor29!=null){
					cadena_autores= cadena_autores+";"+valor.autor29;
					cont_autores=cont_autores+1;
					autores.push(valor.autor29);
				}
				if(valor.autor30!=null){
					cadena_autores= cadena_autores+";"+valor.autor30;
					cont_autores=cont_autores+1;
					autores.push(valor.autor30);
				}
				if(valor.autor31!=null){
					cadena_autores= cadena_autores+";"+valor.autor31;
					cont_autores=cont_autores+1;
					autores.push(valor.autor31);
				}
				if(valor.autor32!=null){
					cadena_autores= cadena_autores+";"+valor.autor32;
					cont_autores=cont_autores+1;
					autores.push(valor.autor32);
				}
				if(valor.autor33!=null){
					cadena_autores= cadena_autores+";"+valor.autor33;
					cont_autores=cont_autores+1;
					autores.push(valor.autor33);
				}
				if(valor.autor34!=null){
					cadena_autores= cadena_autores+";"+valor.autor34;
					cont_autores=cont_autores+1;
					autores.push(valor.autor34);
				}
				if(valor.autor35!=null){
					cadena_autores= cadena_autores+";"+valor.autor35;
					cont_autores=cont_autores+1;
					autores.push(valor.autor35);
					
				}
				
				autores.forEach(function(autor, index, array) {
  		tabla_autores.innerHTML += `
		             <tr>
		                <th scope="row">`+ cont +` </th>
		                <td>${valor.recurso}</td>
		                <td>${valor.titulo}</td>  
		                    <td>`+ cont_autores +`</td> 
		             <td>`+ autor +`</td>  
		             
		            </tr>
		            
		            `})
				
		
		            
		            

		}
    }).catch(err => console.error(err));
}


function q_resumen(){
	fetch(qresumen)
    .then(res => res.json())
    .then((datos) => {
       console.log(datos);
       cont =0;
       tabla_resumen.innerHTML='';
		for(let valor of datos){
		
				cont = cont+1;
				tabla_resumen.innerHTML += `
		            <tr>
		                <th scope="row">`+ cont +` </th>
		                <td>${valor.count_Recursos}</td>
		               
		                <td>${valor.count_language}</td>  
		                 <td>${valor.count_Author}</td>
		            </tr>
		            `
			
		}
    }).catch(err => console.error(err));
}



function q_lenguajes(){
	fetch(qlenguajes)
    .then(res => res.json())
    .then((datos) => {
       console.log(datos);
       cont =0;
       tabla_lenguajes.innerHTML='';
		for(let valor of datos){
		
				cont = cont+1;
				tabla_lenguajes.innerHTML += `
		            <tr>
		                <th scope="row">`+ cont +` </th>
		                <td>${valor.lenguaje}</td>
		               
		                <td>${valor.cantidad}</td>  
		         
		            </tr>
		            `
			
		}
    }).catch(err => console.error(err));
}




