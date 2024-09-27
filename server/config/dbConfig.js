import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECT_DB, {
      // userNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected on host:${connect.connection.host}, name: ${connect.connection.name}
      `.cyan
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
