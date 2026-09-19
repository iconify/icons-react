import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-gl1e30s.css';

const viewBox = {"width":961,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-gl1e30s"/>`,
		"fallback": "whh:yiiframework",
	});
}

export default Component;
