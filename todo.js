/* eslint-disable no-undef */
const todo = () => {
  all = [];
  const add = (Item) => {
    all.push(Item);
  };
  const Complete = (index) => {
    all[index].completed = true;
  };

  let today = new Date().toLocaleDateString("en-CA");
  // let today = new Date().toISOString().split("T")[0];

  const over_due = () => {
    return all.filter((todo) => {
      return todo.dueDate < today;
    });
  };

  const due_Today = () => {
    return all.filter((todo) => {
      return todo.dueDate === today;
    });
  };

  const due_Later = () => {
    return all.filter((todo) => {
      return todo.dueDate > today;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == today ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    Complete,
    over_due,
    due_Today,
    due_Later,
    toDisplayableList,
  };
};

module.exports = todoList;

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

// const todos = todoList();

// const formattedDate = (d) => {
//   return d.toISOString().split("T")[0];
// };

// var dateToday = new Date();
// const today = formattedDate(dateToday);
// console.log(today);
// const yesterday = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() - 1))
// );
// console.log(yesterday);
// const tomorrow = formattedDate(
//   new Date(new Date().setDate(dateToday.getDate() + 1))
// );
// console.log(typeof tomorrow);

// todos.add({ title: "Submit assignment", dueDate: yesterday, completed: false });
// todos.add({ title: "Pay rent", dueDate: today, completed: true });
// todos.add({ title: "Service Vehicle", dueDate: today, completed: false });
// todos.add({ title: "File taxes", dueDate: tomorrow, completed: false });
// todos.add({ title: "Pay electric bill", dueDate: tomorrow, completed: false });

// console.log("My Todo-list\n\n");

// console.log("Overdue");
// var overdues = todos.overdue();
// var formattedOverdues = todos.toDisplayableList(overdues);
// console.log(formattedOverdues);
// console.log("\n\n");

// console.log("Due Today");
// let itemsDueToday = todos.dueToday();
// let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday);
// console.log(formattedItemsDueToday);
// console.log("\n\n");

// console.log("Due Later");
// let itemsDueLater = todos.dueLater();
// let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater);
// console.log(formattedItemsDueLater);
// console.log("\n\n");
