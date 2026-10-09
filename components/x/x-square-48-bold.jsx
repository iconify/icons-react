import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbu-t6btd.css';
import '../../css/t/t1lgjy0xv.css';
import '../../css/t/tl4cmrb7i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbu-t6btd"/><path class="t1lgjy0xv"/><path class="tl4cmrb7i"/>`,
		"fallback": "energy-icons:x-square-48-bold",
	});
}

export default Component;
