import { useToast } from "@/components/ui/use-toast";

type ArgsNotifications = {
  title: string;
  description: string;
};

export const useNotifications = () => {
  const { toast } = useToast();

  const successNotification = ({
    title,
    description = "",
  }: Partial<ArgsNotifications>) => {
    toast({
      title,
      description,
      className: "bg-[#D4EDDA] text-[#155724] border border[#C3E6CB]",
    });
  };

  const errorNotification = ({
    title,
    description = "",
  }: Partial<ArgsNotifications>) => {
    toast({
      title,
      description,
      className: "bg-[#F8D7DA] text-[#721C24] border border-[#F5C6CB]",
    });
  };

  return {
    errorNotification,
    successNotification,
  };
};
