"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
const formschema = z.object({
  number: z.string().min(2, {
    message: "番号は2文字です",
  }),
  count: z.string(),
});

const UserInput = () => {
  const form = useForm<z.infer<typeof formschema>>({
    resolver: zodResolver(formschema),
    defaultValues: {
      number: "",
      count: "",
    },
  });
  const handleSubmit = (
    values: z.infer<typeof formschema>,
  ) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className='space-y-3'>
        <FormField
          control={form.control}
          name='number'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>番号</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  {...field}
                  className='text-lg'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='count'
          render={({ field }) => (
            <FormItem className='space-y-1'>
              <FormLabel>人数</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange}>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={"人数を選択してください"}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value='1'>1人</SelectItem>
                      <SelectItem value='2'>2人</SelectItem>
                      <SelectItem value='3'>3人</SelectItem>
                      <SelectItem value='4'>4人</SelectItem>
                      <SelectItem value='5'>5人</SelectItem>
                      <SelectItem value='6'>6人</SelectItem>
                      <SelectItem value='7'>7人</SelectItem>
                      <SelectItem value='8'>8人</SelectItem>
                      <SelectItem value='9'>9人</SelectItem>
                      <SelectItem value='10'>
                        10人
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='pt-4'>
          <Button type='submit' className='w-full'>
            メニューを見る
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserInput;
