import User from "../model/user.js";

// register

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ name, email, password });
    await user.save();

    res.status(201).json({ message: "User registered successfully",user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// login

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  if (password !== user.password) {
    return res.status(400).json({ message: "Wrong Password" });
  }

  res.status(200).json({
    message: `Welcome back ${user.name}`,
    user,
  });
};
