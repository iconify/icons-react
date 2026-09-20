import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpi9kab-u.css';
import '../../css/k/kpwcb-rgl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpi9kab-u"/><path class="kpwcb-rgl"/>`,
		"fallback": "qlementine-icons:wireless-disabled-16",
	});
}

export default Component;
