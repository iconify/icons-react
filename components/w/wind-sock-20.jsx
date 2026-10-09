import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vp3sh4q-z.css';
import '../../css/c/co-d1_b7k.css';
import '../../css/t/tbph25zil.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vp3sh4q-z"/><path class="co-d1_b7k"/><path class="tbph25zil"/>`,
		"fallback": "energy-icons:wind-sock-20",
	});
}

export default Component;
