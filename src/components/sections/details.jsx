import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "../magicui/bento-grid-override";
import seco from '../../assets/seco.jpg';
import bali from '../../assets/bali-beach.jpg';
import fortune from '../../assets/fortune.png';

const features = [
  {
    Icon: FileTextIcon,
    name: "Gifts",
    description: "Your presence is the greatest gift we could ask for. However, if you'd like to give us a tangible token of your love, we'd be grateful for a contribution towards our future together.",
    background: (
      <>
        <div className="absolute inset-0 w-full bg-black h-full object-cover"></div>
        <img className="absolute inset-0 w-full h-full object-cover opacity-50" src={seco}/>
      </>
    ),
    className: "col-span-3 lg:col-span-1 relative text-red-900 text-shadow"
  },
  {
    Icon: InputIcon,
    name: "Unplugged",
    description: "Please help us unplug and enjoy the moment. We've got photographers on hand to capture the ceremony, so you can savor the experience without worrying about your phone.",
    background: (
      <>
        <div className="absolute inset-0 w-full bg-black h-full object-cover"></div>
        <img className="absolute inset-0 w-full h-full object-cover opacity-50" src={bali}/>
      </>
    ),
    className: "col-span-3 lg:col-span-1",
  },
  {
    Icon: GlobeIcon,
    name: "RSVP",
    description: "We wanted to invite you in a more personal way, so we're reaching out directly. Please let us know if you can join us by [date].",
    background: (
      <>
        <div className="absolute inset-0 w-full bg-black h-full object-cover"></div>
        <img className="absolute inset-0 w-full h-full object-cover opacity-50" src={fortune}/>
      </>
    ),
    className: "col-span-3 lg:col-span-1",
  },
  
];

const Details = () => {
  return (
    <BentoGrid className="p-10">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default Details;