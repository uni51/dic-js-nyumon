$(function() {
  $('.tab li').click(function() {
      
    // すべてのタブからselectクラスを取り除く
    $('.tab li').removeClass('select');
    
    // クリックされたタブにクラスselectをつけます。
　　 $(this).addClass('select');
　　 
    // `liタグ`にクラス`hide`を設定
　　 $('.content li').addClass('hide');
　　 
    // 何番目の子要素か調べる
    const index = $('.tab li').index($(this));
    // ↑で取得したindex値から該当するコンテンツを取得
    $('.content li').eq(index).removeClass('hide'); // クラス`hide`を取り除く
  });
});