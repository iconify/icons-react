import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct46urb9k.css';
import '../../css/q/qcnneg_kt.css';
import '../../css/g/gg2ebobjz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct46urb9k"/><path class="qcnneg_kt"/><path class="gg2ebobjz"/>`,
		"fallback": "energy-icons:wood-stove-48-bold",
	});
}

export default Component;
