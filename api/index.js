
export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    email: "your-email@example.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/yourusername/your-repo"
  });
};
