import { Button } from "@/components/ui/button";
import { useCommon } from "@/hooks/useCommon";

export function AppHeader() {
  const { handleCanvasMode } = useCommon();

  return (
    <>
      <header className="flex h-10 shrink-0 items-center gap-2  px-4 bg-gray-50">
        <div>헤더영역</div>
      </header>
    </>
  );
}
