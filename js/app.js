const jokes = [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "I told my computer I needed a break, and it said: 'No problem. I’ll go to sleep.'",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "How does a penguin build its house? Igloos it together!",
    "Why did the math book look sad? Because it had too many problems.",
    "I asked my dog what's two minus two. He said nothing.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I used to play piano by ear, but now I use my hands.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "I would tell you a joke about construction, but I’m still working on it.",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "I once got into a fight with a broken elevator. I took it to another level.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "I only know 25 letters of the alphabet. I don’t know y.",
    "What do you call fake spaghetti? An impasta.",
    "Want to hear a joke about paper? Never mind, it's tearable.",
    "Why did the chicken go to the seance? To talk to the other side.",
    "What do you get when you cross a snowman with a vampire? Frostbite.",
    "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears."
  ];
  
  const jokeBox = document.getElementById('jokeBox');
  const jokeBtn = document.getElementById('jokeBtn');
  
  jokeBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeBox.textContent = jokes[randomIndex];
  });