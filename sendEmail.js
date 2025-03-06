require('dotenv').config();
const sgMail = require('@sendgrid/mail');

// 環境変数からAPIキーを取得
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async () => {
  try {
    const msg = {
      to: 'example@gmail.com', // 送信先
      from: process.env.SENDGRID_SENDER_EMAIL, // 送信元（認証済み）
      subject: 'SendGridでメール送信テスト',
      text: 'このメールはSendGrid APIを使用して送信されました。',
      html: '<strong>このメールはSendGrid APIを使用して送信されました。</strong>',
    };

    await sgMail.send(msg);
    console.log('📩 メール送信成功！');
  } catch (error) {
    console.error('❌ メール送信失敗:', error.response ? error.response.body : error.message);
  }
};

// 関数を実行
sendEmail();