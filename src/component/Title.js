const Title = (props) => {
  return (
    <header>
      <h1 className="text-4xl cc text-center uppercase font-bold text-stone-600 pt-4">
        {props.children}
      </h1>
    </header>
  );
};

export default Title;
