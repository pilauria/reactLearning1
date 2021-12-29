import ReactDOM from 'react-dom';

export const App = () => {
  const mamma = { text: 'mimmo' };
  return (
    <div style={{ color: 'red' }}>
      <p>Hi There!</p>
      <p>{mamma.text}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
