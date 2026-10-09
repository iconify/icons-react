import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jlfpc8feq.css';
import '../../css/s/sew1b1r7k.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jlfpc8feq"/><path class="sew1b1r7k"/><path class="c65-ehvfy"/>`,
		"fallback": "energy-icons:wildfire-48",
	});
}

export default Component;
