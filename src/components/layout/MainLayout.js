import React from 'react';
import '../../resources/scss/layout/main-layout.scss';

export default function MainLayout(props) {
  const { children } = props;
  return (
    <div className="main-layout-container">
      <div className="container-left">{children[0]}</div>
      <div className="container-right">{children[1]}</div>
    </div>
  );
}
