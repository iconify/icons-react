import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytj2ecx0x.css';
import '../../css/l/llz863bas.css';
import '../../css/g/go7r4eb5h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytj2ecx0x"/><path class="llz863bas"/><path class="go7r4eb5h"/>`,
		"fallback": "energy-icons:yoga-48-bold",
	});
}

export default Component;
