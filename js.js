window.onload = funtion(){

    var todoList = [];
    if (localStorage.getItem('todo')!=undefined) {
        todoList = JSON.parse(localStorage.getltem('todo'));
        out();
    }
    
    document.getElementById('add').onclick = function () {
        var d = document.getElementById('in').value;
        // {todo : Кобавить хлеб, check: false}
        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todoList.length;
        todoList[i] = temp;
        console.log(todoList);
        ont();
        localStorage.setItem('todo', JSON.stringify(todoList) );
    }
    
    function ont() {
        var out='';
        for (var key in todoList){
            if (todoList[key].check == true) {
                 out += '<input type="checkbox" checked>';
            }
            else {
                out += '<input type="checkbox">';
            }
            out += todoList[key].todo + '<br>';
            
        }
        document.getElementById('out').innerHTML = out;
    }
}