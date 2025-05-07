import React from 'react';

interface DentalIllustrationProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
}

export function TeethIllustration({
  className = "",
  width = 80,
  height = 80,
  fill = "currentColor",
  stroke = "#fff"
}: DentalIllustrationProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M40 10C30.5 10 24 15 22 17.5C20 20 17.5 30 17.5 45C17.5 60 27.5 70 40 70C52.5 70 62.5 60 62.5 45C62.5 30 60 20 58 17.5C56 15 49.5 10 40 10Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 20C32.5 25 37.5 26 40 26C42.5 26 47.5 25 50 20"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 26V70"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 35C28.3333 38.3333 35 40 40 40C45 40 51.6667 38.3333 55 35"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M25 55C28.3333 51.6667 35 50 40 50C45 50 51.6667 51.6667 55 55"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ToothbrushIllustration({
  className = "",
  width = 80,
  height = 80,
  fill = "currentColor",
  stroke = "#fff"
}: DentalIllustrationProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M60 15L20 55L15 65L25 60L65 20L60 15Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M54.1421 20.8579L59.1421 25.8579"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M48.1421 26.8579L53.1421 31.8579"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M42.1421 32.8579L47.1421 37.8579"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M36.1421 38.8579L41.1421 43.8579"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M30.1421 44.8579L35.1421 49.8579"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M62 18C64.2091 15.7909 64.2091 12.2091 62 10C59.7909 7.79086 56.2091 7.79086 54 10L62 18Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RootCanalIllustration({
  className = "",
  width = 80,
  height = 80,
  fill = "currentColor",
  stroke = "#fff"
}: DentalIllustrationProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M35 10H45C47.7614 10 50 12.2386 50 15V30C50 42.1503 40.1503 52 28 52H25C12.8497 52 3 42.1503 3 30V15C3 12.2386 5.23858 10 8 10H18"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 35L35 35"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 28L35 28"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 21L35 21"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M43 70C43 65.0294 47.0294 61 52 61C56.9706 61 61 65.0294 61 70"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M52 61V52"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M61 52L52 42L43 52"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="52"
        cy="36"
        r="5"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
    </svg>
  );
}

export function AlignerIllustration({
  className = "",
  width = 80,
  height = 80,
  fill = "currentColor",
  stroke = "#fff"
}: DentalIllustrationProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15 25C15 18.3726 20.3726 13 27 13H53C59.6274 13 65 18.3726 65 25V55C65 61.6274 59.6274 67 53 67H27C20.3726 67 15 61.6274 15 55V25Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 67C20.3726 67 15 61.6274 15 55V48H65V55C65 61.6274 59.6274 67 53 67H27Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 27L27 30.5L22 34"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 27L53 30.5L58 34"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 58V57C30 55.3431 31.3431 54 33 54H47C48.6569 54 50 55.3431 50 57V58"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 54V58"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SmileIllustration({
  className = "",
  width = 80,
  height = 80,
  fill = "currentColor",
  stroke = "#fff"
}: DentalIllustrationProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="40"
        cy="40"
        r="30"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
      />
      <circle cx="30" cy="30" r="3" fill={stroke} />
      <circle cx="50" cy="30" r="3" fill={stroke} />
      <path
        d="M25 45C28.3333 51.6667 34.6 58 40 58C45.4 58 51.6667 51.6667 55 45"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ShieldIllustration({
  className = "",
  width = 80,
  height = 80,
  fill = "currentColor",
  stroke = "#fff"
}: DentalIllustrationProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M40 70C40 70 65 57.5 65 40V17.5L40 10L15 17.5V40C15 57.5 40 70 40 70Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 40L36.6667 46.6667L50 33.3334"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}