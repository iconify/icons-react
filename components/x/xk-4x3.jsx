import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw-e0abnw.css';
import '../../css/a/a_9txtbjh.css';
import '../../css/l/l6z98fm3g.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw-e0abnw"/><path class="a_9txtbjh"/><path class="l6z98fm3g"/>`,
		"fallback": "flag:xk-4x3",
	});
}

export default Component;
