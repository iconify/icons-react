import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea2kc5baq.css';
import '../../css/o/obkbes3ka.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea2kc5baq"/><path class="obkbes3ka"/>`,
		"fallback": "energy-icons:weld-seam-20",
	});
}

export default Component;
