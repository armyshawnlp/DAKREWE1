import React from 'react';

import { auth } from '../../firebase';

const EditBlogButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
  >
    Edit Blog
  </button>

export default EditBlogButton;
