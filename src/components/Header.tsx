const Header = () => {
  return (
    <div>
      <h3 className="text-xl font-bold">오늘은 📅</h3>
      <h1 className="text-blue-400 text-3xl font-bold">
        {new Date().toDateString()}
      </h1>
    </div>
  );
};

export default Header;
