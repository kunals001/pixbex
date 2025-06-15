import { BentoCard } from "../magicui/bento-grid";
import Image from "next/image";

type Props = {
  className?: string;
  Icon: React.ElementType;
  name: string;
  href: string;
  cta: string;
  desc: string;
  src: string;
};

const Back = ({ className, src }: { className?: string; src: string }) => (
  <Image
    src={src}
    alt="tech skill"
    width={400}
    height={400}
    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 
      ${className || ""}
      transition-all duration-300 ease-out 
      [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)]
      group-hover:scale-105
    `}
  />
);

const SkillCard = ({ Icon, name, href, cta, desc, className, src }: Props) => {
  return (
    <BentoCard
      className="w-full border-none bg-[#0f0f0f] group"
      name={name}
      background={
        <Back
          src={src}
          className={className}
        />
      }
      Icon={Icon}
      description={desc}
      href={href}
      cta={cta}
    />
  );
};

export default SkillCard;
