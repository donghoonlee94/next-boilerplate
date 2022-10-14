import { useForm, Controller } from 'react-hook-form';
import { Checkbox } from 'antd';
import { NextPage } from 'next';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const Home: NextPage = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      checkbox: false,
    },
  });
  const onSubmit = (data: any) => console.log(data);

  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const CheckboxC = () => <Checkbox onChange={onChange}>Checkbox</Checkbox>;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <Controller
        name="checkbox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <Checkbox {...field} />}
      /> */}
      <CheckboxC />
      <input type="submit" />
    </form>
  );
};

export default Home;
