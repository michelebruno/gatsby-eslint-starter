import * as React from 'react';
import PropTypes from 'prop-types';
import Seo from './Seo';

import '../style/style.css';

export default function Layout({children, title, description}) {
  return (
    <>
      <Seo title={title} description={description} />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
