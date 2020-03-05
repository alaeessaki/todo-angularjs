app.controller("todoController", function (todoService, $scope) {

    $scope.id = todoService.getLastId();
    $scope.selectedTodo;
    $scope.selectedId;

    $scope.loadData = function(){
        todoService.getTodos().then(function (response) {
        $scope.todos = response.data;
        })
    }
    $scope.add = function (title) {
        todoService.addTodo(title, $scope.id).then(
            function (response) {
            },
            function (error) {
                console.error(error);
            })
    }
    $scope.delete = function (id) {
        todoService.deleteTodo(id).then(
            function (response) {
            },
            function (error) {
                console.error(error);
            })
    }
    $scope.inc = function () {
        $scope.id++;
    }
    $scope.changeState = function (title, id) {
        $scope.selectedId = id;
        $scope.selectedTodo = title;
        if ($scope.state == 'add') {
            $scope.state = 'update';
        } else {
            $scope.state = 'add'
        }
    }

    $scope.update = function (title, id) {
        todoService.updateTodo(title, id).then(
        function (response) {
        },
        function (error) {
            console.error(error);
        })
    }
})