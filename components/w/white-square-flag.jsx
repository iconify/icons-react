import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyxpwnb2l.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyxpwnb2l"/><path class="qy525jbwx"/>`,
		"fallback": "openmoji:white-square-flag",
	});
}

export default Component;
