# 🎭 점아비 응원 메시지 페이지

연극 동아리 **<점아비>** 부원들을 위한 **익명의 응원 메시지 전송 페이지**입니다.  
누구나 자유롭게 메시지를 입력하면, 지정된 배우에게 해당 메시지가 이메일로 전송됩니다.

---

## 💡 주요 기능

✅ **응원 메시지 입력 폼**  
간단한 텍스트 입력을 통해 누구나 메시지를 남길 수 있습니다.

✅ **배우별 메시지 전송**  
선택한 배우에게 대응되는 이메일로 메시지를 자동 전송합니다.

✅ **Netlify 기반 정적 페이지 배포**  
빠르고 간편한 배포를 위해 Netlify를 사용했습니다.

✅ **서버리스 이메일 처리**  
Form Submission → Netlify Function → Gmail SMTP 이메일 전송 흐름을 구성했습니다.

---

## 🚀 기술 스택

- HTML / CSS / JavaScript (Vanilla)
- [Netlify Forms](https://docs.netlify.com/forms/setup/) & [Netlify Functions](https://docs.netlify.com/functions/overview/)
- 이메일 전송: Gmail SMTP + Node.js (`nodemailer`)

---

## 📦 사용 방법

1. **페이지 접속**
2. **배우 선택 + 메시지 입력**
3. **[보내기] 클릭 → 이메일 전송 완료!**
4. **3초 후 자동으로 배우 선택 페이지로 돌아감**

---

## 🛠️ 예시 이미지

![KakaoTalk_20250525_233456939_01](https://github.com/user-attachments/assets/8430e064-9424-4d28-8829-9f731dea73c7)

![KakaoTalk_20250525_233456939_02](https://github.com/user-attachments/assets/cc212a5c-5110-4ee1-abbd-b5d7dfad3fa9)

![KakaoTalk_20250525_233456939_03](https://github.com/user-attachments/assets/981e6383-f9f9-4437-9a96-2a3341a3ae08)
