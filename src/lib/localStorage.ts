export interface Message {
  id: string;
  content: string | null;
  type: 'text' | 'image' | 'audio' | 'video' | 'payment_buttons' | 'pix_payment';
  media_url: string | null;
  audio_duration: number | null;
  is_from_lead: boolean;
  read: boolean;
  read_status: 'sending' | 'sent' | 'delivered' | 'read';
  created_at: string;
  pix_data?: {
    qrcodeImage: string;
    qrcode: string;
  };
}

export interface FunnelStep {
  action_type: 'send_message' | 'wait_for_reply' | 'show_payment_buttons' | 'show_pix_payment' | 'wait_for_payment';
  message_content?: string;
  message_type?: 'text' | 'image' | 'audio' | 'video';
  media_url?: string;
  audio_duration?: number;
  typing_delay?: number;
}

const FUNNEL_STATE_KEY = 'whatsapp_funnel_state';
const PAYMENT_DATA_KEY = 'whatsapp_payment_data';
const MESSAGES_KEY = 'whatsapp_messages';

export const FUNNEL_STEPS: FunnelStep[] = [
  {
    action_type: 'wait_for_reply'
  },
  {
    action_type: 'send_message',
    message_content: 'Oii meu amor, tudo bomm?',
    message_type: 'text',
    typing_delay: 5000
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-01.mp3&version_id=null',
    audio_duration: 15,
    typing_delay: 2000
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-02.mp3&version_id=null',
    audio_duration: 10,
    typing_delay: 20000
  },
  {
    action_type: 'send_message',
    message_type: 'video',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=video-01.mp4&version_id=null',
    typing_delay: 8000
  },
  {
    action_type: 'send_message',
    message_content: 'Se você quiser mais uns videozinhos pra vc, me diz 😉',
    message_type: 'text',
    typing_delay: 5000
  },
  {
    action_type: 'wait_for_reply'
  },
  {
    action_type: 'send_message',
    message_content: 'tábom vida! Vou te enviar só mais algumas pra você me conhecer melhor!',
    message_type: 'text',
    typing_delay: 9000
  },
  {
    action_type: 'send_message',
    message_type: 'video',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=video-02.mp4&version_id=null',
    typing_delay: 7000
  },
  {
    action_type: 'send_message',
    message_type: 'video',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=video-03.mp4&version_id=null',
    typing_delay: 7000
  },
  {
    action_type: 'send_message',
    message_content: 'Eu neeem deveria ta te mandando esses videos, mas vou te mandar pq você tá merecendo 😘😘',
    message_type: 'text',
    typing_delay: 15000
  },
  {
    action_type: 'send_message',
    message_type: 'video',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=video-04.mp4&version_id=null',
    typing_delay: 9000
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-03.mp3&version_id=null',
    audio_duration: 8,
    typing_delay: 10000
  },
  {
    action_type: 'send_message',
    message_content: 'vc gostou vida?',
    message_type: 'text',
    typing_delay: 5000
  },
  {
    action_type: 'wait_for_reply'
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-04.mp3&version_id=null',
    audio_duration: 12,
    typing_delay: 10000
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-05.mp3&version_id=null',
    audio_duration: 10,
    typing_delay: 15000
  },
  {
    action_type: 'send_message',
    message_content: 'Vou te enviar 50 vídeos e fotos na promoção só de HOJE!\n\n*Vai ficar apenas 10 reais*\n\nVai ser vídeos e fotos pra te fazer gozar rapidinho amoor!',
    message_type: 'text',
    typing_delay: 13000
  },
  {
    action_type: 'send_message',
    message_content: 'Vão ser varios videos dando a minha bctinha, me masturbando todinha, me gozando, gemendo e gozadinha na minha cara\n\nE o melhor de tudo, eu também faço *chamadinhas*, se vc quiser uma chamadinha privada só eu e vc, eu faço por 10 minutinhos pra vc, ficando apenas *20 reais* 😘',
    message_type: 'text',
    typing_delay: 10000
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-06.mp3&version_id=null',
    audio_duration: 12,
    typing_delay: 15000
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-07.mp3&version_id=null',
    audio_duration: 11,
    typing_delay: 15000
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-08.mp3&version_id=null',
    audio_duration: 9,
    typing_delay: 10000
  },
  {
    action_type: 'send_message',
    message_content: 'Vou te mostrar um poquinho da minha galeria pra você ver o que tem meu anjo 😘',
    message_type: 'text',
    typing_delay: 10000
  },
  {
    action_type: 'send_message',
    message_type: 'video',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=previa.mp4',
    typing_delay: 10000
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-09.mp3&version_id=null',
    audio_duration: 8,
    typing_delay: 10000
  },
  {
    action_type: 'send_message',
    message_type: 'audio',
    media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-10.mp3&version_id=null',
    audio_duration: 10,
    typing_delay: 10000
  },
  {
    action_type: 'send_message',
    message_content: 'Minha chave pix é esse telefone aqui embaixo 👇 é só apertar em cima que vai copiar!',
    message_type: 'text',
    typing_delay: 1000
  },
  {
    action_type: 'send_message',
    message_content: '11987335196',
    message_type: 'text',
    typing_delay: 1000
  },
  {
    action_type: 'send_message',
    message_content: 'O nome da agência é essa: A D Emp Digitais',
    message_type: 'text',
    typing_delay: 1000
  },
  {
    action_type: 'send_message',
    message_content: 'Fico no aguardo do comprovante aqui meu anjoo 😘',
    message_type: 'text',
    typing_delay: 1000
  },
  {
    action_type: 'wait_for_reply'
  }
  // PAGAMENTOS DESATIVADOS - INTEGRAÇÃO REMOVIDA
  // {
  //   action_type: 'show_payment_buttons'
  // },
  // {
  //   action_type: 'show_pix_payment'
  // },
  // {
  //   action_type: 'send_message',
  //   message_type: 'audio',
  //   media_url: 'https://console-typebot-minio.kjufc9.easypanel.host/api/v1/buckets/hot-mj/objects/download?preview=true&prefix=audio-15.mp3&version_id=null',
  //   typing_delay: 10000
  // },
  // {
  //   action_type: 'send_message',
  //   message_content: 'Quando fizer o pagamento me fala aqui pra mim verificar!',
  //   message_type: 'text',
  //   typing_delay: 2000
  // },
  // {
  //   action_type: 'wait_for_payment'
  // }
];

export interface PaymentData {
  qrcode_image: string;
  qrcode: string;
  qrcode_id: string;
  amount: number;
}

export const localStorageDB = {
  funnelState: {
    get: (): number => {
      const data = localStorage.getItem(FUNNEL_STATE_KEY);
      return data ? parseInt(data, 10) : 0;
    },

    set: (step: number): void => {
      localStorage.setItem(FUNNEL_STATE_KEY, step.toString());
    },

    reset: (): void => {
      localStorage.setItem(FUNNEL_STATE_KEY, '0');
    }
  },

  paymentData: {
    get: (): PaymentData | null => {
      const data = localStorage.getItem(PAYMENT_DATA_KEY);
      return data ? JSON.parse(data) : null;
    },

    set: (data: PaymentData): void => {
      localStorage.setItem(PAYMENT_DATA_KEY, JSON.stringify(data));
    },

    clear: (): void => {
      localStorage.removeItem(PAYMENT_DATA_KEY);
    }
  },

  messages: {
    get: (): Message[] => {
      const data = localStorage.getItem(MESSAGES_KEY);
      return data ? JSON.parse(data) : [];
    },

    set: (messages: Message[]): void => {
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
    },

    add: (message: Message): void => {
      const messages = localStorageDB.messages.get();
      messages.push(message);
      localStorageDB.messages.set(messages);
    },

    update: (messageId: string, updates: Partial<Message>): void => {
      const messages = localStorageDB.messages.get();
      const updatedMessages = messages.map(msg =>
        msg.id === messageId ? { ...msg, ...updates } : msg
      );
      localStorageDB.messages.set(updatedMessages);
    },

    clear: (): void => {
      localStorage.removeItem(MESSAGES_KEY);
    }
  }
};
