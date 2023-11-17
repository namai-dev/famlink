// QuestionCard.js

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

const QuestionCard = ({ question }) => {
  const [newAnswer, setNewAnswer] = useState("");
  const [answers, setAnswers] = useState(question.answers);

  const handleAnswerQuestion = () => {
    if (newAnswer.trim() !== "") {
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        { id: Date.now(), text: newAnswer },
      ]);
      setNewAnswer("");
    }
  };

  return (
    <Card variant="outlined" sx={{ marginTop: 2 }}>
      <CardContent>
        <Typography variant="h6">{question.text}</Typography>
        {answers.map((answer) => (
          <Box key={answer.id} sx={{ marginTop: 2 }}>
            <Typography>{answer.text}</Typography>
          </Box>
        ))}
        <Box mt={2}>
          <TextField
            label="Answer the question"
            variant="outlined"
            fullWidth
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
          />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleAnswerQuestion}
          sx={{ marginTop: 2 }}
        >
          Answer
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
