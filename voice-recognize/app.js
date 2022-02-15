const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// initiate our speech recognition

try {
  const greetings = [
    'Im good you little piece of love',
    'Doing good homebie',
    'leave me alone',
  ];
  const weather = ['weather is fine', 'you need a tan'];
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  /*  when the voice get activated this (onstart) gone a run, this is executed when voice is being to listen to */
  recognition.onstart = function () {
    console.log('voice is activated, you can to microphone');
  };
  /*  onspeechend = when we stop talking then this going to execute.
   but here we are not going to use this, instead we are going to use onresult */
  /* recognition.onspeechend = function () {}; */
  // when we actually stop talking and we have the result through the string so we going to run it
  recognition.onresult = function (event) {
    // event -is basically hold a string of the thing that we are talking about, so here we have a access to whatever we say after stop talk
    console.log(event);
    /* inside event, we can access speak text result  
        results: SpeechRecognitionResultList
        0: SpeechRecognitionResult
        0: SpeechRecognitionAlternative
        transcript: "hello hello"
    */
    // access the text
    const current = event.resultIndex; // which is 0
    const transcript = event.results[current][0].transcript; //2nd [0] is as its two level deep
    content.textContent = transcript;
    // example of closure as well
    readOutLoud(transcript);
  };
  // add event listener to btn
  btn.addEventListener('click', () => {
    recognition.start(); // it will run onstart() and then onresult() as soon as we stop talk.
  });

  // speak back to our text by browser
  function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what you said';
    if (message.includes('how are you')) {
      const finalText = greetings[Math.floor(Math.random() * greetings.length)];
      speech.text = finalText;
    }
    // speech.text = message;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    /* This speechSynthesis will listen speak for speech back */
    window.speechSynthesis.speak(speech);
  }
} catch (err) {
  console.log(err);
}
