import { ChatInput } from "@/components/chat/chat-input";
import ChatArea from "@/components/chat/chat-area";

export function AppLeft() {
  return (
    <div className="flex-1">
      <ChatArea />
      <ChatInput />
    </div>
  );
}
