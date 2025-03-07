import { Feature } from "@/types/feature";
import Image from "next/image";

const personIconPlaceholder = (
  <svg
    width="44"
    height="44"
    viewBox="0 0 25 24"
    className="fill-current"
    xmlns="http://www.w3.org/2000/svg"
    transform="rotate(0 0 0)"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.4337 6.35C16.4337 8.74 14.4937 10.69 12.0937 10.69L12.0837 10.68C9.69365 10.68 7.74365 8.73 7.74365 6.34C7.74365 3.95 9.70365 2 12.0937 2C14.4837 2 16.4337 3.96 16.4337 6.35ZM14.9337 6.34C14.9337 4.78 13.6637 3.5 12.0937 3.5C10.5337 3.5 9.25365 4.78 9.25365 6.34C9.25365 7.9 10.5337 9.18 12.0937 9.18C13.6537 9.18 14.9337 7.9 14.9337 6.34Z"
    />
    <path d="M12.0235 12.1895C14.6935 12.1895 16.7835 12.9395 18.2335 14.4195V14.4095C20.2801 16.4956 20.2739 19.2563 20.2735 19.4344L20.2735 19.4395C20.2635 19.8495 19.9335 20.1795 19.5235 20.1795H19.5135C19.0935 20.1695 18.7735 19.8295 18.7735 19.4195C18.7735 19.3695 18.7735 17.0895 17.1535 15.4495C15.9935 14.2795 14.2635 13.6795 12.0235 13.6795C9.78346 13.6795 8.05346 14.2795 6.89346 15.4495C5.27346 17.0995 5.27346 19.3995 5.27346 19.4195C5.27346 19.8295 4.94346 20.1795 4.53346 20.1795C4.17346 20.1995 3.77346 19.8595 3.77346 19.4495L3.77345 19.4448C3.77305 19.2771 3.76646 16.506 5.81346 14.4195C7.26346 12.9395 9.35346 12.1895 12.0235 12.1895Z" />
  </svg>
);
const aboutUsData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
        width="200"
        height="200"
        src="/images/Angelica_Ellison.jpeg"
        alt="Angelica Ellison"
      />
    ),
    title: "Angelica Ellison",
    paragraph: "CMO of Marketing",
  },
  {
    id: 2,
    icon: (
      <Image
        width="200"
        height="200"
        src="/images/Sita_Robinson.jpeg"
        alt="Sita Robinson"
      />
    ),
    title: "Sita Robinson",
    paragraph: "CTO of Software Engineering & Development",
  },
  {
    id: 3,
    icon: (
      <Image
        width="200"
        height="200"
        src="/images/Crystal_Castillo.jpeg"
        alt="Crystal Castillo"
      />
    ),
    title: "Crystal Castillo",
    paragraph: "CFO of Financial Strategy & Funding",
  },
  {
    id: 4,
    icon: (
      <Image
        width="200"
        height="200"
        src="/images/Alexandria_Mccary.jpeg"
        alt="Alexandria McCary"
      />
    ),
    title: "Alexandria McCary",
    paragraph: "CIO of Cybersecurity & Innovation",
  },
  {
    id: 5,
    icon: (
      <Image
        width="200"
        height="200"
        src="/images/Desiree_Mccormick.jpeg"
        alt="Desiree McCormick"
      />
    ),
    title: "Desiree McCormick",
    paragraph: "COO of Project Management & Operations",
  },
];
export default aboutUsData;
