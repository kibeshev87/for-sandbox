function getGrade (s1, s2, s3) {
    let nmb = (s1 + s2 + s3) / 3;
    if (nmb >= 90) {
        return "A"
    } else if (nmb >= 80) {
        return "B"
    } else if (nmb >= 70) {
        return "C"
    } else if (nmb >= 60) {
        return "D"
    } else return "F"
}