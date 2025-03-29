// components/blog/ShareButtonWrapper.js
'use client';

import dynamic from 'next/dynamic';

const ShareButton = dynamic(() => import('./ShareButton'), {
  ssr: false,
});

export default function ShareButtonWrapper(props) {
  return <ShareButton {...props} />;
}
