import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserInput from "@/components/userInput";

const UserHome = () => {
  return (
    <main className='grid min-h-dvh w-screen items-center justify-items-center'>
      <Card className='w-11/12'>
        <CardHeader>
          <CardTitle>ようこそ！</CardTitle>
          <CardDescription>
            印刷されている番号を入力してください
          </CardDescription>
          <CardContent>
            <UserInput />
          </CardContent>
        </CardHeader>
      </Card>
    </main>
  );
};

export default UserHome;
