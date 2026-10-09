import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5m23wblo.css';
import '../../css/w/wg0eo9hxf.css';
import '../../css/z/zy2qlf16k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5m23wblo"/><path class="wg0eo9hxf"/><path class="zy2qlf16k"/>`,
		"fallback": "energy-icons:wireless-charging-20",
	});
}

export default Component;
