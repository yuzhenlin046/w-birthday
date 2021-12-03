/**
 * Created by wangl on 2017/3/2.
 */
;!function (win) {
    var interval;
    var index = 0;
    var word_index = 0;

    //打字机显示文字
    function show_word(param) {
        if (index <= param.length-1) {
            var id = '#'+param[index]['id'];
            var old = $(id).html();
            var word = param[index]['content'];
            var new_word = old + word[word_index]
            $(id).html(new_word);
            word_index+=1;
            if (word_index+1 > param[index]['max']){
                index+=1;
                word_index = 0;
            }
        } else {
            clearInterval(interval);
            interval = '';
            index = 0;
            word_index = 0;
        }
    }

    win.TypeWriter = new Object()

    //打字机绑定
    TypeWriter.bind_note = function (param) {
        var broswer = new Array();
        for(var x in param){
            var id = '#'+param[x];
            broswer[x] = [];
            broswer[x]['id'] = param[x];
            broswer[x]['content'] = $(id).html();
            $(id).html('');
            broswer[x]['max'] = broswer[x]['content'].length;
        }
        return broswer;
    }

    //打字机启动
    TypeWriter.start = function (param, time) {
        interval = setInterval(show_word, time, param);
    }



}(window);
