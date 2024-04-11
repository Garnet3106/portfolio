export type TitleProps = {
  title: string,
};

export default function Title(props: TitleProps) {
  return <span className='text-xl mt-8'>{props.title}</span>;
}
