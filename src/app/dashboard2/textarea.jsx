import { Textarea } from "@/components/ui/textarea";
const TextareaDemo = ({ value, onChange }) => {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      className="your-custom-class"
      placeholder="Type Your thoughts here.."
    />
  );
};

export default TextareaDemo;
