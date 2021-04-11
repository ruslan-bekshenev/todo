class Todo {
  todo = []
  idName = 'item'

  constructor() {
    this.todo = [
      {
        id: 0,
        value: 'Покушать',
        isChecked: false
      },
      {
        id: 1,
        value: 'Сходить в кино',
        isChecked: false
      },
      {
        id: 2,
        value: 'Погладить кота',
        isChecked: false
      },
      {
        id: 3,
        value: 'Поиграть в кс',
        isChecked: false
      },
      {
        id: 4,
        value: 'Посмотреть кино',
        isChecked: false
      },
      {
        id: 5,
        value: 'Напомнить себе какой лук не вкусный',
        isChecked: true
      },
    ]
  }
  todoNode(item) {
    return `
      <li class="item">
        <input type="checkbox" id="${this.idName}_${item.id}" ${item.isChecked ? 'checked="checked"' : ''} />
        <label for="${this.idName}_${item.id}">
          ${item.value}
        </label>
      </li>
    `
  }
  init() {
    this.todo.forEach((item) => {
      list.innerHTML += this.todoNode(item)
    })
    this.todo.forEach((item) => {
      document.getElementById(`${this.idName}_${item.id}`).addEventListener('change', () =>this.itemCheckedChange(item.id))
    })

  }
  itemCheckedChange(id) {
    const current = this.todo.find(item => item.id === id)
    if (current) {
      current.isChecked = !current?.isChecked
      console.log(current)
    }

  }
  itemValueChange(name) {
    const current = this.todo.find(item => item.id === id)
    current.value = name
  }
}

const toDo = new Todo()
toDo.init()
