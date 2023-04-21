import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todos: Todo[]
  selectedTodo: Todo | null,
  setSelectedTodo: (todo: Todo) => void,
};

export const TodoList: React.FC<Props> = ({
  todos, selectedTodo, setSelectedTodo,
}) => {
  return (
    <table className="table is-narrow is-fullwidth">
      <thead>
        <tr>
          <th>#</th>
          <th>
            <span className="icon">
              <i className="fas fa-check" />
            </span>
          </th>
          <th>Title</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => {
          const { id, title, completed } = todo;

          return (
            <tr
              data-cy="todo"
              key={id}
              className={classNames({
                'has-background-info-light': selectedTodo?.id === id,
              })}
            >
              <td className="is-vcentered">{id}</td>
              <td className="is-vcentered">
                {completed && (
                  <span className="icon" data-cy="iconCompleted">
                    <i className="fas fa-check" />
                  </span>
                )}
              </td>
              <td className="is-vcentered is-expanded">
                <p className={classNames(
                  completed ? 'has-text-success' : 'has-text-danger',
                )}
                >
                  {title}
                </p>
              </td>
              <td className="has-text-right is-vcentered">
                <button
                  data-cy="selectButton"
                  className="button"
                  type="button"
                  onClick={() => setSelectedTodo(todo)}
                >
                  <span className="icon">
                    <i className={classNames(
                      'far',
                      (selectedTodo?.id === id
                        ? 'fa-eye-slash'
                        : 'fa-eye'
                      ),
                    )}
                    />
                  </span>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};