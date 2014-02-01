﻿
$(function() {
	initHint();
	initTabs();
	initChk();
  
  $(".block1 .print a").click(function(e){
    e.preventDefault();
    window.print();
  });
	
	$('.center .mainNews .list2 ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	: 4,
		scroll	:1
	});
	
	$mainNewsItems = $('.center .mainNews .list2 li');
	
	$mainNewsItems.click(function(e) {
		$itemsList = $(this).parent().find('li');
		$itemsList.filter('.active').removeClass('active');
		$(this).addClass('active');
		$index = $itemsList.index(this)+$('.center .mainNews .list2 ul').triggerHandler('currentPage');
		$itemsList1 = $('.center .mainNews .list1 li');
		$item1 = $itemsList1.filter('.active');
		$item2 = $itemsList1.eq($index);
		
		$bgList = $('.center .mainNews .bg li');
		$bg1 = $bgList.filter('.active');
		$bg2 = $bgList.eq($index);
		
		$item1.animate({opacity:0}, 400, function() {$item1.removeClass('active');});
		$item2.animate({opacity:1}, 400, function() {$item2.addClass('active');});
		$bg1.animate({opacity:0}, 400, function() {$bg1.removeClass('active');});
		$bg2.animate({opacity:1}, 400, function() {$bg2.addClass('active');});
	});
	
	var intervalID;
	var num = 1;
	$(window).load(function(e) {
		timerStart();
	});
	function timerStart() {
		if($mainNewsItems.length>1) {
			intervalID = setInterval(itemClick, 5000);
		}
	};
	function itemClick() {
		if(num>=$mainNewsItems.length) {
			num = 0;
		}
		$mainNewsItems.eq(num).click();
		num++;
	};
	$('.center .mainNews').hover(
		function() {
			clearInterval(intervalID);
		},
		function() {
			num = $mainNewsItems.index($mainNewsItems.filter('.active')) + 1;
			timerStart();
		}
	);
	
	$('.center .projects .block1 ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: '.center .projects .block1 .arrowLeft',
		next	: '.center .projects .block1 .arrowRight',
		items	:8,
		scroll	: {
      items: 1,
      duration: 100
    }
	});
	
	$('select').CFElement({
		selectvisibleRows: 5,
		customScroll: false,
		showArrows: false
	});
	
	$('.center .media .photoGalery_single .photoList1 li .img_s').click(function(e) {
		e.preventDefault();
		
		$this = $(this);
    var href = $(this).attr("rel");
		$list = $(this).parent().parent();
		$listWidth = $list.innerWidth();
		$itemWidth = $(this).innerWidth();
		$lineLeight = Math.round($listWidth/$itemWidth);
		$index = $list.find('.img_s').index(this);
		$lineNum = Math.floor($index/$lineLeight);
		
		$bigImg = $(this).parent().find('.img_b');
		
		$index1 = $lineLeight*($lineNum+1)-1;

    var vk = VK.Share.button({url:href,noparse: false},{type: "round", text: "нравится"})
    var sb = '<a target="_blank" class="surfinbird__like_button" data-surf-config="{\'layout\': \'common-nocount-gray\', \'width\': \'100\', \'height\': \'21\'}" href="http://surfingbird.ru/share">Поделиться</a>';
		
		if($index1>$list.find('.img_s').length-1){
			$index1 = $list.find('.img_s').length-1;
		}
		$lastLineItem = $list.find('.img_s:eq('+$index1+')').parent();
		
		
		if($list.find('li.forBigImg').length){
			if($lastLineItem.next('li').hasClass('forBigImg')){
				if($this.parent().hasClass('active')) {
    			$item = $lastLineItem.next('li');
					$item.slideUp(400, function(){
						$this.after($item.html());
						$item.remove();
						$this.parent().removeClass('active');
					});
				}
				else{
					$item = $lastLineItem.next('li');
					$list.find('li.active').append($item.html()).removeClass('active');
					
					$this.parent().addClass('active');
					$lastLineItem.next('li').html($bigImg);
          $lastLineItem.next('li').find(".vkGalCont").html(vk);
				}
			}
			else {
				$item = $list.find('li.forBigImg');
				$item.slideUp(400, function(){
					$list.find('li.active').append($item.html()).removeClass('active');
					$item.remove();
					
					$this.parent().addClass('active');
					$forBigImg = $('<li class="forBigImg"></li>').append($bigImg).hide();
					$lastLineItem.after($forBigImg);
          $forBigImg.find(".vkGalCont").html(vk);
					$forBigImg.slideDown(400);
					$('html,body').animate({
						scrollTop: $this.offset().top-1
					}, 400);
				});
			}
		}
		else{
			$this.parent().addClass('active');
			$forBigImg = $('<li class="forBigImg"></li>').append($bigImg).hide();
			$lastLineItem.after($forBigImg);
      $forBigImg.find(".vkGalCont").html(vk);
			$forBigImg.slideDown(400);
			$('html,body').animate({
				scrollTop: $this.offset().top-1
			}, 400);
//      $forBigImg.find('socialBtns').prepend();
//      $.getScript('http://surfingbird.ru/share/share.min.js');
		}

		
	});
	
	$('.center .social .twitterBlock .list ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	:3,
		scroll	:1
	});
	
	$('.center .newsList1 .block ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	:4,
		scroll	:1
	});
	
	$('.reviews ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	:3,
		scroll	:1
	});
	
	$tabs = $('.center .study .tabsBlock dt .tab');
	$tabsMaxHeigth = maxHeigth($tabs);
	$tabs.find('.line').height($tabsMaxHeigth);
	
	$('.center .about .block1 .line').each(function(index, element) {
		$columns = $(element).find('.column');
		$columns.height(maxHeigth($columns));
	});
	
	
  $('.center .about .block2 .pseudoLink').click(function(e) {
		$block = $(this).closest('.block2');
		
		$item2 = $(this).closest('.item2');
		$item3 = $(this).closest('.item3');
		$item4 = $(this).closest('.item4');
		
		$block.find('.item2').filter('.active').not($item2).removeClass('active');
		$block.find('.item3').filter('.active').not($item3).removeClass('active');
		$block.find('.item4').filter('.active').not($item4).removeClass('active');
		
		$item2.toggleClass('active');
		$item3.toggleClass('active');
		$item4.toggleClass('active');
	});
	
  
	$('.center .about .block2 .line2').each(function(index, element) {
		$itemList = $(this).find('.item4');
		$moreBlocks = $(this).find('.moreBlock');
		$districtInfo = $(this).find('.districtInfo');
		switch ($itemList.length) {
			case 1:
				$moreBlocks.addClass('moreBlock2');
				$districtInfo.addClass('districtInfo1');
				break;
			case 2:
				$moreBlocks.addClass('moreBlock2');
				$districtInfo.addClass('districtInfo1');
				break;
			case 3:
				$moreBlocks.addClass('moreBlock2');
				$districtInfo.eq(1).addClass('districtInfo1');
				$districtInfo.eq(2).addClass('districtInfo2');
				break;
			case 4:
				$moreBlocks.eq(0).addClass('moreBlock1');
				$moreBlocks.eq(1).addClass('moreBlock2');
				$moreBlocks.eq(2).addClass('moreBlock2');
				$moreBlocks.eq(3).addClass('moreBlock3');
				
				$districtInfo.eq(1).addClass('districtInfo1');
				$districtInfo.eq(2).addClass('districtInfo1');
				$districtInfo.eq(3).addClass('districtInfo2');
				break;
		}
	});
	$('.center .about .block2 .item4 .pseudoLink').click(function(e) {
		$block = $(this).closest('.block2');
		$item4 = $(this).closest('.item4');
		
		$block.find('.item4').filter('.active').not($item4).removeClass('active');
		
		$item4.toggleClass('active');
	});
  
	$tabs1 = $('.center .about .block3 .tabsBlock dt .tab');
	$tabsMaxHeigth1 = maxHeigth($tabs1);
	$tabs1.find('.line').height($tabsMaxHeigth1);
	
	$('.center .about .block2 .persons .listItem a').click(function(e) {
		e.preventDefault();
		$personListIndex = $(this).closest('.persons').find('.listItem').index($(this).closest('.listItem'));
	});
	
	$('.center .contactsBlock .map .btn span').click(function(e) {
		e.preventDefault();
		$map = $(this).closest('.map');
		if($map.hasClass('opened')) {
			$(this).text('Развернуть карту');
			$map.animate({height:270}, 300, function() {$map.removeClass('opened');});
		}
		else {
			$(this).text('Свернуть карту');
			$map.animate({height:615}, 300, function() {$map.addClass('opened');});
		}
	});
	
	$('.newsList.carousel1 ul').carouFredSel({
		auto	: false,
		circular: false,
		infinite: false,
		prev	: function() { return $(this).parent().parent().find(".arrowLeft"); },
		next	: function() { return $(this).parent().parent().find(".arrowRight"); },
		items	:6,
		scroll	:1
	});
	
	$('.center .authorList3.candidates li a').click(function(e) {
		e.preventDefault();
		$personListIndex = $(this).closest('.candidates').find('li').index($(this).closest('li'));
	});
	
	$('.center .authorList3 li .listItem1').click(function(e) {
		e.preventDefault();
		if($(this).closest('.authorList3').hasClass('candidates')) return;
		$(this).closest('.authorList3').find('li.active').not($(this).parent()).removeClass('active');
		
		$(this).closest('.authorList3')
			.find('.listItem2').removeAttr('style')
			.find('.arrow').removeAttr('style');
		
		$(this).parent().toggleClass('active');
		
		if($(this).parent().hasClass('active')) {
			$block = $(this).closest('.authorList3');
			$popup = $(this).parent().find('.listItem2');
			$blockOffsetLeft = $block.offset().left;
			$blockOffsetRight = $block.offset().left + $block.outerWidth();
			$popupOffsetLeft = $popup.offset().left;
			$popupOffsetRight = $popup.offset().left + $popup.outerWidth();
			
			
			if($blockOffsetLeft > $popupOffsetLeft) {
				$margin_l_css = Number($popup.css('margin-left').replace('px', ''));
				$margin_l = $margin_l_css + ($blockOffsetLeft - $popupOffsetLeft);
				$popup.css('margin-left', $margin_l);
				
				$arrow = $popup.find('.arrow');
				$arrow_margin_l_css = Number($arrow.css('margin-left').replace('px', ''));
				$arrow_margin_l = $arrow_margin_l_css - ($blockOffsetLeft - $popupOffsetLeft);
				$arrow.css('margin-left', $arrow_margin_l);
			}
			if($popupOffsetRight > $blockOffsetRight) {
				$margin_l_css = Number($popup.css('margin-left').replace('px', ''));
				$margin_l = $margin_l_css + ($blockOffsetRight - $popupOffsetRight);
				$popup.css('margin-left', $margin_l);
				
				$arrow = $popup.find('.arrow');
				$arrow_margin_l_css = Number($arrow.css('margin-left').replace('px', ''));
				$arrow_margin_l = $arrow_margin_l_css - ($blockOffsetRight - $popupOffsetRight);
				$arrow.css('margin-left', $arrow_margin_l);
			}
		}
	});
  
  	$('.center .authorList4 li .listItem1').click(function(e) {
		e.preventDefault();
		if($(this).closest('.authorList4').hasClass('candidates')) return;
		$(this).closest('.authorList4').find('li.active').not($(this).parent()).removeClass('active');
		$(this).parent().toggleClass('active');
	});
	
	$('.center .study .teachers .item').click(function(e) {
    var img = $(this).find(".Img");
		e.preventDefault();
		$('.teachers').find('.Img.active').not(img).removeClass('active');
			
		img.closest('.teachers')
			.find('.popup').removeAttr('style')
			.find('.arrow').removeAttr('style');
		
		img.toggleClass('active');
		
		$block = img.closest('.container');
		$popup = img.find('.popup');
		$position1 = $block.offset().left + $block.outerWidth();
		$position2 = $popup.offset().left + $popup.outerWidth();
		if($position2 > $position1) {
			$margin_l_css = Number($popup.css('margin-left').replace('px', ''));
			$margin_l = $margin_l_css - ($position2 - $position1);
			$popup.css('margin-left', $margin_l - 10);
			
			$arrow = $popup.find('.arrow');
			$arrow_margin_l_css = Number($arrow.css('margin-left').replace('px', ''));
			$arrow_margin_l = $arrow_margin_l_css + ($position2 - $position1);
			$arrow.css('margin-left', $arrow_margin_l + 10);
		}

	});
  
  
	$(document).click(function(e) {
		if ($(e.target).parents().filter(".center .authorList3 li .listItem1").length != 1) { 
			$('.center .authorList3 li').removeClass('active');
			$('.center .authorList3')
				.find('.listItem2').removeAttr('style')
				.find('.arrow').removeAttr('style');
		}
		if ($(e.target).parents().filter(".center .study .teachers .item").length != 1) { 
			$('.center .study .teachers .item .Img').removeClass('active');
			$('.center .study .teachers')
				.find('.popup').removeAttr('style')
				.find('.arrow').removeAttr('style');
		}
	});
	
	$('.center .partnersBlock .item a').hover(
		function() {
			$(this).find('img.color').animate({opacity:1}, 100);
		},
		function() {
			$(this).find('img.color').animate({opacity:0}, 100);
		}
	);
	
	$('.fancybox_ajax').fancybox({
		type:		'ajax',
		fitToView:	false,
		title:		false,
		padding:	0,
		closeBtn:	false,
		scrolling: 'visible'
	});

	$('.fancybox_iframe').fancybox({
		type:		'iframe',
		fitToView:	false,
		title:		false,
		padding:	0,
		closeBtn:	false,
		scrolling: 'visible',
		width: 690,
		afterLoad: function(){
		    $(this.content).height($(this.content).contents().find('body').outerHeight());
		}
	});
	
  /*pu*/
  $(document).on("click",".project .photoVideoBlock .more a",function(e){
    e.preventDefault();
    $(".projectPhotoLoader").show(200);
    var item = $(this);
    var rel  = item.attr("rel");
    var page = item.attr("page");
    $.ajax({
      type: "POST",
      url: "/ajax/projects/media.php",
      data: { id: rel, page:page}
    })
    .done(function( msg ) {
      $('.project .photoVideoBlock .Clear').before(msg);
      $(".projectPhotoLoader").hide();
      item.attr("page",parseInt(page)+1);
    });
  });

  $(document).on("click",".photoVideoBlock.diMedia .more a",function(e){
    e.preventDefault();
    $(".projectPhotoLoader").show(200);
    var item = $(this);
    var rel  = item.attr("rel");
    var page = item.attr("page");
    $.ajax({
      type: "POST",
      url: "/ajax/districts/media.php",
      data: { id: rel, page:page}
    })
    .done(function( msg ) {
      $('.photoVideoBlock.diMedia .Clear').before(msg);
      $(".projectPhotoLoader").hide();
      item.attr("page",parseInt(page)+1);
    });
  });


	$('#changeProjectAO').change(function(e) {
		$val = $(this).val();
		$firstOption = $('#changePD').find('option:eq(0)');
		$('#changePD').find('option').remove();
		$('#changePD').append($firstOption);
    $.ajax({
      type: "POST",
      url: "/ajax/projects/rayon.php",
      data: { rayon: $val}
    })
    .done(function( msg ) {
      $('#changePD').append(msg).val(0).CFErefresh();
    });
    reloadCandidates($val, 'o');
  });

	$('#changePD').change(function(e) {
		$val = $(this).val();
    reloadCandidates($val, 'd');
	});

  $('.fancybox_ajax_candidates').fancybox({
    type:		'ajax',
    fitToView:	false,
    title:		false,
    padding:	0,
    closeBtn:	false,
    scrolling: 'visible',
    beforeLoad : function(){
      this.href = '/ajax/projects/candidates_detailed.php?type=all';
    }
  });

  
  reloadCandidates = function(id, type){
    if(id){
      $(".candidateLoader").show(200);
      $("#candidatesList").html("");
      $.ajax({
        type: "POST",
        url: "/ajax/projects/candidates.php",
        data: { id: id, type:type}
      })
      .done(function( msg ) {
        $("#canType").val(type);
        $("#canID").val(id);
        $("#candidatesList").html(msg);
        $(".candidateLoader").hide();
      	$('.fancybox_ajax_candidates').fancybox({
      		type:		'ajax',
      		fitToView:	false,
      		title:		false,
      		padding:	0,
      		closeBtn:	false,
      		scrolling: 'visible',
          beforeLoad : function(){
            var type = $("#canType").val();
            var id = $("#canID").val();
            //var url= $(this.element).attr("id");
            this.href = '/ajax/projects/candidates_detailed.php?id='+id+'&type='+type;
          }
      	});
      });
    }
  }
});

function initHint() {
	$('input[hint], textarea[hint]').each(function(index, element) {
		
		$hint = $('<div class="hint" style="position:absolute; top:0; left:0; overflow:hidden; white-space:nowrap;"></div>');
		$hint.html($(this).attr('hint'));
		$(this).wrap('<span class="inputHint_wrap" style="position:relative; display:inline-block;"></span>').after($hint);

		if(($(this).val() != '') && ($(this).val() != $(this).attr('hint'))) {
			$(this).addClass('filled');
			$(this).parent().find('.hint').hide();
		}
	});
	$('.hint').click(function(e) {
		$(this).hide();
		$(this).parent().find('input').focus();
		$(this).parent().find('textarea').focus();
	});
	$('input[hint], textarea[hint]').focusin(function(e) {
		$(this).addClass('focused');
	});
	$('input[hint], textarea[hint]').focusout(function(e) {
		$(this).removeClass('focused');
		if($(this).val() == '' && $(this).attr('hint') != '') {
			$(this).parent().find('.hint').show();
		}
		else {
			$(this).addClass('filled');
		}
	});
}

function initTabs(){
	$('.tabsBlock').each(function(index, element) {
		$tabs = $(this).find('dt');
		if($tabs.find('a.tab').length) {
			return
		}
		$tabsContent = $(this).find('dd');
		$index = $tabs.index($tabs.filter('.active'));
		if($index == -1){
			$tabs.eq(0).addClass('active');
			$tabsContent.eq(0).addClass('active');
			
			$tabsContent.eq(0).find('.newsList ul').carouFredSel({
				auto	: false,
				circular: false,
				infinite: false,
				prev	: $tabsContent.eq(0).find('.arrowLeft'),
				next	: $tabsContent.eq(0).find('.arrowRight'),
				items	:1,
				scroll	:1,
				responsive: true
			});
		}
		else {
			$tabsContent.eq($index).addClass('active');
			
			$tabsContent.eq($index).find('.newsList ul').carouFredSel({
				auto	: false,
				circular: false,
				infinite: false,
				prev	: $tabsContent.eq($index).find('.arrowLeft'),
				next	: $tabsContent.eq($index).find('.arrowRight'),
				items	:1,
				scroll	:1,
				responsive: true
			});
		}
	});
	$('.tabsBlock dt span.tab').click(function(e) {
		$tabs = $(this).parent().parent().find('dt');
		$tabsContent = $(this).parent().parent().find('dd');
		$tabs.filter('.active').removeClass('active');
		$tabsContent.filter('.active').removeClass('active');
		$index = $tabs.index($(this).parent());
		$(this).parent().addClass('active');
		$tabsContent.eq($index).addClass('active');
		
		$tabsContent.eq($index).find('.newsList ul').carouFredSel({
			auto	: false,
			circular: false,
			infinite: false,
			prev	: $tabsContent.eq($index).find('.arrowLeft'),
			next	: $tabsContent.eq($index).find('.arrowRight'),
			items	:1,
			scroll	:1,
			responsive: true
		});
	});

  $("#profilePhoto").click(function(e){
    e.preventDefault();
    $("#profilePhotoAva").click();
  });
  $("#profilePhotoAva").change(function(e){
    e.preventDefault();
    $("#profilePhotoForm").submit();
  });
  //анимируем комментарии
  $(document).on("click",".clearForm",function(e){
    e.preventDefault();
    $(this).parent().parent().find("textarea").val('').focus();
  });

  $(".commentsBlock ul .answerLink a").click(function(e){
    e.preventDefault();
    $(".commentsBlock ul .cloneForm").each(function(){
      $(this).remove();
    })
    var cont = $(this).parent().parent();
    var rel = cont.attr("rel");
    cont.append('<div class="cloneForm addComment"></div>');
    var div = cont.find(".cloneForm");
    var newForm = $(".addComment .formAdd").clone();
    newForm.find("input[name='parent']").val(rel);
    div.append('<h3>Добавить комментарий</h3>').append(newForm);
  });
}

function getUrlVar(key){
	var result = new RegExp('[\\?&]' + key + "=([^&]*)", "i").exec(window.location.search); 
	return result && result[1] || ""; 
}                                                       

function initChk(){
	$('span.chk').each(function() {
		if($(this).find('input').is(':checked')) $(this).addClass('chkChecked');
	});
	$('span.chk input').click(function() {
		if($(this).is(':checked')) $(this).parent().addClass('chkChecked');
		else  $(this).parent().removeClass('chkChecked');
	});
}

function maxHeigth(array) {
	$maxHeight = 0;
	$(array).each(function(index, element) {
		if($(this).height()>$maxHeight){
			$maxHeight = $(this).height()
		}
	});
	return $maxHeight;
}