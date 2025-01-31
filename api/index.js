export default (req, res) => {
  // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Allow GET method
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  //json Content-Type
  res.setHeader('Content-Type', 'application/json');
  
  res.status(200).json({
    email: "roscalyse11@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/roscalyse/hng-roscalyse.git"
  });
};
