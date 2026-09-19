import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxvm15b7r.css';
import '../../css/j/jq2vx7i2s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxvm15b7r"/><path class="jq2vx7i2s"/>`,
		"fallback": "carbon:word-cloud",
	});
}

export default Component;
