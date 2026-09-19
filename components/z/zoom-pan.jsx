import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1ol51blr.css';
import '../../css/y/yzhyb8bwk.css';
import '../../css/p/p18cy_m8i.css';
import '../../css/l/lj5rkfb6q.css';
import '../../css/q/qy_260b7i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1ol51blr"/><path class="yzhyb8bwk"/><path class="p18cy_m8i"/><path class="lj5rkfb6q"/><path class="qy_260b7i"/>`,
		"fallback": "carbon:zoom-pan",
	});
}

export default Component;
