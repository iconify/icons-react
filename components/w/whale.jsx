import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc0r-sbyi.css';
import '../../css/q/q5jdzcb9m.css';
import '../../css/c/cf-nt9u3d.css';
import '../../css/z/zb1dbob6a.css';
import '../../css/o/o9sudkbfx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc0r-sbyi"/><path class="q5jdzcb9m"/><path class="cf-nt9u3d"/><path class="zb1dbob6a"/><path class="o9sudkbfx"/>`,
		"fallback": "fxemoji:whale",
	});
}

export default Component;
