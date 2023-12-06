import { FC, SVGProps } from "react";

const LogoIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 42,
  height = 42,
  ...rest
}) => {
  return (
    <svg width="1428" height="163" viewBox="0 0 1428 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_31_294)">
<path d="M-25 -30H1923V155H-25V-30Z" fill="#B3BE8F"/>
</g>
<defs>
<filter id="filter0_d_31_294" x="-29" y="-30" width="1956" height="193" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_31_294"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_31_294" result="shape"/>
</filter>
</defs>
</svg>

  );
};
const Logo = ({ dark = false }) => (
    <div className="flex items-center justify-between max-w-min gap-2">
        <img
      src="/public/hero/logo.jpeg"
      alt="Your Logo"
      className="h-8 w-auto"
    />
      <LogoIcon />
      
    </div>
  );
  

export default LogoIcon;

function cn(arg0: string, arg1: { "text-brand-purple-900": boolean; "text-brand-purple-200": boolean; }): string | undefined {
    throw new Error("Function not implemented.");
}
