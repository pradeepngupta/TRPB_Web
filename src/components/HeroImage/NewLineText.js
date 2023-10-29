const NewLineText = (props) => {
    const text = props.text;
    return text.split('<br>').map(str => <p className="text-white">{str}</p>);
  
};

export default NewLineText