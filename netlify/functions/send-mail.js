const sgMail = require("@sendgrid/mail");
// send-mail.js 상단에 추가
const querystring = require("querystring");

exports.handler = async (event) => {
  const { payload } = JSON.parse(event.body);
  const actor = payload["배우"];
  const message = payload["메시지"];

  const emailMap = {
    "김창규": "89606590659@naver.com",
    "김도현": "dohyun@example.com",
    "나홍준": "hongjun@example.com",
    "최재호": "jaeho@example.com",
    "한서영": "seoyoung@example.com",
    "박소담": "sodam@example.com",
    "전연규": "yeongyu@example.com",
    "지태현": "taehyun@example.com",
    "김희수": "heesu@example.com",
    "문수연": "sooyeon@example.com",
    "서은우": "eunwoo@example.com",
    "김항": "hang@example.com",
    "김윤서": "yunseo@example.com",
    "김민한": "minhan@example.com",
    "김정현": "junghyun@example.com"
  };

  const recipient = emailMap[actor];
  if (!recipient) {
    return { statusCode: 400, body: "Unknown actor" };
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const email = {
    to: recipient,
    from: {
      email: "your_verified_sender@example.com",
      name: "한뼘사이 응원메일"
    },
    subject: `${actor}님께 도착한 응원의 메시지`,
    text: message,
  };

  try {
    await sgMail.send(email);
    return { statusCode: 200, body: "Email sent successfully" };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: "Error sending email" };
  }
};