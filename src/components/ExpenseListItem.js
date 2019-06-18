import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import moment from "moment";
// import numeral from "numeral";
// {numeral(amount/100).format('$0,0,00')}
const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      ₹{amount}-{moment(createdAt).format("Do MMMM, YYYY")}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect(state => {
  return {
    expenses: state.expenses
  };
})(ExpenseListItem);
