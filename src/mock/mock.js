import Mock from 'mockjs';

Mock.mock('Chart.com', {
  'data|5': [{
    Chartiamges: '@image((720x300, @color, #FFF, png, @string)',
  }],
});

Mock.mock('getindex.com', {
  'data|5': [{
    images: '@image((200x200, @color, #FFF, png, @string)',
    Title: '@csentence(1, 30)',
    Number: '@integer(9999,10000)',
    Price: '@float(1, 10, 1, 0)',
    subsidy: '@float(45, 46, 1, 0)',
    original: '@float(49, 49, 1, 0)',
    btn: '@float(3, 4, 1, 1)',
  }],
});
Mock.mock('Content.com', {
  'data|1': [{
    Cobtentiamges: '@image((200x200, @color, #FFF, png, @string)',
  }],
});
