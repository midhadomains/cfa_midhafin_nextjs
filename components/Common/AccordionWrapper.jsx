'use client';

import dynamic from 'next/dynamic';

const Accordion = dynamic(() => import('./Accordian'), {
  ssr: false,
});

export default function AccordionWrapper(props) {
  return <Accordion {...props} />;
}
