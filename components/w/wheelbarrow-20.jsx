import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh_53abzu.css';
import '../../css/i/ijjhc3b5x.css';
import '../../css/u/uv47p4bdr.css';
import '../../css/f/f3itb8bvi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh_53abzu"/><path class="ijjhc3b5x"/><path class="uv47p4bdr"/><path class="f3itb8bvi"/>`,
		"fallback": "energy-icons:wheelbarrow-20",
	});
}

export default Component;
