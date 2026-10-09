import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ia9w32xvn.css';
import '../../css/h/hoycbqb2w.css';
import '../../css/i/if9dnrb8u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ia9w32xvn"/><path class="hoycbqb2w"/><path class="if9dnrb8u"/>`,
		"fallback": "energy-icons:windmill-48",
	});
}

export default Component;
