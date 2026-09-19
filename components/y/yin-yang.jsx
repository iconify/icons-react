import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr2summni.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr2summni"/>`,
		"fallback": "fa7-solid:yin-yang",
	});
}

export default Component;
