// Import the model that we exported in the User.js model file
import { User } from '../models/user.js'

async function index(req, res) {
  try {
    const users = await User.find({})
    res.render('users/index', {
      users
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function newUser(req, res) {
  res.render('users/new')
}

async function create(req, res) {
  try {
    req.body.things = []
    await User.create(req.body)
    res.redirect('/users')
  } catch (error) {
    console.log(error)
    res.redirect('/users')
  }
}

async function show(req, res) {
  try {
    const user = await User.findById(req.params.userId)
    res.render('users/show', {
      user
    })
  } catch (error) {
    console.log(error)
    res.redirect('/users')
  }
}

async function update(req, res) {
  try {
    await User.findByIdAndUpdate(req.params.userId,{$push: {'things': req.body.things}}, {new: true})
    res.redirect(`/users/${req.params.userId}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/users/${req.params.userId}`)
  }
}

async function deleteUser(req, res) {
  try {
    // find the user and delete it
    await User.findByIdAndDelete(req.params.userId)
    // redirect to /users
    res.redirect('/users')
  } catch (error) {
    console.log(error)
    res.redirect('/users')
  }
}

async function edit(req, res) {
  console.log(req.body)
  try {
    await User.findByIdAndUpdate(req.params.userId, {$pull: {'things': req.body.things}}, {new: true})
    res.redirect(`/users/${req.params.userId}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/users/${req.params.userId}`)
  } 
}


export {
  index,
  newUser as new,
  create,
  show,
  update,
  deleteUser as delete,
  edit,
}