// update status
const updateStatus = (status) => {
  if (status.completed === false) {
    status.completed = true;
  } else{
    status.completed = false
  }
};

export default updateStatus;