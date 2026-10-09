import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bygov5bnk.css';
import '../../css/c/cgej8yb_k.css';
import '../../css/b/b6r2r-z2x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bygov5bnk"/><path class="cgej8yb_k"/><path class="b6r2r-z2x"/>`,
		"fallback": "energy-icons:wind-turbine-bolt-20",
	});
}

export default Component;
