interface IDiscordIconData {
  width: string;
  height: string;
}
export default function DiscordIcon(data: IDiscordIconData) {
  return (
    <svg
      width={data.width}
      height={data.height}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.862 16.15C21.862 17.187 21.097 18.037 20.128 18.037C19.176 18.037 18.394 17.187 18.394 16.15C18.394 15.113 19.159 14.263 20.128 14.263C21.097 14.263 21.862 15.113 21.862 16.15ZM13.923 14.263C12.954 14.263 12.189 15.113 12.189 16.15C12.189 17.187 12.971 18.037 13.923 18.037C14.892 18.037 15.657 17.187 15.657 16.15C15.674 15.113 14.892 14.263 13.923 14.263ZM31.875 3.502V34C27.5922 30.2152 28.9619 31.4681 23.987 26.843L24.888 29.988H5.61C3.689 29.988 2.125 28.424 2.125 26.486V3.502C2.125 1.564 3.689 0 5.61 0H28.39C30.311 0 31.875 1.564 31.875 3.502ZM27.03 19.618C27.03 14.144 24.582 9.707 24.582 9.707C22.134 7.871 19.805 7.922 19.805 7.922L19.567 8.194C22.457 9.078 23.8 10.353 23.8 10.353C19.7618 8.13975 15.0182 8.13935 11.101 9.86C10.472 10.149 10.098 10.353 10.098 10.353C10.098 10.353 11.509 9.01 14.569 8.126L14.399 7.922C14.399 7.922 12.07 7.871 9.622 9.707C9.622 9.707 7.174 14.144 7.174 19.618C7.174 19.618 8.602 22.083 12.359 22.202C12.359 22.202 12.988 21.437 13.498 20.791C11.339 20.145 10.523 18.785 10.523 18.785C10.7731 18.96 11.1855 19.187 11.22 19.21C14.0894 20.8169 18.1653 21.3434 21.828 19.805C22.423 19.584 23.086 19.261 23.783 18.802C23.783 18.802 22.933 20.196 20.706 20.825C21.216 21.471 21.828 22.202 21.828 22.202C25.585 22.083 27.03 19.618 27.03 19.618V19.618Z"
        fill="black"
      />
    </svg>
  );
}
