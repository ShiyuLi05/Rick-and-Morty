import { useForm } from "react-hook-form";

function AddForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({
    defaultValues: {
        firstName:"",
        lastName:""
    },
    mode: "onBlur"
  });

  return (
    <div className="addForm">
      <form onSubmit={handleSubmit((data) => {
          console.log(data);
          reset();
      })}>
      <h2>Add a new character</h2>
      <input placeholder="Name" {...register("name", {required: 'This is required'})}/>
      <p>{errors.name?.message}</p>

      <select {...register("gender", {required: "Please select a gender"})}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select>

      <input
          placeholder="species"
          type="text"
          {...register("species", {required:"This is required"})}
      />
      <p>{errors.species?.message}</p>

      <input placeholder="status" type="text" {...register("status", {required: "This is required"})} />
      <p>{errors.status?.message}</p>

      <input type="submit" disabled={!isValid} value="Submit" />
      </form>
    </div>
  );
}

export default AddForm