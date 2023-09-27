import {LoaderFunction} from '@shopify/remix-oxygen';
import {
  type V2_MetaFunction,
} from '@remix-run/react';


export const meta: V2_MetaFunction = () => {
  return [{title: `Hydrogen | Sentry Loader Error`}];
};

export const loader: LoaderFunction = async ({params}) => {
  throw new Error('This is a loader error');
}

export default function SentryLoaderErrorPage() {
  return (
    <div>
      <section>
        <h1>Sentry SDK Demo - Loader Error</h1>
        <p>
          You should see a new error on your Sentry dashboard. You can replay the error by using "Replays" tab.
        </p>
      </section>
    </div>
  );
}
