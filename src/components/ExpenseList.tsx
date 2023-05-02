interface Props {
  expenses: Expenses[];
  onDelete: (id: number) => void;
}

export interface Expenses {
  amount: number;
  category: string;
  description: string;
  id: number;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  return (
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Description</th>
            <th scope='col'>Amount</th>
            <th scope='col'>Category</th>
            <th scope='col'></th>
          </tr>
        </thead>

        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <th scope='row'>{expense.description}</th>
              <th scope='row'>${expense.amount.toFixed(2)}</th>
              <th scope='row'>{expense.category}</th>
              <th scope='row'>
                <button
                  onClick={() => onDelete(expense.id)}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <th scope='row'>Total:</th>
            <th scope='row'>
              $
              {expenses
                .reduce((a, expense) => a + expense.amount, 0)
                .toFixed(2)}
            </th>
            <th scope='row'></th>
            <th scope='row'></th>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ExpenseList;
