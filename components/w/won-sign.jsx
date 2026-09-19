import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g44vsswji.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g44vsswji"/>`,
		"fallback": "fa6-solid:won-sign",
	});
}

export default Component;
