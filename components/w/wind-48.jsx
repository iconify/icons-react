import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk1y4abcg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk1y4abcg"/>`,
		"fallback": "energy-icons:wind-48",
	});
}

export default Component;
