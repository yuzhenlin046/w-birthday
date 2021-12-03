/**
 * Created by wangl on 2017/2/22.
 */
;!function (win) {
    var idElement = function (id) {
        return document.getElementById(id);
    }

    win.Actions = new Object();

    /*移除一个绑定一个动作*/
    /**
     *
     * @param id 操作dom的id
     * @param oldAnimation
     * @param newAnimation
     */
    Actions.bindNewAnimation = function (id, oldAnimation, newAnimation) {
        var jqID = '#'+id;
        var element = idElement(id);
        element.addEventListener('animationend', function () {
           $(jqID).removeClass(oldAnimation);
           $(jqID).addClass(newAnimation);
        });
    }

    /*绑定一个动作*/
    Actions.bindAnimation = function (id, newAnimation) {
        var jqID = '#'+id;
        var element = idElement(id);
        element.addEventListener('animationend', function () {
            $(jqID).addClass(newAnimation);
        });
    }

    /*绑定一个动作，操作和监听的div不同*/
    Actions.bindDifferent = function (evenId, selectId, newAnimation) {
        var jqId = '#'+selectId;
        var element = idElement(evenId);
        element.addEventListener('animationend', function () {
            $(jqId).addClass(newAnimation);
        });
    }


}(window);