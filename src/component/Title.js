const Title = (props) => {
  return (
    <h1 className="text-4xl cc text-center uppercase font-bold text-stone-600 pt-4">
      {props.children}
    </h1>
  );
};

export default Title;
