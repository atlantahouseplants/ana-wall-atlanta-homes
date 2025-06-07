import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  variant: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "xl";
  disabled?: boolean;
}

const CTAButton = ({ 
  variant, 
  children, 
  onClick, 
  href, 
  className, 
  size = "lg",
  disabled = false 
}: CTAButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "forest"; // Book Free Office Plant Audit
      case "secondary":
        return "sage"; // Schedule Plant Doctor Visit
      case "tertiary":
        return "earth"; // Calculate Succulent Order
      default:
        return "forest";
    }
  };

  const buttonContent = (
    <Button
      variant={getVariantStyles() as any}
      size={size}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl",
        className
      )}
    >
      {children}
    </Button>
  );

  // If href is provided, wrap in anchor tag
  if (href && !disabled) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};

// Pre-configured CTA buttons for the three main actions
export const BookAuditCTA = ({ className, ...props }: Omit<CTAButtonProps, "variant" | "children">) => (
  <CTAButton variant="primary" className={className} {...props}>
    Book Free Office Plant Audit
  </CTAButton>
);

export const SchedulePlantDoctorCTA = ({ className, ...props }: Omit<CTAButtonProps, "variant" | "children">) => (
  <CTAButton variant="secondary" className={className} {...props}>
    Schedule Plant Doctor Visit
  </CTAButton>
);

export const CalculateOrderCTA = ({ className, ...props }: Omit<CTAButtonProps, "variant" | "children">) => (
  <CTAButton variant="tertiary" className={className} {...props}>
    Calculate Succulent Order
  </CTAButton>
);

export default CTAButton;
