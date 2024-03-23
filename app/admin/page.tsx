import { Button } from "@/components/ui/button";
import { Register } from "@/components/ui/icons";

const AdminHome = () => {
  return (
    <main className='grid min-h-dvh w-screen items-center justify-items-center'>
      <div className='space-y-2'>
        <Register />
        <div className='flex justify-center gap-4'>
          <Button>新規作成</Button>
          <Button>履歴確認</Button>
        </div>
      </div>
    </main>
  );
};

export default AdminHome;
