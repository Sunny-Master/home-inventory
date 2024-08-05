import { Invent } from '../models/invent.js'

async function index(req, res) {
  try {
    const invents = await Invent.find({})
    res.render('invents/index', {
      invents
    })
  } catch (error) {
    console.log(error)
    res.redirect('/')
  }
}

async function newInventory(req, res) {
  try {
    const invents = await Invent.find({})
    res.render('invents/new', {
      invents
    })
  } catch (error) {
    console.log(error)
    res.redirect('/inventories')
  }
}

async function create(req, res) {
  try {
    req.body.things = []
    await Invent.create(req.body)
    res.redirect('/inventories')
  } catch (error) {
    console.log(error)
    res.redirect('/inventories')
  }
}

async function show(req, res) {
  try {
    const invent = await Invent.findById(req.params.inventId)
    res.render('invents/show', {
      invent
    })
  } catch (error) {
    console.log(error)
    res.redirect('/inventories')
  }
}

async function deleteInventory(req, res) {
  try {
    await Invent.findByIdAndDelete(req.params.inventId)
    res.redirect('/inventories')
  } catch (error) {
    console.log(error)
    res.redirect('/inventories')
  }
}

async function update(req, res) {
  try {
    await Invent.findByIdAndUpdate(req.params.inventId, {$push: {'things': req.body.things}}, {new: true})
    res.redirect(`/inventories/${req.params.inventId}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/inventories/${req.params.inventId}`)
  }
}

async function edit(req, res) {
  try {
    await Invent.findByIdAndUpdate(req.params.inventId, {$pull: {'things': req.body.things}}, {new: true}) 
    res.redirect(`/inventories/${req.params.inventId}`)
  } catch (error) {
    console.log(error)
    res.redirect(`/inventories/${req.params.inventId}`)
  }
}


export {
  index,
  newInventory as new,
  create,
  show,
  deleteInventory as delete,
  update,
  edit,
}