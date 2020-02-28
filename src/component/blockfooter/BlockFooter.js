import React from "react";

export const BlockFooter = () => {
  const styleLink = {
    fontWeight: "normal",
    color: "#222222",
    textDecoration: "none",
    borderBottom: "1px solid rgba(34, 34, 34, .2)"
  };

  return (
    <div
      style={{
        paddingTop: "25px",
        paddingBottom: "25px",
        borderTop: "1px solid #eaeaea",
        marginTop: "100px"
      }}
    >
      <p
        style={{
          fontFamily: "Roboto, Arial, sans-serif",
          fontSize: "15px",
          color: "#222222",
          fontWeight: "normal",
          lineHeight: "1.5",
          marginTop: "0",
          marginBottom: "15px"
        }}
      >
        Астросоветы, тематические тесты, прогнозы и видеогадания на наших
        страницах в 
        <a
          href="https://odnoklassniki.ru/astro7"
          style={styleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          ОК
        </a>
        ,{" "}
        <a
          href="https://youtube.com/user/astro7ru"
          style={styleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        ,{" "}
        <a
          href="https://vk.com/astro7"
          style={styleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          ВКонтакте
        </a>
        ,{" "}
        <a
          href="https://facebook.com/astro7.ru"
          style={styleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>{" "}
        и 
        <a
          href="https://twitter.com/astro7ru"
          style={styleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        .
      </p>
      <p
        style={{
          fontFamily: "Roboto, Arial, sans-serif",
          fontSize: "13px",
          color: "#222222",
          fontWeight: "normal",
          lineHeight: "1.6",
          padding: "0"
        }}
        valign="top"
      >
        Вы можете{" "}
        <a
          href="https://astro7.ru/contacts/?{PIXEL_LETTER_CLICKED}"
          style={styleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          позвонить или написать
        </a>{" "}
        нам в Круглосуточный Центр поддержки клиентов,{" "}
        <a
          href="{UNSUBSCRIBE_LINK}&amp;{PIXEL_LETTER_CLICKED}"
          style={styleLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          отписаться от рассылки
        </a>{" "}
        или{" "}
        <a
          href="{UNSUBSCRIBE_LINK}&amp;{PIXEL_LETTER_CLICKED}"
          style={styleLink}
          target="_blank"
        >
          управлять рассылкой
        </a>{" "}
        сервиса Astro7.
      </p>
    </div>
  );
};
