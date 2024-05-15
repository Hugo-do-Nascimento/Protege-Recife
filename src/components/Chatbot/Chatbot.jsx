import { useEffect } from 'react'

const Chatbot = () => {
 
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@typebot.io/js@0.2/dist/web.js';
        script.type = 'module';
        script.async = true;
        script.onload = () => {
          window.Typebot.initBubble({
            typebot: "protege-recife-hij5lhi",
            previewMessage: {
              message: "Olá! Estou aqui para ajudar. Me pergunte qualquer coisa!",
              autoShowDelay: 10000,
              avatarUrl: "https://s3.typebot.io/public/workspaces/cludb878h000i4o4m9t9hos6l/typebots/clv8d8k9a0004htsh5hij5lhi/hostAvatar?v=1713791780723",
            },
            theme: {
              button: { backgroundColor: "#0042DA" },
              chatWindow: { backgroundColor: "#171923" },
            },
          });
        };
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    

  return null;
}

export default Chatbot