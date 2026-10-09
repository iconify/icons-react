import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2ylmobyz.css';
import '../../css/k/kzolceiuj.css';
import '../../css/c/ce_ntp43z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2ylmobyz"/><path class="kzolceiuj"/><path class="ce_ntp43z"/>`,
		"fallback": "energy-icons:wood-stove-20",
	});
}

export default Component;
