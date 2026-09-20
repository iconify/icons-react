import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9z2gwbot.css';
import '../../css/c/czgjawueq.css';
import '../../css/g/gbe5vwbih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9z2gwbot"/><path class="czgjawueq"/><path clip-rule="evenodd" class="gbe5vwbih"/>`,
		"fallback": "lineicons:www-cursor",
	});
}

export default Component;
