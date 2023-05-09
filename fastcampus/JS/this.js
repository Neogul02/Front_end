// this
// 일반함수는 호출 위치에서 따라 this 정의
// 화살표 함수는 자신이 선언된 함수 범위에서 this 정의

const heropy = {
  name: 'HEROPY',
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  },
};
heropy.normal();
heropy.arrow();

const amy = {
  name: 'Amy',
  normal: heropy.normal(),
  arrow: heropy.arrow(),
};

const timer={
  name: '진형쓰',
  timeout: function(){
    setTimeout(() => {
      console.log(this.name) // 여기서의 this는 timer
    }, 2000); // 2000ms => 2s
  }
}

