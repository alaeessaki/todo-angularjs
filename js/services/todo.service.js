app.service("todoService", function($http){
    this.getLastId = function(){
        $http.get("http://localhost:3000/todos").then(
            function(response){
                return response.data.length;
            }
        );
    }
    this.getTodos = function(){
       return $http.get("http://localhost:3000/todos");
    }   
    this.addTodo = function(title, id){
        let todo = {
            userId: id,
            id: id,
            title: title,
            completed: false
        }
        return $http.post("http://localhost:3000/todos", todo)
    }
    this.deleteTodo = function(id){
        return $http.delete("http://localhost:3000/todos/"+id);
    }
    this.updateTodo = function(title, id){
        let todo = {
            userId: id,
            id: id,
            title: title,
            completed: false
        }
        return $http.put("http://localhost:3000/todos/"+id, todo);
    }
})