const { createApp } = Vue;

createApp({
    data() {
        return {
            
            newTodoText: '',
            todos: [
                {
                    text: "Pagare le bollette",
                    done: true,
                },
                {
                    text: "Nutrire il cane",
                    done: false,
                },
                {
                    text: "Coprare la 3090",
                    done: true
                }
            ],
            allCompleted: false,
            
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoText) {
                this.todos.push({
                    text: this.newTodoText,
                    done: true
                })
                this.newTodoText = ''
            }
        },
        toggleTodo(todo) {
            todo.done = !todo.done
            this.checkAllCompleted()
        },
        checkAllCompleted() {
            this.allCompleted = this.todos.every(todo => !todo.done)
        }
    }

}).mount("#app")