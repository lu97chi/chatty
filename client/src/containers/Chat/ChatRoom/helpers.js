export const handleSendMessage = (text, setChatmessage, io) => {
  setChatmessage('');
  io.emit('sendMessage', { text });
};

export const handleReciveMessage = ({ text }, messages, setMessage) => {
  const auxMessages = [...messages];
  auxMessages.push(text);
  setMessage(auxMessages);
};
