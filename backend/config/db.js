export default connectDB;

const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kamil03:zRaQBeIxALN1PMaa@cluster0.xhlxp3f.mongodb.net/e-commerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
