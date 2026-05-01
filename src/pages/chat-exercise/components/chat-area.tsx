import { Arcticle } from "../../../ui/arcticle";
import { Lime } from "../../../ui/lime-components";
import { Button } from "../../../ui/button";
import { useState } from "react";
import { useChatCtx } from "../chat-context";

export const ChatArea = () => {
  const { AddMessage, messages, user } = useChatCtx();
  const [userText, setUserText] = useState<string>("");
  const [botText, setBotText] = useState<string>("");

  const handleUserClick = () => {
    AddMessage({
      message: userText,
      sender: "user",
    });
    setUserText("");
  };

  const handleBotClick = () => {
    AddMessage({
      message: botText,
      sender: "chatbot",
    });
    setBotText("");
  };

  return (
    <Arcticle.HalfArea className="w-full">
      <Arcticle.Title content="Welcome tho chat exercise" />
      <Arcticle.HalfArea className="w-5/6 h-full overflow-y-scroll">
        <ol>
          {messages.map((m) => {
            return (
              <li className="w-full flex">
                {m.sender === "chatbot" ? (
                  <Arcticle.Area className="w-1/3 mr-auto">
                    <Arcticle.Title content="Bot" />
                    <Arcticle.Paragraph content={m.message} />
                  </Arcticle.Area>
                ) : (
                  <Lime.Area className="w-1/3 ml-auto">
                    <Arcticle.Title content={user ?? ""} />
                    <Arcticle.Paragraph content={m.message} />
                  </Lime.Area>
                )}
              </li>
            );
          })}
        </ol>
      </Arcticle.HalfArea>
      <section className="w-5/6 mx-auto">
        <Lime.Input
          className="w-5/6"
          placeholder={`${user} Digita a Mensagem`}
          onEnter={handleUserClick}
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <Button label="Enviar" onClick={handleUserClick} />
      </section>
      <section className="w-5/6 mx-auto">
        <Lime.Input
          className="w-5/6"
          placeholder="Chat Digita a Mensagem"
          onEnter={handleBotClick}
          value={botText}
          onChange={(e) => setBotText(e.target.value)}
        />
        <Button label="Enviar" onClick={handleBotClick} />
      </section>
    </Arcticle.HalfArea>
  );
};
