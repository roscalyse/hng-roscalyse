export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    email: "roscalyse11@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/roscalyse/hng-roscalyse.git"
  });
};
