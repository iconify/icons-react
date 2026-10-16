import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8dezzb1i.css';
import '../../css/x/x5bj1qhem.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8dezzb1i"/><path class="x5bj1qhem"/>`,
		"fallback": "energy-icons:winch-20",
	});
}

export default Component;
