"use client";
import { ShareNetwork } from "@phosphor-icons/react";

function SendLinkByMail() {
  const subject = "Veja esta lista de itens";
  let body = "Estou compartilhando com você uma lista de itens:\r\n\r\n";
  body += window.location.href;
  body += "\r\n\r\n";
  let uri = "mailto:?subject=";
  uri += encodeURIComponent(subject);
  uri += "&body=";
  uri += encodeURIComponent(body);
  window.open(uri);
}

export const Share = () => {
  return (
    <ShareNetwork
      size={30}
      className="cursor-pointer"
      onClick={() => {
        SendLinkByMail();
      }}
    />
  );
};
