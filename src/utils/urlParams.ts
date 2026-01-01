interface Names {
  recipient: string;
  sender: string;
  template: string;
}

export const getNamesFromUrl = (): Names => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    recipient: urlParams.get('name') || urlParams.get('n') || 'Amig@',
    sender: urlParams.get('author') || urlParams.get('a') || 'Jose B Tlehuactle Ortega',
    template: urlParams.get('template') || urlParams.get('t') || 'default'
  };
};


export const createShareableUrl = (recipient: string, sender: string, template: string = 'default'): string => {
  const baseUrl = window.location.origin + window.location.pathname;
  const encodedRecipient = encodeURIComponent(recipient);
  const encodedSender = encodeURIComponent(sender);
  return `${baseUrl}?n=${encodedRecipient}&a=${encodedSender}&t=${template}`;
};

export const getCurrentYear = (): number => {
  return new Date().getFullYear();
};