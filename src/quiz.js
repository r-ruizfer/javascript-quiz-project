class Quiz {
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions;
        this.timeLimit = timeLimit;
        this.timeRemaining= timeRemaining;
        this.correctAnswers = 0;
        this.currentQuestionIndex = 0;
    }
    getQuestion () {
        return this.questions[this.currentQuestionIndex]
    }

    moveToNextQuestion () {
        this.currentQuestionIndex++
    }

    shuffleQuestions() {
        let array = this.questions
        for (let i=array.length-1; i>0;i--) {
            const j = Math.floor(Math.random() * (i+1));
            [array[i], array [j]] = [array[j], array[i]];
        }
        return array;

    }
        
    
    checkAnswer(answer) {
        if (answer) {
            this.correctAnswers++
        }
    }

    hasEnded() {
        if (this.currentQuestionIndex < this.questions.length) {
            return false
        }
        else {
            return true
        }
    }
}
    