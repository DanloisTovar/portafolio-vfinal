import type { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  lang: 'es' | 'en';
}

export default function FlagIcon({ lang, className, ...props }: Props) {
  if (lang === 'es') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 750 500"
        className={className}
        aria-hidden="true"
        {...props}
      >
        <rect width="750" height="500" fill="#AA151B" />
        <rect y="125" width="750" height="250" fill="#F1BF00" />
      </svg>
    );
  }

  // USA Flag
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1235 650"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="1235" height="650" fill="#B22234" />
      <rect y="50" width="1235" height="650" fill="white" />
      <rect y="100" width="1235" height="550" fill="#B22234" />
      <rect y="150" width="1235" height="500" fill="white" />
      <rect y="200" width="1235" height="450" fill="#B22234" />
      <rect y="250" width="1235" height="400" fill="white" />
      <rect y="300" width="1235" height="350" fill="#B22234" />
      <rect y="350" width="1235" height="300" fill="white" />
      <rect y="400" width="1235" height="250" fill="#B22234" />
      <rect y="450" width="1235" height="200" fill="white" />
      <rect y="500" width="1235" height="150" fill="#B22234" />
      <rect y="550" width="1235" height="100" fill="white" />
      <rect y="600" width="1235" height="50" fill="#B22234" />
      <rect width="494" height="350" fill="#3C3B6E" />

      {/* Stars */}
      <g fill="white">
        <g id="s">
          <polygon
            points="0,0 6.1,19 24.7,19 9.3,29.8 15.4,48.8 0,37.8 -15.4,48.8 -9.3,29.8 -24.7,19 -6.1,19"
            transform="translate(0,-10) scale(0.6)"
          />
        </g>
        {/* Row 1 */}
        <use href="#s" x="32" y="32.5" />
        <use href="#s" x="79.5" y="32.5" />
        <use href="#s" x="127" y="32.5" />
        <use href="#s" x="174.5" y="32.5" />
        <use href="#s" x="222" y="32.5" />
        <use href="#s" x="269.5" y="32.5" />
        <use href="#s" x="317" y="32.5" />
        <use href="#s" x="364.5" y="32.5" />
        <use href="#s" x="412" y="32.5" />
        <use href="#s" x="459.5" y="32.5" />

        {/* Row 2 */}
        <use href="#s" x="55.8" y="67.5" />
        <use href="#s" x="103.3" y="67.5" />
        <use href="#s" x="150.8" y="67.5" />
        <use href="#s" x="198.3" y="67.5" />
        <use href="#s" x="245.8" y="67.5" />
        <use href="#s" x="293.3" y="67.5" />
        <use href="#s" x="340.8" y="67.5" />
        <use href="#s" x="388.3" y="67.5" />
        <use href="#s" x="435.8" y="67.5" />

        {/* Row 3 */}
        <use href="#s" x="32" y="102.5" />
        <use href="#s" x="79.5" y="102.5" />
        <use href="#s" x="127" y="102.5" />
        <use href="#s" x="174.5" y="102.5" />
        <use href="#s" x="222" y="102.5" />
        <use href="#s" x="269.5" y="102.5" />
        <use href="#s" x="317" y="102.5" />
        <use href="#s" x="364.5" y="102.5" />
        <use href="#s" x="412" y="102.5" />
        <use href="#s" x="459.5" y="102.5" />

        {/* Row 4 */}
        <use href="#s" x="55.8" y="137.5" />
        <use href="#s" x="103.3" y="137.5" />
        <use href="#s" x="150.8" y="137.5" />
        <use href="#s" x="198.3" y="137.5" />
        <use href="#s" x="245.8" y="137.5" />
        <use href="#s" x="293.3" y="137.5" />
        <use href="#s" x="340.8" y="137.5" />
        <use href="#s" x="388.3" y="137.5" />
        <use href="#s" x="435.8" y="137.5" />

        {/* Row 5 */}
        <use href="#s" x="32" y="172.5" />
        <use href="#s" x="79.5" y="172.5" />
        <use href="#s" x="127" y="172.5" />
        <use href="#s" x="174.5" y="172.5" />
        <use href="#s" x="222" y="172.5" />
        <use href="#s" x="269.5" y="172.5" />
        <use href="#s" x="317" y="172.5" />
        <use href="#s" x="364.5" y="172.5" />
        <use href="#s" x="412" y="172.5" />
        <use href="#s" x="459.5" y="172.5" />

        {/* Row 6 */}
        <use href="#s" x="55.8" y="207.5" />
        <use href="#s" x="103.3" y="207.5" />
        <use href="#s" x="150.8" y="207.5" />
        <use href="#s" x="198.3" y="207.5" />
        <use href="#s" x="245.8" y="207.5" />
        <use href="#s" x="293.3" y="207.5" />
        <use href="#s" x="340.8" y="207.5" />
        <use href="#s" x="388.3" y="207.5" />
        <use href="#s" x="435.8" y="207.5" />

        {/* Row 7 */}
        <use href="#s" x="32" y="242.5" />
        <use href="#s" x="79.5" y="242.5" />
        <use href="#s" x="127" y="242.5" />
        <use href="#s" x="174.5" y="242.5" />
        <use href="#s" x="222" y="242.5" />
        <use href="#s" x="269.5" y="242.5" />
        <use href="#s" x="317" y="242.5" />
        <use href="#s" x="364.5" y="242.5" />
        <use href="#s" x="412" y="242.5" />
        <use href="#s" x="459.5" y="242.5" />

        {/* Row 8 */}
        <use href="#s" x="55.8" y="277.5" />
        <use href="#s" x="103.3" y="277.5" />
        <use href="#s" x="150.8" y="277.5" />
        <use href="#s" x="198.3" y="277.5" />
        <use href="#s" x="245.8" y="277.5" />
        <use href="#s" x="293.3" y="277.5" />
        <use href="#s" x="340.8" y="277.5" />
        <use href="#s" x="388.3" y="277.5" />
        <use href="#s" x="435.8" y="277.5" />

        {/* Row 9 */}
        <use href="#s" x="32" y="312.5" />
        <use href="#s" x="79.5" y="312.5" />
        <use href="#s" x="127" y="312.5" />
        <use href="#s" x="174.5" y="312.5" />
        <use href="#s" x="222" y="312.5" />
        <use href="#s" x="269.5" y="312.5" />
        <use href="#s" x="317" y="312.5" />
        <use href="#s" x="364.5" y="312.5" />
        <use href="#s" x="412" y="312.5" />
        <use href="#s" x="459.5" y="312.5" />
      </g>
    </svg>
  );
}
