import {
  type V2_MetaFunction,
} from '@remix-run/react';
import { useEffect, useState } from 'react';

export const meta: V2_MetaFunction = () => {
  return [{title: `Hydrogen | Sentry Client-side Error`}];
};

export default function SentryClientSideErrorPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0) {
      throw new Error('This is a client-side error');
    }
  }, [count]);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <section>
        <h1>Sentry SDK Demo - Client-side Error</h1>
        <p>
          You should see a new error on your Sentry dashboard. You can replay the error by using "Replays" tab.
        </p>
      </section>
    </div>
  );
}
