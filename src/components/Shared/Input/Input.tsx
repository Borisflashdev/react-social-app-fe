function Input({
  name,
  col,
  type,
  onInput
}: {
  name: string;
  col: string;
  type: string;
  onInput: any
}) {
  return (
    <div className={col}>
      <div className="d-flex flex-row align-items-center mb-4">
        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
        <div className="form-outline flex-fill mb-0">
          <input onChange={onInput} type={type} id={name} className="form-control" />
          <label className="form-label" htmlFor={name}>
            {name}
          </label>
        </div>
      </div>
    </div>
  );
}

export default Input;
