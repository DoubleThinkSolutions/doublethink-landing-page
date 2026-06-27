import { Suspense } from 'react';
import HomeClient from './HomeClient';

export default function HomePage() {
  return (
    <Suspense fallback={<div className="w-full h-screen bg-background" />}>
      <HomeClient />
    </Suspense>
  );
}
