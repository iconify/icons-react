import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp0wk9a3w.css';
import '../../css/k/kmdu8odkd.css';
import '../../css/q/qm438lbpz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp0wk9a3w"/><path class="kmdu8odkd"/><path class="qm438lbpz"/>`,
		"fallback": "garden:wrap-right-stroke-20",
	});
}

export default Component;
