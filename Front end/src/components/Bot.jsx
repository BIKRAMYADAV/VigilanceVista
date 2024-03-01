import React, { useEffect } from 'react';

const BotPressChat = () => {
  useEffect(() => {
    // Load Botpress Webchat script
    const webchatScript = document.createElement('script');
    webchatScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    webchatScript.async = true;
    document.body.appendChild(webchatScript);

    // Load Botpress Webchat config script
    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/512e7aaf-b1e3-4625-a36d-f840867d6690/webchat/config.js';
    configScript.defer = true;
    document.body.appendChild(configScript);

    // Clean up function to remove scripts when component unmounts
    return () => {
      document.body.removeChild(webchatScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return (
    <div>
      {/* Add any additional content or components */}
    </div>
  );
};

export default BotPressChat;