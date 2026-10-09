import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z12cm2qdg.css';
import '../../css/v/v0nouub9y.css';
import '../../css/f/f5n5-__gk.css';
import '../../css/d/dt4en7b0u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z12cm2qdg"/><path class="v0nouub9y"/><path class="f5n5-__gk"/><path class="dt4en7b0u"/>`,
		"fallback": "energy-icons:yurt-20",
	});
}

export default Component;
