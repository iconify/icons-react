import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uq-ci9buu.css';
import '../../css/p/pg2petbgm.css';
import '../../css/e/ewxgxm6jn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uq-ci9buu"/><path class="pg2petbgm"/><path class="ewxgxm6jn"/>`,
		"fallback": "selfhst:yourls",
	});
}

export default Component;
