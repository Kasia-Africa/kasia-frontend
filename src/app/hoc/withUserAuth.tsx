import React, { ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import cookies from 'next-cookies';
import { redirect } from '@utils/helper';
type Props = {};
export default function withUserAuth(WrappedComponent: ComponentType<any>) {
  function WithAuth(props: Props) {
    return <WrappedComponent {...props} />;
  }
  WithAuth.defaultProps = {};
  WithAuth.getInitialProps = async (ctx: any) => {
    const { access_token } = cookies(ctx);
    
    if (!access_token && ctx.pathname !== '/') {
      redirect(ctx.res, '/login');
    }
    return {
      access_token,
    };
  };

  hoistNonReactStatics(WithAuth, WrappedComponent);
  return WithAuth;
}