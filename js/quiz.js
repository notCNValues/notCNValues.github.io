$(document).ready(function () {

    let choices;
    let enableDebug;
    let current_question = 0;
    initialize();
    $('.tooltipped').tooltip();
    
    function get_value(value_name) {
        let query;
        if (window.location.search) {
            query = window.location.search.substring(1);
        } else {
            query = window.location.hash.substring(1);
        }
        return (new URLSearchParams(query)).get(value_name);
    }


    function initialize() {
        if(get_value("spec")==1) 
        questions = questions.concat(addQuestions);
        choices = new Array(questions.length).fill(0);
        // Shuffle Quesions
        questions.sort(() => Math.random() - 0.5);

        $("#btn-strongly-positive")
            .click(() => {
                choices[current_question] = +1.0;
                next_question();
            });
        $("#btn-positive")
            .click(() => {
                choices[current_question] = +0.33;
                next_question();
            });
        $("#btn-uncertain")
            .click(() => {
                choices[current_question] = 0.0;
                next_question();
            });
        $("#btn-negative")
            .click(() => {
                choices[current_question] = -0.33;
                next_question();
            });
        $("#btn-strongly-negative")
            .click(() => {
                choices[current_question] = -1.0;
                next_question();
            });

        $("#btn-prev").click(() => {
            prev_question();
        });

        render_question();
    }

    function render_question() {
        $("#question-text").html(questions[current_question].question);
        $("#question-number").html(`第 ${current_question + 1} 题 剩余 ${questions.length - current_question - 1} 题`);
        if (current_question === 0) {
            $("#btn-prev").addClass("disabled");
        } else {
            $("#btn-prev").removeClass("disabled");
        }
    }

    function next_question() {
        if (current_question < questions.length - 1) {
            current_question++;
            render_question();
        } else {
            results();
        }
    }

    function prev_question() {
        if (current_question !== 0) {
            current_question--;
            render_question();
        }
    }

    function is_special_axis(axis) {
        return specials.some((value) => {
            return value.id === axis;
        })
    }

    function results() {

        // 首先找到所有出现过的属性
        let scores = {};
        for (let q of questions) {
            for (let axis in q.effect) {
                scores[axis] = 0;
            }
            if(get_value("spec")==1) 
            {
                for (let axis in q.spEffect) {
                    scores[axis] = 0;
                }
            }
        }

        let pos_scores = {...scores};
        let neg_scores = {...scores};
        

        for (let i = 0; i < questions.length; i++) {
            for (let axis in questions[i].effect) {
                let choice = choices[i];
                // if (is_special_axis(axis)) {
                //     if (questions[i].effect[axis] > 0) {
                //         choice = Math.max(choice, 0);
                //     } else {
                //         choice = Math.min(choice, 0);
                //     }
                // }
                let linearNum = 10*questions[i].effect[axis]/Math.abs(questions[i].effect[axis]);
                scores[axis] += choice * linearNum + questions[i].effect[axis] - linearNum;
                if(questions[i].effect[axis]>0)
                {
                    pos_scores[axis] += Math.abs(questions[i].effect[axis]);
                    neg_scores[axis] += 2*10 - Math.abs(questions[i].effect[axis]);
                }
                else
                {
                    neg_scores[axis] += Math.abs(questions[i].effect[axis]);
                    pos_scores[axis] += 2*10 - Math.abs(questions[i].effect[axis]);
                }
            }
            if(get_value("spec")==1) 
            {
                for (let axis in questions[i].spEffect) {
                    let choice = choices[i];
                    // if (is_special_axis(axis)) {
                    //     if (questions[i].effect[axis] > 0) {
                    //         choice = Math.max(choice, 0);
                    //     } else {
                    //         choice = Math.min(choice, 0);
                    //     }
                    // }
                        scores[axis] += choice * questions[i].spEffect[axis];
                        pos_scores[axis] += Math.abs(questions[i].spEffect[axis]);
                        neg_scores[axis] += Math.abs(questions[i].spEffect[axis]);
                }

            }
        }

        for (let axis in scores) {
            // if (is_special_axis(axis)) {
            //     scores[axis] = scores[axis] / max_scores[axis];
            // } else {
            //     scores[axis] = (scores[axis] + max_scores[axis]) / (2 * max_scores[axis]);
            // }

            //scores[axis] = (scores[axis] + max_scores[axis]) / (2 * max_scores[axis]);
            //scores[axis] = Math.round(scores[axis] * 100);

            if(scores[axis]>=0)
            {
                scores[axis] = (scores[axis] + pos_scores[axis]) / (2 * pos_scores[axis]);
            }
            else 
            {
                scores[axis] = (scores[axis] + neg_scores[axis]) / (2 * neg_scores[axis]);
            }
            scores[axis] = Math.round(scores[axis] * 1000)/10;
        }

        if (enableDebug) {
            location.href = "results.html?" + $.param(scores);
        } else {
            location.href = "results.html#" + $.param(scores);
        }
    }
});
