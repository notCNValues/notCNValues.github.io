updLog=[
    {
        "version" : "0.10.0",
        "text" : "<strong>0.10.0更新：</strong><br><br>&nbsp;&nbsp;综合改动：<br><br>&nbsp;&nbsp;-现在每道题目正反两项的权值差固定为20（所有选择非常同意获得±15/10/5分的选项，现在非常反对将会获得∓5/10/15分）。<br><br>&nbsp;&nbsp;-现在以实际能够匹配到的范围为结果赋值（而不是该结果的标准得分）。<br><br>&nbsp;&nbsp;-解决了部分结果过于大帐篷或过于密集的问题（见结果改动部分）。<br><br>&nbsp;&nbsp;-用户现在可以自主选择是否做特性题。<br><br>&nbsp;&nbsp;-对三轴所对应的题目进行了大幅度简化，提升了用户体验。<br><br>&nbsp;&nbsp;结果改动：<br><br>&nbsp;&nbsp;-正统马克思主义：<br>&nbsp;&nbsp;经济从100调整为90；<br>&nbsp;&nbsp;政治从70调整为75；<br><br>&nbsp;&nbsp;-托洛茨基主义：已移除；<br><br>&nbsp;&nbsp;-列宁主义：更名为布尔什维主义；<br>&nbsp;&nbsp;经济从100调整为105；<br>&nbsp;&nbsp;政治从30调整为40；<br>&nbsp;&nbsp;社会从75调整为80；<br><br>&nbsp;&nbsp;-马克思列宁主义：<br>&nbsp;&nbsp;经济从95调整为100；<br>&nbsp;&nbsp;社会从30调整为45；<br><br>&nbsp;&nbsp;-自由意志社会主义：<br>&nbsp;&nbsp;经济从85调整为80；<br>&nbsp;&nbsp;社会从85调整为80；<br><br>&nbsp;&nbsp;-民主社会主义：<br>&nbsp;&nbsp;政治从70调整为65；<br>&nbsp;&nbsp;社会从80调整为75；<br><br>&nbsp;&nbsp;-社会民主主义：<br>&nbsp;&nbsp;经济从70调整为65；<br>&nbsp;&nbsp;社会从70调整为65；<br><br>&nbsp;&nbsp;-左翼民粹主义：<br>&nbsp;&nbsp;经济从70调整为65；<br>&nbsp;&nbsp;政治从25调整为30；<br>&nbsp;&nbsp;社会从50调整为40；<br><br>&nbsp;&nbsp;-民族布尔什维克主义：<br>&nbsp;&nbsp;政治从0调整为5；<br>&nbsp;&nbsp;社会从20调整为25；<br><br>&nbsp;&nbsp;-无政府互助主义：<br>&nbsp;&nbsp;经济从65调整为55；<br>&nbsp;&nbsp;社会从60调整为65；<br><br>&nbsp;&nbsp;-左翼自由意志主义：<br>&nbsp;&nbsp;经济由60调整为55；<br>&nbsp;&nbsp;政治由90调整为85；<br>&nbsp;&nbsp;社会由80调整为75；<br><br>&nbsp;&nbsp;-社会自由主义：<br>&nbsp;&nbsp;经济由55调整为50；<br>&nbsp;&nbsp;政治由60调整为65；<br>&nbsp;&nbsp;社会由70调整为65；<br><br>&nbsp;&nbsp;-进步保守主义：<br>&nbsp;&nbsp;经济由50调整为45；<br>&nbsp;&nbsp;政治由45调整为40；<br><br>&nbsp;&nbsp;-庇隆主义：<br>&nbsp;&nbsp;政治由15调整为20；<br><br>&nbsp;&nbsp;-个人无政府主义：<br>&nbsp;&nbsp;经济由40调整为35；<br><br>&nbsp;&nbsp;-右翼民粹主义：<br>&nbsp;&nbsp;经济由40调整为35；<br>&nbsp;&nbsp;政治由25调整为30；<br>&nbsp;&nbsp;社会由25调整为30；<br><br>&nbsp;&nbsp;-新自由主义：<br>&nbsp;&nbsp;经济由30调整为25；<br>&nbsp;&nbsp;社会由60调整为50；<br><br>&nbsp;&nbsp;-保守主义：<br>&nbsp;&nbsp;经济由30调整为25；<br>&nbsp;&nbsp;政治由40调整为35；<br>&nbsp;&nbsp;社会由30调整为25；<br><br>&nbsp;&nbsp;-自由意志主义：<br>&nbsp;&nbsp;经济由30调整为20；<br>&nbsp;&nbsp;政治由90调整为85；<br><br>&nbsp;&nbsp;-威权资本主义：<br>&nbsp;&nbsp;经济由20调整为15；<br>&nbsp;&nbsp;政治由15调整为10；<br><br>&nbsp;&nbsp;-新保守主义：<br>&nbsp;&nbsp;经济由20调整为10；<br><br>&nbsp;&nbsp;-古典自由主义：<br>&nbsp;&nbsp;经济由15调整为10；<br><br>&nbsp;&nbsp;-无政府资本主义：<br>&nbsp;&nbsp;社会由60调整为50；<br><br>&nbsp;&nbsp;-小政府主义：<br>&nbsp;&nbsp;政治由85调整为80；<br>&nbsp;&nbsp;社会由60调整为55；<br><br>&nbsp;&nbsp;新增结果：<br><br>&nbsp;&nbsp;-左翼共产主义：105/60/80；<br><br>&nbsp;&nbsp;-左翼民族主义：75/25/60；<br><br>&nbsp;&nbsp;-无政府工团主义：70/100/75；<br><br>&nbsp;&nbsp;-乔治主义：35/80/70；<br><br>&nbsp;&nbsp;-民族保守主义：30/20/20。<br><br>"
    },
    {	
        "version" : "0.10.0b",
	"text" : "<strong>0.10.0b更新：</strong><br><br>&nbsp;&nbsp;将政治轴部分的18题减少为15题。<br><br>"
    }
];
$(document).ready(function () {
	let logText = "<h4>更新日志</h4><br><br>";
    for(let i=updLog.length-1;i>=0;i--)
		logText+=updLog[i].text;
	$("#log-text").html(logText);
})
