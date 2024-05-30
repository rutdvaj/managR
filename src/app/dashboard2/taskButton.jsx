import { Button } from "@/components/ui/button";

const Buttontask = ({ children }) => {
  return (
    <Button className="font-poppins text-20px text-white bg-verydark font-regular p-8 rounded-34px text-center">
      {children}
    </Button>
  );
};

export default Buttontask;
