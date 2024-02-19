import  {User}  from "../models/User.js";

const UserController = {
  // GET
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - request failure`});
    }
  },

  // GET by ID
  getUserById: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findById(id);

      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      res.status(200).json(user); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - user request failure`});
    }
  },

  // POST
  createUser: async (req, res) => {
    try {
      const newUser = await User.create(req.body);  
      res.status(201).json({ message: "User added successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - user registration failure` });  
    }
  },

  // PUT
  updateUser: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ message: "User not found." });
      }
      res.status(200).json({ message: "User updated successfully", user: updatedUser }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - user update failure`});
    }
  },

/*   // PATCH
  updateUserPartial: async (req, res) => {
    try {
      const id = req.params.id;
      const updates = req.body; 

      if (!updates || Object.keys(updates).length === 0) {
        return res.status(400).json({ message: "No fields to update." });
      }

      const updateUserPartial = await User.findByIdAndUpdate(id, updates, { new: true });
      if (!updateUserPartial) {
        return res.status(404).json({ message: "User not found." });
      }

      res.status(200).json({ message: "User updated successfully", user: updateUserPartial });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - user update failure` });
    }
  }, */

  // DELETE
  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ message: "User not found." });
      }
      res.status(200).json({ message: "User deleted successfully" }); 
    } catch (error) {
      res.status(500).json({ message: `${error.message} - user delete failure`});
    }
  }
};

export default UserController;

/* const fs = require('fs');
const path = require('path');

const userDataPath = path.join(__dirname, '../data/users.json');

exports.getAllUsers = (req, res) => {
    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const users = JSON.parse(data).users;
        res.json(users);
    });
};

exports.getUserById = (req, res) => {
    const userId = parseInt(req.params.id);

    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const users = JSON.parse(data).users;
        const user = users.find(user => user.id === userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    });
};

//todo u need to add other optional fields to the user data and add default values for them , see the chatgpt discussionabout user registration and hashing password and compare it with paolo's solution https://chat.openai.com/share/81cf2bcd-39d5-4721-b17c-650c426e9bf5
exports.createUser = (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).json({ message: 'Username and email are required' });
    }

    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        const users = JSON.parse(data).users;
        const newUser = { id: users.length + 1, username, email };
        users.push(newUser);

        fs.writeFile(userDataPath, JSON.stringify({ users }, null, 2), (err) => {
            if (err) {
                console.error('Error writing user data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.status(201).json(newUser);
        });
    });
};

exports.updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const { username, email } = req.body;

    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let users = JSON.parse(data).users;
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        users[userIndex] = { id: userId, username, email };

        fs.writeFile(userDataPath, JSON.stringify({ users }, null, 2), (err) => {
            if (err) {
                console.error('Error writing user data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.json(users[userIndex]);
        });
    });
};

exports.deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);

    fs.readFile(userDataPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading user data:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        let users = JSON.parse(data).users;
        const userIndex = users.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({ message: 'User not found' });
        }

        users.splice(userIndex, 1);

        fs.writeFile(userDataPath, JSON.stringify({ users }, null, 2), (err) => {
            if (err) {
                console.error('Error writing user data:', err);
                return res.status(500).json({ message: 'Internal server error' });
            }

            res.json({ message: 'User deleted successfully' });
        });
    });
};

 */