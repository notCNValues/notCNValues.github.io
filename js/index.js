$(document).ready(() => {
    $('.tooltipped').tooltip();
    $('.modal').modal();
    $("#quiz-branch0").html(`开始测试（不附带特性版，${questions.length}题）`);
    $("#quiz-branch1").html(`开始测试（完整版，${questions.length + addQuestions.length}题）`);
})
