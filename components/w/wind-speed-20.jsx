import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trmttkbvo.css';
import '../../css/h/hire59f7f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trmttkbvo"/><path class="hire59f7f"/>`,
		"fallback": "energy-icons:wind-speed-20",
	});
}

export default Component;
