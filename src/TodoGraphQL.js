/* src/TodoGraphQL.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './../../src/graphql/queries';
import { listTodos } from './../../src/graphql/queries';

import awsExports from './../../src/aws-exports';

Amplify.configure(awsExports);

export default function TodoGraphQL() {
    return (
      <Todo />
    );
  }

  
  class Todo extends React.Component {
    
    render() {
      return (
        <div>HELLO.. TODO's</div>
      );
    }
  }
