/*
Problem Statement for Pair Programming Interview:

Objective:
You are tasked with implementing a simple quiz game in React Native named "QuizzleMania". The game will fetch multiple choice questions from an API and present them one by one to the user.

Task Details:
1. At app start, the game should fetch a list of questions from the given API ('https://s3.amazonaws.com/szl.ai/api/multiple_choice/api.json') and store them locally.
2. Present one question at a time to the user along with multiple choice answers.
3. When a user selects an answer, move to the next question.
4. When the user has answered all available questions, fetch a new set from the API.
5. Keep track of the number of correct and incorrect answers and display them on the screen.
6. Implement a simple, fun, and engaging UI/UX for the game, including styling and layout.

Considerations:
- Handle API fetch errors gracefully and inform the user.
- Optimize for readability, modularity, and performance.
- Feel free to use the existing code structure as a starting point, modifying and expanding upon it as needed.

Happy coding!
*/

import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';

interface Answer {
  answer_text: string;
  is_correct: boolean;
}

interface Question {
  question_text: string;
  list: Answer[];
}

const questions: Question[] = [
  {
    question_text: 'What is the capital of France?',
    list: [
      { answer_text: 'Rome', is_correct: false },
      { answer_text: 'Berlin', is_correct: false },
      { answer_text: 'Paris', is_correct: true },
      { answer_text: 'Madrid', is_correct: false },
    ],
  },
];

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.gameTitle}>QuizzleMania</Text>
      <Text style={styles.score}>Correct: ### Incorrect: ###</Text>
      {currentQuestion ? (
        <>
          <Text style={styles.questionText}>{currentQuestion.question_text}</Text>
          {currentQuestion.list.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{answer.answer_text}</Text>
            </TouchableOpacity>
          ))}
        </>
      ) : (
        <Text style={styles.noQuestionsText}>No Quizzes Available</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD', // Light Blue
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  gameTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A237E', // Dark Blue
    marginBottom: 10,
  },
  score: {
    fontSize: 18,
    color: '#FF5722', // Deep Orange
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: '#1A237E', // Dark Blue
  },
  button: {
    backgroundColor: '#FFC107', // Amber
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#37474F', // Blue Grey
  },
  noQuestionsText: {
    fontSize: 18,
    color: '#E64A19', // Deep Orange
  },
});

