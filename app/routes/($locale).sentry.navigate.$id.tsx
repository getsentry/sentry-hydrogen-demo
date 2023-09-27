import {json, LoaderFunction} from '@shopify/remix-oxygen';
import {
  type V2_MetaFunction,
} from '@remix-run/react';


export const meta: V2_MetaFunction = () => {
  return [{title: `Hydrogen | Sentry Navigation`}];
};

export const loader: LoaderFunction = async ({params}) => {
  return json({
    id: params.id,
  })
}

export default function SentryNavigationPage() {
  return (
    <div>
      <section>
        <h1>Sentry SDK Demo - Navigation</h1>
        <p>
          You should see a <code>navigation</code> transaction named <code>routes/($locale).sentry.navigate.$id
</code> on your Sentry dashboard.
        </p>
      </section>
    </div>
  );
}
