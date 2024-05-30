import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function TaskType({ onTaskTypeChange }) {
  const handleRadioChange = (value) => {
    onTaskTypeChange(value);
  };

  return (
    <RadioGroup defaultValue="codebase-changes" onChange={handleRadioChange}>
      <div className="flex items-center gap-4">
        <RadioGroupItem value="codebase-changes">
          Codebase Changes
        </RadioGroupItem>
        <RadioGroupItem value="redesign-request">
          Redesign Request
        </RadioGroupItem>
        <RadioGroupItem value="feedback">Feedback</RadioGroupItem>
      </div>
    </RadioGroup>
  );
}
