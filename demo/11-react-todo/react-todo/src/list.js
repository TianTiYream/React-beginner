// 待办列表组件
import React from 'react'
import Item from './item'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      itemValue: '',
      list: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChild = this.handleChild.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }
  // 输入待办后点击确认
  handleClick(e) {
    let data = this.state.itemValue
    if (data) {
      let list = this.state.list
      list.push({item: data, checked: false})
      this.setState({
        list: list
      })
    }
    e.preventDefault() // 阻止form默认事件
    this.setState({
      itemValue: ''
    })
  }
  // 输入待办时表单事件
  handleChange(e) {
    this.setState({
      itemValue: e.target.value
    })
  }
  // 勾选表示已完成
  handleChild(i) {
    const list = this.state.list
    list[i].checked = !list[i].checked
    this.setState({
      list: list
    })
  }
  // 清空所有已完成
  handleDelete() {
    const completeList = this.state.list.filter(item => {
      return !item.checked
    })
    this.setState({
      list: completeList
    })
  }
  render() {
    const list = this.state.list
    const listDom = list.map((item,index) => 
      <Item 
        checked={item.checked} 
        value={item.item} 
        key={index.toString()}
        handleChild={() => this.handleChild(index)} />
    )
    return (
      <div className='list'>
        <h3 className='center'>This is a ToDo-List</h3>
        <form onSubmit={this.handleClick}>
          <input 
            type="text" 
            className='text-box' 
            placeholder="请输入今日待办"
            value={this.state.itemValue}
            onChange={this.handleChange} />
          <input type="submit" value="确定" />
        </form>
        {listDom}
        <div>
          <p className='delete' onClick={this.handleDelete}>清除已完成</p>
        </div>
      </div>
    )
  }
}

export default List