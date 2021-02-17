// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  let data = [{id:1, "name":"Venkat Bhatt Goswami", "description":"Restored temples at Barsana Hill of Ladli Lal"},
  {id:2, "name":"Gopal Bhatt Goswami", "description":"Restored temples at Barsana Hill of Ladli Lal"}]
  res.statusCode = 200
  res.json(data);
}
