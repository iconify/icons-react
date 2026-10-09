import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m0at87b5x.css';
import '../../css/e/esgmmdbyu.css';
import '../../css/e/e4bwz0btd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m0at87b5x"/><path class="esgmmdbyu"/><path class="e4bwz0btd"/>`,
		"fallback": "energy-icons:window-48-bold",
	});
}

export default Component;
