import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9qs0v4_t.css';
import '../../css/k/kphbbgbvu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p9qs0v4_t"/><path class="kphbbgbvu"/>`,
		"fallback": "token:xprt",
	});
}

export default Component;
