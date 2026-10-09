import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddstmrebw.css';
import '../../css/x/xjh2b-bdp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddstmrebw"/><path class="xjh2b-bdp"/>`,
		"fallback": "energy-icons:wifi-medium-48",
	});
}

export default Component;
