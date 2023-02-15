const { Pie } = require("../models")

const create = async (req,res) => {
  try {
    const pie = await Pie.create(req.body)
    res.status(200).json(pie)
  } catch (error) {
    console.log(error)
  }
}
const index = async (req,res) => {
  try {
    const pies = await Pie.findAll()
    res.status(200).json(pies)
  } catch (error) {
    console.log(error)
  }
}
const show = async (req,res) => {
  try {
    const pie = await Pie.findByPk(req.params.id)
    res.status(200).json(pie)
  } catch (error) {
    console.log(error)
  }
}
const deletepie = async (req,res) => {
  try {
    const pie = await Pie.findByPk(req.params.id)
    pie.destroy()
    res.status(200).json(pie)
  } catch (error) {
    console.log(error)
  }
}
const update = async (req,res) => {
  try {
    const pie = await Pie.findByPk(req.params.id)
    pie.set(req.body)
    await pie.save()
    res.status(200).json(pie)
  } catch (error) {
    console.log(error)
  }
}


module.exports = {
create, 
index, 
show , 
delete:deletepie, 
update
}