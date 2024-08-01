const express = require('express');
const request = require('request'); // request 라이브러리 사용
const cookieParser = require('cookie-parser'); // 쿠키 파싱을 위한 라이브러리
const cors = require('cors');
const app = express();
const port = 3001;

// 쿠키 파서 미들웨어 사용
app.use(cookieParser());
app.use(cors());

app.get('/api/get-cookies', (req, res) => {
  const options = {
    url: 'https://naoman.site',
    method: 'GET',
    jar: request.jar(), // 쿠키 저장을 위한 jar,
  };

  request(options, (error, response) => {
    if (error) {
      console.error('Request error:', error); // 오류 로그 출력
      return res.status(500).send('Error fetching cookies');
    }
    if (!error && response.statusCode === 200) {
      console.log(response.headers);
      // 응답 헤더에서 쿠키를 가져옴
      const cookies = response.headers['set-cookie'];
      res.json({ cookies }); // 쿠키를 JSON 형식으로 응답
    } else {
      console.log('Response status code:', response.statusCode); // 상태 코드 출력
      res.status(500).send('Error fetching cookies');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
