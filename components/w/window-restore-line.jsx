import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p9ag9pbnz.css';
import '../../css/m/m80teebmh.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 p9ag9pbnz"/><path class="clr-i-outline clr-i-outline-path-2 m80teebmh"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:window-restore-line",
	});
}

export default Component;
