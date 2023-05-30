import { twMerge } from "tailwind-merge";
import Avatar, { AvatarProps } from "components/Avatar/Avatar";
import { forwardRef } from "react";

export type ChatBubbleAvatarProps = AvatarProps;

const ChatBubbleAvatar = forwardRef<HTMLDivElement, ChatBubbleAvatarProps>(
  ({ size = "xs", shape = "circle", className, ...props }, ref) => (
    <Avatar
      size={size}
      shape={shape}
      {...props}
      className={twMerge("chat-image", className)}
      ref={ref}
    />
  )
);

export default ChatBubbleAvatar;
