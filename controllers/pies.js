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
    
  } catch (error) {
    console.log(error)
  }
}
const show = async (req,res) => {
  try {
    
  } catch (error) {
    console.log(error)
  }
}
const deletepie = async (req,res) => {
  try {
    
  } catch (error) {
    console.log(error)
  }
}
const update = async (req,res) => {
  try {
    
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