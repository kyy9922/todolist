// nav 버튼 누르면
// 모든버튼에 붙은 orange클래스 제거
// 버튼에 orange 클래스명 추가
// 모든 div에 붙은 show 클래스명 제거
// div0에 show 클래스명 추가


$('.tab-button').eq(0).on('click', function(){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(0).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show')
});

// $('.tab-button').eq(1).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(1).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show')
// });

// $('.tab-button').eq(2).on('click', function(){
//     $('.tab-button').removeClass('orange');
//     $('.tab-button').eq(2).addClass('orange');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show')
// });

// for(let i = 0; i< 3; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         $('.tab-button').removeClass('orange');
//         $('.tab-button').eq(i).addClass('orange');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show')
//     });
// }


// for (let i = 0; i< 3; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i)
//     })
// }

$('.list').click(function(e){    
    탭열기(e.target.dataset.id)
})


// $('.list').click(function(e){
//     if(e.target == document.querySelectorAll('.tab-button')[0]){
//         탭열기(0);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[1]){
//         탭열기(1);
//     }
//     if(e.target == document.querySelectorAll('.tab-button')[2]){
//         탭열기(2);
//     }
// })

function 탭열기(구멍){    
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(구멍).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(구멍).addClass('show')
}
















