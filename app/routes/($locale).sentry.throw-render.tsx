import {LoaderFunction} from '@shopify/remix-oxygen';
import {
  type V2_MetaFunction,
} from '@remix-run/react';


export const meta: V2_MetaFunction = () => {
  return [{title: `Hydrogen | Sentry SSR Error`}];
};

const throwError = () => {
  throw new Error('This is an SSR error');
}

export default function SentrySSRErrorPage() {
  throwError();

  return (
    <div>
      <section>
        <h1>Sentry SDK Demo - SSR Error</h1>
        <p>
          You should see a new error on your Sentry dashboard. You can replay the error by using "Replays" tab.
        </p>
      </section>
    </div>
  );
}
