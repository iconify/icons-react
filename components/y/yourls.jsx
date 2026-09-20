import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq-ci9buu.css';
import '../../css/y/yw1is44eo.css';
import '../../css/f/fafer672z.css';
import '../../css/e/ewxgxm6jn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uq-ci9buu"/><path class="yw1is44eo"/><path class="fafer672z"/><path clip-rule="evenodd" class="ewxgxm6jn"/>`,
		"fallback": "selfhst:yourls",
	});
}

export default Component;
