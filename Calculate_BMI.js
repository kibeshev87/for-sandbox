// калькулятор индекса массы тела
function bmi(weight, height) {
    if (weight/Math.pow(height, 2) <= 18.5) {
        return "Underweight";
    } else if (weight/Math.pow(height, 2) <= 25.0) {
        return "Normal";
    } else if (weight/Math.pow(height, 2) <= 30.0) {
        return "Overweight";
    } else {
        return "Obese";
    }
}