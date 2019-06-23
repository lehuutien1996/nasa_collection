import { nest } from 'recompose';

import { EditorProvider } from './editor';
import { SearchResultProvider } from './search-result';
import { VideoPreviewProvider } from './video-preview';

const Context = nest(
  EditorProvider,
  SearchResultProvider,
  VideoPreviewProvider
);

export default Context;
