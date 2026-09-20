import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj9b7k8db.css';
import '../../css/y/ym98bkbma.css';
import '../../css/y/yy5qrkvzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj9b7k8db"/><path class="ym98bkbma"/><path class="yy5qrkvzr"/>`,
		"fallback": "selfhst:windows-terminal-light",
	});
}

export default Component;
