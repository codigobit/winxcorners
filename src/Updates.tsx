import React, {useEffect, useState, Component} from 'react'
import {Collapse} from 'element-react'
import * as mydata from './changelog.json'

class Item extends Component<any> {
  render() {
    return (<li>
      { this.props.name }
      { this.props.children}
    </li>)
  }
}

class List extends Component<any> {
  constructor(props: any) {
    super(props)
  }

  list(data: any) {
    const children = (items: any, title: any) => {
      if (items) {
        return <Collapse><Collapse.Item title={ new Date(title).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'}) }><ul>{ this.list(items) }</ul></Collapse.Item></Collapse>
      }
    }

    return data.map((node: any) => {
      return <Item key={ node.sha } name={ node.message }>
        { children(node.changes, node.date) }
      </Item>
    })
  }

  render() {
    return <React.Fragment>
      { this.list(this.props.data) }
    </React.Fragment>
  }
}

function Updates() {

  const [result, setResult] = useState([])
  const changelog = mydata.default.versions
  const activeName = '1'

  return (
    <div>
      <h3>Changelog</h3>
      <List data={changelog} />
    </div>
  )
}

export default Updates
