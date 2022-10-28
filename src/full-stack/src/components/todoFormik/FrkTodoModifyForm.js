import React from "react";

function FrkTodoModifyForm(props) {
  return (
    <form>
      <div className="form-group row required">
        <label
          htmlFor="firstName"
          className="col-sm-2 col-form-label control-label"
        >
          First Name
        </label>
        <div className="col-sm-10">
          <input
            id="firstName"
            type="text"
            name="firstName"
            onChange={props.onChange}
            className="form-control"
            value={props.todo.firstName || ""}
            required
          />
          {props.errors.lastName && (
            <small className='text-danger'>{props.errors.firstName}</small>
          )}
        </div>
      </div>
      <div className="form-group row required">
        <label
          htmlFor="lastName"
          className="col-sm-2 col-form-label control-label"
        >
          Last Name
        </label>
        <div className="col-sm-10">
          <input
            id="lastName"
            type="text"
            name="lastName"
            onChange={props.onChange}
            className="form-control"
            value={props.todo.lastName || ""}
            required
          />
          {props.errors.lastName && (
            <small className='text-danger'>{props.errors.lastName}</small>
          )}
        </div>
      </div>
      <div className="form-group row required">
        <label htmlFor="role" className="col-sm-2 col-form-label control-label">
          Role
        </label>
        <div className="col-sm-10">
          <input
            id="role"
            type="text"
            name="partitionKey"
            onChange={props.onChange}
            className="form-control"
            value={props.todo.partitionKey || ""}
            required
          />
          {props.errors.lastName && (
            <small className='text-danger'>{props.errors.role}</small>
          )}
        </div>
      </div>
      <div>
        <input
          type='button'
          value='Submit'
          className='btn btn-primary'
          onClick={props.onSubmit}
        />
        &nbsp;
        <input
          type='button'
          value='Delete'
          className='btn btn-primary'
          onClick={props.onDelete}
          disabled={props.todo.rowKey === null}
        />
      </div>
    </form>
  );
}

export default FrkTodoModifyForm;
