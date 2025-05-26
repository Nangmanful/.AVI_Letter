const nodemailer = require("nodemailer");
const querystring = require("querystring");

exports.handler = async (event) => {
  const payload = querystring.parse(event.body);
  const actor = payload["배우"];
  const message = payload["메시지"];

  console.log("💬 배우 값:", actor);

  const emailMap = {
    "김창규": "89606590659@naver.com",
    "김도현": "dohyun@example.com",
    "나홍준": "hjnicky235@naver.com",
    "최재호": "b1621@dgist.ac.kr",
    "한서영": "hansy0213@dgist.ac.kr",
    "박소담": "dalnim0517@dgist.ac.kr",
    "전연규": "wjsdusrb0297@dgist.ac.kr",
    "지태현": "gusxowl.1@dgist.ac.kr",
    "김희수": "kimheesu713@naver.com",
    "문수연": "gusxowl.1@dgist.ac.kr",
    "서은우": "dmsdn1090@dgist.ac.kr",
    "김항": "kimhang@dgist.ac.kr",
    "김윤서": "yoonseo.7@dgist.ac.kr",
    "김민한": "minhan@example.com",
    "김정현": "j456ay@dgist.ac.kr"
  };

  const recipient = emailMap[actor];
  if (!recipient) {
    return { statusCode: 400, body: "Unknown actor" };
  }

  // ✅ Gmail SMTP 설정
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,       // ex) youraccount@gmail.com
      pass: process.env.GMAIL_APP_PASS    // ex) 앱 비밀번호 (16자리)
    }
  });

  const mailOptions = {
    from: `"한뼘사이 응원메일" <${process.env.GMAIL_USER}>`,
    to: recipient,
    subject: `${actor}님께 도착한 응원의 메시지`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent to:", recipient);
    return { statusCode: 200, body: "Email sent successfully via Gmail" };
  } catch (error) {
    console.error("❌ Error sending Gmail:", error.message);
    return { statusCode: 500, body: "Error sending email via Gmail" };
  }
};
