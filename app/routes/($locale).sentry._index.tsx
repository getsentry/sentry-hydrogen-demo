import {
  NavLink,
  type V2_MetaFunction,
} from '@remix-run/react';


export const meta: V2_MetaFunction = () => {
  return [{title: `Hydrogen | Sentry`}];
};

export default function SentryDemo() {
  return (
    <div>
      <section>
        <h1>Sentry SDK Demo Page</h1>
        <p>
          This page is used to demonstrate the Sentry SDK integration with
          Hydrogen.
        </p>
      </section>

      <section>
        <ul>
          <li>
            <NavLink to="/sentry/throw-client">
              Click to capture a client-side thrown error
            </NavLink>
          </li>
          <li>
            <NavLink to="/sentry/throw-loader">
              Click to capture a loader error
            </NavLink>
          </li>
          <li>
            <NavLink to="/sentry/throw-render">
              Click to capture an SSR error
            </NavLink>
          </li>
          <li>
            <NavLink to="/sentry/navigate/1234">
              Click to trigger a navigation transaction
            </NavLink>
          </li>
        </ul>
      </section>
    </div>
  );
}
