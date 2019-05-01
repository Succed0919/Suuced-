//添加商品
;(function (document, window, $, undefind){
    function Plugin(option) {
        this.option =option;
        this.render();
    }
    Plugin.prototype = {
        constructor: Plugin,
        render: function () {
            this.Commodity = $('<div class="Commodity">');
            this.CommodityImg= $('<img class="CommodityImg" src="' + this.option.images + '">'); //照片
            this.CommodityContent = $('<div class="CommodityContent">');   //右边div
            this.CommodityContent_Title = $('<span class="CommodityContent_Title">').text(this.option.Title);//右边食品标题
            this.CommodityContent_Number = $('<p class="CommodityContent_Number">').text( '限量' + this.option.Number + '件');//右边食品余量
            this.CommodityContent_Price = $('<span class="CommodityContent_Price">').text('￥' + this.option.Price);
            this.CommodityContent_Subsidy =  $('<span class="CommodityContent_Subsidy">').text('补贴' + this.option.subsidy+ '元');
            this.CommodityContent_Original =  $('<span class="CommodityContent_Original"></span><br>').text('原价' + this.option.original + '元');
            this.CommodityContent_btn = $('<span class="CommodityContent_btn">').text( this.option.btn + '元抢');
            // this.$ele = this.Commodity.append(this.CommodityImg); //left
            this.$ele_1 = this.Commodity.append(this.CommodityImg);
            this.Commodity.append(this.CommodityContent);
            this.CommodityContent.append(this.CommodityContent_Title)
                                    .append(this.CommodityContent_Number)
                                    .append(this.CommodityContent_Price)
                                    .append(this.CommodityContent_Subsidy)
                                    .append(this.CommodityContent_Original)
                                    .append(this.CommodityContent_btn);

            $('.app').append(this.$ele_1);
        },
    };
    $.extend({
        dialog: function (config) {
            var setting = $.extend(config);
            return new Plugin(setting);
        }
    })
})(document, window, jQuery);

//点击男版切换页面
;(function (document, window, $, undefind){
    function Content(option) {
        this.option =option;
        this.Switch_fn();
    }
    Content.prototype = {
        constructor: Content,
        Switch_fn: function () {
            this.sex_select__box = $('<div class="sex_select__box">');
            this.sex_select= $('<div class="sex_select">');
            this.sex_select__title = $('<p class="sex_select__title">').text('选择身份');
            this.sex_select__item =  $('<p class="sex_select__item">').text('切换身份之后将会跳转至首页');
            this.sex_select__sex =  $('<p class="sex_select__sex">');
            this.sex_select__gir =  $('<span class="sex_select__gir">');
            this.SwitchContent_image = $('<img class="SwitchContent_images" src="./icon/index-woman-87a68fc3cb.png">');
            this.sex_select__men =  $('<span class="sex_select__men">');
            this.SwitchContent_images = $('<img class="SwitchContent_images" src="./icon/index-man-ea3ba79688.png">');

            this.sex_select__gir.append(this.SwitchContent_image);
            this.sex_select__men.append(this.SwitchContent_images);
            this.sex_select__sex.append(this.sex_select__gir).append(this.sex_select__men);
            this.sex_select.append(this.sex_select__title).append(this.sex_select__item).append(this.sex_select__sex);
            this.$ele = this.sex_select__box.append(this.sex_select);

            $('.app').append(this.$ele);
        },
    };
    $.extend({
        alter: function (config) {
            var setting = $.extend(config);
            return new Content(setting);
        }
    })
})(document, window, jQuery);

//点击更多图标显示更多
;(function (document, window, $, undefind) {
    function Merchan(option) {
        this.option =option;
        this.Merchan_fn();
    }
    function TodayS(option) {
        this.option =option;
        this.Today_fn();
    }
    Merchan.prototype = {
        constructor:Merchan,
        Merchan_fn:function () {
            //大DIV
            this.app_Merchandise = $('<div class="app_Merchandise">');
            //更多头部
            this.app_Merchandise_top = $('<div class="app_Merchandise_top">');
            this.app_Merchandise_All = $('<span class="app_Merchandise_All">').text('全部分类');
            this.app_Merchandise_step = $('<span class="app_Merchandise_step fa fa-times"">');
            this.TodaySelection = $('<div class="TodaySelection">');
            this.TodaySelection_image =$('<span class="TodaySelection_image" ></span>'+'<br>');

            this.TodaySelection.append(this.TodaySelection_image);
            this.app_Merchandise_top.append(this.app_Merchandise_All).append(this.app_Merchandise_step);
            this.$ele_2 =this.app_Merchandise.append(this.app_Merchandise_top).append(this.TodaySelection);
            $('.app').append(this.$ele_2);
        },
    };
    TodayS.prototype = {
        constructor:TodayS,
        Today_fn:function(){
            this.Selection_image=$('<img class="Selection_image" src="' + this.option.SelectionImages + '">');
            this.TodaySelection_text = $('<span class="TodaySelection_text">').text(this.option.inntext);
            $('.TodaySelection_image').append(this.Selection_image);
            $('.TodaySelection').append(this.TodaySelection_text);
        }
    };
    $.extend({
        Merchan_m: function (config) {
            var setting = $.extend(config);
            return new Merchan(setting);
        },
        Today_y:function (config) {
            var set = $.extend(config);
            return new TodayS(set);
        }
    });
})(document, window, jQuery);

//点击搜索框
;(function (document, window, $, undefind) {
    function SearchBox(option) {
        this.opacit = option;
    }
    SearchBox.prototype = {
        constructor: SearchBox,
        SearchBox_fn: function () {
            this.Every = $('<div class="Every">')
            this.EveryBody = $('<p class="EveryBody">').text('大家都在搜');
            this.EveryBody_con = $('<div class="EveryBody_con">').text.opacit.EveryBody_con;
            this.$ele = this.Every.append(this.EveryBody);
            this.EveryBody.append(this.EveryBody_con);
            $('.SearchBox').append(this.$ele);
        }
    };

})(document, window, jQuery);




