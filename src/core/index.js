import React from 'react';
import ReactDOM from 'react-DOM';
import CheckboxWithLabel from 'components/checkboxWithLabel';
import Listing from 'components/listing';

ReactDOM.render(
  (<div>
  <CheckboxWithLabel / >
  <Listing title="Jayden" score={14} />
  <Listing title="Tony" score={12031031203012} />
  </div>)
  , document.getElementById('app'))
