let thinkers = [
  {
    name: "Andrew Carnegie",
    wealth: 310,
    contribution: "Steel Industry, Philanthropy",
    details: "Known for revolutionizing the steel industry and advocating the 'Gospel of Wealth,' Carnegie believed the wealthy had a moral obligation to use their wealth for societal good. He funded libraries, universities, and cultural institutions."
  },
  {
    name: "John D. Rockefeller",
    wealth: 418,
    contribution: "Oil Industry, Monopolies",
    details: "Founder of Standard Oil, Rockefeller pioneered modern business practices and vertical integration. Despite criticism for creating monopolies, he was also a major philanthropist, funding education and medical research."
  },
  {
    name: "Cornelius Vanderbilt",
    wealth: 185,
    contribution: "Railroads and Shipping",
    details: "Nicknamed 'The Commodore,' Vanderbilt amassed his fortune in shipping and railroads. He played a critical role in developing transportation infrastructure in 19th-century America."
  },
  {
    name: "Henry George",
    wealth: 0,
    contribution: "Single Tax Theory, Progress and Poverty",
    details: "An advocate of land value taxation, Henry George argued that economic inequality could be addressed by taxing land rather than labor or capital. His book *Progress and Poverty* inspired reform movements worldwide."
  },
  {
    name: "Milton Friedman",
    wealth: 0,
    contribution: "Monetarism, Free-Market Advocacy",
    details: "A Nobel laureate, Friedman championed monetarism, emphasizing the role of monetary policy in controlling inflation. He argued against government intervention and advocated for deregulated free markets."
  },
  {
    name: "John Kenneth Galbraith",
    wealth: 0,
    contribution: "Institutional Economics, Affluent Society",
    details: "Galbraith critiqued consumer culture and unregulated capitalism in his book *The Affluent Society.* He highlighted the need for public investment in education and infrastructure."
  },
  {
    name: "Thorstein Veblen",
    wealth: 0,
    contribution: "Theory of the Leisure Class, Institutional Economics",
    details: "Known for coining the term 'conspicuous consumption,' Veblen explored how economic behavior is influenced by social structures. He criticized the excesses of industrial capitalism."
  },
];

let currentIndex = 0;
let quizStarted = false;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizQuestions = [
  {
    question: "What was Andrew Carnegie's main contribution?",
    options: ["Steel Industry, Philanthropy", "Oil Industry, Monopolies", "Railroads and Shipping", "Free Market Policies"],
    correct: "Steel Industry, Philanthropy"
  },
  {
    question: "What was John D. Rockefeller known for?",
    options: ["Steel Industry, Philanthropy", "Oil Industry, Monopolies", "Monetarism", "Land Value Taxation"],
    correct: "Oil Industry, Monopolies"
  },
  {
    question: "What was Cornelius Vanderbilt's contribution?",
    options: ["Free Market Policies", "Land Value Taxation", "Railroads and Shipping", "Theory of the Leisure Class"],
    correct: "Railroads and Shipping"
  },
  {
    question: "What was Henry George's main economic theory?",
    options: ["Single Tax Theory", "Monetarism", "Conspicuous Consumption", "Free Market Policies"],
    correct: "Single Tax Theory"
  },
  {
    question: "What is Milton Friedman known for?",
    options: ["Monetarism", "Land Value Taxation", "Conspicuous Consumption", "Affluent Society"],
    correct: "Monetarism"
  },
  {
    question: "What was John Kenneth Galbraith's major contribution?",
    options: ["Institutional Economics", "Free Market Policies", "Theory of the Leisure Class", "Monetarism"],
    correct: "Institutional Economics"
  },
  {
    question: "What was Thorstein Veblen's main contribution?",
    options: ["Theory of the Leisure Class", "Single Tax Theory", "Monetarism", "Conspicuous Consumption"],
    correct: "Theory of the Leisure Class"
  }
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(220);

  if (quizStarted) {
    showQuiz();
    return;
  }

  // Display header
  fill(50);
  textSize(26);
  text("Prominent American Economic Thinkers", width / 2, 40);

  // Display thinker details
  let currentThinker = thinkers[currentIndex];
  textSize(20);
  fill(0);
  text(currentThinker.name, width / 2, 100);

  textSize(16);
  text(`Wealth: ${currentThinker.wealth > 0 ? "$" + currentThinker.wealth + " Billion" : "Not Applicable"}`, width / 2, 140);
  text(`Contribution: ${currentThinker.contribution}`, width / 2, 180);

  // Wealth comparison bar
  let maxWealth = Math.max(...thinkers.map((t) => t.wealth));
  let wealthRatio = currentThinker.wealth / maxWealth;

  fill(180);
  rect(150, 230, 500, 20);

  if (currentThinker.wealth > 0) {
    fill(50, 150, 250);
    rect(150, 230, 500 * wealthRatio, 20);
  }

  fill(0);
  text("Wealth Comparison", width / 2, 260);

  if (currentThinker.wealth > 0) {
    text(`${currentThinker.wealth}B`, 150 + 500 * wealthRatio, 290);
  } else {
    text("N/A", width / 2, 290);
  }

  // Detailed information with padding to ensure readability
  textSize(14);
  textWrap(WORD);
  fill(50);
  text(currentThinker.details, 50, 320, 700);

  // Arrow buttons
  fill(50);
  noStroke();
  textSize(24);
  if (currentIndex > 0) {
    triangle(30, height / 2, 60, height / 2 - 20, 60, height / 2 + 20); // Left arrow
  }
  if (currentIndex < thinkers.length - 1) {
    triangle(width - 30, height / 2, width - 60, height / 2 - 20, width - 60, height / 2 + 20); // Right arrow
  }

  // Show "Start Quiz" button at the end
  if (currentIndex === thinkers.length - 1) {
    fill(0);
    textSize(18);
    text("Click here to start the quiz", width / 2, height - 40);
  }
}

function mousePressed() {
  // Check for left arrow click
  if (currentIndex > 0 && mouseX > 30 && mouseX < 60 && mouseY > height / 2 - 20 && mouseY < height / 2 + 20) {
    currentIndex--;
  }
  // Check for right arrow click
  if (
    currentIndex < thinkers.length - 1 &&
    mouseX > width - 60 &&
    mouseX < width - 30 &&
    mouseY > height / 2 - 20 &&
    mouseY < height / 2 + 20
  ) {
    currentIndex++;
  }

  // Start quiz if user clicks on the "Start Quiz" button
  if (currentIndex === thinkers.length - 1 && mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > height - 60 && mouseY < height - 20) {
    quizStarted = true;
    currentQuestionIndex = 0;
  }

  // Handle quiz answer selection
  if (quizStarted) {
    let currentQuestion = quizQuestions[currentQuestionIndex];
    let options = currentQuestion.options;

    for (let i = 0; i < options.length; i++) {
      if (mouseX > width / 2 - 150 && mouseX < width / 2 + 150 && mouseY > 160 + 30 * i && mouseY < 190 + 30 * i) {
        userAnswers.push({
          question: currentQuestion.question,
          answer: options[i],
          correct: options[i] === currentQuestion.correct
        });

        currentQuestionIndex++;

        if (currentQuestionIndex >= quizQuestions.length) {
          let score = userAnswers.filter(answer => answer.correct).length;
          alert(`Quiz complete! Your score: ${score}/${quizQuestions.length}`);
          
          // Display correct answers
          let correctAnswersText = "Correct Answers:\n";
          quizQuestions.forEach((question, index) => {
            correctAnswersText += `${question.question}\nCorrect Answer: ${question.correct}\n\n`;
          });

          alert(correctAnswersText); // Show correct answers in an alert box

          quizStarted = false;
          currentIndex = 0;
        }
      }
    }
  }
}

function showQuiz() {
  let currentQuestion = quizQuestions[currentQuestionIndex];
  textSize(20);
  fill(0);
  text(currentQuestion.question, width / 2, 50);

  let options = currentQuestion.options;
  for (let i = 0; i < options.length; i++) {
    fill(255);
    rect(width / 2 - 150, 160 + 30 * i, 300, 30);
    fill(0);
    text(options[i], width / 2, 175 + 30 * i);
  }
}
