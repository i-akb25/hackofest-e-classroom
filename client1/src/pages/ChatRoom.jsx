import React, { useEffect } from 'react';

function BotPressWebChat() {
  useEffect(() => {
    const injectScript = document.createElement('script');
    injectScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    document.body.appendChild(injectScript);

    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/274db4f1-67e0-4058-b5ed-065a28bc65d2/webchat/config.js';
    configScript.defer = true;
    document.body.appendChild(configScript);

    return () => {
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return null; // or any other JSX you want to return alongside the script
}

export default BotPressWebChat;