import React from 'react';
import { TodoIcon } from './';

function CompleteIcon2({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? 'green' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon2 };