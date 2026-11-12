import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi7c8xbbv.css';
import '../../css/b/b8j05vb5g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi7c8xbbv"/><path class="b8j05vb5g"/>`,
		"fallback": "selfhst:xbox-game-pass",
	});
}

export default Component;
