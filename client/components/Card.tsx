import {
  Card as CardUI,
  CardBody,
  CardHeader,
  Button as ButtonUI,
} from "@heroui/react";
import LocalLink from "next/link";
import Spinner from "@/components/Spinner";

interface Props {
  children: React.ReactNode;
  title: string;
  renderExtra?: React.ReactNode;
  isLoading?: boolean;
}

export default function Card({
  title,
  renderExtra,
  children,
  isLoading,
}: Props) {
  return (
    <CardUI className={"w-full"}>
      <CardHeader>
        <div className={"flex justify-between w-full"}>
          <h2 className={"text-xl font-semibold"}>{title}</h2>
          {renderExtra}
        </div>
      </CardHeader>
      <CardBody className={"w-full"}>
        {isLoading ? <Spinner /> : children}
      </CardBody>
    </CardUI>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  href: string;
}

export const ExtraButton = ({ children, href }: ButtonProps) => {
  return (
    <ButtonUI
      as={LocalLink}
      href={href}
      color="primary"
      variant="solid"
      size={"sm"}
    >
      {children}
    </ButtonUI>
  );
};
