const Hero = () => {
  const logo = 'https://cdn.auth0.com/blog/auth0-react-sample/assets/logo.png';
  return (
    <div className="text-center hero">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">React Sample Project</h1>
      <p className="lead">This is a slightly modified sample project.</p>
    </div>
  );
};

export default Hero;
