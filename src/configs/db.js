const { connect } = require("mongoose");
module.exports = () =>
  connect(
    `mongodb+srv://root:2qzojWOdCMsfqjDU@noman.mqsbisz.mongodb.net/?retryWrites=true&w=majority`
  );
