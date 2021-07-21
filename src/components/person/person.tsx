import React from 'react';
import { nanoid } from 'nanoid';
import { connect } from 'react-redux';
import { createAddPersonAction } from '../../redux/actions/person';

class Person extends React.Component<any, any> {

  ageNode;
  nameNode;

  addPerson = () => {
    const name = this.nameNode.value;
    const age = this.ageNode.value;
    const personObj = {id: nanoid(), name, age};
    this.props.addPerson(personObj);
    this.nameNode.value = '';
    this.ageNode.value = '';
  }

  render() {
    return (
      <div>
        <h2>我是Person组件, 上方组件求和为 {this.props.count}</h2>
        <input ref={c => this.nameNode = c} type="text" />&nbsp;
        <input ref={c => this.ageNode = c} type="text" />&nbsp;
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.person.map((p) => {
              return <li key={p.id}>{p.name}--{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect<{}, {}, {}, any>(
  state => ({
    person: state.personStore,
    count: state.countStore
  }),
  {
    addPerson: createAddPersonAction
  }
)(Person);
