import { useForm } from "react-hook-form";

interface Props {
  categories: string[];
  onSubmit: (data: FormData) => void;
}

interface FormData {
  amount: number;
  category: "Entertainment" | "Utilites" | "Groceries";
  description: string;
  id: number;
}

const ExpenseForm = ({ categories, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
      className='mb-5'
    >
      <div className='mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          id='description'
          type='text'
          className='form-control'
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p className='text-danger'>Description is required</p>
        )}
      </div>

      <div className='mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register("amount", { required: true, valueAsNumber: true })}
          id='amount'
          type='number'
          className='form-control'
        />
        {errors.amount && <p className='text-danger'>Amount is required</p>}
      </div>

      <div className='mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select
          id='category'
          className='form-select'
          {...register("category", { required: true })}
        >
          <option></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p className='text-danger'>Category is required</p>}
      </div>
      <button type='submit' className='btn btn-primary mt-3'>
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
