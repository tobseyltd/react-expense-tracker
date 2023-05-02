interface Props {
  categories: string[];
  onSelectFilter: (category: string) => void;
}

const ExpenseFilter = ({ categories, onSelectFilter }: Props) => {
  return (
    <select
      id='category'
      className='form-select mb-3'
      onChange={(event) => onSelectFilter(event.target.value)}
    >
      <option>Select Filter</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
