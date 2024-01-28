interface ITitleProps {
  title: string;
}
const Title: React.FC<ITitleProps> = ({ title }) => {
  return (
    <div className="flex justify-center gap-12 mb-24 text-3xl font-bold text-emerald-500 tracking-wider font-mono">
      <span className="text-emerald-700">/</span>
      <h1>{title}</h1>
    </div>
  );
};
export default Title;
