class Todo {
  todo = []

  constructor() {
    this.todo = [
      {
        value: 'Покушать',
        isChecked: false
      },
      {
        value: 'Сходить в кино',
        isChecked: false
      },
      {
        value: 'Погладить кота',
        isChecked: false
      },
      {
        value: 'Поиграть в кс',
        isChecked: false
      },
      {
        value: 'Посмотреть кино',
        isChecked: false
      },
      {
        value: 'Напомнить себе какой лук не вкусный',
        isChecked: true
      },
    ]
  }

  init() {
    const list = document.getElementById('list')
    const node = (item, id) => `<li class="item">
          <input type="checkbox" id="item_${id}" ${item.isChecked && 'checked="checked"'}"/>
          <label for="item_${id}">
            ${item.value}
          </label>
        </li>`
    this.todo.forEach((item, id) => {
      list.innerHTML += node(item, id)
    })
  }
}

const toDo = new Todo()
toDo.init()
console.log(toDo.todo)
