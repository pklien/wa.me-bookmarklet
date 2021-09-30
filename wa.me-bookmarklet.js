// add this code as your bookmark

javascript:(function(){ var waNumber = prompt('WhatsApp Telephone', '');if (waNumber != null) {waUrl = ('https://api.whatsapp.com/send/?phone=' + decodeURIComponent(waNumber)).trim();waUrl = waUrl.replace(/\s/g, '');waUrl = waUrl.replace(/-/g, '');window.location.href = waUrl;} })();
