export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, phone, option, pageUrl } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ ok: false, error: 'Missing name or phone' });
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return res.status(500).json({ ok: false, error: 'Telegram env vars missing' });
    }

    const text =
      `🧾 *Новая заявка MIRROIL*\n\n` +
      `👤 Имя: *${escape(name)}*\n` +
      `📞 Телефон: *${escape(phone)}*\n` +
      `🎯 Опция: *${escape(option || '-')}*\n` +
      `🌐 Страница: ${escape(pageUrl || '-')}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'MarkdownV2',
        disable_web_page_preview: true,
      }),
    });

    const tgData = await tgRes.json();

    if (!tgData.ok) {
      return res.status(500).json({ ok: false, telegram: tgData });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ ok: false, error: String(err) });
  }
}

function escape(text) {
  return String(text).replace(/[_*[\]()~`>#+=|{}.!-]/g, '\\$&');
}