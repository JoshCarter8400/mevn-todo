import User from '../../model/user-model';
import Task from '../../model/task-model';
import moment from 'moment';

export function index(req, res) {
  // Find all tasks
  Task.find({}, (error, tasks) => {
    if (error) {
      return res.status(500).json();
    }
    return res.status(200).json({ tasks: tasks });
  }).populate('author', 'username', 'user');
}
export function create(req, res) {
  // Create task
  const id = 10;
  User.findOne({ _id: id, id }, (error, user) => {
    if (error && !user) {
      return res.status(500).json();
    }
    const task = new Task(req.body.task);
    (task.author = user._id), (task.dueDate = moment(task.dueDate));

    task.save((error) => {
      if (error) {
        res.status(500).json();
      }
      return res.status(201).json();
    });
  });
  return res.status(201).json();
}
export function update(req, res) {
  // Update task
  const id = 10;
  User.findOne({ _id: id }, (error, user) => {
    if (error) {
      return res.status(500).json();
    }
    if (!task) {
      return res.status(404).json();
    }
    const task = req.body.task;
    task.author = user._id;
    task.dueDate = moment(task.dueDate);
    Task.findByIdAndUpdate({ _id: task._id }, task, (error) => {
      if (error) {
        return res.status(500).json();
      }
      return res.status(204).json();
    });
  });
}
export function remove(req, res) {
  // Delete task
  const id = 5;
  Task.findOne({ _id: req.params.id }, (error, task) => {
    if (error) {
      return res.status(500).json();
    }
    if (!task) {
      return res.status(404).json();
    }
    if (task.author._id.toString() !== id) {
      return res
        .status(403)
        .json({ message: "Not allowed to delete another user's post" });
    }

    Task.deleteOne({ _id: req.params.id }, (error) => {
      if (error) {
        return res.status(500).json();
      }
      return res.status(204).json();
    });
  });
}
export function show(req, res) {
  // Get task by id
  Task.findOne({ _id: req.params.id }, (error, tasks) => {
    if (error) {
      return res.status(500).json();
    }
    if (!task) {
      return res.status(404).json();
    }
    return res.status(200).json({ task: task });
  });
}
