const taskInput = document.querySelector("#input");
const inputButton = document.querySelector("#input-button");
const taskList = document.querySelector("#task-list");

inputButton.addEventListener("click", addTask);
//evento per rimuovere l'item dalla lista
taskList.addEventListener('click', removeTask);

/* Quando si preme un tasto viene passato come parametro un oggetto che per convenzione JS chiameremo <e>
E' possibile debugare questo oggetto tramite console.log(e)
Una cosa che si fa spesso è inserire <e.preventDefault()> poichè previene comportamenti strani al click*/
function addTask(e){
    if (taskInput.value != ""){

        /* Creo un elemento <li> tramite JS */
        const li = document.createElement("li");
        //Assegno una classe al <li>
        li.className = 'task';

        //appendChild() Permette di mettere dentro qualcosa al <li> tramite gli argomenti
        //document.createTextNode() Permette di creare una stringa di testo dal valore preso come parametro
        li.appendChild(document.createTextNode(taskInput.value) );

        //Creo il link per cancellare l'elemento todo
        const link = document.createElement('a');
        link.className = 'delete-todo';
        link.innerHTML = '<button class="btn btn-red">cancella</button>';

        //Adesso metto il link per eliminare il todo all'interno dell'elemento li
        li.appendChild(link);

        //Adesso devo mettere <li> dentro <ul>
        taskList.appendChild(li);
    }


    //Pulisco la stringa
    taskInput.value = "";


    /** Analizzare meglio <e.preventDefault() */
    e.preventDefault();
}

function removeTask(e){
    //parentElement risale all'elemento padre
    if (e.target.parentElement.classList.contains('delete-todo')){
        e.target.parentElement.parentElement.remove();
    };
}
